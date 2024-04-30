/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose">
*   Copyright (c) 2018-2019 Aspose Pty Ltd. All rights reserved.
* </copyright>
* <summary>
*   Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the "Software"), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
* 
*  The above copyright notice and this permission notice shall be included in all
*  copies or substantial portions of the Software.
* 
*  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
*  SOFTWARE.
* </summary>
* --------------------------------------------------------------------------------------------------------------------
*/

import * as fs from "fs";
import * as path from "path";
import * as cad from "../../lib/api";
import { GetFilesListRequest, UploadFileRequest } from "../../lib/api";

export type GetRequestInvokerDelegate = () => Promise<Buffer>;
export type PostRequestInvokerDelegate = (inputStream: Buffer) => Promise<Buffer>;

/**
 * API tester base class.
 */
export abstract class ApiTester {

    /**
     * The default timeout (ms)
     */
    public static readonly DefaultTimeout: number = 240000;

    /**
     * If any test failed
     */
    protected static FailedAnyTest: boolean = false;

    /**
     * The server access file
     */
    protected readonly ServerAccessFile: string = "serverAccess.json";

    /**
     * The API version
     */
    protected readonly ApiVersion: string = "v3.0";

    /**
     * The base URL
     */
    protected readonly BaseUrl: string = "https://api.aspose.cloud/";

    /**
     * The local test folder
     */
    protected readonly LocalTestFolder: string = "TestData";

    /**
     * The default cloud storage
     */
    protected readonly DefaultStorage: string = "CAD-QA";

    /**
     * The basic export formats
     */
    protected readonly BasicExportFormats: string[] =
    [
        "bmp",
        "gif",
        "jpg",
        "png"
    ];

    /**
     * Cloud test folder prefix.
     */
    protected readonly CloudTestFolderPrefix: string = "CadCloudTestNodeJS";

    /**
     * Original data folder.
     */
    protected readonly OriginalDataFolder: string = "CadIntegrationTestData";

    /**
     * Gets or sets a value indicating whether resulting images should be removed from cloud storage.
     */
    protected RemoveResult: boolean = true;

    /**
     * Input test files info
     */
    protected InputTestFiles: cad.StorageFile[];

    /**
     * Dynamic temp folder name.
     */
    protected TempFolder: string;

    /**
     * Current test storage
     */
    protected TestStorage: string;

    /**
     * Aspose.CAD Cloud API
     */
    protected cadApi: cad.CadApi;

    /**
     * Setup method
     */
    public async beforeAll() {
        console.log("==== BEFORE ALL");

        let tempPostfix: string = process.env.BUILD_NUMBER;
        if (!tempPostfix) {
            tempPostfix = require("os").userInfo().username;
        }
        this.TempFolder = `${this.CloudTestFolderPrefix}_${tempPostfix}`;

        this.TestStorage = process.env.StorageName;

        if (!this.TestStorage) {
            console.log("Storage name is not set by environment variable. Using the default one.");
            this.TestStorage = this.DefaultStorage;
        }
        

        await this.createApiInstances();
        if (!ApiTester.FailedAnyTest && this.RemoveResult && 
            (await this.getIsExistAsync(this.TempFolder, this.TestStorage))) {
            await this.deleteFolderAsync(this.TempFolder, this.TestStorage);
            await this.putCreateFolderAsync(this.TempFolder, this.TestStorage);
        }
    }
    
    /**
     * Teardown method
     */
    public async afterAll() {
        if (!ApiTester.FailedAnyTest && this.RemoveResult && 
            (await this.getIsExistAsync(this.TempFolder, this.TestStorage))) {
            await this.deleteFolderAsync(this.TempFolder, this.TestStorage);
        } 
    }

    /**
     * Creates folder using Promise to call Storage SDK.
     * @param downloadPath  Storage folder path.
     * @param storage Storage name.
     */
    protected async putCreateFolderAsync(folder: string, storage: string) {
        return new Promise((resolve, reject) => {
            try {
                this.cadApi.createFolder({
                    path: folder, 
                    storageName: storage
                })
                .then((responseMessage) => {
                    resolve(responseMessage);
                });
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    }

    /**
     * Deletes folder using Promise to call Storage SDK.
     * @param folder Storage folder.
     * @param storage Storage name.
     */
    protected deleteFolderAsync(folder: string, storage: string) {
        return new Promise((resolve, reject) => {
            try {
                this.cadApi.deleteFolder(
                {
                    path: folder,
                    storageName: storage,
                    recursive: true
                })
                .then((responseMessage) => {
                    resolve(responseMessage);
                });
            } catch (error) {
                reject(error);
            }
        });
    }

    /**
     * Gets existence status of path using Promise to call Storage SDK.
     * @param outPath Storage path to check.
     * @param storage Storage name.
     */
    protected getIsExistAsync(outPath: string, storage: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                this.cadApi.objectExists({
                    path: outPath,
                    storageName: storage,
                    versionId: null
                })
                .then((responseMessage) => {
                    resolve(responseMessage.exists);
                });
            } catch (error) {
                console.log(error);
                reject(false);
            }
        });
    }

    /**
     * Creates the API instances using given access parameters.
     */
    protected async createApiInstances() {
        const onPremise = process.env.OnPremise === "true";
        console.log("Trying to obtain the creds from environment variables (on premise = " + onPremise + ")");
        
        let appKey = onPremise ? undefined : process.env.AppKey;
        let appSid = onPremise ? undefined : process.env.AppSid;
        let baseUrl = process.env.ApiEndpoint;
        let apiVersion = process.env.ApiVersion;
        let proxy: string = null;

        if ((!onPremise && (!appKey || !appSid)) || !baseUrl || !apiVersion) {
            console.log("Access data isn't set completely by environment variables. Filling unset data with default values.");
        }

        if (!apiVersion) {
            apiVersion = this.ApiVersion;
            console.log("Set default API version");
        }

        console.log("==== reading " + this.LocalTestFolder + "/" + this.ServerAccessFile + " for test run settings...");
        const serverAccessPath: string = path.join(this.LocalTestFolder, this.ServerAccessFile);
        const stats = fs.statSync(serverAccessPath);
        if (stats && stats.isFile() && stats.size > 0) {
            const accessData: any = JSON.parse(fs.readFileSync(serverAccessPath).toString());
            if (!appKey && !onPremise) {
                appKey = accessData.AppKey;
                console.log("Set default App key");
            }

            if (!appSid && !onPremise) {
                appSid = accessData.AppSid;
                console.log("Set default App SID");
            }

            if (!baseUrl) {
                baseUrl = accessData.BaseURL;
                console.log("Set default base URL");
            }

            proxy = accessData.Proxy;
        } else if (!onPremise) {
            throw new Error("Please, specify valid access data (AppKey, AppSid, Base URL)");
        }

        console.log(`On-premise: ${onPremise}`);
        console.log(`App key: ${appKey}`);
        console.log(`App SID: ${appSid}`);
        console.log(`Storage: ${this.TestStorage}`);
        console.log(`Base URL: ${baseUrl}`);
        console.log(`API version: ${apiVersion}`);

        this.cadApi = new cad.CadApi(appKey, appSid, baseUrl, true, apiVersion, proxy);

        this.InputTestFiles = await this.fetchInputTestFilesInfo(false);

        if (!this.InputTestFiles || this.InputTestFiles.length === 0) {
            this.InputTestFiles = await this.fetchInputTestFilesInfo(true);
        }

        console.log("Input test files: " + this.InputTestFiles.length);
    }

    /**
     * Checks if input file exists
     * @param inputFileName Input file name
     */
    protected checkInputFileExists(inputFileName: string): boolean {
        for (const storageFileInfo of this.InputTestFiles) {
            if (storageFileInfo.name === inputFileName) {
                return true;
            }
        }

        return false;
    }

    /**
     * Gets the storage file information.
     * @param folder The folder which contains a file.
     * @param fileName Name of the file.
     * @param storage The storage.
     */
    protected async getStorageFileInfo(folder: string, fileName: string, storage: string): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                this.cadApi.getFilesList({
                    path: folder,
                    storageName: storage
                })
                .then((responseMessage) => {
                    const files = responseMessage.value;
                    for (const storageFileInfo of files) {
                        if (folder + "/" + storageFileInfo.name === fileName) {
                            resolve(storageFileInfo);
                        }
                    }

                    resolve(null);
                });
            } catch (error) {
                reject(error);
            }
        });
    }

     /**
      * Tests the typical GET request.
      * @param testMethodName Name of the test method.
      * @param parametersLine The parameters line.
      * @param inputFileName Name of the input file.
      * @param requestInvoker The request invoker.
      * @param propertiesTester The properties tester.
      * @param folder folder with file.
      * @param outPath The out path.
      * @param storage The storage.
      */
    protected async testGetRequest(testMethodName: string, parametersLine: string, inputFileName: string,
                                   requestInvoker: GetRequestInvokerDelegate, folder: string, outPath: string, 
                                   storage: string = this.DefaultStorage) {

            await this.testRequest(testMethodName, parametersLine, inputFileName, outPath, 
                () => this.obtainGetResponse(requestInvoker, outPath), folder, outPath, storage);
    }

     /**
      * Tests the typical POST request.
      * @param testMethodName Name of the test method.
      * @param parametersLine The parameters line.
      * @param inputFileName Name of the input file.
      * @param requestInvoker The request invoker.
      * @param propertiesTester The properties tester.
      * @param folder The folder with file.
      * @param outPath The out path.
      * @param storage The storage.
      */
    protected async testPostRequest(testMethodName: string, parametersLine: string, inputFileName: string, 
                                    requestInvoker: PostRequestInvokerDelegate, folder: string,
                                    outPath: string, storage: string = this.DefaultStorage) {

            await this.testRequest(
                testMethodName, parametersLine, inputFileName, outPath, 
                () => this.obtainPostResponse(folder  + "/" + inputFileName, outPath, storage, requestInvoker), 
                folder, outPath, storage);
    }

    /**
     * Downloads file using Promise to call Storage SDK.
     * @param downloadPath  Storage file path.
     * @param storage Storage name.
     */
    protected getDownloadAsync(downloadPath: string, storage: string): Promise<Buffer> {
        return new Promise((resolve, reject) => {
            try {
                this.cadApi.downloadFile({
                    path: downloadPath,
                    storageName: storage,
                    versionId: null
                })
                .then((responseMessage) => {
                    resolve(responseMessage);
                });
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    }

    /**
     * Copies input file to temp folder using Promises to call Storage SDK.
     * @param fileName File to copy.
     * @param destFolder Destination folder.
     * @param storage Storage name.
     */
    protected async copyFileAsync(fileName: string, destFileName: string, destFolder: string, storage: string) {

        const thisLink = this;

        return new Promise<void>(async (resolve, reject) => {
            try {
                if (!(await thisLink.getIsExistAsync(destFolder + "/" + destFileName, storage))) {
                    await thisLink.cadApi.copyFile({
                        srcPath: fileName,
                        destPath: destFolder + "/" + destFileName,
                        srcStorageName: storage,
                        destStorageName: storage,
                        versionId: null
                    })
                    .then((responseMessage) => {
                        resolve(responseMessage);
                    });
                } else {
                    resolve();
                }
            } catch (error) {
                reject(error);
            }
        });
    }
    
    /**
     * Deletes file using Promise to call Storage SDK.
     * @param file Storage file path.
     * @param storage Storage name.
     */
    protected deleteFileAsync(file: string, storage: string) {
        return new Promise((resolve, reject) => {
            try {
                this.cadApi.deleteFile({
                    path: file,
                    storageName: storage,
                    versionId: null
                })
                .then((responseMessage) => {
                    resolve(responseMessage);
                });
            } catch (error) {
                reject(error);
            }
        });
    }

    /**
     * Obtains the typical GET request response.
     * @param requestInvoker The output path to save the result.
     */
    private async obtainGetResponse(requestInvoker: GetRequestInvokerDelegate, outPath: string) {
        const response: Buffer = await requestInvoker.call(null);
        expect(response).toBeTruthy();

        if (!outPath) {
            expect(response.length).toBeGreaterThan(0);
        }
        
        return response;
    }

    /**
     * Obtains the typical POST request response.
     * @param inputPath The input path.
     * @param outPath The output path to save the result.
     * @param storage The storage.
     * @param requestInvoker The request invoker.
     */
    private async obtainPostResponse(inputPath: string, outPath: string, storage: string, requestInvoker: PostRequestInvokerDelegate) {
        const responseBody = await this.getDownloadAsync(inputPath, storage);
        const response: Buffer = await requestInvoker.call(null, responseBody, outPath);
        if (!outPath) {
            expect(response).toBeTruthy();

            if (!outPath) {
                expect(response.length).toBeGreaterThan(0);
            }

            return response;
        }

        return null;
    }

    /**
     * Fetches the input test files info.
     */
    private async fetchInputTestFilesInfo(forcedUpload: boolean): Promise<cad.StorageFile[]> {
        const thisLink = this;

        if (forcedUpload) {
            fs.readdir(this.LocalTestFolder, function(_, items) {
                for (const item of items) {
                    const stats = fs.statSync(thisLink.LocalTestFolder + "/" + item);
                    if (!item.endsWith(".json") && stats && stats.isFile() && stats.size > 0) {
                        thisLink.cadApi.uploadFile(new UploadFileRequest(
                        { 
                            path: thisLink.OriginalDataFolder + "/" + item, 
                            file: fs.readFileSync(thisLink.LocalTestFolder + "/" + item),
                            storageName: thisLink.TestStorage
                        }));
                    }
                }
            });
        }

        return new Promise((resolve, reject) => {
                setTimeout(() => {
                    try {
                        this.cadApi.getFilesList(new GetFilesListRequest(
                        {
                            path: this.OriginalDataFolder,
                            storageName: this.TestStorage
                        }))
                        .then((responseMessage) => {
                            resolve(responseMessage.value);
                        });
                    } catch (error) {
                        reject(error);
                    }
                }, 
                forcedUpload ? 15000 : 0);
        });
    }

    /**
     * Tests the typical request.
     * @param testMethodName Name of the test method.
     * @param saveResultToStorage If set to true, save result to storage.
     * @param parametersLine The parameters line.
     * @param inputFileName Name of the input file.
     * @param resultFileName Name of the result file.
     * @param invokeRequestAction The invoke request action.
     * @param propertiesTester The properties tester.
     * @param outPath The output path.
     * @param storage The storage.
     */
    private async testRequest(
        testMethodName: string, parametersLine: string, 
        inputFileName: string, resultFileName: string, 
        invokeRequestAction: () => Promise<Buffer>, 
        folder: string, outPath: string, storage: string = this.DefaultStorage) {

        console.log(testMethodName);
        if (!this.checkInputFileExists(inputFileName)) {
            throw new Error(`Input file ${inputFileName} doesn't exist in the specified storage folder: ${folder}. Please, upload it first.`);
        }

        await this.copyFileAsync(`${this.OriginalDataFolder}/${inputFileName}`, inputFileName, folder, storage);
        let passed: boolean = false;

        try {
            console.log(parametersLine);
            if (outPath) {
                if ((await this.getIsExistAsync(outPath, storage))) {
                    await this.deleteFileAsync(outPath, storage);
                }
            }
            
            //let resultProperties: cad.CadResponse = null;
            const response = await invokeRequestAction();
            if (outPath) {
                const resultInfo = await this.getStorageFileInfo(folder, resultFileName, storage);
                if (resultInfo == null) {
                    throw new Error(
                        `Result file ${resultFileName} doesn't exist in the specified storage folder: ${folder}. 
                        Result isn't present in the storage by an unknown reason.`);
                }
            } else {
                console.log("Response length: " + response.length);
                expect(response).toBeTruthy();
                expect(response.length).toBeGreaterThan(0);
            }

            passed = true;
        } catch (e) {
            ApiTester.FailedAnyTest = true;
            console.log(e);
            throw e;
        } finally {
            if (!ApiTester.FailedAnyTest && passed && outPath && this.RemoveResult 
                 && (await this.getIsExistAsync(outPath, storage))) {
                await this.deleteFileAsync(outPath, storage);
            }
            console.log(`Test passed: ${passed}`);
            console.warn(`Heap usage: ${process.memoryUsage().heapUsed / (1024 * 1024)} MB`);
            console.warn(`Heap total: ${process.memoryUsage().heapTotal / (1024 * 1024)} MB`);
            console.warn(`RSS: ${process.memoryUsage().rss / (1024 * 1024)} MB`);
        }
    }
}

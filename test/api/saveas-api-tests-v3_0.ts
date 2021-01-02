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

import * as cad from "../../lib/api";
import { ApiTester } from "../base/api-tester";

/**
 * Class for testing save as API calls
 */
class SaveAsApiTests extends ApiTester {

    public async getSaveDrawingAsTest(formatExtension: string, saveResultToStorage: boolean, ...additionalExportFormats: string[]) {
        let name: string = null;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;
        const formatsToExport: string[] = Object.assign([], this.BasicExportFormats);
        for (const additionalExportFormat of additionalExportFormats) {
            if (!formatsToExport.includes(additionalExportFormat)) {
                formatsToExport.push(additionalExportFormat);
            }
        }

        for (const inputFile of this.InputTestFiles) {
            if (inputFile.name.endsWith(formatExtension)) {
                name = inputFile.name;
            } else {
                continue;
            }

            for (const outputFormat of formatsToExport) {
                let outPath: string = null;
                if (saveResultToStorage) {
                    outPath = folder + "/" + name + "." + outputFormat;
                }

                await this.testGetRequest(
                        "getSaveDrawingAsTest",
                        `Input drawing: ${name}; Output format: ${outputFormat}`,
                        name,
                        async () => {
                            const request: cad.GetDrawingSaveAsRequest = 
                            new cad.GetDrawingSaveAsRequest({ name, outputFormat, folder, storage, outPath });

                            const response = await this.cadApi.getDrawingSaveAs(request);
                            return response;
                        },
                        folder,
                        outPath,
                        storage);
            }
        }
    }

    public async postSaveDrawingAsTest(formatExtension: string, saveResultToStorage: boolean, ...additionalExportFormats: string[]) {
        let name: string = null;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;
        const formatsToExport: string[] = Object.assign([], this.BasicExportFormats);

        for (const additionalExportFormat of additionalExportFormats) {
            if (!formatsToExport.includes(additionalExportFormat)) {
                formatsToExport.push(additionalExportFormat);
            }
        }

        for (const inputFile of this.InputTestFiles) {
            if (inputFile.name.endsWith(formatExtension)) {
                name = inputFile.name;
            } else {
                continue;
            }

            for (const outputFormat of formatsToExport) {

                let outPath: string = null;
                if (saveResultToStorage) {
                    outPath = folder + "/" + name + "." + outputFormat;
                }

                await this.testPostRequest(
                        "postSaveDrawingAsTest",
                        `Input drawing: ${name}; Output format: ${outputFormat}`,
                        name,
                        async (inputStream) => {
                            const request: cad.PostDrawingSaveAsRequest = 
                            new cad.PostDrawingSaveAsRequest({ drawingData: inputStream, outputFormat, outPath, storage });
                            const response = await this.cadApi.postDrawingSaveAs(request);
                            return response;
                        },
                        folder,
                        outPath,
                        storage);
            }
        }
    }
}

//process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
const testClass: SaveAsApiTests = new SaveAsApiTests();
const useExtendedTests: boolean = process.env.ExtendedTests === "true";
console.log("Extended: " + useExtendedTests);
// testClass.beforeAll().then(_ => {
//     testClass.getSaveDrawingAsTest(".dxf", false);
//     testClass.postSaveDrawingAsTest(".dwg", false).then(_ => {
//         testClass.postSaveDrawingAsTest(".dwg", true);
//     });
// });

beforeEach(() => {
    jest.setTimeout(ApiTester.DefaultTimeout);
});

beforeAll(async () =>  {
    await testClass.beforeAll();
});

afterAll(async () =>  {
    await testClass.afterAll();
});

describe.each([[".dwg", true], [".dxf", false]])(
    "SaveAsTestSuite_V3",
    (formatExtension, saveResultToStorage) => {
        if (!saveResultToStorage) {
            test(`getSaveDrawingAsTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
                await testClass.getSaveDrawingAsTest(formatExtension, saveResultToStorage);
            });
        }

        test(`postSaveDrawingAsTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.postSaveDrawingAsTest(formatExtension, saveResultToStorage);
        });

        beforeEach(() => {
            jest.setTimeout(ApiTester.DefaultTimeout);
        });
    },
);

if (useExtendedTests) {
    console.log("Extended tests enabled");
    
    describe.each([[".dgn", true],  [".dwf", false]])
        ("SaveAsTestSuite_Extended_V3",
        (formatExtension, saveResultToStorage) => {
            if (!saveResultToStorage) {
                test(`getSaveDrawingAsTest`, async () => {
                    await testClass.getSaveDrawingAsTest(formatExtension, saveResultToStorage);
                });
            }
    
            test(`postSaveDrawingAsTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
                await testClass.postSaveDrawingAsTest(formatExtension, saveResultToStorage);
            });

            beforeEach(() => {
                jest.setTimeout(ApiTester.DefaultTimeout);
            });
        },
    );
}

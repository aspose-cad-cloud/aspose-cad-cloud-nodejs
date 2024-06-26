/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose">
*   Copyright (c) 2018-2020 Aspose Pty Ltd. All rights reserved.
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
import * as request from "request";
import { Configuration } from "./internal/configuration";
import { ObjectSerializer } from "./internal/object-serializer";
import { addQueryParameterToUrl, invokeApiMethod } from "./internal/request-helper";
import * as model from "./model/model";

export { ApiError } from "./internal/api-error";
export * from "./model/model";

/**
 * Library for communication with Aspose.CAD Cloud API
 */
export class CadApi {
    /**
     * API configuration
     */
    public configuration: Configuration;

    /**
     * @param appKey App key. Please, set this value as null in case of on-premise hosting.
     * @param appSID App SID. Please, set this value as null in case of on-premise hosting.
     * @param baseUrl Base api Url. This param is required in case of on-premise hosting.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     * @param proxy proxy uri.
     * @param version API version.
     */
    constructor(appKey: string, appSID: string, baseUrl?: string, debugMode?: boolean, version?: string, proxy?: string) {
        this.configuration = new Configuration(appKey, appSID, baseUrl, debugMode, version, proxy);
    }

    /**
     * Convert CAD drawing to DXF, DWG, DGN, DWF, DWFX, DRC, IFC, STL, STP, STEP, CGM, GLB, GLTF, DWT, IGES, PLT, CF2, OBJ, HPGL, IGS, PCL, FBX, PDF, SVG format.
     * @param requestObj contains request parameters
     */
    public async convert(requestObj: model.ConvertRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling convert.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/Convert";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.outputFormat' is not null or undefined
        if (requestObj.outputFormat === null || requestObj.outputFormat === undefined) {
            throw new Error('Required parameter "requestObj.outputFormat" was null or undefined when calling convert.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.outputFormat) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outputFormat", requestObj.outputFormat);
        }

        if (requestObj.outputTypeExt) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outputTypeExt", requestObj.outputTypeExt);
        }

        if (requestObj.drawing !== undefined) {
            const paramKey = "drawing";
            let formValue = null;
            formValue = requestObj.drawing;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawing",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Copy file
     * @param requestObj contains request parameters
     */
    public async copyFile(requestObj: model.CopyFileRequest): Promise<any> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling copyFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/storage/file/copy/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling copyFile.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling copyFile.');
        }

        if (requestObj.destPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        }

        if (requestObj.srcStorageName) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        }

        if (requestObj.destStorageName) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        }

        if (requestObj.versionId) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            json: false,
        };
        
        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve();        
    }

    /**
     * Copy folder
     * @param requestObj contains request parameters
     */
    public async copyFolder(requestObj: model.CopyFolderRequest): Promise<any> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling copyFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/storage/folder/copy/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling copyFolder.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling copyFolder.');
        }

        if (requestObj.destPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        }

        if (requestObj.srcStorageName) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        }

        if (requestObj.destStorageName) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            json: false,
        };
        
        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve();        
    }

    /**
     * Create the folder
     * @param requestObj contains request parameters
     */
    public async createFolder(requestObj: model.CreateFolderRequest): Promise<any> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/storage/folder/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling createFolder.');
        }

        if (requestObj.storageName) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            json: false,
        };
        
        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve();        
    }

    /**
     * Delete file
     * @param requestObj contains request parameters
     */
    public async deleteFile(requestObj: model.DeleteFileRequest): Promise<any> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/storage/file/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling deleteFile.');
        }

        if (requestObj.storageName) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        }

        if (requestObj.versionId) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        }

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            json: false,
        };
        
        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve();        
    }

    /**
     * Delete folder
     * @param requestObj contains request parameters
     */
    public async deleteFolder(requestObj: model.DeleteFolderRequest): Promise<any> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/storage/folder/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling deleteFolder.');
        }

        if (requestObj.storageName) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        }

        if (requestObj.recursive) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "recursive", requestObj.recursive);
        }

        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            json: false,
        };
        
        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve();        
    }

    /**
     * Download file
     * @param requestObj contains request parameters
     */
    public async downloadFile(requestObj: model.DownloadFileRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling downloadFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/storage/file/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling downloadFile.');
        }

        if (requestObj.storageName) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        }

        if (requestObj.versionId) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
            json: false,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Get Metadata info
     * @param requestObj contains request parameters
     */
    public async editMetadata(requestObj: model.EditMetadataRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling editMetadata.');
        }

        const localVarPath = this.configuration.getApiBaseUrl() + "/cad/EditMetadata";
        const queryParameters: any = {};

        const formParams: { [key: string]: any } = {};
        if (requestObj.drawing !== undefined) {
            const paramKey = "drawing";
            let formValue = null;
            formValue = requestObj.drawing;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawing",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Extract Metadata from CAD drawing to txt, xml or json file.
     * @param requestObj contains request parameters
     */
    public async extractMetadata(requestObj: model.ExtractMetadataRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling extractMetadata.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/ExtractMetadata";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.outputFormat' is not null or undefined
        if (requestObj.outputFormat === null || requestObj.outputFormat === undefined) {
            throw new Error('Required parameter "requestObj.outputFormat" was null or undefined when calling extractMetadata.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.outputFormat) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outputFormat", requestObj.outputFormat);
        }

        if (requestObj.drawing !== undefined) {
            const paramKey = "drawing";
            let formValue = null;
            formValue = requestObj.drawing;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawing",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Extract Text from CAD drawing to txt file
     * @param requestObj contains request parameters
     */
    public async extractText(requestObj: model.ExtractTextRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling extractText.');
        }

        const localVarPath = this.configuration.getApiBaseUrl() + "/cad/ExtractText";
        const queryParameters: any = {};

        const formParams: { [key: string]: any } = {};
        if (requestObj.drawing !== undefined) {
            const paramKey = "drawing";
            let formValue = null;
            formValue = requestObj.drawing;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawing",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Get disc usage
     * @param requestObj contains request parameters
     */
    public async getDiscUsage(requestObj: model.GetDiscUsageRequest): Promise<model.DiscUsage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDiscUsage.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/storage/disc";
        const queryParameters: any = {};

        if (requestObj.storageName) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            json: false,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "DiscUsage");
        }
        return Promise.resolve(result);        
    }

    /**
     * Retrieves info about an existing drawing.             
     * @param requestObj contains request parameters
     */
    public async getDrawingProperties(requestObj: model.GetDrawingPropertiesRequest): Promise<model.CadResponse> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDrawingProperties.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/{name}/properties"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDrawingProperties.');
        }

        if (requestObj.folder) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            json: false,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "CadResponse");
        }
        return Promise.resolve(result);        
    }

    /**
     * Resize an existing drawing.
     * @param requestObj contains request parameters
     */
    public async getDrawingResize(requestObj: model.GetDrawingResizeRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDrawingResize.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/{name}/resize"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDrawingResize.');
        }

        // verify required parameter 'requestObj.outputFormat' is not null or undefined
        if (requestObj.outputFormat === null || requestObj.outputFormat === undefined) {
            throw new Error('Required parameter "requestObj.outputFormat" was null or undefined when calling getDrawingResize.');
        }

        // verify required parameter 'requestObj.newWidth' is not null or undefined
        if (requestObj.newWidth === null || requestObj.newWidth === undefined) {
            throw new Error('Required parameter "requestObj.newWidth" was null or undefined when calling getDrawingResize.');
        }

        // verify required parameter 'requestObj.newHeight' is not null or undefined
        if (requestObj.newHeight === null || requestObj.newHeight === undefined) {
            throw new Error('Required parameter "requestObj.newHeight" was null or undefined when calling getDrawingResize.');
        }

        if (requestObj.outputFormat) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outputFormat", requestObj.outputFormat);
        }

        if (requestObj.newWidth) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newWidth", requestObj.newWidth);
        }

        if (requestObj.newHeight) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newHeight", requestObj.newHeight);
        }

        if (requestObj.folder) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        }

        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
            json: false,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Rotate/flip an existing drawing.
     * @param requestObj contains request parameters
     */
    public async getDrawingRotateFlip(requestObj: model.GetDrawingRotateFlipRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDrawingRotateFlip.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/{name}/rotateflip"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDrawingRotateFlip.');
        }

        // verify required parameter 'requestObj.outputFormat' is not null or undefined
        if (requestObj.outputFormat === null || requestObj.outputFormat === undefined) {
            throw new Error('Required parameter "requestObj.outputFormat" was null or undefined when calling getDrawingRotateFlip.');
        }

        // verify required parameter 'requestObj.rotateFlipType' is not null or undefined
        if (requestObj.rotateFlipType === null || requestObj.rotateFlipType === undefined) {
            throw new Error('Required parameter "requestObj.rotateFlipType" was null or undefined when calling getDrawingRotateFlip.');
        }

        if (requestObj.outputFormat) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outputFormat", requestObj.outputFormat);
        }

        if (requestObj.rotateFlipType) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "rotateFlipType", requestObj.rotateFlipType);
        }

        if (requestObj.folder) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        }

        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
            json: false,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export an existing drawing to another format.
     * @param requestObj contains request parameters
     */
    public async getDrawingSaveAs(requestObj: model.GetDrawingSaveAsRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDrawingSaveAs.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/{name}/saveAs/{outputFormat}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "outputFormat" + "}", String(requestObj.outputFormat));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getDrawingSaveAs.');
        }

        // verify required parameter 'requestObj.outputFormat' is not null or undefined
        if (requestObj.outputFormat === null || requestObj.outputFormat === undefined) {
            throw new Error('Required parameter "requestObj.outputFormat" was null or undefined when calling getDrawingSaveAs.');
        }

        if (requestObj.folder) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        }

        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
            json: false,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Get file versions
     * @param requestObj contains request parameters
     */
    public async getFileVersions(requestObj: model.GetFileVersionsRequest): Promise<model.FileVersions> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFileVersions.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/storage/version/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling getFileVersions.');
        }

        if (requestObj.storageName) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            json: false,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "FileVersions");
        }
        return Promise.resolve(result);        
    }

    /**
     * Get all files and folders within a folder
     * @param requestObj contains request parameters
     */
    public async getFilesList(requestObj: model.GetFilesListRequest): Promise<model.FilesList> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFilesList.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/storage/folder/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling getFilesList.');
        }

        if (requestObj.storageName) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            json: false,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "FilesList");
        }
        return Promise.resolve(result);        
    }

    /**
     * Move file
     * @param requestObj contains request parameters
     */
    public async moveFile(requestObj: model.MoveFileRequest): Promise<any> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling moveFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/storage/file/move/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling moveFile.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling moveFile.');
        }

        if (requestObj.destPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        }

        if (requestObj.srcStorageName) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        }

        if (requestObj.destStorageName) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        }

        if (requestObj.versionId) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            json: false,
        };
        
        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve();        
    }

    /**
     * Move folder
     * @param requestObj contains request parameters
     */
    public async moveFolder(requestObj: model.MoveFolderRequest): Promise<any> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling moveFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/storage/folder/move/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling moveFolder.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling moveFolder.');
        }

        if (requestObj.destPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        }

        if (requestObj.srcStorageName) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        }

        if (requestObj.destStorageName) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            json: false,
        };
        
        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve();        
    }

    /**
     * Check if file or folder exists
     * @param requestObj contains request parameters
     */
    public async objectExists(requestObj: model.ObjectExistsRequest): Promise<model.ObjectExist> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling objectExists.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/storage/exist/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling objectExists.');
        }

        if (requestObj.storageName) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        }

        if (requestObj.versionId) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            json: false,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "ObjectExist");
        }
        return Promise.resolve(result);        
    }

    /**
     * Convert bitmap image to DXF, DWG, DGN, DWF, DWFX, DRC, IFC, STL, STP, STEP, CGM, GLB, GLTF, DWT, IGES, PLT, CF2, OBJ, HPGL, IGS, PCL, FBX, SVG format.
     * @param requestObj contains request parameters
     */
    public async paperToCad(requestObj: model.PaperToCadRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling paperToCad.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/paper-to-cad";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.outputFormat' is not null or undefined
        if (requestObj.outputFormat === null || requestObj.outputFormat === undefined) {
            throw new Error('Required parameter "requestObj.outputFormat" was null or undefined when calling paperToCad.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.outputFormat) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outputFormat", requestObj.outputFormat);
        }

        if (requestObj.drawing !== undefined) {
            const paramKey = "drawing";
            let formValue = null;
            formValue = requestObj.drawing;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawing",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export an existing drawing to BMP format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingBmp(requestObj: model.PostDrawingBmpRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDrawingBmp.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/{name}/bmp"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postDrawingBmp.');
        }

        // verify required parameter 'requestObj.options' is not null or undefined
        if (requestObj.options === null || requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was null or undefined when calling postDrawingBmp.');
        }

        if (requestObj.folder) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        }

        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
            json: false,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "BmpOptionsDTO" : requestObj.options.constructor.name),
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export an existing drawing to CGM format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingCgm(requestObj: model.PostDrawingCgmRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDrawingCgm.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/{name}/cgm"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postDrawingCgm.');
        }

        // verify required parameter 'requestObj.options' is not null or undefined
        if (requestObj.options === null || requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was null or undefined when calling postDrawingCgm.');
        }

        if (requestObj.folder) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        }

        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
            json: false,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "CgmOptionsDTO" : requestObj.options.constructor.name),
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export an existing drawing to DXF format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingDXF(requestObj: model.PostDrawingDXFRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDrawingDXF.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/{name}/dxf"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postDrawingDXF.');
        }

        // verify required parameter 'requestObj.options' is not null or undefined
        if (requestObj.options === null || requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was null or undefined when calling postDrawingDXF.');
        }

        if (requestObj.folder) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        }

        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
            json: false,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "DxfOptionsDTO" : requestObj.options.constructor.name),
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export an existing drawing to Dicom format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingDicom(requestObj: model.PostDrawingDicomRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDrawingDicom.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/{name}/dicom"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postDrawingDicom.');
        }

        // verify required parameter 'requestObj.options' is not null or undefined
        if (requestObj.options === null || requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was null or undefined when calling postDrawingDicom.');
        }

        if (requestObj.folder) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        }

        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
            json: false,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "DicomOptionsDTO" : requestObj.options.constructor.name),
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export an existing drawing to Draco format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingDraco(requestObj: model.PostDrawingDracoRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDrawingDraco.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/{name}/drc"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postDrawingDraco.');
        }

        // verify required parameter 'requestObj.options' is not null or undefined
        if (requestObj.options === null || requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was null or undefined when calling postDrawingDraco.');
        }

        if (requestObj.folder) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        }

        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
            json: false,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "DracoOptionsDTO" : requestObj.options.constructor.name),
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export an existing drawing to Dwf format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingDwf(requestObj: model.PostDrawingDwfRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDrawingDwf.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/{name}/dwf"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postDrawingDwf.');
        }

        // verify required parameter 'requestObj.options' is not null or undefined
        if (requestObj.options === null || requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was null or undefined when calling postDrawingDwf.');
        }

        if (requestObj.folder) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        }

        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
            json: false,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "DwfOptionsDTO" : requestObj.options.constructor.name),
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export an existing drawing to Fbx format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingFbx(requestObj: model.PostDrawingFbxRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDrawingFbx.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/{name}/fbx"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postDrawingFbx.');
        }

        // verify required parameter 'requestObj.options' is not null or undefined
        if (requestObj.options === null || requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was null or undefined when calling postDrawingFbx.');
        }

        if (requestObj.folder) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        }

        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
            json: false,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "FbxOptionsDTO" : requestObj.options.constructor.name),
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export an existing drawing into GIF format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingGif(requestObj: model.PostDrawingGifRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDrawingGif.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/{name}/gif"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postDrawingGif.');
        }

        // verify required parameter 'requestObj.options' is not null or undefined
        if (requestObj.options === null || requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was null or undefined when calling postDrawingGif.');
        }

        if (requestObj.folder) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        }

        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
            json: false,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "GifOptionsDTO" : requestObj.options.constructor.name),
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export an existing drawing to GLB format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingGlb(requestObj: model.PostDrawingGlbRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDrawingGlb.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/{name}/glb"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postDrawingGlb.');
        }

        // verify required parameter 'requestObj.options' is not null or undefined
        if (requestObj.options === null || requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was null or undefined when calling postDrawingGlb.');
        }

        if (requestObj.folder) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        }

        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
            json: false,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "GlbOptionsDTO" : requestObj.options.constructor.name),
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export an existing drawing to GLTF format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingGltf(requestObj: model.PostDrawingGltfRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDrawingGltf.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/{name}/gltf"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postDrawingGltf.');
        }

        // verify required parameter 'requestObj.options' is not null or undefined
        if (requestObj.options === null || requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was null or undefined when calling postDrawingGltf.');
        }

        if (requestObj.folder) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        }

        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
            json: false,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "GltfOptionsDTO" : requestObj.options.constructor.name),
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export an existing drawing into JPEG format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingJpeg(requestObj: model.PostDrawingJpegRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDrawingJpeg.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/{name}/jpeg"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postDrawingJpeg.');
        }

        // verify required parameter 'requestObj.options' is not null or undefined
        if (requestObj.options === null || requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was null or undefined when calling postDrawingJpeg.');
        }

        if (requestObj.folder) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        }

        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
            json: false,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "JpegOptionsDTO" : requestObj.options.constructor.name),
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export an existing drawing into JPEG2000 format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingJpeg2000(requestObj: model.PostDrawingJpeg2000Request): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDrawingJpeg2000.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/{name}/jpeg2000"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postDrawingJpeg2000.');
        }

        // verify required parameter 'requestObj.options' is not null or undefined
        if (requestObj.options === null || requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was null or undefined when calling postDrawingJpeg2000.');
        }

        if (requestObj.folder) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        }

        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
            json: false,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "Jpeg2000OptionsDTO" : requestObj.options.constructor.name),
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export an existing drawing to Obj format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingObj(requestObj: model.PostDrawingObjRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDrawingObj.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/{name}/obj"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postDrawingObj.');
        }

        // verify required parameter 'requestObj.options' is not null or undefined
        if (requestObj.options === null || requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was null or undefined when calling postDrawingObj.');
        }

        if (requestObj.folder) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        }

        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
            json: false,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "ObjOptionsDTO" : requestObj.options.constructor.name),
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export an existing drawing to PDF format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingPdf(requestObj: model.PostDrawingPdfRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDrawingPdf.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/{name}/pdf"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postDrawingPdf.');
        }

        // verify required parameter 'requestObj.options' is not null or undefined
        if (requestObj.options === null || requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was null or undefined when calling postDrawingPdf.');
        }

        if (requestObj.folder) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        }

        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
            json: false,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "PdfOptionsDTO" : requestObj.options.constructor.name),
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export an existing drawing into PNG format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingPng(requestObj: model.PostDrawingPngRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDrawingPng.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/{name}/png"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postDrawingPng.');
        }

        // verify required parameter 'requestObj.options' is not null or undefined
        if (requestObj.options === null || requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was null or undefined when calling postDrawingPng.');
        }

        if (requestObj.folder) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        }

        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
            json: false,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "PngOptionsDTO" : requestObj.options.constructor.name),
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Retrieves info about drawing which is passed as a zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async postDrawingProperties(requestObj: model.PostDrawingPropertiesRequest): Promise<model.CadResponse> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDrawingProperties.');
        }

        const localVarPath = this.configuration.getApiBaseUrl() + "/cad/properties";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling postDrawingProperties.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.drawingData !== undefined) {
            const paramKey = "drawingData";
            let formValue = null;
            formValue = requestObj.drawingData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawingData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "CadResponse");
        }
        return Promise.resolve(result);        
    }

    /**
     * Export an existing drawing into PSD format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingPsd(requestObj: model.PostDrawingPsdRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDrawingPsd.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/{name}/psd"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postDrawingPsd.');
        }

        // verify required parameter 'requestObj.options' is not null or undefined
        if (requestObj.options === null || requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was null or undefined when calling postDrawingPsd.');
        }

        if (requestObj.folder) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        }

        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
            json: false,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "PsdOptionsDTO" : requestObj.options.constructor.name),
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Resize a drawing. Drawing data is passed as a zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async postDrawingResize(requestObj: model.PostDrawingResizeRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDrawingResize.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/resize";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling postDrawingResize.');
        }

        // verify required parameter 'requestObj.outputFormat' is not null or undefined
        if (requestObj.outputFormat === null || requestObj.outputFormat === undefined) {
            throw new Error('Required parameter "requestObj.outputFormat" was null or undefined when calling postDrawingResize.');
        }

        // verify required parameter 'requestObj.newWidth' is not null or undefined
        if (requestObj.newWidth === null || requestObj.newWidth === undefined) {
            throw new Error('Required parameter "requestObj.newWidth" was null or undefined when calling postDrawingResize.');
        }

        // verify required parameter 'requestObj.newHeight' is not null or undefined
        if (requestObj.newHeight === null || requestObj.newHeight === undefined) {
            throw new Error('Required parameter "requestObj.newHeight" was null or undefined when calling postDrawingResize.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.outputFormat) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outputFormat", requestObj.outputFormat);
        }

        if (requestObj.newWidth) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newWidth", requestObj.newWidth);
        }

        if (requestObj.newHeight) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newHeight", requestObj.newHeight);
        }

        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        if (requestObj.drawingData !== undefined) {
            const paramKey = "drawingData";
            let formValue = null;
            formValue = requestObj.drawingData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawingData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Rotate/flip a drawing. Drawing data is passed as a zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async postDrawingRotateFlip(requestObj: model.PostDrawingRotateFlipRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDrawingRotateFlip.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/rotateflip";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling postDrawingRotateFlip.');
        }

        // verify required parameter 'requestObj.outputFormat' is not null or undefined
        if (requestObj.outputFormat === null || requestObj.outputFormat === undefined) {
            throw new Error('Required parameter "requestObj.outputFormat" was null or undefined when calling postDrawingRotateFlip.');
        }

        // verify required parameter 'requestObj.rotateFlipType' is not null or undefined
        if (requestObj.rotateFlipType === null || requestObj.rotateFlipType === undefined) {
            throw new Error('Required parameter "requestObj.rotateFlipType" was null or undefined when calling postDrawingRotateFlip.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.outputFormat) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outputFormat", requestObj.outputFormat);
        }

        if (requestObj.rotateFlipType) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "rotateFlipType", requestObj.rotateFlipType);
        }

        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        if (requestObj.drawingData !== undefined) {
            const paramKey = "drawingData";
            let formValue = null;
            formValue = requestObj.drawingData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawingData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export an existing drawing to STP format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingSTP(requestObj: model.PostDrawingSTPRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDrawingSTP.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/{name}/stp"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postDrawingSTP.');
        }

        // verify required parameter 'requestObj.options' is not null or undefined
        if (requestObj.options === null || requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was null or undefined when calling postDrawingSTP.');
        }

        if (requestObj.folder) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        }

        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
            json: false,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "StpOptionsDTO" : requestObj.options.constructor.name),
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export existing drawing to another format. Drawing data is passed as zero-indexed multipart/form-data content or as raw body stream.             
     * @param requestObj contains request parameters
     */
    public async postDrawingSaveAs(requestObj: model.PostDrawingSaveAsRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDrawingSaveAs.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/saveAs/{outputFormat}"
            .replace("{" + "outputFormat" + "}", String(requestObj.outputFormat));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling postDrawingSaveAs.');
        }

        // verify required parameter 'requestObj.outputFormat' is not null or undefined
        if (requestObj.outputFormat === null || requestObj.outputFormat === undefined) {
            throw new Error('Required parameter "requestObj.outputFormat" was null or undefined when calling postDrawingSaveAs.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        if (requestObj.drawingData !== undefined) {
            const paramKey = "drawingData";
            let formValue = null;
            formValue = requestObj.drawingData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawingData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export an existing drawing to SVG format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingSvg(requestObj: model.PostDrawingSvgRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDrawingSvg.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/{name}/svg"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postDrawingSvg.');
        }

        // verify required parameter 'requestObj.options' is not null or undefined
        if (requestObj.options === null || requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was null or undefined when calling postDrawingSvg.');
        }

        if (requestObj.folder) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        }

        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
            json: false,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "SvgOptionsDTO" : requestObj.options.constructor.name),
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export an existing drawing to 3ds format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingThreeDS(requestObj: model.PostDrawingThreeDSRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDrawingThreeDS.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/{name}/3ds"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postDrawingThreeDS.');
        }

        // verify required parameter 'requestObj.options' is not null or undefined
        if (requestObj.options === null || requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was null or undefined when calling postDrawingThreeDS.');
        }

        if (requestObj.folder) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        }

        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
            json: false,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "ThreeDSOptionsDTO" : requestObj.options.constructor.name),
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export an existing drawing into TIFF format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingTiff(requestObj: model.PostDrawingTiffRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDrawingTiff.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/{name}/tiff"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postDrawingTiff.');
        }

        // verify required parameter 'requestObj.options' is not null or undefined
        if (requestObj.options === null || requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was null or undefined when calling postDrawingTiff.');
        }

        if (requestObj.folder) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        }

        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
            json: false,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "TiffOptionsDTO" : requestObj.options.constructor.name),
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export an existing drawing to U3d format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingU3d(requestObj: model.PostDrawingU3dRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDrawingU3d.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/{name}/u3d"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postDrawingU3d.');
        }

        // verify required parameter 'requestObj.options' is not null or undefined
        if (requestObj.options === null || requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was null or undefined when calling postDrawingU3d.');
        }

        if (requestObj.folder) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        }

        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
            json: false,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "U3dOptionsDTO" : requestObj.options.constructor.name),
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export an existing drawing to Webp format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingWebp(requestObj: model.PostDrawingWebpRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDrawingWebp.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/{name}/webp"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postDrawingWebp.');
        }

        // verify required parameter 'requestObj.options' is not null or undefined
        if (requestObj.options === null || requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was null or undefined when calling postDrawingWebp.');
        }

        if (requestObj.folder) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        }

        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
            json: false,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "WebpOptionsDTO" : requestObj.options.constructor.name),
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export an existing drawing to WMF format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingWmf(requestObj: model.PostDrawingWmfRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDrawingWmf.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/{name}/wmf"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postDrawingWmf.');
        }

        // verify required parameter 'requestObj.options' is not null or undefined
        if (requestObj.options === null || requestObj.options === undefined) {
            throw new Error('Required parameter "requestObj.options" was null or undefined when calling postDrawingWmf.');
        }

        if (requestObj.folder) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        }

        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
            json: false,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "WmfOptionsDTO" : requestObj.options.constructor.name),
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export drawing to BMP format. Drawing data is passed as zero-indexed multipart/form-data as well as export BMP options serialized as JSON. Order of drawing data and BMP options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingBmp(requestObj: model.PutDrawingBmpRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingBmp.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/bmp";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingBmp.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        if (requestObj.drawingData !== undefined) {
            const paramKey = "drawingData";
            let formValue = null;
            formValue = requestObj.drawingData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawingData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        if (requestObj.exportOptions !== undefined) {
            const paramKey = "exportOptions";
            let formValue = null;
            formValue = ObjectSerializer.serialize(requestObj.exportOptions, "string");
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "exportOptions",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export drawing to CGM format. Drawing data is passed as zero-indexed multipart/form-data as well as export CGM options serialized as JSON. Order of drawing data and CGM options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingCgm(requestObj: model.PutDrawingCgmRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingCgm.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/cgm";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingCgm.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        if (requestObj.drawingData !== undefined) {
            const paramKey = "drawingData";
            let formValue = null;
            formValue = requestObj.drawingData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawingData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        if (requestObj.exportOptions !== undefined) {
            const paramKey = "exportOptions";
            let formValue = null;
            formValue = ObjectSerializer.serialize(requestObj.exportOptions, "string");
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "exportOptions",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export drawing to DXF format. Drawing data is passed as zero-indexed multipart/form-data as well as export DXF options serialized as JSON. Order of drawing data and DXF options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingDXF(requestObj: model.PutDrawingDXFRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingDXF.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/dxf";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingDXF.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        if (requestObj.drawingData !== undefined) {
            const paramKey = "drawingData";
            let formValue = null;
            formValue = requestObj.drawingData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawingData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        if (requestObj.exportOptions !== undefined) {
            const paramKey = "exportOptions";
            let formValue = null;
            formValue = ObjectSerializer.serialize(requestObj.exportOptions, "string");
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "exportOptions",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export drawing to Dicom format. Drawing data is passed as zero-indexed multipart/form-data as well as export Dicom options serialized as JSON. Order of drawing data and Dicom options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingDicom(requestObj: model.PutDrawingDicomRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingDicom.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/dicom";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingDicom.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        if (requestObj.drawingData !== undefined) {
            const paramKey = "drawingData";
            let formValue = null;
            formValue = requestObj.drawingData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawingData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        if (requestObj.exportOptions !== undefined) {
            const paramKey = "exportOptions";
            let formValue = null;
            formValue = ObjectSerializer.serialize(requestObj.exportOptions, "string");
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "exportOptions",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export drawing to Draco format. Drawing data is passed as zero-indexed multipart/form-data as well as export Draco options serialized as JSON. Order of drawing data and Draco options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingDraco(requestObj: model.PutDrawingDracoRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingDraco.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/drc";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingDraco.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        if (requestObj.drawingData !== undefined) {
            const paramKey = "drawingData";
            let formValue = null;
            formValue = requestObj.drawingData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawingData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        if (requestObj.exportOptions !== undefined) {
            const paramKey = "exportOptions";
            let formValue = null;
            formValue = ObjectSerializer.serialize(requestObj.exportOptions, "string");
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "exportOptions",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export drawing to Dwf format. Drawing data is passed as zero-indexed multipart/form-data as well as export Dwf options serialized as JSON. Order of drawing data and Dwf options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingDwf(requestObj: model.PutDrawingDwfRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingDwf.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/dwf";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingDwf.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        if (requestObj.drawingData !== undefined) {
            const paramKey = "drawingData";
            let formValue = null;
            formValue = requestObj.drawingData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawingData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        if (requestObj.exportOptions !== undefined) {
            const paramKey = "exportOptions";
            let formValue = null;
            formValue = ObjectSerializer.serialize(requestObj.exportOptions, "string");
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "exportOptions",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export drawing to Fbx format. Drawing data is passed as zero-indexed multipart/form-data as well as export Fbx options serialized as JSON. Order of drawing data and Fbx options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingFbx(requestObj: model.PutDrawingFbxRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingFbx.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/fbx";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingFbx.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        if (requestObj.drawingData !== undefined) {
            const paramKey = "drawingData";
            let formValue = null;
            formValue = requestObj.drawingData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawingData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        if (requestObj.exportOptions !== undefined) {
            const paramKey = "exportOptions";
            let formValue = null;
            formValue = ObjectSerializer.serialize(requestObj.exportOptions, "string");
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "exportOptions",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export drawing to GIF format. Drawing data is passed as zero-indexed multipart/form-data as well as export GIF options serialized as JSON. Order of drawing data and GIF options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingGif(requestObj: model.PutDrawingGifRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingGif.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/gif";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingGif.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        if (requestObj.drawingData !== undefined) {
            const paramKey = "drawingData";
            let formValue = null;
            formValue = requestObj.drawingData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawingData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        if (requestObj.exportOptions !== undefined) {
            const paramKey = "exportOptions";
            let formValue = null;
            formValue = ObjectSerializer.serialize(requestObj.exportOptions, "string");
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "exportOptions",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export drawing to GLB format. Drawing data is passed as zero-indexed multipart/form-data as well as export GLB options serialized as JSON. Order of drawing data and GLB options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingGlb(requestObj: model.PutDrawingGlbRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingGlb.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/glb";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingGlb.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        if (requestObj.drawingData !== undefined) {
            const paramKey = "drawingData";
            let formValue = null;
            formValue = requestObj.drawingData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawingData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        if (requestObj.exportOptions !== undefined) {
            const paramKey = "exportOptions";
            let formValue = null;
            formValue = ObjectSerializer.serialize(requestObj.exportOptions, "string");
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "exportOptions",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export drawing to GLTF format. Drawing data is passed as zero-indexed multipart/form-data as well as export GLTF options serialized as JSON. Order of drawing data and GLTF options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingGltf(requestObj: model.PutDrawingGltfRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingGltf.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/gltf";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingGltf.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        if (requestObj.drawingData !== undefined) {
            const paramKey = "drawingData";
            let formValue = null;
            formValue = requestObj.drawingData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawingData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        if (requestObj.exportOptions !== undefined) {
            const paramKey = "exportOptions";
            let formValue = null;
            formValue = ObjectSerializer.serialize(requestObj.exportOptions, "string");
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "exportOptions",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export drawing to JPEG format. Drawing data is passed as zero-indexed multipart/form-data as well as export JPEG options serialized as JSON. Order of drawing data and JPEG options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingJpeg(requestObj: model.PutDrawingJpegRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingJpeg.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/jpeg";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingJpeg.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        if (requestObj.drawingData !== undefined) {
            const paramKey = "drawingData";
            let formValue = null;
            formValue = requestObj.drawingData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawingData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        if (requestObj.exportOptions !== undefined) {
            const paramKey = "exportOptions";
            let formValue = null;
            formValue = ObjectSerializer.serialize(requestObj.exportOptions, "string");
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "exportOptions",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export drawing to JPEG2000 format. Drawing data is passed as zero-indexed multipart/form-data as well as export JPEG2000 options serialized as JSON. Order of drawing data and JPEG2000 options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingJpeg2000(requestObj: model.PutDrawingJpeg2000Request): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingJpeg2000.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/jpeg2000";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingJpeg2000.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        if (requestObj.drawingData !== undefined) {
            const paramKey = "drawingData";
            let formValue = null;
            formValue = requestObj.drawingData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawingData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        if (requestObj.exportOptions !== undefined) {
            const paramKey = "exportOptions";
            let formValue = null;
            formValue = ObjectSerializer.serialize(requestObj.exportOptions, "string");
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "exportOptions",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export drawing to Obj format. Drawing data is passed as zero-indexed multipart/form-data as well as export Obj options serialized as JSON. Order of drawing data and Obj options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingObj(requestObj: model.PutDrawingObjRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingObj.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/obj";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingObj.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        if (requestObj.drawingData !== undefined) {
            const paramKey = "drawingData";
            let formValue = null;
            formValue = requestObj.drawingData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawingData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        if (requestObj.exportOptions !== undefined) {
            const paramKey = "exportOptions";
            let formValue = null;
            formValue = ObjectSerializer.serialize(requestObj.exportOptions, "string");
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "exportOptions",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export drawing to PDF format. Drawing data is passed as zero-indexed multipart/form-data as well as export PDF options serialized as JSON. Order of drawing data and PDF options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingPdf(requestObj: model.PutDrawingPdfRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingPdf.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/pdf";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingPdf.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        if (requestObj.drawingData !== undefined) {
            const paramKey = "drawingData";
            let formValue = null;
            formValue = requestObj.drawingData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawingData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        if (requestObj.exportOptions !== undefined) {
            const paramKey = "exportOptions";
            let formValue = null;
            formValue = ObjectSerializer.serialize(requestObj.exportOptions, "string");
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "exportOptions",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export drawing to PNG format. Drawing data is passed as zero-indexed multipart/form-data as well as export PNG options serialized as JSON. Order of drawing data and PNG options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingPng(requestObj: model.PutDrawingPngRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingPng.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/png";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingPng.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        if (requestObj.drawingData !== undefined) {
            const paramKey = "drawingData";
            let formValue = null;
            formValue = requestObj.drawingData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawingData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        if (requestObj.exportOptions !== undefined) {
            const paramKey = "exportOptions";
            let formValue = null;
            formValue = ObjectSerializer.serialize(requestObj.exportOptions, "string");
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "exportOptions",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export drawing to PSD format. Drawing data is passed as zero-indexed multipart/form-data as well as export PSD options serialized as JSON. Order of drawing data and PSD options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingPsd(requestObj: model.PutDrawingPsdRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingPsd.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/psd";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingPsd.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        if (requestObj.drawingData !== undefined) {
            const paramKey = "drawingData";
            let formValue = null;
            formValue = requestObj.drawingData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawingData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        if (requestObj.exportOptions !== undefined) {
            const paramKey = "exportOptions";
            let formValue = null;
            formValue = ObjectSerializer.serialize(requestObj.exportOptions, "string");
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "exportOptions",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export drawing to Stp format. Drawing data is passed as zero-indexed multipart/form-data as well as export Stp options serialized as JSON. Order of drawing data and Stp options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingSTP(requestObj: model.PutDrawingSTPRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingSTP.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/stp";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingSTP.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        if (requestObj.drawingData !== undefined) {
            const paramKey = "drawingData";
            let formValue = null;
            formValue = requestObj.drawingData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawingData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        if (requestObj.exportOptions !== undefined) {
            const paramKey = "exportOptions";
            let formValue = null;
            formValue = ObjectSerializer.serialize(requestObj.exportOptions, "string");
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "exportOptions",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export drawing to SVG format. Drawing data is passed as zero-indexed multipart/form-data as well as export SVG options serialized as JSON. Order of drawing data and SVG options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingSvg(requestObj: model.PutDrawingSvgRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingSvg.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/svg";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingSvg.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        if (requestObj.drawingData !== undefined) {
            const paramKey = "drawingData";
            let formValue = null;
            formValue = requestObj.drawingData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawingData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        if (requestObj.exportOptions !== undefined) {
            const paramKey = "exportOptions";
            let formValue = null;
            formValue = ObjectSerializer.serialize(requestObj.exportOptions, "string");
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "exportOptions",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export drawing to 3ds format. Drawing data is passed as zero-indexed multipart/form-data as well as export 3ds options serialized as JSON. Order of drawing data and 3ds options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingThreeDS(requestObj: model.PutDrawingThreeDSRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingThreeDS.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/3ds";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingThreeDS.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        if (requestObj.drawingData !== undefined) {
            const paramKey = "drawingData";
            let formValue = null;
            formValue = requestObj.drawingData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawingData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        if (requestObj.exportOptions !== undefined) {
            const paramKey = "exportOptions";
            let formValue = null;
            formValue = ObjectSerializer.serialize(requestObj.exportOptions, "string");
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "exportOptions",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export drawing to TIFF format. Drawing data is passed as zero-indexed multipart/form-data as well as export TIFF options serialized as JSON. Order of drawing data and TIFF options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingTiff(requestObj: model.PutDrawingTiffRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingTiff.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/tiff";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingTiff.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        if (requestObj.drawingData !== undefined) {
            const paramKey = "drawingData";
            let formValue = null;
            formValue = requestObj.drawingData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawingData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        if (requestObj.exportOptions !== undefined) {
            const paramKey = "exportOptions";
            let formValue = null;
            formValue = ObjectSerializer.serialize(requestObj.exportOptions, "string");
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "exportOptions",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export drawing to U3d format. Drawing data is passed as zero-indexed multipart/form-data as well as export U3d options serialized as JSON. Order of drawing data and U3d options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingU3d(requestObj: model.PutDrawingU3dRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingU3d.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/u3d";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingU3d.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        if (requestObj.drawingData !== undefined) {
            const paramKey = "drawingData";
            let formValue = null;
            formValue = requestObj.drawingData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawingData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        if (requestObj.exportOptions !== undefined) {
            const paramKey = "exportOptions";
            let formValue = null;
            formValue = ObjectSerializer.serialize(requestObj.exportOptions, "string");
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "exportOptions",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export drawing to Webp format. Drawing data is passed as zero-indexed multipart/form-data as well as export Webp options serialized as JSON. Order of drawing data and Webp options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingWebp(requestObj: model.PutDrawingWebpRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingWebp.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/webp";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingWebp.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        if (requestObj.drawingData !== undefined) {
            const paramKey = "drawingData";
            let formValue = null;
            formValue = requestObj.drawingData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawingData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        if (requestObj.exportOptions !== undefined) {
            const paramKey = "exportOptions";
            let formValue = null;
            formValue = ObjectSerializer.serialize(requestObj.exportOptions, "string");
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "exportOptions",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export drawing to WMF format. Drawing data is passed as zero-indexed multipart/form-data as well as export WMF options serialized as JSON. Order of drawing data and WMF options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingWmf(requestObj: model.PutDrawingWmfRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingWmf.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/wmf";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingWmf.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.outPath) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        }

        if (requestObj.storage) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        }

        if (requestObj.drawingData !== undefined) {
            const paramKey = "drawingData";
            let formValue = null;
            formValue = requestObj.drawingData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawingData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        if (requestObj.exportOptions !== undefined) {
            const paramKey = "exportOptions";
            let formValue = null;
            formValue = ObjectSerializer.serialize(requestObj.exportOptions, "string");
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "exportOptions",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Save Metadata
     * @param requestObj contains request parameters
     */
    public async putEditMetadata(requestObj: model.PutEditMetadataRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putEditMetadata.');
        }

        const localVarPath = this.configuration.getApiBaseUrl() + "/cad/EditMetadata";
        const queryParameters: any = {};

        const formParams: { [key: string]: any } = {};
        if (requestObj.drawing !== undefined) {
            const paramKey = "drawing";
            let formValue = null;
            formValue = requestObj.drawing;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawing",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        if (requestObj.metadataComponent !== undefined) {
            const paramKey = "metadataComponent";
            let formValue = null;
            formValue = ObjectSerializer.serialize(requestObj.metadataComponent, "string");
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "metadataComponent",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Check if storage exists
     * @param requestObj contains request parameters
     */
    public async storageExists(requestObj: model.StorageExistsRequest): Promise<model.StorageExist> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling storageExists.');
        }

        const localVarPath = this.configuration.getApiBaseUrl() + "/cad/storage/{storageName}/exist"
            .replace("{" + "storageName" + "}", String(requestObj.storageName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.storageName' is not null or undefined
        if (requestObj.storageName === null || requestObj.storageName === undefined) {
            throw new Error('Required parameter "requestObj.storageName" was null or undefined when calling storageExists.');
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            json: false,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "StorageExist");
        }
        return Promise.resolve(result);        
    }

    /**
     * Upload file
     * @param requestObj contains request parameters
     */
    public async uploadFile(requestObj: model.UploadFileRequest): Promise<model.FilesUploadResult> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling uploadFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/storage/file/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling uploadFile.');
        }

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling uploadFile.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.storageName) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        }

        if (requestObj.file !== undefined) {
            const paramKey = "File";
            let formValue = null;
            formValue = requestObj.file;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "File",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "FilesUploadResult");
        }
        return Promise.resolve(result);        
    }

    /**
     * Return file for viewer
     * @param requestObj contains request parameters
     */
    public async viewer(requestObj: model.ViewerRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling viewer.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/Viewer";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.outputFormat' is not null or undefined
        if (requestObj.outputFormat === null || requestObj.outputFormat === undefined) {
            throw new Error('Required parameter "requestObj.outputFormat" was null or undefined when calling viewer.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.outputFormat) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outputFormat", requestObj.outputFormat);
        }

        if (requestObj.drawing !== undefined) {
            const paramKey = "drawing";
            let formValue = null;
            formValue = requestObj.drawing;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawing",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Add watermark to drawing
     * @param requestObj contains request parameters
     */
    public async watermark(requestObj: model.WatermarkRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling watermark.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/Watermark";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.outputFormat' is not null or undefined
        if (requestObj.outputFormat === null || requestObj.outputFormat === undefined) {
            throw new Error('Required parameter "requestObj.outputFormat" was null or undefined when calling watermark.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.outputFormat) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outputFormat", requestObj.outputFormat);
        }

        if (requestObj.outputTypeExt) {
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outputTypeExt", requestObj.outputTypeExt);
        }

        if (requestObj.drawing !== undefined) {
            const paramKey = "drawing";
            let formValue = null;
            formValue = requestObj.drawing;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "drawing",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        if (requestObj.watermarkRgb !== undefined) {
            const paramKey = "watermarkRgb";
            let formValue = null;
            formValue = ObjectSerializer.serialize(requestObj.watermarkRgb, "string");
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "watermarkRgb",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                    proxy: this.configuration.proxy,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            proxy: this.configuration.proxy,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

}

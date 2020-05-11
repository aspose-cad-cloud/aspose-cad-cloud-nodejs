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

}

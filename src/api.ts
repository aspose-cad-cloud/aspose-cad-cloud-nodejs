/*
* MIT License

* Copyright (c) 2018 Aspose Pty Ltd

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

import http = require("http");
import request = require("request");

import { Configuration } from "./internal/configuration";
import { ObjectSerializer } from "./internal/object-serializer";
import { addQueryParameterToUrl, invokeApiMethod } from "./internal/request-helper";
import * as model from "./model/model";

export * from "./model/model";

/**
 * Library for communicating with the Aspose.Cad Cloud API
 */
export class CadApi {
    /**
     * API configuration
     */
    public configuration: Configuration;

    /**
     * @param appSID App SID.
     * @param appKey App key.
     * @param baseUrl Base api Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     * @param apiVersion API version.
     */
    constructor(appSID: string, appKey: string, baseUrl?: string, debugMode?: boolean, apiVersion?: string) {
        this.configuration = new Configuration(appSID, appKey, baseUrl, debugMode, apiVersion);
    }

    /**
     * Retrieves info about an existing drawing.             
     * @param requestObj contains request parameters
     */
    public async getDrawingProperties(requestObj: model.GetDrawingPropertiesRequest): Promise<{response: http.IncomingMessage, body: model.CadResponse}> {
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
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CadResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Resize an existing drawing.
     * @param requestObj contains request parameters
     */
    public async getDrawingResize(requestObj: model.GetDrawingResizeRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
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
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outputFormat", requestObj.outputFormat);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newWidth", requestObj.newWidth);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newHeight", requestObj.newHeight);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Rotate/flip an existing drawing.
     * @param requestObj contains request parameters
     */
    public async getDrawingRotateFlip(requestObj: model.GetDrawingRotateFlipRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
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
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outputFormat", requestObj.outputFormat);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "rotateFlipType", requestObj.rotateFlipType);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Export an existing drawing to another format.
     * @param requestObj contains request parameters
     */
    public async getDrawingSaveAs(requestObj: model.GetDrawingSaveAsRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
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
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Export an existing drawing to BMP format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingBmp(requestObj: model.PostDrawingBmpRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
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
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "BmpOptionsDTO" : requestObj.options.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Export an existing drawing into GIF format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingGif(requestObj: model.PostDrawingGifRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
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
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "GifOptionsDTO" : requestObj.options.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Export an existing drawing into JPEG format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingJpeg(requestObj: model.PostDrawingJpegRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
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
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "JpegOptionsDTO" : requestObj.options.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Export an existing drawing into JPEG2000 format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingJpeg2000(requestObj: model.PostDrawingJpeg2000Request): Promise<{response: http.IncomingMessage, body: Buffer}> {
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
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "Jpeg2000OptionsDTO" : requestObj.options.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Export an existing drawing to PDF format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingPdf(requestObj: model.PostDrawingPdfRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
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
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "PdfOptionsDTO" : requestObj.options.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Export an existing drawing into PNG format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingPng(requestObj: model.PostDrawingPngRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
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
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "PngOptionsDTO" : requestObj.options.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Retrieves info about drawing which is passed as a zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async postDrawingProperties(requestObj: model.PostDrawingPropertiesRequest): Promise<{response: http.IncomingMessage, body: model.CadResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDrawingProperties.');
        }

        const localVarPath = this.configuration.getApiBaseUrl() + "/cad/properties";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling postDrawingProperties.');
        }
        
        if (requestObj.drawingData !== undefined) {
            formParams.drawingData = requestObj.drawingData;
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CadResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Export an existing drawing into PSD format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingPsd(requestObj: model.PostDrawingPsdRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
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
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "PsdOptionsDTO" : requestObj.options.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Resize a drawing. Drawing data is passed as a zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async postDrawingResize(requestObj: model.PostDrawingResizeRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDrawingResize.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/resize";
        const queryParameters: any = {};
        const formParams: any = {};

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
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outputFormat", requestObj.outputFormat);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newWidth", requestObj.newWidth);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newHeight", requestObj.newHeight);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.drawingData !== undefined) {
            formParams.drawingData = requestObj.drawingData;
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Rotate/flip a drawing. Drawing data is passed as a zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async postDrawingRotateFlip(requestObj: model.PostDrawingRotateFlipRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDrawingRotateFlip.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/rotateflip";
        const queryParameters: any = {};
        const formParams: any = {};

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
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outputFormat", requestObj.outputFormat);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "rotateFlipType", requestObj.rotateFlipType);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.drawingData !== undefined) {
            formParams.drawingData = requestObj.drawingData;
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Export existing drawing to another format. Drawing data is passed as zero-indexed multipart/form-data content or as raw body stream.             
     * @param requestObj contains request parameters
     */
    public async postDrawingSaveAs(requestObj: model.PostDrawingSaveAsRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postDrawingSaveAs.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/saveAs/{outputFormat}"
            .replace("{" + "outputFormat" + "}", String(requestObj.outputFormat));
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling postDrawingSaveAs.');
        }

        // verify required parameter 'requestObj.outputFormat' is not null or undefined
        if (requestObj.outputFormat === null || requestObj.outputFormat === undefined) {
            throw new Error('Required parameter "requestObj.outputFormat" was null or undefined when calling postDrawingSaveAs.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.drawingData !== undefined) {
            formParams.drawingData = requestObj.drawingData;
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Export an existing drawing to SVG format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingSvg(requestObj: model.PostDrawingSvgRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
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
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "SvgOptionsDTO" : requestObj.options.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Export an existing drawing into TIFF format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingTiff(requestObj: model.PostDrawingTiffRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
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
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "TiffOptionsDTO" : requestObj.options.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Export an existing drawing to WMF format with export settings specified.
     * @param requestObj contains request parameters
     */
    public async postDrawingWmf(requestObj: model.PostDrawingWmfRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
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
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: ObjectSerializer.serialize(requestObj.options, requestObj.options.constructor.name === "Object" ? "WmfOptionsDTO" : requestObj.options.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Export drawing to BMP format. Drawing data is passed as zero-indexed multipart/form-data as well as export BMP options serialized as JSON. Order of drawing data and BMP options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingBmp(requestObj: model.PutDrawingBmpRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingBmp.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/bmp";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingBmp.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.drawingData !== undefined) {
            formParams.drawingData = requestObj.drawingData;
        }

        if (requestObj.exportOptions !== undefined) {
            formParams.exportOptions = ObjectSerializer.serialize(requestObj.exportOptions, "string");
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Export drawing to GIF format. Drawing data is passed as zero-indexed multipart/form-data as well as export GIF options serialized as JSON. Order of drawing data and GIF options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingGif(requestObj: model.PutDrawingGifRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingGif.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/gif";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingGif.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.drawingData !== undefined) {
            formParams.drawingData = requestObj.drawingData;
        }

        if (requestObj.exportOptions !== undefined) {
            formParams.exportOptions = ObjectSerializer.serialize(requestObj.exportOptions, "string");
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Export drawing to JPEG format. Drawing data is passed as zero-indexed multipart/form-data as well as export JPEG options serialized as JSON. Order of drawing data and JPEG options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingJpeg(requestObj: model.PutDrawingJpegRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingJpeg.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/jpeg";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingJpeg.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.drawingData !== undefined) {
            formParams.drawingData = requestObj.drawingData;
        }

        if (requestObj.exportOptions !== undefined) {
            formParams.exportOptions = ObjectSerializer.serialize(requestObj.exportOptions, "string");
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Export drawing to JPEG2000 format. Drawing data is passed as zero-indexed multipart/form-data as well as export JPEG2000 options serialized as JSON. Order of drawing data and JPEG2000 options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingJpeg2000(requestObj: model.PutDrawingJpeg2000Request): Promise<{response: http.IncomingMessage, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingJpeg2000.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/jpeg2000";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingJpeg2000.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.drawingData !== undefined) {
            formParams.drawingData = requestObj.drawingData;
        }

        if (requestObj.exportOptions !== undefined) {
            formParams.exportOptions = ObjectSerializer.serialize(requestObj.exportOptions, "string");
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Export drawing to PDF format. Drawing data is passed as zero-indexed multipart/form-data as well as export PDF options serialized as JSON. Order of drawing data and PDF options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingPdf(requestObj: model.PutDrawingPdfRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingPdf.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/pdf";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingPdf.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.drawingData !== undefined) {
            formParams.drawingData = requestObj.drawingData;
        }

        if (requestObj.exportOptions !== undefined) {
            formParams.exportOptions = ObjectSerializer.serialize(requestObj.exportOptions, "string");
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Export drawing to PNG format. Drawing data is passed as zero-indexed multipart/form-data as well as export PNG options serialized as JSON. Order of drawing data and PNG options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingPng(requestObj: model.PutDrawingPngRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingPng.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/png";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingPng.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.drawingData !== undefined) {
            formParams.drawingData = requestObj.drawingData;
        }

        if (requestObj.exportOptions !== undefined) {
            formParams.exportOptions = ObjectSerializer.serialize(requestObj.exportOptions, "string");
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Export drawing to PSD format. Drawing data is passed as zero-indexed multipart/form-data as well as export PSD options serialized as JSON. Order of drawing data and PSD options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingPsd(requestObj: model.PutDrawingPsdRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingPsd.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/psd";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingPsd.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.drawingData !== undefined) {
            formParams.drawingData = requestObj.drawingData;
        }

        if (requestObj.exportOptions !== undefined) {
            formParams.exportOptions = ObjectSerializer.serialize(requestObj.exportOptions, "string");
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Export drawing to SVG format. Drawing data is passed as zero-indexed multipart/form-data as well as export SVG options serialized as JSON. Order of drawing data and SVG options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingSvg(requestObj: model.PutDrawingSvgRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingSvg.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/svg";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingSvg.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.drawingData !== undefined) {
            formParams.drawingData = requestObj.drawingData;
        }

        if (requestObj.exportOptions !== undefined) {
            formParams.exportOptions = ObjectSerializer.serialize(requestObj.exportOptions, "string");
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Export drawing to TIFF format. Drawing data is passed as zero-indexed multipart/form-data as well as export TIFF options serialized as JSON. Order of drawing data and TIFF options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingTiff(requestObj: model.PutDrawingTiffRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingTiff.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/tiff";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingTiff.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.drawingData !== undefined) {
            formParams.drawingData = requestObj.drawingData;
        }

        if (requestObj.exportOptions !== undefined) {
            formParams.exportOptions = ObjectSerializer.serialize(requestObj.exportOptions, "string");
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Export drawing to WMF format. Drawing data is passed as zero-indexed multipart/form-data as well as export WMF options serialized as JSON. Order of drawing data and WMF options could vary.
     * @param requestObj contains request parameters
     */
    public async putDrawingWmf(requestObj: model.PutDrawingWmfRequest): Promise<{response: http.IncomingMessage, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putDrawingWmf.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/cad/wmf";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.drawingData' is not null or undefined
        if (requestObj.drawingData === null || requestObj.drawingData === undefined) {
            throw new Error('Required parameter "requestObj.drawingData" was null or undefined when calling putDrawingWmf.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.drawingData !== undefined) {
            formParams.drawingData = requestObj.drawingData;
        }

        if (requestObj.exportOptions !== undefined) {
            formParams.exportOptions = ObjectSerializer.serialize(requestObj.exportOptions, "string");
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

}

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

export class AsnEncodedData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "oid",
            baseName: "Oid",
            type: "Oid",
        },        
        {
            name: "rawData",
            baseName: "RawData",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AsnEncodedData.attributeTypeMap;
    }

    /**
     * oid
     */
    public oid: Oid;
    
    /**
     * rawData
     */
    public rawData: string;
    
    public constructor(init?: Partial<AsnEncodedData>) {
        
        Object.assign(this, init);
    }        
}

export class AsymmetricAlgorithm {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "keySize",
            baseName: "KeySize",
            type: "number",
        },        
        {
            name: "legalKeySizes",
            baseName: "LegalKeySizes",
            type: "Array<KeySizes>",
        },        
        {
            name: "signatureAlgorithm",
            baseName: "SignatureAlgorithm",
            type: "string",
        },        
        {
            name: "keyExchangeAlgorithm",
            baseName: "KeyExchangeAlgorithm",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AsymmetricAlgorithm.attributeTypeMap;
    }

    /**
     * keySize
     */
    public keySize: number;
    
    /**
     * legalKeySizes
     */
    public legalKeySizes: Array<KeySizes>;
    
    /**
     * signatureAlgorithm
     */
    public signatureAlgorithm: string;
    
    /**
     * keyExchangeAlgorithm
     */
    public keyExchangeAlgorithm: string;
    
    public constructor(init?: Partial<AsymmetricAlgorithm>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents information about a drawing.
 */
export class CadResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "height",
            baseName: "Height",
            type: "number",
        },        
        {
            name: "width",
            baseName: "Width",
            type: "number",
        },        
        {
            name: "dwgProperties",
            baseName: "DwgProperties",
            type: "DwgProperties",
        },        
        {
            name: "dxfProperties",
            baseName: "DxfProperties",
            type: "DxfProperties",
        },        
        {
            name: "dwtProperties",
            baseName: "DwtProperties",
            type: "DwgProperties",
        },        
        {
            name: "dgnProperties",
            baseName: "DgnProperties",
            type: "DgnProperties",
        },        
        {
            name: "ifcProperties",
            baseName: "IfcProperties",
            type: "IfcProperties",
        },        
        {
            name: "igsProperties",
            baseName: "IgsProperties",
            type: "IgsProperties",
        },        
        {
            name: "stlProperties",
            baseName: "StlProperties",
            type: "StlProperties",
        },        
        {
            name: "dwfProperties",
            baseName: "DwfProperties",
            type: "DwfProperties",
        },        
        {
            name: "cf2Properties",
            baseName: "Cf2Properties",
            type: "Cf2Properties",
        },        
        {
            name: "fbxProperties",
            baseName: "FbxProperties",
            type: "FbxProperties",
        },        
        {
            name: "objProperties",
            baseName: "ObjProperties",
            type: "ObjProperties",
        },        
        {
            name: "pltProperties",
            baseName: "PltProperties",
            type: "PltProperties",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return CadResponse.attributeTypeMap;
    }

    /**
     * Gets or sets the height of a drawing.
     */
    public height: number;
    
    /**
     * Gets or sets the width of a drawing.
     */
    public width: number;
    
    /**
     * Gets or sets the DWG properties.
     */
    public dwgProperties: DwgProperties;
    
    /**
     * Gets or sets the DXF properties.
     */
    public dxfProperties: DxfProperties;
    
    /**
     * Gets or sets the DWT properties.
     */
    public dwtProperties: DwgProperties;
    
    /**
     * Gets or sets the DGN properties.
     */
    public dgnProperties: DgnProperties;
    
    /**
     * Gets or sets the IFC properties.
     */
    public ifcProperties: IfcProperties;
    
    /**
     * Gets or sets the IGS properties.
     */
    public igsProperties: IgsProperties;
    
    /**
     * Gets or sets the STL properties.
     */
    public stlProperties: StlProperties;
    
    /**
     * Gets or sets the DWF properties.
     */
    public dwfProperties: DwfProperties;
    
    /**
     * Gets or sets the Cf2 properties.
     */
    public cf2Properties: Cf2Properties;
    
    /**
     * Gets or sets the Cf2 properties.
     */
    public fbxProperties: FbxProperties;
    
    /**
     * Gets or sets the FBX properties.
     */
    public objProperties: ObjProperties;
    
    /**
     * Gets or sets the Cf2 properties.
     */
    public pltProperties: PltProperties;
    
    public constructor(init?: Partial<CadResponse>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents information about CF2 drawing.
 */
export class Cf2Properties {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Cf2Properties.attributeTypeMap;
    }

    public constructor(init?: Partial<Cf2Properties>) {
        
        Object.assign(this, init);
    }        
}

export class Color {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "R",
            baseName: "R",
            type: "number",
        },        
        {
            name: "G",
            baseName: "G",
            type: "number",
        },        
        {
            name: "B",
            baseName: "B",
            type: "number",
        },        
        {
            name: "A",
            baseName: "A",
            type: "number",
        },        
        {
            name: "isKnownColor",
            baseName: "IsKnownColor",
            type: "boolean",
        },        
        {
            name: "isEmpty",
            baseName: "IsEmpty",
            type: "boolean",
        },        
        {
            name: "isNamedColor",
            baseName: "IsNamedColor",
            type: "boolean",
        },        
        {
            name: "name",
            baseName: "Name",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Color.attributeTypeMap;
    }

    /**
     * R
     */
    public R: number;
    
    /**
     * G
     */
    public G: number;
    
    /**
     * B
     */
    public B: number;
    
    /**
     * A
     */
    public A: number;
    
    /**
     * isKnownColor
     */
    public isKnownColor: boolean;
    
    /**
     * isEmpty
     */
    public isEmpty: boolean;
    
    /**
     * isNamedColor
     */
    public isNamedColor: boolean;
    
    /**
     * name
     */
    public name: string;
    
    public constructor(init?: Partial<Color>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents information about DGN drawing.
 */
export class DgnProperties {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DgnProperties.attributeTypeMap;
    }

    public constructor(init?: Partial<DgnProperties>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Class for disc space information.
 */
export class DiscUsage {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "usedSize",
            baseName: "UsedSize",
            type: "number",
        },        
        {
            name: "totalSize",
            baseName: "TotalSize",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DiscUsage.attributeTypeMap;
    }

    /**
     * Application used disc space.
     */
    public usedSize: number;
    
    /**
     * Total disc space.
     */
    public totalSize: number;
    
    public constructor(init?: Partial<DiscUsage>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Image options base class
 */
export class DrawingOptionsBaseDTO {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "rotation",
            baseName: "Rotation",
            type: "any",
        },        
        {
            name: "layers",
            baseName: "Layers",
            type: "Array<string>",
        },        
        {
            name: "resolutionSettings",
            baseName: "ResolutionSettings",
            type: "ResolutionSetting",
        },        
        {
            name: "vectorRasterizationOptions",
            baseName: "VectorRasterizationOptions",
            type: "CadRasterizationOptionsDTO",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DrawingOptionsBaseDTO.attributeTypeMap;
    }

    /**
     * Resulting rotation operation
     */
    public rotation: any;
    
    /**
     * Layers to export
     */
    public layers: Array<string>;
    
    /**
     * DPI resolution settings
     */
    public resolutionSettings: ResolutionSetting;
    
    /**
     * Raster options
     */
    public vectorRasterizationOptions: CadRasterizationOptionsDTO;
    
    public constructor(init?: Partial<DrawingOptionsBaseDTO>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents information about DWF drawing.
 */
export class DwfProperties {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DwfProperties.attributeTypeMap;
    }

    public constructor(init?: Partial<DwfProperties>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents information about DWG drawing.
 */
export class DwgProperties {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DwgProperties.attributeTypeMap;
    }

    public constructor(init?: Partial<DwgProperties>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents information about DXF drawing.
 */
export class DxfProperties {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DxfProperties.attributeTypeMap;
    }

    public constructor(init?: Partial<DxfProperties>) {
        
        Object.assign(this, init);
    }        
}

/**
 * The error details
 */
export class ErrorDetails {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "requestId",
            baseName: "RequestId",
            type: "string",
        },        
        {
            name: "date",
            baseName: "Date",
            type: "Date",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ErrorDetails.attributeTypeMap;
    }

    /**
     * The request id
     */
    public requestId: string;
    
    /**
     * Date
     */
    public date: Date;
    
    public constructor(init?: Partial<ErrorDetails>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents information about FBX drawing.
 */
export class FbxProperties {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FbxProperties.attributeTypeMap;
    }

    public constructor(init?: Partial<FbxProperties>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File versions FileVersion.
 */
export class FileVersions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "value",
            baseName: "Value",
            type: "Array<FileVersion>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FileVersions.attributeTypeMap;
    }

    /**
     * File versions FileVersion.
     */
    public value: Array<FileVersion>;
    
    public constructor(init?: Partial<FileVersions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Files list
 */
export class FilesList {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "value",
            baseName: "Value",
            type: "Array<StorageFile>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilesList.attributeTypeMap;
    }

    /**
     * Files and folders contained by folder StorageFile.
     */
    public value: Array<StorageFile>;
    
    public constructor(init?: Partial<FilesList>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File upload result
 */
export class FilesUploadResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "uploaded",
            baseName: "Uploaded",
            type: "Array<string>",
        },        
        {
            name: "errors",
            baseName: "Errors",
            type: "Array<Error>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilesUploadResult.attributeTypeMap;
    }

    /**
     * List of uploaded file names
     */
    public uploaded: Array<string>;
    
    /**
     * List of errors.
     */
    public errors: Array<Error>;
    
    public constructor(init?: Partial<FilesUploadResult>) {
        
        Object.assign(this, init);
    }        
}

export class GetAccessTokenRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "clientId",
            baseName: "ClientId",
            type: "string",
        },        
        {
            name: "clientSecret",
            baseName: "ClientSecret",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return GetAccessTokenRequest.attributeTypeMap;
    }

    /**
     * clientId
     */
    public clientId: string;
    
    /**
     * clientSecret
     */
    public clientSecret: string;
    
    public constructor(init?: Partial<GetAccessTokenRequest>) {
        
        Object.assign(this, init);
    }        
}

export class GraphicsOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "textRenderingHint",
            baseName: "TextRenderingHint",
            type: "GraphicsOptions.TextRenderingHintEnum",
        },        
        {
            name: "smoothingMode",
            baseName: "SmoothingMode",
            type: "GraphicsOptions.SmoothingModeEnum",
        },        
        {
            name: "interpolationMode",
            baseName: "InterpolationMode",
            type: "GraphicsOptions.InterpolationModeEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return GraphicsOptions.attributeTypeMap;
    }

    /**
     * textRenderingHint
     */
    public textRenderingHint: GraphicsOptions.TextRenderingHintEnum;
    
    /**
     * smoothingMode
     */
    public smoothingMode: GraphicsOptions.SmoothingModeEnum;
    
    /**
     * interpolationMode
     */
    public interpolationMode: GraphicsOptions.InterpolationModeEnum;
    
    public constructor(init?: Partial<GraphicsOptions>) {
        
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace GraphicsOptions {
    export enum TextRenderingHintEnum {
        SystemDefault = 'SystemDefault' as any,
        SingleBitPerPixelGridFit = 'SingleBitPerPixelGridFit' as any,
        SingleBitPerPixel = 'SingleBitPerPixel' as any,
        AntiAliasGridFit = 'AntiAliasGridFit' as any,
        AntiAlias = 'AntiAlias' as any,
        ClearTypeGridFit = 'ClearTypeGridFit' as any,
    }
    export enum SmoothingModeEnum {
        Default = 'Default' as any,
        HighSpeed = 'HighSpeed' as any,
        HighQuality = 'HighQuality' as any,
        None = 'None' as any,
        AntiAlias = 'AntiAlias' as any,
        Invalid = 'Invalid' as any,
    }
    export enum InterpolationModeEnum {
        Default = 'Default' as any,
        Low = 'Low' as any,
        High = 'High' as any,
        Bilinear = 'Bilinear' as any,
        Bicubic = 'Bicubic' as any,
        NearestNeighbor = 'NearestNeighbor' as any,
        HighQualityBilinear = 'HighQualityBilinear' as any,
        HighQualityBicubic = 'HighQualityBicubic' as any,
        Invalid = 'Invalid' as any,
    }
}
// tslint:enable:quotemark
/**
 * Represents information about IFC drawing.
 */
export class IfcProperties {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return IfcProperties.attributeTypeMap;
    }

    public constructor(init?: Partial<IfcProperties>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents information about IGS drawing.
 */
export class IgsProperties {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return IgsProperties.attributeTypeMap;
    }

    public constructor(init?: Partial<IgsProperties>) {
        
        Object.assign(this, init);
    }        
}

export class IntPtr {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return IntPtr.attributeTypeMap;
    }

    public constructor(init?: Partial<IntPtr>) {
        
        Object.assign(this, init);
    }        
}

export class KeySizes {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "minSize",
            baseName: "MinSize",
            type: "number",
        },        
        {
            name: "maxSize",
            baseName: "MaxSize",
            type: "number",
        },        
        {
            name: "skipSize",
            baseName: "SkipSize",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return KeySizes.attributeTypeMap;
    }

    /**
     * minSize
     */
    public minSize: number;
    
    /**
     * maxSize
     */
    public maxSize: number;
    
    /**
     * skipSize
     */
    public skipSize: number;
    
    public constructor(init?: Partial<KeySizes>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Error
 */
export class ModelError {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "code",
            baseName: "Code",
            type: "string",
        },        
        {
            name: "message",
            baseName: "Message",
            type: "string",
        },        
        {
            name: "description",
            baseName: "Description",
            type: "string",
        },        
        {
            name: "innerError",
            baseName: "InnerError",
            type: "ErrorDetails",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ModelError.attributeTypeMap;
    }

    /**
     * Code             
     */
    public code: string;
    
    /**
     * Message             
     */
    public message: string;
    
    /**
     * Description             
     */
    public description: string;
    
    /**
     * Inner Error             
     */
    public innerError: ErrorDetails;
    
    public constructor(init?: Partial<ModelError>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents information about OBJ drawing.
 */
export class ObjProperties {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ObjProperties.attributeTypeMap;
    }

    public constructor(init?: Partial<ObjProperties>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Object exists
 */
export class ObjectExist {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "exists",
            baseName: "Exists",
            type: "boolean",
        },        
        {
            name: "isFolder",
            baseName: "IsFolder",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ObjectExist.attributeTypeMap;
    }

    /**
     * Indicates that the file or folder exists.
     */
    public exists: boolean;
    
    /**
     * True if it is a folder, false if it is a file.
     */
    public isFolder: boolean;
    
    public constructor(init?: Partial<ObjectExist>) {
        
        Object.assign(this, init);
    }        
}

export class Oid {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "value",
            baseName: "Value",
            type: "string",
        },        
        {
            name: "friendlyName",
            baseName: "FriendlyName",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Oid.attributeTypeMap;
    }

    /**
     * value
     */
    public value: string;
    
    /**
     * friendlyName
     */
    public friendlyName: string;
    
    public constructor(init?: Partial<Oid>) {
        
        Object.assign(this, init);
    }        
}

export class PdfDigitalSignatureDetailsCore {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "certificate",
            baseName: "Certificate",
            type: "X509Certificate2",
        },        
        {
            name: "reason",
            baseName: "Reason",
            type: "string",
        },        
        {
            name: "location",
            baseName: "Location",
            type: "string",
        },        
        {
            name: "signatureDate",
            baseName: "SignatureDate",
            type: "Date",
        },        
        {
            name: "hashAlgorithm",
            baseName: "HashAlgorithm",
            type: "PdfDigitalSignatureDetailsCore.HashAlgorithmEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PdfDigitalSignatureDetailsCore.attributeTypeMap;
    }

    /**
     * certificate
     */
    public certificate: X509Certificate2;
    
    /**
     * reason
     */
    public reason: string;
    
    /**
     * location
     */
    public location: string;
    
    /**
     * signatureDate
     */
    public signatureDate: Date;
    
    /**
     * hashAlgorithm
     */
    public hashAlgorithm: PdfDigitalSignatureDetailsCore.HashAlgorithmEnum;
    
    public constructor(init?: Partial<PdfDigitalSignatureDetailsCore>) {
        
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PdfDigitalSignatureDetailsCore {
    export enum HashAlgorithmEnum {
        Sha1 = 'Sha1' as any,
        Sha256 = 'Sha256' as any,
        Sha384 = 'Sha384' as any,
        Sha512 = 'Sha512' as any,
        Md5 = 'Md5' as any,
    }
}
// tslint:enable:quotemark
export class PdfDocumentInfo {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "keywords",
            baseName: "Keywords",
            type: "string",
        },        
        {
            name: "title",
            baseName: "Title",
            type: "string",
        },        
        {
            name: "author",
            baseName: "Author",
            type: "string",
        },        
        {
            name: "subject",
            baseName: "Subject",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PdfDocumentInfo.attributeTypeMap;
    }

    /**
     * keywords
     */
    public keywords: string;
    
    /**
     * title
     */
    public title: string;
    
    /**
     * author
     */
    public author: string;
    
    /**
     * subject
     */
    public subject: string;
    
    public constructor(init?: Partial<PdfDocumentInfo>) {
        
        Object.assign(this, init);
    }        
}

export class PdfDocumentOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "compliance",
            baseName: "Compliance",
            type: "PdfDocumentOptions.ComplianceEnum",
        },        
        {
            name: "digitalSignatureDetails",
            baseName: "DigitalSignatureDetails",
            type: "PdfDigitalSignatureDetailsCore",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PdfDocumentOptions.attributeTypeMap;
    }

    /**
     * compliance
     */
    public compliance: PdfDocumentOptions.ComplianceEnum;
    
    /**
     * digitalSignatureDetails
     */
    public digitalSignatureDetails: PdfDigitalSignatureDetailsCore;
    
    public constructor(init?: Partial<PdfDocumentOptions>) {
        
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PdfDocumentOptions {
    export enum ComplianceEnum {
        Pdf15 = 'Pdf15' as any,
        PdfA1a = 'PdfA1a' as any,
        PdfA1b = 'PdfA1b' as any,
    }
}
// tslint:enable:quotemark
export class PenOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "startCap",
            baseName: "StartCap",
            type: "PenOptions.StartCapEnum",
        },        
        {
            name: "endCap",
            baseName: "EndCap",
            type: "PenOptions.EndCapEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PenOptions.attributeTypeMap;
    }

    /**
     * startCap
     */
    public startCap: PenOptions.StartCapEnum;
    
    /**
     * endCap
     */
    public endCap: PenOptions.EndCapEnum;
    
    public constructor(init?: Partial<PenOptions>) {
        
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PenOptions {
    export enum StartCapEnum {
        Flat = 'Flat' as any,
        Square = 'Square' as any,
        Round = 'Round' as any,
        Triangle = 'Triangle' as any,
        NoAnchor = 'NoAnchor' as any,
        SquareAnchor = 'SquareAnchor' as any,
        RoundAnchor = 'RoundAnchor' as any,
        DiamondAnchor = 'DiamondAnchor' as any,
        ArrowAnchor = 'ArrowAnchor' as any,
        AnchorMask = 'AnchorMask' as any,
        Custom = 'Custom' as any,
    }
    export enum EndCapEnum {
        Flat = 'Flat' as any,
        Square = 'Square' as any,
        Round = 'Round' as any,
        Triangle = 'Triangle' as any,
        NoAnchor = 'NoAnchor' as any,
        SquareAnchor = 'SquareAnchor' as any,
        RoundAnchor = 'RoundAnchor' as any,
        DiamondAnchor = 'DiamondAnchor' as any,
        ArrowAnchor = 'ArrowAnchor' as any,
        AnchorMask = 'AnchorMask' as any,
        Custom = 'Custom' as any,
    }
}
// tslint:enable:quotemark
/**
 * Represents information about PLT drawing.
 */
export class PltProperties {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PltProperties.attributeTypeMap;
    }

    public constructor(init?: Partial<PltProperties>) {
        
        Object.assign(this, init);
    }        
}

export class PublicKey {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "encodedKeyValue",
            baseName: "EncodedKeyValue",
            type: "AsnEncodedData",
        },        
        {
            name: "encodedParameters",
            baseName: "EncodedParameters",
            type: "AsnEncodedData",
        },        
        {
            name: "key",
            baseName: "Key",
            type: "AsymmetricAlgorithm",
        },        
        {
            name: "oid",
            baseName: "Oid",
            type: "Oid",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PublicKey.attributeTypeMap;
    }

    /**
     * encodedKeyValue
     */
    public encodedKeyValue: AsnEncodedData;
    
    /**
     * encodedParameters
     */
    public encodedParameters: AsnEncodedData;
    
    /**
     * key
     */
    public key: AsymmetricAlgorithm;
    
    /**
     * oid
     */
    public oid: Oid;
    
    public constructor(init?: Partial<PublicKey>) {
        
        Object.assign(this, init);
    }        
}

export class RdOptimizerSettings {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "bppScale",
            baseName: "BppScale",
            type: "number",
        },        
        {
            name: "bppMax",
            baseName: "BppMax",
            type: "number",
        },        
        {
            name: "maxQ",
            baseName: "MaxQ",
            type: "number",
        },        
        {
            name: "minQ",
            baseName: "MinQ",
            type: "number",
        },        
        {
            name: "maxPixelValue",
            baseName: "MaxPixelValue",
            type: "number",
        },        
        {
            name: "psnrMax",
            baseName: "PsnrMax",
            type: "number",
        },        
        {
            name: "discretizedBppMax",
            baseName: "DiscretizedBppMax",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return RdOptimizerSettings.attributeTypeMap;
    }

    /**
     * bppScale
     */
    public bppScale: number;
    
    /**
     * bppMax
     */
    public bppMax: number;
    
    /**
     * maxQ
     */
    public maxQ: number;
    
    /**
     * minQ
     */
    public minQ: number;
    
    /**
     * maxPixelValue
     */
    public maxPixelValue: number;
    
    /**
     * psnrMax
     */
    public psnrMax: number;
    
    /**
     * discretizedBppMax
     */
    public discretizedBppMax: number;
    
    public constructor(init?: Partial<RdOptimizerSettings>) {
        
        Object.assign(this, init);
    }        
}

export class ResolutionSetting {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "horizontalResolution",
            baseName: "HorizontalResolution",
            type: "number",
        },        
        {
            name: "verticalResolution",
            baseName: "VerticalResolution",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ResolutionSetting.attributeTypeMap;
    }

    /**
     * horizontalResolution
     */
    public horizontalResolution: number;
    
    /**
     * verticalResolution
     */
    public verticalResolution: number;
    
    public constructor(init?: Partial<ResolutionSetting>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents information about STL drawing.
 */
export class StlProperties {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StlProperties.attributeTypeMap;
    }

    public constructor(init?: Partial<StlProperties>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Storage exists
 */
export class StorageExist {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "exists",
            baseName: "Exists",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageExist.attributeTypeMap;
    }

    /**
     * Shows that the storage exists.             
     */
    public exists: boolean;
    
    public constructor(init?: Partial<StorageExist>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File or folder information
 */
export class StorageFile {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "isFolder",
            baseName: "IsFolder",
            type: "boolean",
        },        
        {
            name: "modifiedDate",
            baseName: "ModifiedDate",
            type: "Date",
        },        
        {
            name: "size",
            baseName: "Size",
            type: "number",
        },        
        {
            name: "path",
            baseName: "Path",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageFile.attributeTypeMap;
    }

    /**
     * File or folder name.
     */
    public name: string;
    
    /**
     * True if it is a folder.
     */
    public isFolder: boolean;
    
    /**
     * File or folder last modified DateTime.
     */
    public modifiedDate: Date;
    
    /**
     * File or folder size.
     */
    public size: number;
    
    /**
     * File or folder path.
     */
    public path: string;
    
    public constructor(init?: Partial<StorageFile>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Base raster export options class
 */
export class VectorRasterizationOptionsDTO {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "borderX",
            baseName: "BorderX",
            type: "number",
        },        
        {
            name: "borderY",
            baseName: "BorderY",
            type: "number",
        },        
        {
            name: "pageHeight",
            baseName: "PageHeight",
            type: "number",
        },        
        {
            name: "pageWidth",
            baseName: "PageWidth",
            type: "number",
        },        
        {
            name: "backgroundColor",
            baseName: "BackgroundColor",
            type: "Color",
        },        
        {
            name: "drawColor",
            baseName: "DrawColor",
            type: "Color",
        },        
        {
            name: "unitType",
            baseName: "UnitType",
            type: "VectorRasterizationOptionsDTO.UnitTypeEnum",
        },        
        {
            name: "contentAsBitmap",
            baseName: "ContentAsBitmap",
            type: "boolean",
        },        
        {
            name: "graphicsOptions",
            baseName: "GraphicsOptions",
            type: "GraphicsOptions",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return VectorRasterizationOptionsDTO.attributeTypeMap;
    }

    /**
     * Gets or sets the border X.
     */
    public borderX: number;
    
    /**
     * Gets or sets the border Y.
     */
    public borderY: number;
    
    /**
     * Gets or sets the page height.
     */
    public pageHeight: number;
    
    /**
     * Gets or sets the page width.
     */
    public pageWidth: number;
    
    /**
     * Gets or sets a background color.
     */
    public backgroundColor: Color;
    
    /**
     * Gets or sets a foreground color.
     */
    public drawColor: Color;
    
    /**
     * unitType
     */
    public unitType: VectorRasterizationOptionsDTO.UnitTypeEnum;
    
    /**
     * Gets or sets a value indicating whether content of a drawing is represented as image inside Pdf. Applicable only for CAD to Pdf export. Default is false.
     */
    public contentAsBitmap: boolean;
    
    /**
     * Gets or sets options to render bitmap inside pdf (if ContentAsBitmap is set to true).
     */
    public graphicsOptions: GraphicsOptions;
    
    public constructor(init?: Partial<VectorRasterizationOptionsDTO>) {
        
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace VectorRasterizationOptionsDTO {
    export enum UnitTypeEnum {
        Kilometer = 'Kilometer' as any,
        Meter = 'Meter' as any,
        Centimenter = 'Centimenter' as any,
        Millimeter = 'Millimeter' as any,
        Micrometer = 'Micrometer' as any,
        Nanometer = 'Nanometer' as any,
        Angstrom = 'Angstrom' as any,
        Decimeter = 'Decimeter' as any,
        Decameter = 'Decameter' as any,
        Hectometer = 'Hectometer' as any,
        Gigameter = 'Gigameter' as any,
        AstronomicalUnit = 'AstronomicalUnit' as any,
        LightYear = 'LightYear' as any,
        Parsec = 'Parsec' as any,
        Mile = 'Mile' as any,
        Yard = 'Yard' as any,
        Foot = 'Foot' as any,
        Inch = 'Inch' as any,
        Mil = 'Mil' as any,
        MicroInch = 'MicroInch' as any,
        Custom = 'Custom' as any,
        Unitless = 'Unitless' as any,
    }
}
// tslint:enable:quotemark
export class X509Certificate {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "handle",
            baseName: "Handle",
            type: "IntPtr",
        },        
        {
            name: "issuer",
            baseName: "Issuer",
            type: "string",
        },        
        {
            name: "subject",
            baseName: "Subject",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return X509Certificate.attributeTypeMap;
    }

    /**
     * handle
     */
    public handle: IntPtr;
    
    /**
     * issuer
     */
    public issuer: string;
    
    /**
     * subject
     */
    public subject: string;
    
    public constructor(init?: Partial<X509Certificate>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Export options for BMP format
 */
export class BmpOptionsDTO extends DrawingOptionsBaseDTO {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "bitsPerPixel",
            baseName: "BitsPerPixel",
            type: "number",
        },        
        {
            name: "compression",
            baseName: "Compression",
            type: "any",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(BmpOptionsDTO.attributeTypeMap);
    }

    /**
     * Bits per pixel
     */
    public bitsPerPixel: number;
    
    /**
     * Compression type
     */
    public compression: any;
    
    public constructor(init?: Partial<BmpOptionsDTO>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Raster export options
 */
export class CadRasterizationOptionsDTO extends VectorRasterizationOptionsDTO {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "zoom",
            baseName: "Zoom",
            type: "number",
        },        
        {
            name: "penOptions",
            baseName: "PenOptions",
            type: "PenOptions",
        },        
        {
            name: "automaticLayoutsScaling",
            baseName: "AutomaticLayoutsScaling",
            type: "boolean",
        },        
        {
            name: "layers",
            baseName: "Layers",
            type: "Array<string>",
        },        
        {
            name: "layouts",
            baseName: "Layouts",
            type: "Array<string>",
        },        
        {
            name: "drawType",
            baseName: "DrawType",
            type: "any",
        },        
        {
            name: "noScaling",
            baseName: "NoScaling",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CadRasterizationOptionsDTO.attributeTypeMap);
    }

    /**
     * Zoom factor
     */
    public zoom: number;
    
    /**
     * Pen options
     */
    public penOptions: PenOptions;
    
    /**
     * Determines whether layout has to be scaled automatically
     */
    public automaticLayoutsScaling: boolean;
    
    /**
     * Layers to export
     */
    public layers: Array<string>;
    
    /**
     * Layouts to export
     */
    public layouts: Array<string>;
    
    /**
     * Drawing mode
     */
    public drawType: any;
    
    /**
     * Determines whether scaling has to be turned off
     */
    public noScaling: boolean;
    
    public constructor(init?: Partial<CadRasterizationOptionsDTO>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace CadRasterizationOptionsDTO {
}
// tslint:enable:quotemark
/**
 * Export options for DWF format
 */
export class DwfOptionsDTO extends DrawingOptionsBaseDTO {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DwfOptionsDTO.attributeTypeMap);
    }

    public constructor(init?: Partial<DwfOptionsDTO>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Export options for DXF format
 */
export class DxfOptionsDTO extends DrawingOptionsBaseDTO {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DxfOptionsDTO.attributeTypeMap);
    }

    public constructor(init?: Partial<DxfOptionsDTO>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Export options for FBX format
 */
export class FbxOptionsDTO extends DrawingOptionsBaseDTO {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FbxOptionsDTO.attributeTypeMap);
    }

    public constructor(init?: Partial<FbxOptionsDTO>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * File Version
 */
export class FileVersion extends StorageFile {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "versionId",
            baseName: "VersionId",
            type: "string",
        },        
        {
            name: "isLatest",
            baseName: "IsLatest",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FileVersion.attributeTypeMap);
    }

    /**
     * File Version ID.
     */
    public versionId: string;
    
    /**
     * Specifies whether the file is (true) or is not (false) the latest version of an file.
     */
    public isLatest: boolean;
    
    public constructor(init?: Partial<FileVersion>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Export options for GIF format
 */
export class GifOptionsDTO extends DrawingOptionsBaseDTO {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "doPaletteCorrection",
            baseName: "DoPaletteCorrection",
            type: "boolean",
        },        
        {
            name: "colorResolution",
            baseName: "ColorResolution",
            type: "number",
        },        
        {
            name: "isPaletteSorted",
            baseName: "IsPaletteSorted",
            type: "boolean",
        },        
        {
            name: "pixelAspectRatio",
            baseName: "PixelAspectRatio",
            type: "number",
        },        
        {
            name: "backgroundColorIndex",
            baseName: "BackgroundColorIndex",
            type: "number",
        },        
        {
            name: "hasTrailer",
            baseName: "HasTrailer",
            type: "boolean",
        },        
        {
            name: "interlaced",
            baseName: "Interlaced",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(GifOptionsDTO.attributeTypeMap);
    }

    /**
     * Determines whether to do auto-correction of a palette
     */
    public doPaletteCorrection: boolean;
    
    /**
     * Color resolution
     */
    public colorResolution: number;
    
    /**
     * Determines whether a palette is sorted
     */
    public isPaletteSorted: boolean;
    
    /**
     * Pixel aspect ration
     */
    public pixelAspectRatio: number;
    
    /**
     * Background color index
     */
    public backgroundColorIndex: number;
    
    /**
     * Determines whether image has to have a trailer
     */
    public hasTrailer: boolean;
    
    /**
     * Determines whether an image has to be interlaced
     */
    public interlaced: boolean;
    
    public constructor(init?: Partial<GifOptionsDTO>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Export options for JPEG2000 format
 */
export class Jpeg2000OptionsDTO extends DrawingOptionsBaseDTO {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "comments",
            baseName: "Comments",
            type: "Array<string>",
        },        
        {
            name: "codec",
            baseName: "Codec",
            type: "Jpeg2000OptionsDTO.CodecEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Jpeg2000OptionsDTO.attributeTypeMap);
    }

    /**
     * comments
     */
    public comments: Array<string>;
    
    /**
     * codec
     */
    public codec: Jpeg2000OptionsDTO.CodecEnum;
    
    public constructor(init?: Partial<Jpeg2000OptionsDTO>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace Jpeg2000OptionsDTO {
    export enum CodecEnum {
        J2K = 'J2K' as any,
        Jp2 = 'Jp2' as any,
        Jpt = 'Jpt' as any,
    }
}
// tslint:enable:quotemark
/**
 * Export options for JPEG format
 */
export class JpegOptionsDTO extends DrawingOptionsBaseDTO {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "comment",
            baseName: "Comment",
            type: "string",
        },        
        {
            name: "compressionType",
            baseName: "CompressionType",
            type: "any",
        },        
        {
            name: "colorType",
            baseName: "ColorType",
            type: "any",
        },        
        {
            name: "quality",
            baseName: "Quality",
            type: "number",
        },        
        {
            name: "rdOptSettings",
            baseName: "RdOptSettings",
            type: "RdOptimizerSettings",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(JpegOptionsDTO.attributeTypeMap);
    }

    /**
     * Comment to Resulting file
     */
    public comment: string;
    
    /**
     * Compression type
     */
    public compressionType: any;
    
    /**
     * Color type
     */
    public colorType: any;
    
    /**
     * Quality level
     */
    public quality: number;
    
    /**
     * Optimizer settings
     */
    public rdOptSettings: RdOptimizerSettings;
    
    public constructor(init?: Partial<JpegOptionsDTO>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Export options for FBX format
 */
export class ObjOptionsDTO extends DrawingOptionsBaseDTO {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ObjOptionsDTO.attributeTypeMap);
    }

    public constructor(init?: Partial<ObjOptionsDTO>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Export options for PDF format
 */
export class PdfOptionsDTO extends DrawingOptionsBaseDTO {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "pdfDocumentInfo",
            baseName: "PdfDocumentInfo",
            type: "PdfDocumentInfo",
        },        
        {
            name: "corePdfOptions",
            baseName: "CorePdfOptions",
            type: "PdfDocumentOptions",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PdfOptionsDTO.attributeTypeMap);
    }

    /**
     * Document metadata
     */
    public pdfDocumentInfo: PdfDocumentInfo;
    
    /**
     * Core PDF rendering options
     */
    public corePdfOptions: PdfDocumentOptions;
    
    public constructor(init?: Partial<PdfOptionsDTO>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Export options for PNG format
 */
export class PngOptionsDTO extends DrawingOptionsBaseDTO {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "colorType",
            baseName: "ColorType",
            type: "any",
        },        
        {
            name: "progressive",
            baseName: "Progressive",
            type: "boolean",
        },        
        {
            name: "filterType",
            baseName: "FilterType",
            type: "any",
        },        
        {
            name: "compressionLevel",
            baseName: "CompressionLevel",
            type: "number",
        },        
        {
            name: "bitDepth",
            baseName: "BitDepth",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PngOptionsDTO.attributeTypeMap);
    }

    /**
     * Color type
     */
    public colorType: any;
    
    /**
     * Determines whether 'progressive' method is used
     */
    public progressive: boolean;
    
    /**
     * Filter type
     */
    public filterType: any;
    
    /**
     * Compression level
     */
    public compressionLevel: number;
    
    /**
     * Bits depth
     */
    public bitDepth: number;
    
    public constructor(init?: Partial<PngOptionsDTO>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Export options for PSD format
 */
export class PsdOptionsDTO extends DrawingOptionsBaseDTO {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "version",
            baseName: "Version",
            type: "number",
        },        
        {
            name: "compressionMethod",
            baseName: "CompressionMethod",
            type: "any",
        },        
        {
            name: "colorMode",
            baseName: "ColorMode",
            type: "any",
        },        
        {
            name: "channelBitsCount",
            baseName: "ChannelBitsCount",
            type: "number",
        },        
        {
            name: "channelsCount",
            baseName: "ChannelsCount",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PsdOptionsDTO.attributeTypeMap);
    }

    /**
     * PSD format version
     */
    public version: number;
    
    /**
     * Compression method
     */
    public compressionMethod: any;
    
    /**
     * Color mode
     */
    public colorMode: any;
    
    /**
     * Bits count per channel
     */
    public channelBitsCount: number;
    
    /**
     * Channels count
     */
    public channelsCount: number;
    
    public constructor(init?: Partial<PsdOptionsDTO>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Export options for SVG format
 */
export class SvgOptionsDTO extends DrawingOptionsBaseDTO {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "colorType",
            baseName: "ColorType",
            type: "any",
        },        
        {
            name: "textAsShapes",
            baseName: "TextAsShapes",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SvgOptionsDTO.attributeTypeMap);
    }

    /**
     * Color type
     */
    public colorType: any;
    
    /**
     * Render text as shapes
     */
    public textAsShapes: boolean;
    
    public constructor(init?: Partial<SvgOptionsDTO>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Export options for TIFF format
 */
export class TiffOptionsDTO extends DrawingOptionsBaseDTO {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "byteOrder",
            baseName: "ByteOrder",
            type: "any",
        },        
        {
            name: "compression",
            baseName: "Compression",
            type: "any",
        },        
        {
            name: "expectedFormat",
            baseName: "ExpectedFormat",
            type: "any",
        },        
        {
            name: "bitsPerSample",
            baseName: "BitsPerSample",
            type: "Array<number>",
        },        
        {
            name: "photometric",
            baseName: "Photometric",
            type: "any",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TiffOptionsDTO.attributeTypeMap);
    }

    /**
     * Bytes order (little/big-endian notation)
     */
    public byteOrder: any;
    
    /**
     * Compression level
     */
    public compression: any;
    
    /**
     * Expected TIFF sub-format
     */
    public expectedFormat: any;
    
    /**
     * Bits per pixel
     */
    public bitsPerSample: Array<number>;
    
    /**
     * Photometric options
     */
    public photometric: any;
    
    public constructor(init?: Partial<TiffOptionsDTO>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Export options for WMF format
 */
export class WmfOptionsDTO extends DrawingOptionsBaseDTO {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "bitsPerPixel",
            baseName: "BitsPerPixel",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WmfOptionsDTO.attributeTypeMap);
    }

    /**
     * Bits per pixel for Resulting file
     */
    public bitsPerPixel: number;
    
    public constructor(init?: Partial<WmfOptionsDTO>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class X500DistinguishedName extends AsnEncodedData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "name",
            baseName: "Name",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(X500DistinguishedName.attributeTypeMap);
    }

    /**
     * name
     */
    public name: string;
    
    public constructor(init?: Partial<X500DistinguishedName>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class X509Certificate2 extends X509Certificate {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{
        /**
         * Attribute name
         */
        name: string, 
        /**
         * Attribute base name
         */
        baseName: string,
        /**
         * Attribute type
         */
        type: string}> = [
        {
            name: "archived",
            baseName: "Archived",
            type: "boolean",
        },        
        {
            name: "extensions",
            baseName: "Extensions",
            type: "Array<any>",
        },        
        {
            name: "friendlyName",
            baseName: "FriendlyName",
            type: "string",
        },        
        {
            name: "hasPrivateKey",
            baseName: "HasPrivateKey",
            type: "boolean",
        },        
        {
            name: "privateKey",
            baseName: "PrivateKey",
            type: "AsymmetricAlgorithm",
        },        
        {
            name: "issuerName",
            baseName: "IssuerName",
            type: "X500DistinguishedName",
        },        
        {
            name: "notAfter",
            baseName: "NotAfter",
            type: "Date",
        },        
        {
            name: "notBefore",
            baseName: "NotBefore",
            type: "Date",
        },        
        {
            name: "publicKey",
            baseName: "PublicKey",
            type: "PublicKey",
        },        
        {
            name: "rawData",
            baseName: "RawData",
            type: "string",
        },        
        {
            name: "serialNumber",
            baseName: "SerialNumber",
            type: "string",
        },        
        {
            name: "signatureAlgorithm",
            baseName: "SignatureAlgorithm",
            type: "Oid",
        },        
        {
            name: "subjectName",
            baseName: "SubjectName",
            type: "X500DistinguishedName",
        },        
        {
            name: "thumbprint",
            baseName: "Thumbprint",
            type: "string",
        },        
        {
            name: "version",
            baseName: "Version",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(X509Certificate2.attributeTypeMap);
    }

    /**
     * archived
     */
    public archived: boolean;
    
    /**
     * extensions
     */
    public extensions: Array<any>;
    
    /**
     * friendlyName
     */
    public friendlyName: string;
    
    /**
     * hasPrivateKey
     */
    public hasPrivateKey: boolean;
    
    /**
     * privateKey
     */
    public privateKey: AsymmetricAlgorithm;
    
    /**
     * issuerName
     */
    public issuerName: X500DistinguishedName;
    
    /**
     * notAfter
     */
    public notAfter: Date;
    
    /**
     * notBefore
     */
    public notBefore: Date;
    
    /**
     * publicKey
     */
    public publicKey: PublicKey;
    
    /**
     * rawData
     */
    public rawData: string;
    
    /**
     * serialNumber
     */
    public serialNumber: string;
    
    /**
     * signatureAlgorithm
     */
    public signatureAlgorithm: Oid;
    
    /**
     * subjectName
     */
    public subjectName: X500DistinguishedName;
    
    /**
     * thumbprint
     */
    public thumbprint: string;
    
    /**
     * version
     */
    public version: number;
    
    public constructor(init?: Partial<X509Certificate2>) {
        super(init);
        Object.assign(this, init);
    }        
}

const enumsMap = {
    "GraphicsOptions.TextRenderingHintEnum": GraphicsOptions.TextRenderingHintEnum,
    "GraphicsOptions.SmoothingModeEnum": GraphicsOptions.SmoothingModeEnum,
    "GraphicsOptions.InterpolationModeEnum": GraphicsOptions.InterpolationModeEnum,
    "PdfDigitalSignatureDetailsCore.HashAlgorithmEnum": PdfDigitalSignatureDetailsCore.HashAlgorithmEnum,
    "PdfDocumentOptions.ComplianceEnum": PdfDocumentOptions.ComplianceEnum,
    "PenOptions.StartCapEnum": PenOptions.StartCapEnum,
    "PenOptions.EndCapEnum": PenOptions.EndCapEnum,
    "VectorRasterizationOptionsDTO.UnitTypeEnum": VectorRasterizationOptionsDTO.UnitTypeEnum,
    "Jpeg2000OptionsDTO.CodecEnum": Jpeg2000OptionsDTO.CodecEnum,
};

const typeMap = {
            AsnEncodedData,
            AsymmetricAlgorithm,
            CadResponse,
            Cf2Properties,
            Color,
            DgnProperties,
            DiscUsage,
            DrawingOptionsBaseDTO,
            DwfProperties,
            DwgProperties,
            DxfProperties,
            ErrorDetails,
            FbxProperties,
            FileVersions,
            FilesList,
            FilesUploadResult,
            GetAccessTokenRequest,
            GraphicsOptions,
            IfcProperties,
            IgsProperties,
            IntPtr,
            KeySizes,
            ModelError,
            ObjProperties,
            ObjectExist,
            Oid,
            PdfDigitalSignatureDetailsCore,
            PdfDocumentInfo,
            PdfDocumentOptions,
            PenOptions,
            PltProperties,
            PublicKey,
            RdOptimizerSettings,
            ResolutionSetting,
            StlProperties,
            StorageExist,
            StorageFile,
            VectorRasterizationOptionsDTO,
            X509Certificate,
            BmpOptionsDTO,
            CadRasterizationOptionsDTO,
            DwfOptionsDTO,
            DxfOptionsDTO,
            FbxOptionsDTO,
            FileVersion,
            GifOptionsDTO,
            Jpeg2000OptionsDTO,
            JpegOptionsDTO,
            ObjOptionsDTO,
            PdfOptionsDTO,
            PngOptionsDTO,
            PsdOptionsDTO,
            SvgOptionsDTO,
            TiffOptionsDTO,
            WmfOptionsDTO,
            X500DistinguishedName,
            X509Certificate2,
};

export {enumsMap, typeMap};

/**
 * Request model for CopyFile operation.
 */
export class CopyFileRequest {
    /**
     * Source file path e.g. '/folder/file.ext'
     */
    public srcPath: string;

    /**
     * Destination file path
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    /**
     * File version ID to copy
     */
    public versionId: string;
    
    public constructor(init?: Partial<CopyFileRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CopyFolder operation.
 */
export class CopyFolderRequest {
    /**
     * Source folder path e.g. '/src'
     */
    public srcPath: string;

    /**
     * Destination folder path e.g. '/dst'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;
    
    public constructor(init?: Partial<CopyFolderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CreateFolder operation.
 */
export class CreateFolderRequest {
    /**
     * Folder path to create e.g. 'folder_1/folder_2/'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(init?: Partial<CreateFolderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteFile operation.
 */
export class DeleteFileRequest {
    /**
     * File path e.g. '/folder/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID to delete
     */
    public versionId: string;
    
    public constructor(init?: Partial<DeleteFileRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteFolder operation.
 */
export class DeleteFolderRequest {
    /**
     * Folder path e.g. '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * Enable to delete folders, subfolders and files
     */
    public recursive: boolean;
    
    public constructor(init?: Partial<DeleteFolderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DownloadFile operation.
 */
export class DownloadFileRequest {
    /**
     * File path e.g. '/folder/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID to download
     */
    public versionId: string;
    
    public constructor(init?: Partial<DownloadFileRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDiscUsage operation.
 */
export class GetDiscUsageRequest {
    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(init?: Partial<GetDiscUsageRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDrawingProperties operation.
 */
export class GetDrawingPropertiesRequest {
    /**
     * Filename of an input drawing on a storage.
     */
    public name: string;

    /**
     * Folder with a drawing to get properties for.
     */
    public folder: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<GetDrawingPropertiesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDrawingResize operation.
 */
export class GetDrawingResizeRequest {
    /**
     * Filename of a drawing.
     */
    public name: string;

    /**
     * Resulting file format.
     */
    public outputFormat: string;

    /**
     * New width.
     */
    public newWidth: number;

    /**
     * New height.
     */
    public newHeight: number;

    /**
     * Folder with a drawing to process.
     */
    public folder: string;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<GetDrawingResizeRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDrawingRotateFlip operation.
 */
export class GetDrawingRotateFlipRequest {
    /**
     * Filename of a drawing.
     */
    public name: string;

    /**
     * Resulting file format.
     */
    public outputFormat: string;

    /**
     * Rotate/flip operation to apply. Possible values: RotateNoneFlipNone, Rotate90FlipNone, Rotate180FlipNone, Rotate270FlipNone, RotateNoneFlipX, Rotate90FlipX, Rotate180FlipX, Rotate270FlipX, RotateNoneFlipY, Rotate90FlipY, Rotate180FlipY, Rotate270FlipY, RotateNoneFlipXY, Rotate90FlipXY, Rotate180FlipXY, Rotate270FlipXY
     */
    public rotateFlipType: 'RotateNoneFlipNone' | 'Rotate90FlipNone' | 'Rotate180FlipNone' | 'Rotate270FlipNone' | 'RotateNoneFlipX' | 'Rotate90FlipX' | 'Rotate180FlipX' | 'Rotate270FlipX' | 'RotateNoneFlipY' | 'Rotate90FlipY' | 'Rotate180FlipY' | 'Rotate270FlipY' | 'RotateNoneFlipXY' | 'Rotate90FlipXY' | 'Rotate180FlipXY' | 'Rotate270FlipXY';

    /**
     * Folder with a drawing to process.
     */
    public folder: string;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<GetDrawingRotateFlipRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDrawingSaveAs operation.
 */
export class GetDrawingSaveAsRequest {
    /**
     * Filename of an input drawing on a storage.
     */
    public name: string;

    /**
     * Resulting file format.
     */
    public outputFormat: string;

    /**
     * Folder with a drawing to process.
     */
    public folder: string;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<GetDrawingSaveAsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetFileVersions operation.
 */
export class GetFileVersionsRequest {
    /**
     * File path e.g. '/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(init?: Partial<GetFileVersionsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetFilesList operation.
 */
export class GetFilesListRequest {
    /**
     * Folder path e.g. '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(init?: Partial<GetFilesListRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for MoveFile operation.
 */
export class MoveFileRequest {
    /**
     * Source file path e.g. '/src.ext'
     */
    public srcPath: string;

    /**
     * Destination file path e.g. '/dest.ext'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    /**
     * File version ID to move
     */
    public versionId: string;
    
    public constructor(init?: Partial<MoveFileRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for MoveFolder operation.
 */
export class MoveFolderRequest {
    /**
     * Folder path to move e.g. '/folder'
     */
    public srcPath: string;

    /**
     * Destination folder path to move to e.g '/dst'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;
    
    public constructor(init?: Partial<MoveFolderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for ObjectExists operation.
 */
export class ObjectExistsRequest {
    /**
     * File or folder path e.g. '/file.ext' or '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID
     */
    public versionId: string;
    
    public constructor(init?: Partial<ObjectExistsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostDrawingBmp operation.
 */
export class PostDrawingBmpRequest {
    /**
     * Filename of an input drawing on a storage.
     */
    public name: string;

    /**
     * Export BMP options passed as a JSON on a request body.
     */
    public options: BmpOptionsDTO;

    /**
     * Folder with a drawing to process.
     */
    public folder: string;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostDrawingBmpRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostDrawingDXF operation.
 */
export class PostDrawingDXFRequest {
    /**
     * Filename of an input drawing on a storage.
     */
    public name: string;

    /**
     * Export DXF options passed as a JSON on a request body.
     */
    public options: DxfOptionsDTO;

    /**
     * Folder with a drawing to process.
     */
    public folder: string;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostDrawingDXFRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostDrawingDwf operation.
 */
export class PostDrawingDwfRequest {
    /**
     * Filename of an input drawing on a storage.
     */
    public name: string;

    /**
     * Export Dwf options passed as a JSON on a request body.
     */
    public options: DwfOptionsDTO;

    /**
     * Folder with a drawing to process.
     */
    public folder: string;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostDrawingDwfRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostDrawingFbx operation.
 */
export class PostDrawingFbxRequest {
    /**
     * Filename of an input drawing on a storage.
     */
    public name: string;

    /**
     * Export Fbx options passed as a JSON on a request body.
     */
    public options: FbxOptionsDTO;

    /**
     * Folder with a drawing to process.
     */
    public folder: string;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostDrawingFbxRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostDrawingGif operation.
 */
export class PostDrawingGifRequest {
    /**
     * Filename of an input drawing on a storage.
     */
    public name: string;

    /**
     * Export GIF options passed as a JSON on a request body.
     */
    public options: GifOptionsDTO;

    /**
     * Folder with a drawing to process.
     */
    public folder: string;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostDrawingGifRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostDrawingJpeg operation.
 */
export class PostDrawingJpegRequest {
    /**
     * Filename of an input drawing on a storage.
     */
    public name: string;

    /**
     * Export JPEG options passed as a JSON on a request body.
     */
    public options: JpegOptionsDTO;

    /**
     * Folder with a drawing to process.
     */
    public folder: string;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostDrawingJpegRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostDrawingJpeg2000 operation.
 */
export class PostDrawingJpeg2000Request {
    /**
     * Filename of an input drawing on a storage.
     */
    public name: string;

    /**
     * Export JPEG2000 options passed as a JSON on a request body.
     */
    public options: Jpeg2000OptionsDTO;

    /**
     * Folder with a drawing to process.
     */
    public folder: string;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostDrawingJpeg2000Request>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostDrawingObj operation.
 */
export class PostDrawingObjRequest {
    /**
     * Filename of an input drawing on a storage.
     */
    public name: string;

    /**
     * Export Obj options passed as a JSON on a request body.
     */
    public options: ObjOptionsDTO;

    /**
     * Folder with a drawing to process.
     */
    public folder: string;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostDrawingObjRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostDrawingPdf operation.
 */
export class PostDrawingPdfRequest {
    /**
     * Filename of an input drawing on a storage.
     */
    public name: string;

    /**
     * Export PDF options passed as a JSON on a request body.
     */
    public options: PdfOptionsDTO;

    /**
     * Folder with a drawing to process.
     */
    public folder: string;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostDrawingPdfRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostDrawingPng operation.
 */
export class PostDrawingPngRequest {
    /**
     * Filename of an input drawing on a storage.
     */
    public name: string;

    /**
     * Export PNG options passed as a JSON on a request body.
     */
    public options: PngOptionsDTO;

    /**
     * Folder with a drawing to process.
     */
    public folder: string;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostDrawingPngRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostDrawingProperties operation.
 */
export class PostDrawingPropertiesRequest {
    /**
     * Input drawing
     */
    public drawingData: Buffer;
    
    public constructor(init?: Partial<PostDrawingPropertiesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostDrawingPsd operation.
 */
export class PostDrawingPsdRequest {
    /**
     * Filename of an input drawing on a storage.
     */
    public name: string;

    /**
     * Export PSD options passed as a JSON on a request body.
     */
    public options: PsdOptionsDTO;

    /**
     * Folder with a drawing to process.
     */
    public folder: string;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostDrawingPsdRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostDrawingResize operation.
 */
export class PostDrawingResizeRequest {
    /**
     * Input drawing
     */
    public drawingData: Buffer;

    /**
     * Resulting file format.
     */
    public outputFormat: string;

    /**
     * New width.
     */
    public newWidth: number;

    /**
     * New height.
     */
    public newHeight: number;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostDrawingResizeRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostDrawingRotateFlip operation.
 */
export class PostDrawingRotateFlipRequest {
    /**
     * Input drawing
     */
    public drawingData: Buffer;

    /**
     * Resulting file format.
     */
    public outputFormat: string;

    /**
     * Rotate/flip operation to apply. Possible values: RotateNoneFlipNone, Rotate90FlipNone, Rotate180FlipNone, Rotate270FlipNone, RotateNoneFlipX, Rotate90FlipX, Rotate180FlipX, Rotate270FlipX, RotateNoneFlipY, Rotate90FlipY, Rotate180FlipY, Rotate270FlipY, RotateNoneFlipXY, Rotate90FlipXY, Rotate180FlipXY, Rotate270FlipXY
     */
    public rotateFlipType: 'RotateNoneFlipNone' | 'Rotate90FlipNone' | 'Rotate180FlipNone' | 'Rotate270FlipNone' | 'RotateNoneFlipX' | 'Rotate90FlipX' | 'Rotate180FlipX' | 'Rotate270FlipX' | 'RotateNoneFlipY' | 'Rotate90FlipY' | 'Rotate180FlipY' | 'Rotate270FlipY' | 'RotateNoneFlipXY' | 'Rotate90FlipXY' | 'Rotate180FlipXY' | 'Rotate270FlipXY';

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostDrawingRotateFlipRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostDrawingSaveAs operation.
 */
export class PostDrawingSaveAsRequest {
    /**
     * Input drawing
     */
    public drawingData: Buffer;

    /**
     * Resulting file format.
     */
    public outputFormat: string;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostDrawingSaveAsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostDrawingSvg operation.
 */
export class PostDrawingSvgRequest {
    /**
     * Filename of an input drawing on a storage.
     */
    public name: string;

    /**
     * Export SVG options passed as a JSON on a request body.
     */
    public options: SvgOptionsDTO;

    /**
     * Folder with a drawing to process.
     */
    public folder: string;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostDrawingSvgRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostDrawingTiff operation.
 */
export class PostDrawingTiffRequest {
    /**
     * Filename of an input drawing on a storage.
     */
    public name: string;

    /**
     * Export TIFF options passed as a JSON on a request body.
     */
    public options: TiffOptionsDTO;

    /**
     * Folder with a drawing to process.
     */
    public folder: string;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostDrawingTiffRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostDrawingWmf operation.
 */
export class PostDrawingWmfRequest {
    /**
     * Filename of an input drawing on a storage.
     */
    public name: string;

    /**
     * Export WMF options passed as a JSON on a request body.
     */
    public options: WmfOptionsDTO;

    /**
     * Folder with a drawing to process.
     */
    public folder: string;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PostDrawingWmfRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutDrawingBmp operation.
 */
export class PutDrawingBmpRequest {
    /**
     * Input drawing
     */
    public drawingData: Buffer;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/BmpOptionsDTO model definition.
     */
    public exportOptions: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PutDrawingBmpRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutDrawingDXF operation.
 */
export class PutDrawingDXFRequest {
    /**
     * Input drawing
     */
    public drawingData: Buffer;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/DxfOptionsDTO model definition.
     */
    public exportOptions: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PutDrawingDXFRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutDrawingDwf operation.
 */
export class PutDrawingDwfRequest {
    /**
     * Input drawing
     */
    public drawingData: Buffer;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/DwfOptionsDTO model definition.
     */
    public exportOptions: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PutDrawingDwfRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutDrawingFbx operation.
 */
export class PutDrawingFbxRequest {
    /**
     * Input drawing
     */
    public drawingData: Buffer;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/FbxOptionsDTO model definition.
     */
    public exportOptions: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PutDrawingFbxRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutDrawingGif operation.
 */
export class PutDrawingGifRequest {
    /**
     * Input drawing
     */
    public drawingData: Buffer;

    /**
     * JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/GifOptionsDTO model definition.
     */
    public exportOptions: string;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PutDrawingGifRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutDrawingJpeg operation.
 */
export class PutDrawingJpegRequest {
    /**
     * Input drawing
     */
    public drawingData: Buffer;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/JpegOptionsDTO model definition.
     */
    public exportOptions: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PutDrawingJpegRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutDrawingJpeg2000 operation.
 */
export class PutDrawingJpeg2000Request {
    /**
     * Input drawing
     */
    public drawingData: Buffer;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/Jpeg2000OptionsDTO model definition.
     */
    public exportOptions: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PutDrawingJpeg2000Request>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutDrawingObj operation.
 */
export class PutDrawingObjRequest {
    /**
     * Input drawing
     */
    public drawingData: Buffer;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/ObjOptionsDTO model definition.
     */
    public exportOptions: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PutDrawingObjRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutDrawingPdf operation.
 */
export class PutDrawingPdfRequest {
    /**
     * Input drawing
     */
    public drawingData: Buffer;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/PdfOptionsDTO model definition.
     */
    public exportOptions: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PutDrawingPdfRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutDrawingPng operation.
 */
export class PutDrawingPngRequest {
    /**
     * Input drawing
     */
    public drawingData: Buffer;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/PngOptionsDTO model definition.
     */
    public exportOptions: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PutDrawingPngRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutDrawingPsd operation.
 */
export class PutDrawingPsdRequest {
    /**
     * Input drawing
     */
    public drawingData: Buffer;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/PsdOptionsDTO model definition.
     */
    public exportOptions: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PutDrawingPsdRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutDrawingSvg operation.
 */
export class PutDrawingSvgRequest {
    /**
     * Input drawing
     */
    public drawingData: Buffer;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/SvgOptionsDTO model definition.
     */
    public exportOptions: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PutDrawingSvgRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutDrawingTiff operation.
 */
export class PutDrawingTiffRequest {
    /**
     * Input drawing
     */
    public drawingData: Buffer;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/TiffOptionsDTO model definition.
     */
    public exportOptions: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PutDrawingTiffRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutDrawingWmf operation.
 */
export class PutDrawingWmfRequest {
    /**
     * Input drawing
     */
    public drawingData: Buffer;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/WmfOptionsDTO model definition.
     */
    public exportOptions: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PutDrawingWmfRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for StorageExists operation.
 */
export class StorageExistsRequest {
    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(init?: Partial<StorageExistsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UploadFile operation.
 */
export class UploadFileRequest {
    /**
     * Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext             If the content is multipart and path does not contains the file name it tries to get them from filename parameter             from Content-Disposition header.             
     */
    public path: string;

    /**
     * File to upload
     */
    public file: Buffer;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(init?: Partial<UploadFileRequest>) {        
        Object.assign(this, init);
    } 
}

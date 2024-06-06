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

/**
 * 
 */
export class BitmapCompression {

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
        return BitmapCompression.attributeTypeMap;
    }

    public constructor(init?: Partial<BitmapCompression>) {
        
        Object.assign(this, init);
    }        
}

/**
 * 
 */
export class CadDrawTypeMode {

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
        return CadDrawTypeMode.attributeTypeMap;
    }

    public constructor(init?: Partial<CadDrawTypeMode>) {
        
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
        },        
        {
            name: "stpProperties",
            baseName: "StpProperties",
            type: "StpProperties",
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
    
    /**
     * Gets or sets the STP properties.
     */
    public stpProperties: StpProperties;
    
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
 * 
 */
export class ColorModes {

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
        return ColorModes.attributeTypeMap;
    }

    public constructor(init?: Partial<ColorModes>) {
        
        Object.assign(this, init);
    }        
}

/**
 * 
 */
export class CompressionMethod {

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
        return CompressionMethod.attributeTypeMap;
    }

    public constructor(init?: Partial<CompressionMethod>) {
        
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
            type: "DrawingOptionsBaseDTO.RotationEnum",
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
    public rotation: DrawingOptionsBaseDTO.RotationEnum;
    
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

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace DrawingOptionsBaseDTO {
    export enum RotationEnum {
        RotateNoneFlipNone = 'RotateNoneFlipNone' as any,
        Rotate90FlipNone = 'Rotate90FlipNone' as any,
        Rotate180FlipNone = 'Rotate180FlipNone' as any,
        Rotate270FlipNone = 'Rotate270FlipNone' as any,
        RotateNoneFlipX = 'RotateNoneFlipX' as any,
        Rotate90FlipX = 'Rotate90FlipX' as any,
        Rotate180FlipX = 'Rotate180FlipX' as any,
        Rotate270FlipX = 'Rotate270FlipX' as any,
        RotateNoneFlipY = 'RotateNoneFlipY' as any,
        Rotate90FlipY = 'Rotate90FlipY' as any,
        Rotate180FlipY = 'Rotate180FlipY' as any,
        Rotate270FlipY = 'Rotate270FlipY' as any,
        RotateNoneFlipXY = 'RotateNoneFlipXY' as any,
        Rotate90FlipXY = 'Rotate90FlipXY' as any,
        Rotate180FlipXY = 'Rotate180FlipXY' as any,
        Rotate270FlipXY = 'Rotate270FlipXY' as any,
    }
}
// tslint:enable:quotemark
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
 * Error
 */
export class ErrorModel {

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
        return ErrorModel.attributeTypeMap;
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
    
    public constructor(init?: Partial<ErrorModel>) {
        
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
            type: "Array<ErrorModel>",
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
    public errors: Array<ErrorModel>;
    
    public constructor(init?: Partial<FilesUploadResult>) {
        
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

/**
 * 
 */
export class InterpolationMode {

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
        return InterpolationMode.attributeTypeMap;
    }

    public constructor(init?: Partial<InterpolationMode>) {
        
        Object.assign(this, init);
    }        
}

/**
 * 
 */
export class Jpeg2000Codec {

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
        return Jpeg2000Codec.attributeTypeMap;
    }

    public constructor(init?: Partial<Jpeg2000Codec>) {
        
        Object.assign(this, init);
    }        
}

/**
 * 
 */
export class JpegCompressionColorMode {

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
        return JpegCompressionColorMode.attributeTypeMap;
    }

    public constructor(init?: Partial<JpegCompressionColorMode>) {
        
        Object.assign(this, init);
    }        
}

/**
 * 
 */
export class JpegCompressionMode {

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
        return JpegCompressionMode.attributeTypeMap;
    }

    public constructor(init?: Partial<JpegCompressionMode>) {
        
        Object.assign(this, init);
    }        
}

/**
 * 
 */
export class LineCap {

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
        return LineCap.attributeTypeMap;
    }

    public constructor(init?: Partial<LineCap>) {
        
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

/**
 * 
 */
export class PdfCompliance {

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
        return PdfCompliance.attributeTypeMap;
    }

    public constructor(init?: Partial<PdfCompliance>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Contains details for a PDF digital signature.
 */
export class PdfDigitalSignatureDetailsCoreDTO {

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
            type: "string",
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
            type: "PdfDigitalSignatureDetailsCoreDTO.HashAlgorithmEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PdfDigitalSignatureDetailsCoreDTO.attributeTypeMap;
    }

    /**
     * A signing certificate in base64 format that contains a certificate of type X509Certificate2.
     */
    public certificate: string;
    
    /**
     * The reason of signing.
     */
    public reason: string;
    
    /**
     * Location of signing.
     */
    public location: string;
    
    /**
     * Date of signing.
     */
    public signatureDate: Date;
    
    /**
     * Hash algorithm.
     */
    public hashAlgorithm: PdfDigitalSignatureDetailsCoreDTO.HashAlgorithmEnum;
    
    public constructor(init?: Partial<PdfDigitalSignatureDetailsCoreDTO>) {
        
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PdfDigitalSignatureDetailsCoreDTO {
    export enum HashAlgorithmEnum {
        Sha1 = 'Sha1' as any,
        Sha256 = 'Sha256' as any,
        Sha384 = 'Sha384' as any,
        Sha512 = 'Sha512' as any,
        Md5 = 'Md5' as any,
    }
}
// tslint:enable:quotemark
/**
 * 
 */
export class PdfDigitalSignatureHashAlgorithmCore {

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
        return PdfDigitalSignatureHashAlgorithmCore.attributeTypeMap;
    }

    public constructor(init?: Partial<PdfDigitalSignatureHashAlgorithmCore>) {
        
        Object.assign(this, init);
    }        
}

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

/**
 * Export document options.
 */
export class PdfDocumentOptionsDTO {

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
            type: "PdfDocumentOptionsDTO.ComplianceEnum",
        },        
        {
            name: "digitalSignatureDetails",
            baseName: "DigitalSignatureDetails",
            type: "PdfDigitalSignatureDetailsCoreDTO",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PdfDocumentOptionsDTO.attributeTypeMap;
    }

    /**
     * compliance
     */
    public compliance: PdfDocumentOptionsDTO.ComplianceEnum;
    
    /**
     * Gets or sets a digital signature details. If not set, then no signing will be performed.
     */
    public digitalSignatureDetails: PdfDigitalSignatureDetailsCoreDTO;
    
    public constructor(init?: Partial<PdfDocumentOptionsDTO>) {
        
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PdfDocumentOptionsDTO {
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

/**
 * 
 */
export class PngColorType {

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
        return PngColorType.attributeTypeMap;
    }

    public constructor(init?: Partial<PngColorType>) {
        
        Object.assign(this, init);
    }        
}

/**
 * 
 */
export class PngFilterType {

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
        return PngFilterType.attributeTypeMap;
    }

    public constructor(init?: Partial<PngFilterType>) {
        
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
 * 
 */
export class RotateFlipType {

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
        return RotateFlipType.attributeTypeMap;
    }

    public constructor(init?: Partial<RotateFlipType>) {
        
        Object.assign(this, init);
    }        
}

/**
 * 
 */
export class SmoothingMode {

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
        return SmoothingMode.attributeTypeMap;
    }

    public constructor(init?: Partial<SmoothingMode>) {
        
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
 * Represents information about STP drawing.
 */
export class StpProperties {

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
        return StpProperties.attributeTypeMap;
    }

    public constructor(init?: Partial<StpProperties>) {
        
        Object.assign(this, init);
    }        
}

/**
 * 
 */
export class SvgColorMode {

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
        return SvgColorMode.attributeTypeMap;
    }

    public constructor(init?: Partial<SvgColorMode>) {
        
        Object.assign(this, init);
    }        
}

/**
 * 
 */
export class TextRenderingHint {

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
        return TextRenderingHint.attributeTypeMap;
    }

    public constructor(init?: Partial<TextRenderingHint>) {
        
        Object.assign(this, init);
    }        
}

/**
 * 
 */
export class TiffByteOrder {

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
        return TiffByteOrder.attributeTypeMap;
    }

    public constructor(init?: Partial<TiffByteOrder>) {
        
        Object.assign(this, init);
    }        
}

/**
 * 
 */
export class TiffCompressions {

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
        return TiffCompressions.attributeTypeMap;
    }

    public constructor(init?: Partial<TiffCompressions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * 
 */
export class TiffExpectedFormat {

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
        return TiffExpectedFormat.attributeTypeMap;
    }

    public constructor(init?: Partial<TiffExpectedFormat>) {
        
        Object.assign(this, init);
    }        
}

/**
 * 
 */
export class TiffPhotometrics {

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
        return TiffPhotometrics.attributeTypeMap;
    }

    public constructor(init?: Partial<TiffPhotometrics>) {
        
        Object.assign(this, init);
    }        
}

/**
 * 
 */
export class UnitType {

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
        return UnitType.attributeTypeMap;
    }

    public constructor(init?: Partial<UnitType>) {
        
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
            type: "BmpOptionsDTO.CompressionEnum",
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
    public compression: BmpOptionsDTO.CompressionEnum;
    
    public constructor(init?: Partial<BmpOptionsDTO>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace BmpOptionsDTO {
    export enum CompressionEnum {
        Rgb = 'Rgb' as any,
        Rle8 = 'Rle8' as any,
        Rle4 = 'Rle4' as any,
        Bitfields = 'Bitfields' as any,
        Jpeg = 'Jpeg' as any,
        Png = 'Png' as any,
        AlphaBitfields = 'AlphaBitfields' as any,
        Dxt1 = 'Dxt1' as any,
    }
}
// tslint:enable:quotemark
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
            type: "CadRasterizationOptionsDTO.DrawTypeEnum",
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
    public drawType: CadRasterizationOptionsDTO.DrawTypeEnum;
    
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
    export enum DrawTypeEnum {
        UseDrawColor = 'UseDrawColor' as any,
        UseObjectColor = 'UseObjectColor' as any,
    }
}
// tslint:enable:quotemark
/**
 * Export options for CGM format
 */
export class CgmOptionsDTO extends DrawingOptionsBaseDTO {

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
        return super.getAttributeTypeMap().concat(CgmOptionsDTO.attributeTypeMap);
    }

    public constructor(init?: Partial<CgmOptionsDTO>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace CgmOptionsDTO {
}
// tslint:enable:quotemark
/**
 * Export options for DICOM format
 */
export class DicomOptionsDTO extends DrawingOptionsBaseDTO {

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
        return super.getAttributeTypeMap().concat(DicomOptionsDTO.attributeTypeMap);
    }

    public constructor(init?: Partial<DicomOptionsDTO>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace DicomOptionsDTO {
}
// tslint:enable:quotemark
/**
 * Export options for Draco format
 */
export class DracoOptionsDTO extends DrawingOptionsBaseDTO {

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
        return super.getAttributeTypeMap().concat(DracoOptionsDTO.attributeTypeMap);
    }

    public constructor(init?: Partial<DracoOptionsDTO>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace DracoOptionsDTO {
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

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace DwfOptionsDTO {
}
// tslint:enable:quotemark
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

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace DxfOptionsDTO {
}
// tslint:enable:quotemark
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

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace FbxOptionsDTO {
}
// tslint:enable:quotemark
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

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace GifOptionsDTO {
}
// tslint:enable:quotemark
/**
 * Export options for GLB format
 */
export class GlbOptionsDTO extends DrawingOptionsBaseDTO {

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
        return super.getAttributeTypeMap().concat(GlbOptionsDTO.attributeTypeMap);
    }

    public constructor(init?: Partial<GlbOptionsDTO>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace GlbOptionsDTO {
}
// tslint:enable:quotemark
/**
 * Export options for GLTF format
 */
export class GltfOptionsDTO extends DrawingOptionsBaseDTO {

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
        return super.getAttributeTypeMap().concat(GltfOptionsDTO.attributeTypeMap);
    }

    public constructor(init?: Partial<GltfOptionsDTO>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace GltfOptionsDTO {
}
// tslint:enable:quotemark
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
            type: "JpegOptionsDTO.CompressionTypeEnum",
        },        
        {
            name: "colorType",
            baseName: "ColorType",
            type: "JpegOptionsDTO.ColorTypeEnum",
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
    public compressionType: JpegOptionsDTO.CompressionTypeEnum;
    
    /**
     * Color type
     */
    public colorType: JpegOptionsDTO.ColorTypeEnum;
    
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

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace JpegOptionsDTO {
    export enum CompressionTypeEnum {
        Baseline = 'Baseline' as any,
        Progressive = 'Progressive' as any,
        Lossless = 'Lossless' as any,
        JpegLs = 'JpegLs' as any,
    }
    export enum ColorTypeEnum {
        Grayscale = 'Grayscale' as any,
        YCbCr = 'YCbCr' as any,
        Cmyk = 'Cmyk' as any,
        Ycck = 'Ycck' as any,
        Rgb = 'Rgb' as any,
    }
}
// tslint:enable:quotemark
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

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace ObjOptionsDTO {
}
// tslint:enable:quotemark
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
            type: "PdfDocumentOptionsDTO",
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
    public corePdfOptions: PdfDocumentOptionsDTO;
    
    public constructor(init?: Partial<PdfOptionsDTO>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PdfOptionsDTO {
}
// tslint:enable:quotemark
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
            type: "PngOptionsDTO.ColorTypeEnum",
        },        
        {
            name: "progressive",
            baseName: "Progressive",
            type: "boolean",
        },        
        {
            name: "filterType",
            baseName: "FilterType",
            type: "PngOptionsDTO.FilterTypeEnum",
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
    public colorType: PngOptionsDTO.ColorTypeEnum;
    
    /**
     * Determines whether 'progressive' method is used
     */
    public progressive: boolean;
    
    /**
     * Filter type
     */
    public filterType: PngOptionsDTO.FilterTypeEnum;
    
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

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PngOptionsDTO {
    export enum ColorTypeEnum {
        Grayscale = 'Grayscale' as any,
        Truecolor = 'Truecolor' as any,
        IndexedColor = 'IndexedColor' as any,
        GrayscaleWithAlpha = 'GrayscaleWithAlpha' as any,
        TruecolorWithAlpha = 'TruecolorWithAlpha' as any,
    }
    export enum FilterTypeEnum {
        None = 'None' as any,
        Sub = 'Sub' as any,
        Up = 'Up' as any,
        Avg = 'Avg' as any,
        Paeth = 'Paeth' as any,
        Adaptive = 'Adaptive' as any,
    }
}
// tslint:enable:quotemark
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
            type: "PsdOptionsDTO.CompressionMethodEnum",
        },        
        {
            name: "colorMode",
            baseName: "ColorMode",
            type: "PsdOptionsDTO.ColorModeEnum",
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
    public compressionMethod: PsdOptionsDTO.CompressionMethodEnum;
    
    /**
     * Color mode
     */
    public colorMode: PsdOptionsDTO.ColorModeEnum;
    
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

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PsdOptionsDTO {
    export enum CompressionMethodEnum {
        Raw = 'Raw' as any,
        RLE = 'RLE' as any,
        ZipWithoutPrediction = 'ZipWithoutPrediction' as any,
        ZipWithPrediction = 'ZipWithPrediction' as any,
    }
    export enum ColorModeEnum {
        Bitmap = 'Bitmap' as any,
        Grayscale = 'Grayscale' as any,
        Indexed = 'Indexed' as any,
        Rgb = 'Rgb' as any,
        Cmyk = 'Cmyk' as any,
        Multichannel = 'Multichannel' as any,
        Duotone = 'Duotone' as any,
        Lab = 'Lab' as any,
    }
}
// tslint:enable:quotemark
/**
 * Export options for STP format
 */
export class StpOptionsDTO extends DrawingOptionsBaseDTO {

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
        return super.getAttributeTypeMap().concat(StpOptionsDTO.attributeTypeMap);
    }

    public constructor(init?: Partial<StpOptionsDTO>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace StpOptionsDTO {
}
// tslint:enable:quotemark
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
            type: "SvgOptionsDTO.ColorTypeEnum",
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
    public colorType: SvgOptionsDTO.ColorTypeEnum;
    
    /**
     * Render text as shapes
     */
    public textAsShapes: boolean;
    
    public constructor(init?: Partial<SvgOptionsDTO>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace SvgOptionsDTO {
    export enum ColorTypeEnum {
        Grayscale = 'Grayscale' as any,
        YCbCr = 'YCbCr' as any,
        Cmyk = 'Cmyk' as any,
        Ycck = 'Ycck' as any,
        Rgb = 'Rgb' as any,
    }
}
// tslint:enable:quotemark
/**
 * Export options for 3DS format
 */
export class ThreeDSOptionsDTO extends DrawingOptionsBaseDTO {

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
        return super.getAttributeTypeMap().concat(ThreeDSOptionsDTO.attributeTypeMap);
    }

    public constructor(init?: Partial<ThreeDSOptionsDTO>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace ThreeDSOptionsDTO {
}
// tslint:enable:quotemark
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
            type: "TiffOptionsDTO.ByteOrderEnum",
        },        
        {
            name: "compression",
            baseName: "Compression",
            type: "TiffOptionsDTO.CompressionEnum",
        },        
        {
            name: "expectedFormat",
            baseName: "ExpectedFormat",
            type: "TiffOptionsDTO.ExpectedFormatEnum",
        },        
        {
            name: "bitsPerSample",
            baseName: "BitsPerSample",
            type: "Array<number>",
        },        
        {
            name: "photometric",
            baseName: "Photometric",
            type: "TiffOptionsDTO.PhotometricEnum",
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
    public byteOrder: TiffOptionsDTO.ByteOrderEnum;
    
    /**
     * Compression level
     */
    public compression: TiffOptionsDTO.CompressionEnum;
    
    /**
     * Expected TIFF sub-format
     */
    public expectedFormat: TiffOptionsDTO.ExpectedFormatEnum;
    
    /**
     * Bits per pixel
     */
    public bitsPerSample: Array<number>;
    
    /**
     * Photometric options
     */
    public photometric: TiffOptionsDTO.PhotometricEnum;
    
    public constructor(init?: Partial<TiffOptionsDTO>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace TiffOptionsDTO {
    export enum ByteOrderEnum {
        LittleEndian = 'LittleEndian' as any,
        BigEndian = 'BigEndian' as any,
    }
    export enum CompressionEnum {
        None = 'None' as any,
        CcittRle = 'CcittRle' as any,
        CcittFax3 = 'CcittFax3' as any,
        CcittFax4 = 'CcittFax4' as any,
        Lzw = 'Lzw' as any,
        Ojpeg = 'Ojpeg' as any,
        Jpeg = 'Jpeg' as any,
        AdobeDeflate = 'AdobeDeflate' as any,
        Next = 'Next' as any,
        CcittRleW = 'CcittRleW' as any,
        Packbits = 'Packbits' as any,
        Thunderscan = 'Thunderscan' as any,
        It8Ctpad = 'It8Ctpad' as any,
        It8Lw = 'It8Lw' as any,
        It8Mp = 'It8Mp' as any,
        It8Bl = 'It8Bl' as any,
        PixarFilm = 'PixarFilm' as any,
        PixarLog = 'PixarLog' as any,
        Deflate = 'Deflate' as any,
        Dcs = 'Dcs' as any,
        Jbig = 'Jbig' as any,
        Sgilog = 'Sgilog' as any,
        Sgilog24 = 'Sgilog24' as any,
        Jp2000 = 'Jp2000' as any,
    }
    export enum ExpectedFormatEnum {
        Default = 'Default' as any,
        TiffLzwBw = 'TiffLzwBw' as any,
        TiffLzwRgb = 'TiffLzwRgb' as any,
        TiffLzwRgba = 'TiffLzwRgba' as any,
        TiffLzwCmyk = 'TiffLzwCmyk' as any,
        TiffCcittFax3 = 'TiffCcittFax3' as any,
        TiffCcittFax4 = 'TiffCcittFax4' as any,
        TiffDeflateBw = 'TiffDeflateBw' as any,
        TiffDeflateRgb = 'TiffDeflateRgb' as any,
        TiffDeflateRgba = 'TiffDeflateRgba' as any,
        TiffCcitRle = 'TiffCcitRle' as any,
        TiffJpegRgb = 'TiffJpegRgb' as any,
        TiffJpegYCbCr = 'TiffJpegYCbCr' as any,
        TiffNoCompressionBw = 'TiffNoCompressionBw' as any,
        TiffNoCompressionRgb = 'TiffNoCompressionRgb' as any,
        TiffNoCompressionRgba = 'TiffNoCompressionRgba' as any,
    }
    export enum PhotometricEnum {
        MinIsWhite = 'MinIsWhite' as any,
        MinIsBlack = 'MinIsBlack' as any,
        Rgb = 'Rgb' as any,
        Palette = 'Palette' as any,
        Mask = 'Mask' as any,
        Separated = 'Separated' as any,
        Ycbcr = 'Ycbcr' as any,
        Cielab = 'Cielab' as any,
        Icclab = 'Icclab' as any,
        Itulab = 'Itulab' as any,
        Logl = 'Logl' as any,
        Logluv = 'Logluv' as any,
    }
}
// tslint:enable:quotemark
/**
 * Export options for U3D format
 */
export class U3dOptionsDTO extends DrawingOptionsBaseDTO {

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
        return super.getAttributeTypeMap().concat(U3dOptionsDTO.attributeTypeMap);
    }

    public constructor(init?: Partial<U3dOptionsDTO>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace U3dOptionsDTO {
}
// tslint:enable:quotemark
/**
 * Export options for WEBP format
 */
export class WebpOptionsDTO extends DrawingOptionsBaseDTO {

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
        return super.getAttributeTypeMap().concat(WebpOptionsDTO.attributeTypeMap);
    }

    public constructor(init?: Partial<WebpOptionsDTO>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace WebpOptionsDTO {
}
// tslint:enable:quotemark
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

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace WmfOptionsDTO {
}
// tslint:enable:quotemark
const enumsMap = {
    "DrawingOptionsBaseDTO.RotationEnum": DrawingOptionsBaseDTO.RotationEnum,
    "GraphicsOptions.TextRenderingHintEnum": GraphicsOptions.TextRenderingHintEnum,
    "GraphicsOptions.SmoothingModeEnum": GraphicsOptions.SmoothingModeEnum,
    "GraphicsOptions.InterpolationModeEnum": GraphicsOptions.InterpolationModeEnum,
    "PdfDigitalSignatureDetailsCoreDTO.HashAlgorithmEnum": PdfDigitalSignatureDetailsCoreDTO.HashAlgorithmEnum,
    "PdfDocumentOptionsDTO.ComplianceEnum": PdfDocumentOptionsDTO.ComplianceEnum,
    "PenOptions.StartCapEnum": PenOptions.StartCapEnum,
    "PenOptions.EndCapEnum": PenOptions.EndCapEnum,
    "VectorRasterizationOptionsDTO.UnitTypeEnum": VectorRasterizationOptionsDTO.UnitTypeEnum,
    "BmpOptionsDTO.CompressionEnum": BmpOptionsDTO.CompressionEnum,
    "CadRasterizationOptionsDTO.DrawTypeEnum": CadRasterizationOptionsDTO.DrawTypeEnum,
    "Jpeg2000OptionsDTO.CodecEnum": Jpeg2000OptionsDTO.CodecEnum,
    "JpegOptionsDTO.CompressionTypeEnum": JpegOptionsDTO.CompressionTypeEnum,
    "JpegOptionsDTO.ColorTypeEnum": JpegOptionsDTO.ColorTypeEnum,
    "PngOptionsDTO.ColorTypeEnum": PngOptionsDTO.ColorTypeEnum,
    "PngOptionsDTO.FilterTypeEnum": PngOptionsDTO.FilterTypeEnum,
    "PsdOptionsDTO.CompressionMethodEnum": PsdOptionsDTO.CompressionMethodEnum,
    "PsdOptionsDTO.ColorModeEnum": PsdOptionsDTO.ColorModeEnum,
    "SvgOptionsDTO.ColorTypeEnum": SvgOptionsDTO.ColorTypeEnum,
    "TiffOptionsDTO.ByteOrderEnum": TiffOptionsDTO.ByteOrderEnum,
    "TiffOptionsDTO.CompressionEnum": TiffOptionsDTO.CompressionEnum,
    "TiffOptionsDTO.ExpectedFormatEnum": TiffOptionsDTO.ExpectedFormatEnum,
    "TiffOptionsDTO.PhotometricEnum": TiffOptionsDTO.PhotometricEnum,
};

const typeMap = {
            BitmapCompression,
            CadDrawTypeMode,
            CadResponse,
            Cf2Properties,
            Color,
            ColorModes,
            CompressionMethod,
            DgnProperties,
            DiscUsage,
            DrawingOptionsBaseDTO,
            DwfProperties,
            DwgProperties,
            DxfProperties,
            ErrorDetails,
            ErrorModel,
            FbxProperties,
            FileVersions,
            FilesList,
            FilesUploadResult,
            GraphicsOptions,
            IfcProperties,
            IgsProperties,
            InterpolationMode,
            Jpeg2000Codec,
            JpegCompressionColorMode,
            JpegCompressionMode,
            LineCap,
            ObjProperties,
            ObjectExist,
            PdfCompliance,
            PdfDigitalSignatureDetailsCoreDTO,
            PdfDigitalSignatureHashAlgorithmCore,
            PdfDocumentInfo,
            PdfDocumentOptionsDTO,
            PenOptions,
            PltProperties,
            PngColorType,
            PngFilterType,
            RdOptimizerSettings,
            ResolutionSetting,
            RotateFlipType,
            SmoothingMode,
            StlProperties,
            StorageExist,
            StorageFile,
            StpProperties,
            SvgColorMode,
            TextRenderingHint,
            TiffByteOrder,
            TiffCompressions,
            TiffExpectedFormat,
            TiffPhotometrics,
            UnitType,
            VectorRasterizationOptionsDTO,
            BmpOptionsDTO,
            CadRasterizationOptionsDTO,
            CgmOptionsDTO,
            DicomOptionsDTO,
            DracoOptionsDTO,
            DwfOptionsDTO,
            DxfOptionsDTO,
            FbxOptionsDTO,
            FileVersion,
            GifOptionsDTO,
            GlbOptionsDTO,
            GltfOptionsDTO,
            Jpeg2000OptionsDTO,
            JpegOptionsDTO,
            ObjOptionsDTO,
            PdfOptionsDTO,
            PngOptionsDTO,
            PsdOptionsDTO,
            StpOptionsDTO,
            SvgOptionsDTO,
            ThreeDSOptionsDTO,
            TiffOptionsDTO,
            U3dOptionsDTO,
            WebpOptionsDTO,
            WmfOptionsDTO,
};

export {enumsMap, typeMap};

/**
 * Request model for Convert operation.
 */
export class ConvertRequest {
    /**
     * Output DXF, DWG, DGN, DWF, DWFX, DRC, IFC, STL, STP, STEP, CGM, GLB, GLTF, DWT, IGES, PLT, CF2, OBJ, HPGL, IGS, PCL, FBX, PDF, SVG, PNG, BMP, DIB, TIFF, TIF, JPEG, GIF, PSD, JPG, JPE, JIF, JFIF, PSD, WEBP, DCM, DICOM, JP2, J2K, JPF, JPM, JPG2, J2C, JPC, JPX, MJ2 , DJVU file format.
     */
    public outputFormat: string;

    /**
     * Form-data file
     */
    public drawing: Buffer;

    /**
     * For output pdf format: PDF_15, PDFa_1a OR PDFa_1b. Null for another format
     */
    public outputTypeExt: string;
    
    public constructor(init?: Partial<ConvertRequest>) {        
        Object.assign(this, init);
    } 
}

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
 * Request model for EditMetadata operation.
 */
export class EditMetadataRequest {
    /**
     * Gets or sets drawing
     */
    public drawing: Buffer;
    
    public constructor(init?: Partial<EditMetadataRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for ExtractMetadata operation.
 */
export class ExtractMetadataRequest {
    /**
     * Output TXT, XML or JSON file format.
     */
    public outputFormat: string;

    /**
     * Form-data file
     */
    public drawing: Buffer;
    
    public constructor(init?: Partial<ExtractMetadataRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for ExtractText operation.
 */
export class ExtractTextRequest {
    /**
     * Gets or sets drawing
     */
    public drawing: Buffer;
    
    public constructor(init?: Partial<ExtractTextRequest>) {        
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
 * Request model for PaperToCad operation.
 */
export class PaperToCadRequest {
    /**
     * Output DXF, DWG, DGN, DWF, DWFX, DRC, IFC, STL, STP, STEP, CGM, GLB, GLTF, DWT, IGES, PLT, CF2, OBJ, HPGL, IGS, PCL, FBX, SVG file format.
     */
    public outputFormat: string;

    /**
     * Form-data file
     */
    public drawing: Buffer;
    
    public constructor(init?: Partial<PaperToCadRequest>) {        
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
 * Request model for PostDrawingCgm operation.
 */
export class PostDrawingCgmRequest {
    /**
     * Filename of an input drawing on a storage.
     */
    public name: string;

    /**
     * Export CGM options passed as a JSON on a request body.
     */
    public options: CgmOptionsDTO;

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
    
    public constructor(init?: Partial<PostDrawingCgmRequest>) {        
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
 * Request model for PostDrawingDicom operation.
 */
export class PostDrawingDicomRequest {
    /**
     * Filename of an input drawing on a storage.
     */
    public name: string;

    /**
     * Export Dicom options passed as a JSON on a request body.
     */
    public options: DicomOptionsDTO;

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
    
    public constructor(init?: Partial<PostDrawingDicomRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostDrawingDraco operation.
 */
export class PostDrawingDracoRequest {
    /**
     * Filename of an input drawing on a storage.
     */
    public name: string;

    /**
     * Export Draco options passed as a JSON on a request body.
     */
    public options: DracoOptionsDTO;

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
    
    public constructor(init?: Partial<PostDrawingDracoRequest>) {        
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
 * Request model for PostDrawingGlb operation.
 */
export class PostDrawingGlbRequest {
    /**
     * Filename of an input drawing on a storage.
     */
    public name: string;

    /**
     * Export GLB options passed as a JSON on a request body.
     */
    public options: GlbOptionsDTO;

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
    
    public constructor(init?: Partial<PostDrawingGlbRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostDrawingGltf operation.
 */
export class PostDrawingGltfRequest {
    /**
     * Filename of an input drawing on a storage.
     */
    public name: string;

    /**
     * Export GLTF options passed as a JSON on a request body.
     */
    public options: GltfOptionsDTO;

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
    
    public constructor(init?: Partial<PostDrawingGltfRequest>) {        
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
 * Request model for PostDrawingSTP operation.
 */
export class PostDrawingSTPRequest {
    /**
     * Filename of an input drawing on a storage.
     */
    public name: string;

    /**
     * Export STP options passed as a JSON on a request body.
     */
    public options: StpOptionsDTO;

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
    
    public constructor(init?: Partial<PostDrawingSTPRequest>) {        
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
 * Request model for PostDrawingThreeDS operation.
 */
export class PostDrawingThreeDSRequest {
    /**
     * Filename of an input drawing on a storage.
     */
    public name: string;

    /**
     * Export 3ds options passed as a JSON on a request body.
     */
    public options: ThreeDSOptionsDTO;

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
    
    public constructor(init?: Partial<PostDrawingThreeDSRequest>) {        
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
 * Request model for PostDrawingU3d operation.
 */
export class PostDrawingU3dRequest {
    /**
     * Filename of an input drawing on a storage.
     */
    public name: string;

    /**
     * Export U3d options passed as a JSON on a request body.
     */
    public options: U3dOptionsDTO;

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
    
    public constructor(init?: Partial<PostDrawingU3dRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PostDrawingWebp operation.
 */
export class PostDrawingWebpRequest {
    /**
     * Filename of an input drawing on a storage.
     */
    public name: string;

    /**
     * Export Webp options passed as a JSON on a request body.
     */
    public options: WebpOptionsDTO;

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
    
    public constructor(init?: Partial<PostDrawingWebpRequest>) {        
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
 * Request model for PutDrawingCgm operation.
 */
export class PutDrawingCgmRequest {
    /**
     * Input drawing
     */
    public drawingData: Buffer;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/CgmOptionsDTO model definition.
     */
    public exportOptions: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PutDrawingCgmRequest>) {        
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
 * Request model for PutDrawingDicom operation.
 */
export class PutDrawingDicomRequest {
    /**
     * Input drawing
     */
    public drawingData: Buffer;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/DicomOptionsDTO model definition.
     */
    public exportOptions: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PutDrawingDicomRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutDrawingDraco operation.
 */
export class PutDrawingDracoRequest {
    /**
     * Input drawing
     */
    public drawingData: Buffer;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/DracoOptionsDTO model definition.
     */
    public exportOptions: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PutDrawingDracoRequest>) {        
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
 * Request model for PutDrawingGlb operation.
 */
export class PutDrawingGlbRequest {
    /**
     * Input drawing
     */
    public drawingData: Buffer;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/GlbOptionsDTO model definition.
     */
    public exportOptions: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PutDrawingGlbRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutDrawingGltf operation.
 */
export class PutDrawingGltfRequest {
    /**
     * Input drawing
     */
    public drawingData: Buffer;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/GltfOptionsDTO model definition.
     */
    public exportOptions: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PutDrawingGltfRequest>) {        
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
 * Request model for PutDrawingSTP operation.
 */
export class PutDrawingSTPRequest {
    /**
     * Input drawing
     */
    public drawingData: Buffer;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/StpOptionsDTO model definition.
     */
    public exportOptions: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PutDrawingSTPRequest>) {        
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
 * Request model for PutDrawingThreeDS operation.
 */
export class PutDrawingThreeDSRequest {
    /**
     * Input drawing
     */
    public drawingData: Buffer;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/ThreeDSOptionsDTO model definition.
     */
    public exportOptions: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PutDrawingThreeDSRequest>) {        
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
 * Request model for PutDrawingU3d operation.
 */
export class PutDrawingU3dRequest {
    /**
     * Input drawing
     */
    public drawingData: Buffer;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/U3dOptionsDTO model definition.
     */
    public exportOptions: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PutDrawingU3dRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for PutDrawingWebp operation.
 */
export class PutDrawingWebpRequest {
    /**
     * Input drawing
     */
    public drawingData: Buffer;

    /**
     * Path to updated file (if this is empty, response contains streamed file).
     */
    public outPath: string;

    /**
     * JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/WebpOptionsDTO model definition.
     */
    public exportOptions: string;

    /**
     * Your Aspose Cloud Storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<PutDrawingWebpRequest>) {        
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
 * Request model for PutEditMetadata operation.
 */
export class PutEditMetadataRequest {
    /**
     * Gets or sets drawing
     */
    public drawing: Buffer;

    /**
     * Gets or sets metadataComponent
     */
    public metadataComponent: string;
    
    public constructor(init?: Partial<PutEditMetadataRequest>) {        
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

/**
 * Request model for Viewer operation.
 */
export class ViewerRequest {
    /**
     * Gets or sets outputFormat
     */
    public outputFormat: string;

    /**
     * Gets or sets drawing
     */
    public drawing: Buffer;
    
    public constructor(init?: Partial<ViewerRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Watermark operation.
 */
export class WatermarkRequest {
    /**
     * Gets or sets outputFormat
     */
    public outputFormat: string;

    /**
     * Gets or sets drawing
     */
    public drawing: Buffer;

    /**
     * Gets or sets watermarkRgb
     */
    public watermarkRgb: string;

    /**
     * Gets or sets outputTypeExt
     */
    public outputTypeExt: string;
    
    public constructor(init?: Partial<WatermarkRequest>) {        
        Object.assign(this, init);
    } 
}

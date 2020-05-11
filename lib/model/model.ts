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
            name: "cff2Properties",
            baseName: "Cff2Properties",
            type: "Cff2Properties",
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
     * Gets or sets the CFF2 properties.
     */
    public cff2Properties: Cff2Properties;
    
    public constructor(init?: Partial<CadResponse>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents information about CFF2 drawing.
 */
export class Cff2Properties {

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
        return Cff2Properties.attributeTypeMap;
    }

    public constructor(init?: Partial<Cff2Properties>) {
        
        Object.assign(this, init);
    }        
}

/**
 * The color of the pixel.
 */
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
     * Gets the red component value of this Color structure.
     */
    public R: number;
    
    /**
     * Gets the green component value of this Color structure.
     */
    public G: number;
    
    /**
     * Gets the blue component value of this Color structure.
     */
    public B: number;
    
    /**
     * Gets the alpha component value of this Color structure.
     */
    public A: number;
    
    /**
     * Gets a value indicating whether this Color structure is a predefined color. Predefined colors are represented by the elements of the KnownColor enumeration.
     */
    public isKnownColor: boolean;
    
    /**
     * Gets a value indicating whether this Color structure is uninitialized.
     */
    public isEmpty: boolean;
    
    /**
     * Gets a value indicating whether this Color structure is a named color or a member of the KnownColor enumeration.
     */
    public isNamedColor: boolean;
    
    /**
     * Gets the name of this Color.
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
 * Represents graphics options for embedded bitmap.
 */
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
            type: "any",
        },        
        {
            name: "smoothingMode",
            baseName: "SmoothingMode",
            type: "any",
        },        
        {
            name: "interpolationMode",
            baseName: "InterpolationMode",
            type: "any",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return GraphicsOptions.attributeTypeMap;
    }

    /**
     * Gets or sets text rendering hint.
     */
    public textRenderingHint: any;
    
    /**
     * Gets or sets smoothing mode.
     */
    public smoothingMode: any;
    
    /**
     * Gets or sets interpolation mode.
     */
    public interpolationMode: any;
    
    public constructor(init?: Partial<GraphicsOptions>) {
        
        Object.assign(this, init);
    }        
}

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
 * This class represents set of metadata for document description.
 */
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
     * Gets or sets keywords of the document.
     */
    public keywords: string;
    
    /**
     * Gets or sets title of the document.
     */
    public title: string;
    
    /**
     * Gets or sets author of the document.
     */
    public author: string;
    
    /**
     * Gets or sets subject of the document.
     */
    public subject: string;
    
    public constructor(init?: Partial<PdfDocumentInfo>) {
        
        Object.assign(this, init);
    }        
}

/**
 * The PDF options.
 */
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
            type: "any",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PdfDocumentOptions.attributeTypeMap;
    }

    /**
     * Desired conformance level for generated PDF document. Important note: This option should not be changed after PdfDocument object is constructed. Default is Pdf15.
     */
    public compliance: any;
    
    public constructor(init?: Partial<PdfDocumentOptions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Drawing pen options
 */
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
            type: "any",
        },        
        {
            name: "endCap",
            baseName: "EndCap",
            type: "any",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PenOptions.attributeTypeMap;
    }

    /**
     * Gets or sets the start cap.
     */
    public startCap: any;
    
    /**
     * Gets or sets the end cap.
     */
    public endCap: any;
    
    public constructor(init?: Partial<PenOptions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * RD optimizer settings class
 */
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
     * Gets or sets the BPP (bits per pixel) scale factor.
     */
    public bppScale: number;
    
    /**
     * Gets or sets the maximum R value for consideration in  in bits per pixel
     */
    public bppMax: number;
    
    /**
     * Gets or sets the maximum quantization value.
     */
    public maxQ: number;
    
    /**
     * Gets the minimum allowed quantization value.
     */
    public minQ: number;
    
    /**
     * Gets the maximum pixel value.
     */
    public maxPixelValue: number;
    
    /**
     * Gets the PSNR maximum expected value.
     */
    public psnrMax: number;
    
    /**
     * Gets the maximum R value for consideration.
     */
    public discretizedBppMax: number;
    
    public constructor(init?: Partial<RdOptimizerSettings>) {
        
        Object.assign(this, init);
    }        
}

/**
 * The resolution setting for image save options.
 */
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
     * Gets or sets the horizontal resolution.
     */
    public horizontalResolution: number;
    
    /**
     * Gets or sets the vertical resolution.
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

const enumsMap = {
    "VectorRasterizationOptionsDTO.UnitTypeEnum": VectorRasterizationOptionsDTO.UnitTypeEnum,
    "Jpeg2000OptionsDTO.CodecEnum": Jpeg2000OptionsDTO.CodecEnum,
};

const typeMap = {
            CadResponse,
            Cff2Properties,
            Color,
            DgnProperties,
            DrawingOptionsBaseDTO,
            DwfProperties,
            DwgProperties,
            DxfProperties,
            GraphicsOptions,
            IfcProperties,
            IgsProperties,
            PdfDocumentInfo,
            PdfDocumentOptions,
            PenOptions,
            RdOptimizerSettings,
            ResolutionSetting,
            StlProperties,
            VectorRasterizationOptionsDTO,
            BmpOptionsDTO,
            CadRasterizationOptionsDTO,
            GifOptionsDTO,
            Jpeg2000OptionsDTO,
            JpegOptionsDTO,
            PdfOptionsDTO,
            PngOptionsDTO,
            PsdOptionsDTO,
            SvgOptionsDTO,
            TiffOptionsDTO,
            WmfOptionsDTO,
};

export {enumsMap, typeMap};

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

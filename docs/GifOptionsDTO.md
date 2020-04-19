# GifOptionsDTO
Export options for GIF format

*Inherited from [DrawingOptionsBaseDTO](DrawingOptionsBaseDTO.md)*
## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**doPaletteCorrection** | **boolean** | Determines whether to do auto-correction of a palette | 
**colorResolution** | **number** | Color resolution | 
**isPaletteSorted** | **boolean** | Determines whether a palette is sorted | 
**pixelAspectRatio** | **number** | Pixel aspect ration | 
**backgroundColorIndex** | **number** | Background color index | 
**hasTrailer** | **boolean** | Determines whether image has to have a trailer | 
**interlaced** | **boolean** | Determines whether an image has to be interlaced | 
**rotation** |  | Resulting rotation operation<br />*Inherited from [DrawingOptionsBaseDTO](DrawingOptionsBaseDTO.md)* | 
**layers** | **Array&lt;string&gt;** | Layers to export<br />*Inherited from [DrawingOptionsBaseDTO](DrawingOptionsBaseDTO.md)* | [optional]
**resolutionSettings** | [**ResolutionSetting**](ResolutionSetting.md) | DPI resolution settings<br />*Inherited from [DrawingOptionsBaseDTO](DrawingOptionsBaseDTO.md)* | [optional]
**vectorRasterizationOptions** | [**CadRasterizationOptionsDTO**](CadRasterizationOptionsDTO.md) | Raster options<br />*Inherited from [DrawingOptionsBaseDTO](DrawingOptionsBaseDTO.md)* | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md) [[View Source]](../src/models/gifOptionsDTO.ts)


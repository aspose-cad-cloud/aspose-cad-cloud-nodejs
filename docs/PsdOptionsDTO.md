# PsdOptionsDTO
Export options for PSD format

*Inherited from [DrawingOptionsBaseDTO](DrawingOptionsBaseDTO.md)*
## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **number** | PSD format version | 
**compressionMethod** |  | Compression method | 
**colorMode** |  | Color mode | 
**channelBitsCount** | **number** | Bits count per channel | 
**channelsCount** | **number** | Channels count | 
**rotation** |  | Resulting rotation operation<br />*Inherited from [DrawingOptionsBaseDTO](DrawingOptionsBaseDTO.md)* | 
**layers** | **Array&lt;string&gt;** | Layers to export<br />*Inherited from [DrawingOptionsBaseDTO](DrawingOptionsBaseDTO.md)* | [optional]
**resolutionSettings** | [**ResolutionSetting**](ResolutionSetting.md) | DPI resolution settings<br />*Inherited from [DrawingOptionsBaseDTO](DrawingOptionsBaseDTO.md)* | [optional]
**vectorRasterizationOptions** | [**CadRasterizationOptionsDTO**](CadRasterizationOptionsDTO.md) | Raster options<br />*Inherited from [DrawingOptionsBaseDTO](DrawingOptionsBaseDTO.md)* | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md) [[View Source]](../src/models/psdOptionsDTO.ts)


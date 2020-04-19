# CadRasterizationOptionsDTO
Raster export options

*Inherited from [VectorRasterizationOptionsDTO](VectorRasterizationOptionsDTO.md)*
## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**zoom** | **number** | Zoom factor | 
**penOptions** | [**PenOptions**](PenOptions.md) | Pen options | [optional]
**automaticLayoutsScaling** | **boolean** | Determines whether layout has to be scaled automatically | 
**layers** | **Array&lt;string&gt;** | Layers to export | [optional]
**layouts** | **Array&lt;string&gt;** | Layouts to export | [optional]
**drawType** |  | Drawing mode | 
**noScaling** | **boolean** | Determines whether scaling has to be turned off | 
**borderX** | **number** | Gets or sets the border X.<br />*Inherited from [VectorRasterizationOptionsDTO](VectorRasterizationOptionsDTO.md)* | 
**borderY** | **number** | Gets or sets the border Y.<br />*Inherited from [VectorRasterizationOptionsDTO](VectorRasterizationOptionsDTO.md)* | 
**pageHeight** | **number** | Gets or sets the page height.<br />*Inherited from [VectorRasterizationOptionsDTO](VectorRasterizationOptionsDTO.md)* | 
**pageWidth** | **number** | Gets or sets the page width.<br />*Inherited from [VectorRasterizationOptionsDTO](VectorRasterizationOptionsDTO.md)* | 
**backgroundColor** | [**Color**](Color.md) | Gets or sets a background color.<br />*Inherited from [VectorRasterizationOptionsDTO](VectorRasterizationOptionsDTO.md)* | 
**drawColor** | [**Color**](Color.md) | Gets or sets a foreground color.<br />*Inherited from [VectorRasterizationOptionsDTO](VectorRasterizationOptionsDTO.md)* | 
**unitType** |  | <br />*Inherited from [VectorRasterizationOptionsDTO](VectorRasterizationOptionsDTO.md)* | 
**contentAsBitmap** | **boolean** | Gets or sets a value indicating whether content of a drawing is represented as image inside Pdf. Applicable only for CAD to Pdf export. Default is false.<br />*Inherited from [VectorRasterizationOptionsDTO](VectorRasterizationOptionsDTO.md)* | 
**graphicsOptions** | [**GraphicsOptions**](GraphicsOptions.md) | Gets or sets options to render bitmap inside pdf (if ContentAsBitmap is set to true).<br />*Inherited from [VectorRasterizationOptionsDTO](VectorRasterizationOptionsDTO.md)* | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md) [[View Source]](../src/models/cadRasterizationOptionsDTO.ts)


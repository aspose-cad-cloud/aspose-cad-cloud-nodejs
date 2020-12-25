## Documentation for API Endpoints

All URIs are relative to *https://api.aspose.cloud/v3.0/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CadApi* | [**copyFile**](CadApi.md#copyFile) | **PUT** /v3.0/cad/storage/file/copy/\{srcPath} | Copy file
*CadApi* | [**copyFolder**](CadApi.md#copyFolder) | **PUT** /v3.0/cad/storage/folder/copy/\{srcPath} | Copy folder
*CadApi* | [**createFolder**](CadApi.md#createFolder) | **PUT** /v3.0/cad/storage/folder/\{path} | Create the folder
*CadApi* | [**deleteFile**](CadApi.md#deleteFile) | **DELETE** /v3.0/cad/storage/file/\{path} | Delete file
*CadApi* | [**deleteFolder**](CadApi.md#deleteFolder) | **DELETE** /v3.0/cad/storage/folder/\{path} | Delete folder
*CadApi* | [**downloadFile**](CadApi.md#downloadFile) | **GET** /v3.0/cad/storage/file/\{path} | Download file
*CadApi* | [**getDiscUsage**](CadApi.md#getDiscUsage) | **GET** /v3.0/cad/storage/disc | Get disc usage
*CadApi* | [**getDrawingProperties**](CadApi.md#getDrawingProperties) | **GET** /v3.0/cad/\{name}/properties | Retrieves info about an existing drawing. 
*CadApi* | [**getDrawingResize**](CadApi.md#getDrawingResize) | **GET** /v3.0/cad/\{name}/resize | Resize an existing drawing.
*CadApi* | [**getDrawingRotateFlip**](CadApi.md#getDrawingRotateFlip) | **GET** /v3.0/cad/\{name}/rotateflip | Rotate/flip an existing drawing.
*CadApi* | [**getDrawingSaveAs**](CadApi.md#getDrawingSaveAs) | **GET** /v3.0/cad/\{name}/saveAs/\{outputFormat} | Export an existing drawing to another format.
*CadApi* | [**getFilesList**](CadApi.md#getFilesList) | **GET** /v3.0/cad/storage/folder/\{path} | Get all files and folders within a folder
*CadApi* | [**getFileVersions**](CadApi.md#getFileVersions) | **GET** /v3.0/cad/storage/version/\{path} | Get file versions
*CadApi* | [**moveFile**](CadApi.md#moveFile) | **PUT** /v3.0/cad/storage/file/move/\{srcPath} | Move file
*CadApi* | [**moveFolder**](CadApi.md#moveFolder) | **PUT** /v3.0/cad/storage/folder/move/\{srcPath} | Move folder
*CadApi* | [**objectExists**](CadApi.md#objectExists) | **GET** /v3.0/cad/storage/exist/\{path} | Check if file or folder exists
*CadApi* | [**postDrawingBmp**](CadApi.md#postDrawingBmp) | **POST** /v3.0/cad/\{name}/bmp | Export an existing drawing to BMP format with export settings specified.
*CadApi* | [**postDrawingGif**](CadApi.md#postDrawingGif) | **POST** /v3.0/cad/\{name}/gif | Export an existing drawing into GIF format with export settings specified.
*CadApi* | [**postDrawingJpeg**](CadApi.md#postDrawingJpeg) | **POST** /v3.0/cad/\{name}/jpeg | Export an existing drawing into JPEG format with export settings specified.
*CadApi* | [**postDrawingJpeg2000**](CadApi.md#postDrawingJpeg2000) | **POST** /v3.0/cad/\{name}/jpeg2000 | Export an existing drawing into JPEG2000 format with export settings specified.
*CadApi* | [**postDrawingPdf**](CadApi.md#postDrawingPdf) | **POST** /v3.0/cad/\{name}/pdf | Export an existing drawing to PDF format with export settings specified.
*CadApi* | [**postDrawingPng**](CadApi.md#postDrawingPng) | **POST** /v3.0/cad/\{name}/png | Export an existing drawing into PNG format with export settings specified.
*CadApi* | [**postDrawingProperties**](CadApi.md#postDrawingProperties) | **POST** /v3.0/cad/properties | Retrieves info about drawing which is passed as a zero-indexed multipart/form-data content or as raw body stream.
*CadApi* | [**postDrawingPsd**](CadApi.md#postDrawingPsd) | **POST** /v3.0/cad/\{name}/psd | Export an existing drawing into PSD format with export settings specified.
*CadApi* | [**postDrawingResize**](CadApi.md#postDrawingResize) | **POST** /v3.0/cad/resize | Resize a drawing. Drawing data is passed as a zero-indexed multipart/form-data content or as raw body stream.
*CadApi* | [**postDrawingRotateFlip**](CadApi.md#postDrawingRotateFlip) | **POST** /v3.0/cad/rotateflip | Rotate/flip a drawing. Drawing data is passed as a zero-indexed multipart/form-data content or as raw body stream.
*CadApi* | [**postDrawingSaveAs**](CadApi.md#postDrawingSaveAs) | **POST** /v3.0/cad/saveAs/\{outputFormat} | Export existing drawing to another format. Drawing data is passed as zero-indexed multipart/form-data content or as raw body stream. 
*CadApi* | [**postDrawingSvg**](CadApi.md#postDrawingSvg) | **POST** /v3.0/cad/\{name}/svg | Export an existing drawing to SVG format with export settings specified.
*CadApi* | [**postDrawingTiff**](CadApi.md#postDrawingTiff) | **POST** /v3.0/cad/\{name}/tiff | Export an existing drawing into TIFF format with export settings specified.
*CadApi* | [**postDrawingWmf**](CadApi.md#postDrawingWmf) | **POST** /v3.0/cad/\{name}/wmf | Export an existing drawing to WMF format with export settings specified.
*CadApi* | [**putDrawingBmp**](CadApi.md#putDrawingBmp) | **PUT** /v3.0/cad/bmp | Export drawing to BMP format. Drawing data is passed as zero-indexed multipart/form-data as well as export BMP options serialized as JSON. Order of drawing data and BMP options could vary.
*CadApi* | [**putDrawingGif**](CadApi.md#putDrawingGif) | **PUT** /v3.0/cad/gif | Export drawing to GIF format. Drawing data is passed as zero-indexed multipart/form-data as well as export GIF options serialized as JSON. Order of drawing data and GIF options could vary.
*CadApi* | [**putDrawingJpeg**](CadApi.md#putDrawingJpeg) | **PUT** /v3.0/cad/jpeg | Export drawing to JPEG format. Drawing data is passed as zero-indexed multipart/form-data as well as export JPEG options serialized as JSON. Order of drawing data and JPEG options could vary.
*CadApi* | [**putDrawingJpeg2000**](CadApi.md#putDrawingJpeg2000) | **PUT** /v3.0/cad/jpeg2000 | Export drawing to JPEG2000 format. Drawing data is passed as zero-indexed multipart/form-data as well as export JPEG2000 options serialized as JSON. Order of drawing data and JPEG2000 options could vary.
*CadApi* | [**putDrawingPdf**](CadApi.md#putDrawingPdf) | **PUT** /v3.0/cad/pdf | Export drawing to PDF format. Drawing data is passed as zero-indexed multipart/form-data as well as export PDF options serialized as JSON. Order of drawing data and PDF options could vary.
*CadApi* | [**putDrawingPng**](CadApi.md#putDrawingPng) | **PUT** /v3.0/cad/png | Export drawing to PNG format. Drawing data is passed as zero-indexed multipart/form-data as well as export PNG options serialized as JSON. Order of drawing data and PNG options could vary.
*CadApi* | [**putDrawingPsd**](CadApi.md#putDrawingPsd) | **PUT** /v3.0/cad/psd | Export drawing to PSD format. Drawing data is passed as zero-indexed multipart/form-data as well as export PSD options serialized as JSON. Order of drawing data and PSD options could vary.
*CadApi* | [**putDrawingSvg**](CadApi.md#putDrawingSvg) | **PUT** /v3.0/cad/svg | Export drawing to SVG format. Drawing data is passed as zero-indexed multipart/form-data as well as export SVG options serialized as JSON. Order of drawing data and SVG options could vary.
*CadApi* | [**putDrawingTiff**](CadApi.md#putDrawingTiff) | **PUT** /v3.0/cad/tiff | Export drawing to TIFF format. Drawing data is passed as zero-indexed multipart/form-data as well as export TIFF options serialized as JSON. Order of drawing data and TIFF options could vary.
*CadApi* | [**putDrawingWmf**](CadApi.md#putDrawingWmf) | **PUT** /v3.0/cad/wmf | Export drawing to WMF format. Drawing data is passed as zero-indexed multipart/form-data as well as export WMF options serialized as JSON. Order of drawing data and WMF options could vary.
*CadApi* | [**storageExists**](CadApi.md#storageExists) | **GET** /v3.0/cad/storage/\{storageName}/exist | Check if storage exists
*CadApi* | [**uploadFile**](CadApi.md#uploadFile) | **PUT** /v3.0/cad/storage/file/\{path} | Upload file

## Documentation for Models

Class | Description
----- | -----
[**   **](   .md) | 
[**BmpOptionsDTO**](BmpOptionsDTO.md) | Export options for BMP format
[**CadRasterizationOptionsDTO**](CadRasterizationOptionsDTO.md) | Raster export options
[**CadResponse**](CadResponse.md) | Represents information about a drawing.
[**Cff2Properties**](Cff2Properties.md) | Represents information about CFF2 drawing.
[**Color**](Color.md) | 
[**DgnProperties**](DgnProperties.md) | Represents information about DGN drawing.
[**DiscUsage**](DiscUsage.md) | Class for disc space information.
[**DrawingOptionsBaseDTO**](DrawingOptionsBaseDTO.md) | Image options base class
[**DwfProperties**](DwfProperties.md) | Represents information about DWF drawing.
[**DwgProperties**](DwgProperties.md) | Represents information about DWG drawing.
[**DxfProperties**](DxfProperties.md) | Represents information about DXF drawing.
[**Error**](Error.md) | Error
[**ErrorDetails**](ErrorDetails.md) | The error details
[**FilesList**](FilesList.md) | Files list
[**FilesUploadResult**](FilesUploadResult.md) | File upload result
[**FileVersion**](FileVersion.md) | File Version
[**FileVersions**](FileVersions.md) | File versions FileVersion.
[**GifOptionsDTO**](GifOptionsDTO.md) | Export options for GIF format
[**GraphicsOptions**](GraphicsOptions.md) | 
[**IfcProperties**](IfcProperties.md) | Represents information about IFC drawing.
[**IgsProperties**](IgsProperties.md) | Represents information about IGS drawing.
[**Jpeg2000OptionsDTO**](Jpeg2000OptionsDTO.md) | Export options for JPEG2000 format
[**JpegOptionsDTO**](JpegOptionsDTO.md) | Export options for JPEG format
[**ObjectExist**](ObjectExist.md) | Object exists
[**PdfDocumentInfo**](PdfDocumentInfo.md) | 
[**PdfDocumentOptions**](PdfDocumentOptions.md) | 
[**PdfOptionsDTO**](PdfOptionsDTO.md) | Export options for PDF format
[**PenOptions**](PenOptions.md) | 
[**PngOptionsDTO**](PngOptionsDTO.md) | Export options for PNG format
[**PsdOptionsDTO**](PsdOptionsDTO.md) | Export options for PSD format
[**RdOptimizerSettings**](RdOptimizerSettings.md) | 
[**ResolutionSetting**](ResolutionSetting.md) | 
[**StlProperties**](StlProperties.md) | Represents information about STL drawing.
[**StorageExist**](StorageExist.md) | Storage exists
[**StorageFile**](StorageFile.md) | File or folder information
[**SvgOptionsDTO**](SvgOptionsDTO.md) | Export options for SVG format
[**TiffOptionsDTO**](TiffOptionsDTO.md) | Export options for TIFF format
[**VectorRasterizationOptionsDTO**](VectorRasterizationOptionsDTO.md) | Base raster export options class
[**WmfOptionsDTO**](WmfOptionsDTO.md) | Export options for WMF format

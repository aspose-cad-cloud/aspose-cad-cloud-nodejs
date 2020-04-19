## Documentation for API Endpoints

All URIs are relative to *https://api.aspose.cloud/v3.0/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CadApi* | [**getDrawingProperties**](CadApi.md#getDrawingProperties) | **GET** /cad/\{name}/properties | Retrieves info about an existing drawing. 
*CadApi* | [**getDrawingResize**](CadApi.md#getDrawingResize) | **GET** /cad/\{name}/resize | Resize an existing drawing.
*CadApi* | [**getDrawingRotateFlip**](CadApi.md#getDrawingRotateFlip) | **GET** /cad/\{name}/rotateflip | Rotate/flip an existing drawing.
*CadApi* | [**getDrawingSaveAs**](CadApi.md#getDrawingSaveAs) | **GET** /cad/\{name}/saveAs/\{outputFormat} | Export an existing drawing to another format.
*CadApi* | [**postDrawingBmp**](CadApi.md#postDrawingBmp) | **POST** /cad/\{name}/bmp | Export an existing drawing to BMP format with export settings specified.
*CadApi* | [**postDrawingGif**](CadApi.md#postDrawingGif) | **POST** /cad/\{name}/gif | Export an existing drawing into GIF format with export settings specified.
*CadApi* | [**postDrawingJpeg**](CadApi.md#postDrawingJpeg) | **POST** /cad/\{name}/jpeg | Export an existing drawing into JPEG format with export settings specified.
*CadApi* | [**postDrawingJpeg2000**](CadApi.md#postDrawingJpeg2000) | **POST** /cad/\{name}/jpeg2000 | Export an existing drawing into JPEG2000 format with export settings specified.
*CadApi* | [**postDrawingPdf**](CadApi.md#postDrawingPdf) | **POST** /cad/\{name}/pdf | Export an existing drawing to PDF format with export settings specified.
*CadApi* | [**postDrawingPng**](CadApi.md#postDrawingPng) | **POST** /cad/\{name}/png | Export an existing drawing into PNG format with export settings specified.
*CadApi* | [**postDrawingProperties**](CadApi.md#postDrawingProperties) | **POST** /cad/properties | Retrieves info about drawing which is passed as a zero-indexed multipart/form-data content or as raw body stream.
*CadApi* | [**postDrawingPsd**](CadApi.md#postDrawingPsd) | **POST** /cad/\{name}/psd | Export an existing drawing into PSD format with export settings specified.
*CadApi* | [**postDrawingResize**](CadApi.md#postDrawingResize) | **POST** /cad/resize | Resize a drawing. Drawing data is passed as a zero-indexed multipart/form-data content or as raw body stream.
*CadApi* | [**postDrawingRotateFlip**](CadApi.md#postDrawingRotateFlip) | **POST** /cad/rotateflip | Rotate/flip a drawing. Drawing data is passed as a zero-indexed multipart/form-data content or as raw body stream.
*CadApi* | [**postDrawingSaveAs**](CadApi.md#postDrawingSaveAs) | **POST** /cad/saveAs/\{outputFormat} | Export existing drawing to another format. Drawing data is passed as zero-indexed multipart/form-data content or as raw body stream. 
*CadApi* | [**postDrawingSvg**](CadApi.md#postDrawingSvg) | **POST** /cad/\{name}/svg | Export an existing drawing to SVG format with export settings specified.
*CadApi* | [**postDrawingTiff**](CadApi.md#postDrawingTiff) | **POST** /cad/\{name}/tiff | Export an existing drawing into TIFF format with export settings specified.
*CadApi* | [**postDrawingWmf**](CadApi.md#postDrawingWmf) | **POST** /cad/\{name}/wmf | Export an existing drawing to WMF format with export settings specified.
*CadApi* | [**putDrawingBmp**](CadApi.md#putDrawingBmp) | **PUT** /cad/bmp | Export drawing to BMP format. Drawing data is passed as zero-indexed multipart/form-data as well as export BMP options serialized as JSON. Order of drawing data and BMP options could vary.
*CadApi* | [**putDrawingGif**](CadApi.md#putDrawingGif) | **PUT** /cad/gif | Export drawing to GIF format. Drawing data is passed as zero-indexed multipart/form-data as well as export GIF options serialized as JSON. Order of drawing data and GIF options could vary.
*CadApi* | [**putDrawingJpeg**](CadApi.md#putDrawingJpeg) | **PUT** /cad/jpeg | Export drawing to JPEG format. Drawing data is passed as zero-indexed multipart/form-data as well as export JPEG options serialized as JSON. Order of drawing data and JPEG options could vary.
*CadApi* | [**putDrawingJpeg2000**](CadApi.md#putDrawingJpeg2000) | **PUT** /cad/jpeg2000 | Export drawing to JPEG2000 format. Drawing data is passed as zero-indexed multipart/form-data as well as export JPEG2000 options serialized as JSON. Order of drawing data and JPEG2000 options could vary.
*CadApi* | [**putDrawingPdf**](CadApi.md#putDrawingPdf) | **PUT** /cad/pdf | Export drawing to PDF format. Drawing data is passed as zero-indexed multipart/form-data as well as export PDF options serialized as JSON. Order of drawing data and PDF options could vary.
*CadApi* | [**putDrawingPng**](CadApi.md#putDrawingPng) | **PUT** /cad/png | Export drawing to PNG format. Drawing data is passed as zero-indexed multipart/form-data as well as export PNG options serialized as JSON. Order of drawing data and PNG options could vary.
*CadApi* | [**putDrawingPsd**](CadApi.md#putDrawingPsd) | **PUT** /cad/psd | Export drawing to PSD format. Drawing data is passed as zero-indexed multipart/form-data as well as export PSD options serialized as JSON. Order of drawing data and PSD options could vary.
*CadApi* | [**putDrawingSvg**](CadApi.md#putDrawingSvg) | **PUT** /cad/svg | Export drawing to SVG format. Drawing data is passed as zero-indexed multipart/form-data as well as export SVG options serialized as JSON. Order of drawing data and SVG options could vary.
*CadApi* | [**putDrawingTiff**](CadApi.md#putDrawingTiff) | **PUT** /cad/tiff | Export drawing to TIFF format. Drawing data is passed as zero-indexed multipart/form-data as well as export TIFF options serialized as JSON. Order of drawing data and TIFF options could vary.
*CadApi* | [**putDrawingWmf**](CadApi.md#putDrawingWmf) | **PUT** /cad/wmf | Export drawing to WMF format. Drawing data is passed as zero-indexed multipart/form-data as well as export WMF options serialized as JSON. Order of drawing data and WMF options could vary.

## Documentation for Models

Class | Description
----- | -----
[**BmpOptionsDTO**](BmpOptionsDTO.md) | Export options for BMP format
[**CadRasterizationOptionsDTO**](CadRasterizationOptionsDTO.md) | Raster export options
[**CadResponse**](CadResponse.md) | Represents information about a drawing.
[**Cff2Properties**](Cff2Properties.md) | Represents information about CFF2 drawing.
[**Color**](Color.md) | The color of the pixel.
[**DgnProperties**](DgnProperties.md) | Represents information about DGN drawing.
[**DrawingOptionsBaseDTO**](DrawingOptionsBaseDTO.md) | Image options base class
[**DwfProperties**](DwfProperties.md) | Represents information about DWF drawing.
[**DwgProperties**](DwgProperties.md) | Represents information about DWG drawing.
[**DxfProperties**](DxfProperties.md) | Represents information about DXF drawing.
[**GifOptionsDTO**](GifOptionsDTO.md) | Export options for GIF format
[**GraphicsOptions**](GraphicsOptions.md) | Represents graphics options for embedded bitmap.
[**IfcProperties**](IfcProperties.md) | Represents information about IFC drawing.
[**IgsProperties**](IgsProperties.md) | Represents information about IGS drawing.
[**Jpeg2000OptionsDTO**](Jpeg2000OptionsDTO.md) | Export options for JPEG2000 format
[**JpegOptionsDTO**](JpegOptionsDTO.md) | Export options for JPEG format
[**PdfDocumentInfo**](PdfDocumentInfo.md) | This class represents set of metadata for document description.
[**PdfDocumentOptions**](PdfDocumentOptions.md) | The PDF options.
[**PdfOptionsDTO**](PdfOptionsDTO.md) | Export options for PDF format
[**PenOptions**](PenOptions.md) | Drawing pen options
[**PngOptionsDTO**](PngOptionsDTO.md) | Export options for PNG format
[**PsdOptionsDTO**](PsdOptionsDTO.md) | Export options for PSD format
[**RdOptimizerSettings**](RdOptimizerSettings.md) | RD optimizer settings class
[**ResolutionSetting**](ResolutionSetting.md) | The resolution setting for image save options.
[**StlProperties**](StlProperties.md) | Represents information about STL drawing.
[**SvgOptionsDTO**](SvgOptionsDTO.md) | Export options for SVG format
[**TiffOptionsDTO**](TiffOptionsDTO.md) | Export options for TIFF format
[**VectorRasterizationOptionsDTO**](VectorRasterizationOptionsDTO.md) | Base raster export options class
[**WmfOptionsDTO**](WmfOptionsDTO.md) | Export options for WMF format

# Aspose.Cad.Cloud.Sdk.Api.CadApi

<a name="copyFile"></a>
## **copyFile**
> copyFile(srcPath, destPath, srcStorageName, destStorageName, versionId)

Copy file

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**srcPath** | **string** | Source file path e.g. '/folder/file.ext' | 
**destPath** | **string** | Destination file path | 
**srcStorageName** | **string** | Source storage name | [optional]
**destStorageName** | **string** | Destination storage name | [optional]
**versionId** | **string** | File version ID to copy | [optional]

### Return type

****

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="copyFolder"></a>
## **copyFolder**
> copyFolder(srcPath, destPath, srcStorageName, destStorageName)

Copy folder

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**srcPath** | **string** | Source folder path e.g. '/src' | 
**destPath** | **string** | Destination folder path e.g. '/dst' | 
**srcStorageName** | **string** | Source storage name | [optional]
**destStorageName** | **string** | Destination storage name | [optional]

### Return type

****

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createFolder"></a>
## **createFolder**
> createFolder(path, storageName)

Create the folder

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**path** | **string** | Folder path to create e.g. 'folder_1/folder_2/' | 
**storageName** | **string** | Storage name | [optional]

### Return type

****

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFile"></a>
## **deleteFile**
> deleteFile(path, storageName, versionId)

Delete file

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**path** | **string** | File path e.g. '/folder/file.ext' | 
**storageName** | **string** | Storage name | [optional]
**versionId** | **string** | File version ID to delete | [optional]

### Return type

****

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFolder"></a>
## **deleteFolder**
> deleteFolder(path, storageName, recursive)

Delete folder

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**path** | **string** | Folder path e.g. '/folder' | 
**storageName** | **string** | Storage name | [optional]
**recursive** | **boolean** | Enable to delete folders, subfolders and files | [optional]

### Return type

****

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="downloadFile"></a>
## **downloadFile**
> downloadFile(path, storageName, versionId)

Download file

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**path** | **string** | File path e.g. '/folder/file.ext' | 
**storageName** | **string** | Storage name | [optional]
**versionId** | **string** | File version ID to download | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="getDiscUsage"></a>
## **getDiscUsage**
> getDiscUsage(storageName)

Get disc usage

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**storageName** | **string** | Storage name | [optional]

### Return type

[**DiscUsage**](DiscUsage.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDrawingProperties"></a>
## **getDrawingProperties**
> getDrawingProperties(name, folder, storage)

Retrieves info about an existing drawing. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of an input drawing on a storage. | 
**folder** | **string** | Folder with a drawing to get properties for. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

[**CadResponse**](CadResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDrawingResize"></a>
## **getDrawingResize**
> getDrawingResize(name, outputFormat, newWidth, newHeight, folder, outPath, storage)

Resize an existing drawing.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of a drawing. | 
**outputFormat** | **string** | Resulting file format. | 
**newWidth** | **number** | New width. | 
**newHeight** | **number** | New height. | 
**folder** | **string** | Folder with a drawing to process. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDrawingRotateFlip"></a>
## **getDrawingRotateFlip**
> getDrawingRotateFlip(name, outputFormat, rotateFlipType, folder, outPath, storage)

Rotate/flip an existing drawing.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of a drawing. | 
**outputFormat** | **string** | Resulting file format. | 
**rotateFlipType** | [****](.md) | Rotate/flip operation to apply. Possible values: RotateNoneFlipNone, Rotate90FlipNone, Rotate180FlipNone, Rotate270FlipNone, RotateNoneFlipX, Rotate90FlipX, Rotate180FlipX, Rotate270FlipX, RotateNoneFlipY, Rotate90FlipY, Rotate180FlipY, Rotate270FlipY, RotateNoneFlipXY, Rotate90FlipXY, Rotate180FlipXY, Rotate270FlipXY | 
**folder** | **string** | Folder with a drawing to process. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDrawingSaveAs"></a>
## **getDrawingSaveAs**
> getDrawingSaveAs(name, outputFormat, folder, outPath, storage)

Export an existing drawing to another format.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of an input drawing on a storage. | 
**outputFormat** | **string** | Resulting file format. | 
**folder** | **string** | Folder with a drawing to process. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFilesList"></a>
## **getFilesList**
> getFilesList(path, storageName)

Get all files and folders within a folder

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**path** | **string** | Folder path e.g. '/folder' | 
**storageName** | **string** | Storage name | [optional]

### Return type

[**FilesList**](FilesList.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFileVersions"></a>
## **getFileVersions**
> getFileVersions(path, storageName)

Get file versions

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**path** | **string** | File path e.g. '/file.ext' | 
**storageName** | **string** | Storage name | [optional]

### Return type

[**FileVersions**](FileVersions.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="moveFile"></a>
## **moveFile**
> moveFile(srcPath, destPath, srcStorageName, destStorageName, versionId)

Move file

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**srcPath** | **string** | Source file path e.g. '/src.ext' | 
**destPath** | **string** | Destination file path e.g. '/dest.ext' | 
**srcStorageName** | **string** | Source storage name | [optional]
**destStorageName** | **string** | Destination storage name | [optional]
**versionId** | **string** | File version ID to move | [optional]

### Return type

****

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="moveFolder"></a>
## **moveFolder**
> moveFolder(srcPath, destPath, srcStorageName, destStorageName)

Move folder

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**srcPath** | **string** | Folder path to move e.g. '/folder' | 
**destPath** | **string** | Destination folder path to move to e.g '/dst' | 
**srcStorageName** | **string** | Source storage name | [optional]
**destStorageName** | **string** | Destination storage name | [optional]

### Return type

****

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="objectExists"></a>
## **objectExists**
> objectExists(path, storageName, versionId)

Check if file or folder exists

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**path** | **string** | File or folder path e.g. '/file.ext' or '/folder' | 
**storageName** | **string** | Storage name | [optional]
**versionId** | **string** | File version ID | [optional]

### Return type

[**ObjectExist**](ObjectExist.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postDrawingBmp"></a>
## **postDrawingBmp**
> postDrawingBmp(name, options, folder, outPath, storage)

Export an existing drawing to BMP format with export settings specified.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of an input drawing on a storage. | 
**options** | [**BmpOptionsDTO**](BmpOptionsDTO.md) | Export BMP options passed as a JSON on a request body. | 
**folder** | **string** | Folder with a drawing to process. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postDrawingGif"></a>
## **postDrawingGif**
> postDrawingGif(name, options, folder, outPath, storage)

Export an existing drawing into GIF format with export settings specified.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of an input drawing on a storage. | 
**options** | [**GifOptionsDTO**](GifOptionsDTO.md) | Export GIF options passed as a JSON on a request body. | 
**folder** | **string** | Folder with a drawing to process. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postDrawingJpeg"></a>
## **postDrawingJpeg**
> postDrawingJpeg(name, options, folder, outPath, storage)

Export an existing drawing into JPEG format with export settings specified.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of an input drawing on a storage. | 
**options** | [**JpegOptionsDTO**](JpegOptionsDTO.md) | Export JPEG options passed as a JSON on a request body. | 
**folder** | **string** | Folder with a drawing to process. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postDrawingJpeg2000"></a>
## **postDrawingJpeg2000**
> postDrawingJpeg2000(name, options, folder, outPath, storage)

Export an existing drawing into JPEG2000 format with export settings specified.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of an input drawing on a storage. | 
**options** | [**Jpeg2000OptionsDTO**](Jpeg2000OptionsDTO.md) | Export JPEG2000 options passed as a JSON on a request body. | 
**folder** | **string** | Folder with a drawing to process. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postDrawingPdf"></a>
## **postDrawingPdf**
> postDrawingPdf(name, options, folder, outPath, storage)

Export an existing drawing to PDF format with export settings specified.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of an input drawing on a storage. | 
**options** | [**PdfOptionsDTO**](PdfOptionsDTO.md) | Export PDF options passed as a JSON on a request body. | 
**folder** | **string** | Folder with a drawing to process. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postDrawingPng"></a>
## **postDrawingPng**
> postDrawingPng(name, options, folder, outPath, storage)

Export an existing drawing into PNG format with export settings specified.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of an input drawing on a storage. | 
**options** | [**PngOptionsDTO**](PngOptionsDTO.md) | Export PNG options passed as a JSON on a request body. | 
**folder** | **string** | Folder with a drawing to process. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postDrawingProperties"></a>
## **postDrawingProperties**
> postDrawingProperties(drawingData)

Retrieves info about drawing which is passed as a zero-indexed multipart/form-data content or as raw body stream.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**drawingData** | **Buffer** | Input drawing | 

### Return type

[**CadResponse**](CadResponse.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="postDrawingPsd"></a>
## **postDrawingPsd**
> postDrawingPsd(name, options, folder, outPath, storage)

Export an existing drawing into PSD format with export settings specified.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of an input drawing on a storage. | 
**options** | [**PsdOptionsDTO**](PsdOptionsDTO.md) | Export PSD options passed as a JSON on a request body. | 
**folder** | **string** | Folder with a drawing to process. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postDrawingResize"></a>
## **postDrawingResize**
> postDrawingResize(drawingData, outputFormat, newWidth, newHeight, outPath, storage)

Resize a drawing. Drawing data is passed as a zero-indexed multipart/form-data content or as raw body stream.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**drawingData** | **Buffer** | Input drawing | 
**outputFormat** | **string** | Resulting file format. | 
**newWidth** | **number** | New width. | 
**newHeight** | **number** | New height. | 
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json

<a name="postDrawingRotateFlip"></a>
## **postDrawingRotateFlip**
> postDrawingRotateFlip(drawingData, outputFormat, rotateFlipType, outPath, storage)

Rotate/flip a drawing. Drawing data is passed as a zero-indexed multipart/form-data content or as raw body stream.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**drawingData** | **Buffer** | Input drawing | 
**outputFormat** | **string** | Resulting file format. | 
**rotateFlipType** | [****](.md) | Rotate/flip operation to apply. Possible values: RotateNoneFlipNone, Rotate90FlipNone, Rotate180FlipNone, Rotate270FlipNone, RotateNoneFlipX, Rotate90FlipX, Rotate180FlipX, Rotate270FlipX, RotateNoneFlipY, Rotate90FlipY, Rotate180FlipY, Rotate270FlipY, RotateNoneFlipXY, Rotate90FlipXY, Rotate180FlipXY, Rotate270FlipXY | 
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json

<a name="postDrawingSaveAs"></a>
## **postDrawingSaveAs**
> postDrawingSaveAs(drawingData, outputFormat, outPath, storage)

Export existing drawing to another format. Drawing data is passed as zero-indexed multipart/form-data content or as raw body stream. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**drawingData** | **Buffer** | Input drawing | 
**outputFormat** | **string** | Resulting file format. | 
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json

<a name="postDrawingSvg"></a>
## **postDrawingSvg**
> postDrawingSvg(name, options, folder, outPath, storage)

Export an existing drawing to SVG format with export settings specified.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of an input drawing on a storage. | 
**options** | [**SvgOptionsDTO**](SvgOptionsDTO.md) | Export SVG options passed as a JSON on a request body. | 
**folder** | **string** | Folder with a drawing to process. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postDrawingTiff"></a>
## **postDrawingTiff**
> postDrawingTiff(name, options, folder, outPath, storage)

Export an existing drawing into TIFF format with export settings specified.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of an input drawing on a storage. | 
**options** | [**TiffOptionsDTO**](TiffOptionsDTO.md) | Export TIFF options passed as a JSON on a request body. | 
**folder** | **string** | Folder with a drawing to process. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postDrawingWmf"></a>
## **postDrawingWmf**
> postDrawingWmf(name, options, folder, outPath, storage)

Export an existing drawing to WMF format with export settings specified.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of an input drawing on a storage. | 
**options** | [**WmfOptionsDTO**](WmfOptionsDTO.md) | Export WMF options passed as a JSON on a request body. | 
**folder** | **string** | Folder with a drawing to process. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putDrawingBmp"></a>
## **putDrawingBmp**
> putDrawingBmp(drawingData, outPath, exportOptions, storage)

Export drawing to BMP format. Drawing data is passed as zero-indexed multipart/form-data as well as export BMP options serialized as JSON. Order of drawing data and BMP options could vary.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**drawingData** | **Buffer** | Input drawing | 
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**exportOptions** | **string** | JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/BmpOptionsDTO model definition. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json

<a name="putDrawingGif"></a>
## **putDrawingGif**
> putDrawingGif(drawingData, exportOptions, outPath, storage)

Export drawing to GIF format. Drawing data is passed as zero-indexed multipart/form-data as well as export GIF options serialized as JSON. Order of drawing data and GIF options could vary.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**drawingData** | **Buffer** | Input drawing | 
**exportOptions** | **string** | JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/GifOptionsDTO model definition. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putDrawingJpeg"></a>
## **putDrawingJpeg**
> putDrawingJpeg(drawingData, outPath, exportOptions, storage)

Export drawing to JPEG format. Drawing data is passed as zero-indexed multipart/form-data as well as export JPEG options serialized as JSON. Order of drawing data and JPEG options could vary.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**drawingData** | **Buffer** | Input drawing | 
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**exportOptions** | **string** | JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/JpegOptionsDTO model definition. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putDrawingJpeg2000"></a>
## **putDrawingJpeg2000**
> putDrawingJpeg2000(drawingData, outPath, exportOptions, storage)

Export drawing to JPEG2000 format. Drawing data is passed as zero-indexed multipart/form-data as well as export JPEG2000 options serialized as JSON. Order of drawing data and JPEG2000 options could vary.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**drawingData** | **Buffer** | Input drawing | 
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**exportOptions** | **string** | JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/Jpeg2000OptionsDTO model definition. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putDrawingPdf"></a>
## **putDrawingPdf**
> putDrawingPdf(drawingData, outPath, exportOptions, storage)

Export drawing to PDF format. Drawing data is passed as zero-indexed multipart/form-data as well as export PDF options serialized as JSON. Order of drawing data and PDF options could vary.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**drawingData** | **Buffer** | Input drawing | 
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**exportOptions** | **string** | JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/PdfOptionsDTO model definition. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putDrawingPng"></a>
## **putDrawingPng**
> putDrawingPng(drawingData, outPath, exportOptions, storage)

Export drawing to PNG format. Drawing data is passed as zero-indexed multipart/form-data as well as export PNG options serialized as JSON. Order of drawing data and PNG options could vary.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**drawingData** | **Buffer** | Input drawing | 
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**exportOptions** | **string** | JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/PngOptionsDTO model definition. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putDrawingPsd"></a>
## **putDrawingPsd**
> putDrawingPsd(drawingData, outPath, exportOptions, storage)

Export drawing to PSD format. Drawing data is passed as zero-indexed multipart/form-data as well as export PSD options serialized as JSON. Order of drawing data and PSD options could vary.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**drawingData** | **Buffer** | Input drawing | 
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**exportOptions** | **string** | JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/PsdOptionsDTO model definition. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putDrawingSvg"></a>
## **putDrawingSvg**
> putDrawingSvg(drawingData, outPath, exportOptions, storage)

Export drawing to SVG format. Drawing data is passed as zero-indexed multipart/form-data as well as export SVG options serialized as JSON. Order of drawing data and SVG options could vary.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**drawingData** | **Buffer** | Input drawing | 
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**exportOptions** | **string** | JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/SvgOptionsDTO model definition. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putDrawingTiff"></a>
## **putDrawingTiff**
> putDrawingTiff(drawingData, outPath, exportOptions, storage)

Export drawing to TIFF format. Drawing data is passed as zero-indexed multipart/form-data as well as export TIFF options serialized as JSON. Order of drawing data and TIFF options could vary.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**drawingData** | **Buffer** | Input drawing | 
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**exportOptions** | **string** | JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/TiffOptionsDTO model definition. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putDrawingWmf"></a>
## **putDrawingWmf**
> putDrawingWmf(drawingData, outPath, exportOptions, storage)

Export drawing to WMF format. Drawing data is passed as zero-indexed multipart/form-data as well as export WMF options serialized as JSON. Order of drawing data and WMF options could vary.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**drawingData** | **Buffer** | Input drawing | 
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**exportOptions** | **string** | JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/WmfOptionsDTO model definition. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="storageExists"></a>
## **storageExists**
> storageExists(storageName)

Check if storage exists

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**storageName** | **string** | Storage name | 

### Return type

[**StorageExist**](StorageExist.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="uploadFile"></a>
## **uploadFile**
> uploadFile(path, File, storageName)

Upload file

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**path** | **string** | Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext If the content is multipart and path does not contains the file name it tries to get them from filename parameter from Content-Disposition header.  | 
**File** | **Buffer** | File to upload | 
**storageName** | **string** | Storage name | [optional]

### Return type

[**FilesUploadResult**](FilesUploadResult.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json



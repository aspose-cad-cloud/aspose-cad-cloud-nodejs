# Aspose.Cad.Cloud.Sdk.Api.CadApi

<a name="convert"></a>
## **convert**
> convert(outputFormat, drawing, outputTypeExt)

Convert CAD drawing to DXF, DWG, DGN, DWF, DWFX, DRC, IFC, STL, STP, STEP, CGM, GLB, GLTF, DWT, IGES, PLT, CF2, OBJ, HPGL, IGS, PCL, FBX, PDF, SVG format.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**outputFormat** | **string** | Output DXF, DWG, DGN, DWF, DWFX, DRC, IFC, STL, STP, STEP, CGM, GLB, GLTF, DWT, IGES, PLT, CF2, OBJ, HPGL, IGS, PCL, FBX, PDF, SVG, PNG, BMP, DIB, TIFF, TIF, JPEG, GIF, PSD, JPG, JPE, JIF, JFIF, PSD, WEBP, DCM, DICOM, JP2, J2K, JPF, JPM, JPG2, J2C, JPC, JPX, MJ2 , DJVU file format. | 
**drawing** | **Buffer** | Form-data file | [optional]
**outputTypeExt** | **string** | For output pdf format: PDF_15, PDFa_1a OR PDFa_1b. Null for another format | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

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

<a name="editMetadata"></a>
## **editMetadata**
> editMetadata(drawing)

Get Metadata info

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**drawing** | **Buffer** |  | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="extractMetadata"></a>
## **extractMetadata**
> extractMetadata(outputFormat, drawing)

Extract Metadata from CAD drawing to txt, xml or json file.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**outputFormat** | **string** | Output TXT, XML or JSON file format. | 
**drawing** | **Buffer** | Form-data file | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="extractText"></a>
## **extractText**
> extractText(drawing)

Extract Text from CAD drawing to txt file

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**drawing** | **Buffer** |  | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

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
**rotateFlipType** | **string** | Rotate/flip operation to apply. Possible values: RotateNoneFlipNone, Rotate90FlipNone, Rotate180FlipNone, Rotate270FlipNone, RotateNoneFlipX, Rotate90FlipX, Rotate180FlipX, Rotate270FlipX, RotateNoneFlipY, Rotate90FlipY, Rotate180FlipY, Rotate270FlipY, RotateNoneFlipXY, Rotate90FlipXY, Rotate180FlipXY, Rotate270FlipXY | 
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

<a name="paperToCad"></a>
## **paperToCad**
> paperToCad(outputFormat, drawing)

Convert bitmap image to DXF, DWG, DGN, DWF, DWFX, DRC, IFC, STL, STP, STEP, CGM, GLB, GLTF, DWT, IGES, PLT, CF2, OBJ, HPGL, IGS, PCL, FBX, SVG format.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**outputFormat** | **string** | Output DXF, DWG, DGN, DWF, DWFX, DRC, IFC, STL, STP, STEP, CGM, GLB, GLTF, DWT, IGES, PLT, CF2, OBJ, HPGL, IGS, PCL, FBX, SVG file format. | 
**drawing** | **Buffer** | Form-data file | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
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

<a name="postDrawingCgm"></a>
## **postDrawingCgm**
> postDrawingCgm(name, options, folder, outPath, storage)

Export an existing drawing to CGM format with export settings specified.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of an input drawing on a storage. | 
**options** | [**CgmOptionsDTO**](CgmOptionsDTO.md) | Export CGM options passed as a JSON on a request body. | 
**folder** | **string** | Folder with a drawing to process. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postDrawingDicom"></a>
## **postDrawingDicom**
> postDrawingDicom(name, options, folder, outPath, storage)

Export an existing drawing to Dicom format with export settings specified.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of an input drawing on a storage. | 
**options** | [**DicomOptionsDTO**](DicomOptionsDTO.md) | Export Dicom options passed as a JSON on a request body. | 
**folder** | **string** | Folder with a drawing to process. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postDrawingDraco"></a>
## **postDrawingDraco**
> postDrawingDraco(name, options, folder, outPath, storage)

Export an existing drawing to Draco format with export settings specified.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of an input drawing on a storage. | 
**options** | [**DracoOptionsDTO**](DracoOptionsDTO.md) | Export Draco options passed as a JSON on a request body. | 
**folder** | **string** | Folder with a drawing to process. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postDrawingDwf"></a>
## **postDrawingDwf**
> postDrawingDwf(name, options, folder, outPath, storage)

Export an existing drawing to Dwf format with export settings specified.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of an input drawing on a storage. | 
**options** | [**DwfOptionsDTO**](DwfOptionsDTO.md) | Export Dwf options passed as a JSON on a request body. | 
**folder** | **string** | Folder with a drawing to process. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postDrawingDXF"></a>
## **postDrawingDXF**
> postDrawingDXF(name, options, folder, outPath, storage)

Export an existing drawing to DXF format with export settings specified.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of an input drawing on a storage. | 
**options** | [**DxfOptionsDTO**](DxfOptionsDTO.md) | Export DXF options passed as a JSON on a request body. | 
**folder** | **string** | Folder with a drawing to process. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postDrawingFbx"></a>
## **postDrawingFbx**
> postDrawingFbx(name, options, folder, outPath, storage)

Export an existing drawing to Fbx format with export settings specified.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of an input drawing on a storage. | 
**options** | [**FbxOptionsDTO**](FbxOptionsDTO.md) | Export Fbx options passed as a JSON on a request body. | 
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

<a name="postDrawingGlb"></a>
## **postDrawingGlb**
> postDrawingGlb(name, options, folder, outPath, storage)

Export an existing drawing to GLB format with export settings specified.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of an input drawing on a storage. | 
**options** | [**GlbOptionsDTO**](GlbOptionsDTO.md) | Export GLB options passed as a JSON on a request body. | 
**folder** | **string** | Folder with a drawing to process. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postDrawingGltf"></a>
## **postDrawingGltf**
> postDrawingGltf(name, options, folder, outPath, storage)

Export an existing drawing to GLTF format with export settings specified.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of an input drawing on a storage. | 
**options** | [**GltfOptionsDTO**](GltfOptionsDTO.md) | Export GLTF options passed as a JSON on a request body. | 
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

<a name="postDrawingObj"></a>
## **postDrawingObj**
> postDrawingObj(name, options, folder, outPath, storage)

Export an existing drawing to Obj format with export settings specified.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of an input drawing on a storage. | 
**options** | [**ObjOptionsDTO**](ObjOptionsDTO.md) | Export Obj options passed as a JSON on a request body. | 
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
**rotateFlipType** | **string** | Rotate/flip operation to apply. Possible values: RotateNoneFlipNone, Rotate90FlipNone, Rotate180FlipNone, Rotate270FlipNone, RotateNoneFlipX, Rotate90FlipX, Rotate180FlipX, Rotate270FlipX, RotateNoneFlipY, Rotate90FlipY, Rotate180FlipY, Rotate270FlipY, RotateNoneFlipXY, Rotate90FlipXY, Rotate180FlipXY, Rotate270FlipXY | 
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

<a name="postDrawingSTP"></a>
## **postDrawingSTP**
> postDrawingSTP(name, options, folder, outPath, storage)

Export an existing drawing to STP format with export settings specified.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of an input drawing on a storage. | 
**options** | [**StpOptionsDTO**](StpOptionsDTO.md) | Export STP options passed as a JSON on a request body. | 
**folder** | **string** | Folder with a drawing to process. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
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

<a name="postDrawingThreeDS"></a>
## **postDrawingThreeDS**
> postDrawingThreeDS(name, options, folder, outPath, storage)

Export an existing drawing to 3ds format with export settings specified.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of an input drawing on a storage. | 
**options** | [**ThreeDSOptionsDTO**](ThreeDSOptionsDTO.md) | Export 3ds options passed as a JSON on a request body. | 
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

<a name="postDrawingU3d"></a>
## **postDrawingU3d**
> postDrawingU3d(name, options, folder, outPath, storage)

Export an existing drawing to U3d format with export settings specified.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of an input drawing on a storage. | 
**options** | [**U3dOptionsDTO**](U3dOptionsDTO.md) | Export U3d options passed as a JSON on a request body. | 
**folder** | **string** | Folder with a drawing to process. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postDrawingWebp"></a>
## **postDrawingWebp**
> postDrawingWebp(name, options, folder, outPath, storage)

Export an existing drawing to Webp format with export settings specified.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of an input drawing on a storage. | 
**options** | [**WebpOptionsDTO**](WebpOptionsDTO.md) | Export Webp options passed as a JSON on a request body. | 
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

<a name="putDrawingCgm"></a>
## **putDrawingCgm**
> putDrawingCgm(drawingData, outPath, exportOptions, storage)

Export drawing to CGM format. Drawing data is passed as zero-indexed multipart/form-data as well as export CGM options serialized as JSON. Order of drawing data and CGM options could vary.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**drawingData** | **Buffer** | Input drawing | 
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**exportOptions** | **string** | JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/CgmOptionsDTO model definition. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putDrawingDicom"></a>
## **putDrawingDicom**
> putDrawingDicom(drawingData, outPath, exportOptions, storage)

Export drawing to Dicom format. Drawing data is passed as zero-indexed multipart/form-data as well as export Dicom options serialized as JSON. Order of drawing data and Dicom options could vary.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**drawingData** | **Buffer** | Input drawing | 
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**exportOptions** | **string** | JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/DicomOptionsDTO model definition. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json

<a name="putDrawingDraco"></a>
## **putDrawingDraco**
> putDrawingDraco(drawingData, outPath, exportOptions, storage)

Export drawing to Draco format. Drawing data is passed as zero-indexed multipart/form-data as well as export Draco options serialized as JSON. Order of drawing data and Draco options could vary.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**drawingData** | **Buffer** | Input drawing | 
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**exportOptions** | **string** | JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/DracoOptionsDTO model definition. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putDrawingDwf"></a>
## **putDrawingDwf**
> putDrawingDwf(drawingData, outPath, exportOptions, storage)

Export drawing to Dwf format. Drawing data is passed as zero-indexed multipart/form-data as well as export Dwf options serialized as JSON. Order of drawing data and Dwf options could vary.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**drawingData** | **Buffer** | Input drawing | 
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**exportOptions** | **string** | JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/DwfOptionsDTO model definition. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putDrawingDXF"></a>
## **putDrawingDXF**
> putDrawingDXF(drawingData, outPath, exportOptions, storage)

Export drawing to DXF format. Drawing data is passed as zero-indexed multipart/form-data as well as export DXF options serialized as JSON. Order of drawing data and DXF options could vary.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**drawingData** | **Buffer** | Input drawing | 
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**exportOptions** | **string** | JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/DxfOptionsDTO model definition. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putDrawingFbx"></a>
## **putDrawingFbx**
> putDrawingFbx(drawingData, outPath, exportOptions, storage)

Export drawing to Fbx format. Drawing data is passed as zero-indexed multipart/form-data as well as export Fbx options serialized as JSON. Order of drawing data and Fbx options could vary.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**drawingData** | **Buffer** | Input drawing | 
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**exportOptions** | **string** | JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/FbxOptionsDTO model definition. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
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

<a name="putDrawingGlb"></a>
## **putDrawingGlb**
> putDrawingGlb(drawingData, outPath, exportOptions, storage)

Export drawing to GLB format. Drawing data is passed as zero-indexed multipart/form-data as well as export GLB options serialized as JSON. Order of drawing data and GLB options could vary.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**drawingData** | **Buffer** | Input drawing | 
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**exportOptions** | **string** | JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/GlbOptionsDTO model definition. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="putDrawingGltf"></a>
## **putDrawingGltf**
> putDrawingGltf(drawingData, outPath, exportOptions, storage)

Export drawing to GLTF format. Drawing data is passed as zero-indexed multipart/form-data as well as export GLTF options serialized as JSON. Order of drawing data and GLTF options could vary.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**drawingData** | **Buffer** | Input drawing | 
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**exportOptions** | **string** | JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/GltfOptionsDTO model definition. | [optional]
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

<a name="putDrawingObj"></a>
## **putDrawingObj**
> putDrawingObj(drawingData, outPath, exportOptions, storage)

Export drawing to Obj format. Drawing data is passed as zero-indexed multipart/form-data as well as export Obj options serialized as JSON. Order of drawing data and Obj options could vary.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**drawingData** | **Buffer** | Input drawing | 
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**exportOptions** | **string** | JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/ObjOptionsDTO model definition. | [optional]
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

<a name="putDrawingSTP"></a>
## **putDrawingSTP**
> putDrawingSTP(drawingData, outPath, exportOptions, storage)

Export drawing to Stp format. Drawing data is passed as zero-indexed multipart/form-data as well as export Stp options serialized as JSON. Order of drawing data and Stp options could vary.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**drawingData** | **Buffer** | Input drawing | 
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**exportOptions** | **string** | JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/StpOptionsDTO model definition. | [optional]
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

<a name="putDrawingThreeDS"></a>
## **putDrawingThreeDS**
> putDrawingThreeDS(drawingData, outPath, exportOptions, storage)

Export drawing to 3ds format. Drawing data is passed as zero-indexed multipart/form-data as well as export 3ds options serialized as JSON. Order of drawing data and 3ds options could vary.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**drawingData** | **Buffer** | Input drawing | 
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**exportOptions** | **string** | JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/ThreeDSOptionsDTO model definition. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/octet-stream
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

<a name="putDrawingU3d"></a>
## **putDrawingU3d**
> putDrawingU3d(drawingData, outPath, exportOptions, storage)

Export drawing to U3d format. Drawing data is passed as zero-indexed multipart/form-data as well as export U3d options serialized as JSON. Order of drawing data and U3d options could vary.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**drawingData** | **Buffer** | Input drawing | 
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**exportOptions** | **string** | JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/U3dOptionsDTO model definition. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json

<a name="putDrawingWebp"></a>
## **putDrawingWebp**
> putDrawingWebp(drawingData, outPath, exportOptions, storage)

Export drawing to Webp format. Drawing data is passed as zero-indexed multipart/form-data as well as export Webp options serialized as JSON. Order of drawing data and Webp options could vary.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**drawingData** | **Buffer** | Input drawing | 
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed file). | [optional]
**exportOptions** | **string** | JSON-serialized export options passed as zero-indexed multipart/form-data. Follow #/definitions/WebpOptionsDTO model definition. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/octet-stream
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

<a name="putEditMetadata"></a>
## **putEditMetadata**
> putEditMetadata(drawing, metadataComponent)

Save Metadata

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**drawing** | **Buffer** |  | [optional]
**metadataComponent** | **string** |  | [optional]

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

<a name="viewer"></a>
## **viewer**
> viewer(outputFormat, drawing)

Return file for viewer

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**outputFormat** | **string** |  | 
**drawing** | **Buffer** |  | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="watermark"></a>
## **watermark**
> watermark(outputFormat, drawing, watermarkRgb, outputTypeExt)

Add watermark to drawing

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**outputFormat** | **string** |  | 
**drawing** | **Buffer** |  | [optional]
**watermarkRgb** | **string** |  | [optional]
**outputTypeExt** | **string** |  | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json



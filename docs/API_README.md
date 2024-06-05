## Documentation for API Endpoints

All URIs are relative to *https://api.aspose.cloud/v3.0/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CadApi* | [**convert**](CadApi.md#convert) | **POST** /cad/Convert | Convert CAD drawing to DXF, DWG, DGN, DWF, DWFX, DRC, IFC, STL, STP, STEP, CGM, GLB, GLTF, DWT, IGES, PLT, CF2, OBJ, HPGL, IGS, PCL, FBX, PDF, SVG format.
*CadApi* | [**copyFile**](CadApi.md#copyFile) | **PUT** /cad/storage/file/copy/\{srcPath} | Copy file
*CadApi* | [**copyFolder**](CadApi.md#copyFolder) | **PUT** /cad/storage/folder/copy/\{srcPath} | Copy folder
*CadApi* | [**createFolder**](CadApi.md#createFolder) | **PUT** /cad/storage/folder/\{path} | Create the folder
*CadApi* | [**deleteFile**](CadApi.md#deleteFile) | **DELETE** /cad/storage/file/\{path} | Delete file
*CadApi* | [**deleteFolder**](CadApi.md#deleteFolder) | **DELETE** /cad/storage/folder/\{path} | Delete folder
*CadApi* | [**downloadFile**](CadApi.md#downloadFile) | **GET** /cad/storage/file/\{path} | Download file
*CadApi* | [**editMetadata**](CadApi.md#editMetadata) | **POST** /cad/EditMetadata | Get Metadata info
*CadApi* | [**extractMetadata**](CadApi.md#extractMetadata) | **POST** /cad/ExtractMetadata | Extract Metadata from CAD drawing to txt, xml or json file.
*CadApi* | [**extractText**](CadApi.md#extractText) | **POST** /cad/ExtractText | Extract Text from CAD drawing to txt file
*CadApi* | [**getDiscUsage**](CadApi.md#getDiscUsage) | **GET** /cad/storage/disc | Get disc usage
*CadApi* | [**getDrawingProperties**](CadApi.md#getDrawingProperties) | **GET** /cad/\{name}/properties | Retrieves info about an existing drawing. 
*CadApi* | [**getDrawingResize**](CadApi.md#getDrawingResize) | **GET** /cad/\{name}/resize | Resize an existing drawing.
*CadApi* | [**getDrawingRotateFlip**](CadApi.md#getDrawingRotateFlip) | **GET** /cad/\{name}/rotateflip | Rotate/flip an existing drawing.
*CadApi* | [**getDrawingSaveAs**](CadApi.md#getDrawingSaveAs) | **GET** /cad/\{name}/saveAs/\{outputFormat} | Export an existing drawing to another format.
*CadApi* | [**getFilesList**](CadApi.md#getFilesList) | **GET** /cad/storage/folder/\{path} | Get all files and folders within a folder
*CadApi* | [**getFileVersions**](CadApi.md#getFileVersions) | **GET** /cad/storage/version/\{path} | Get file versions
*CadApi* | [**moveFile**](CadApi.md#moveFile) | **PUT** /cad/storage/file/move/\{srcPath} | Move file
*CadApi* | [**moveFolder**](CadApi.md#moveFolder) | **PUT** /cad/storage/folder/move/\{srcPath} | Move folder
*CadApi* | [**objectExists**](CadApi.md#objectExists) | **GET** /cad/storage/exist/\{path} | Check if file or folder exists
*CadApi* | [**paperToCad**](CadApi.md#paperToCad) | **POST** /cad/paper-to-cad | Convert bitmap image to DXF, DWG, DGN, DWF, DWFX, DRC, IFC, STL, STP, STEP, CGM, GLB, GLTF, DWT, IGES, PLT, CF2, OBJ, HPGL, IGS, PCL, FBX, SVG format.
*CadApi* | [**postDrawingBmp**](CadApi.md#postDrawingBmp) | **POST** /cad/\{name}/bmp | Export an existing drawing to BMP format with export settings specified.
*CadApi* | [**postDrawingCgm**](CadApi.md#postDrawingCgm) | **POST** /cad/\{name}/cgm | Export an existing drawing to CGM format with export settings specified.
*CadApi* | [**postDrawingDicom**](CadApi.md#postDrawingDicom) | **POST** /cad/\{name}/dicom | Export an existing drawing to Dicom format with export settings specified.
*CadApi* | [**postDrawingDraco**](CadApi.md#postDrawingDraco) | **POST** /cad/\{name}/drc | Export an existing drawing to Draco format with export settings specified.
*CadApi* | [**postDrawingDwf**](CadApi.md#postDrawingDwf) | **POST** /cad/\{name}/dwf | Export an existing drawing to Dwf format with export settings specified.
*CadApi* | [**postDrawingDXF**](CadApi.md#postDrawingDXF) | **POST** /cad/\{name}/dxf | Export an existing drawing to DXF format with export settings specified.
*CadApi* | [**postDrawingFbx**](CadApi.md#postDrawingFbx) | **POST** /cad/\{name}/fbx | Export an existing drawing to Fbx format with export settings specified.
*CadApi* | [**postDrawingGif**](CadApi.md#postDrawingGif) | **POST** /cad/\{name}/gif | Export an existing drawing into GIF format with export settings specified.
*CadApi* | [**postDrawingGlb**](CadApi.md#postDrawingGlb) | **POST** /cad/\{name}/glb | Export an existing drawing to GLB format with export settings specified.
*CadApi* | [**postDrawingGltf**](CadApi.md#postDrawingGltf) | **POST** /cad/\{name}/gltf | Export an existing drawing to GLTF format with export settings specified.
*CadApi* | [**postDrawingJpeg**](CadApi.md#postDrawingJpeg) | **POST** /cad/\{name}/jpeg | Export an existing drawing into JPEG format with export settings specified.
*CadApi* | [**postDrawingJpeg2000**](CadApi.md#postDrawingJpeg2000) | **POST** /cad/\{name}/jpeg2000 | Export an existing drawing into JPEG2000 format with export settings specified.
*CadApi* | [**postDrawingObj**](CadApi.md#postDrawingObj) | **POST** /cad/\{name}/obj | Export an existing drawing to Obj format with export settings specified.
*CadApi* | [**postDrawingPdf**](CadApi.md#postDrawingPdf) | **POST** /cad/\{name}/pdf | Export an existing drawing to PDF format with export settings specified.
*CadApi* | [**postDrawingPng**](CadApi.md#postDrawingPng) | **POST** /cad/\{name}/png | Export an existing drawing into PNG format with export settings specified.
*CadApi* | [**postDrawingProperties**](CadApi.md#postDrawingProperties) | **POST** /cad/properties | Retrieves info about drawing which is passed as a zero-indexed multipart/form-data content or as raw body stream.
*CadApi* | [**postDrawingPsd**](CadApi.md#postDrawingPsd) | **POST** /cad/\{name}/psd | Export an existing drawing into PSD format with export settings specified.
*CadApi* | [**postDrawingResize**](CadApi.md#postDrawingResize) | **POST** /cad/resize | Resize a drawing. Drawing data is passed as a zero-indexed multipart/form-data content or as raw body stream.
*CadApi* | [**postDrawingRotateFlip**](CadApi.md#postDrawingRotateFlip) | **POST** /cad/rotateflip | Rotate/flip a drawing. Drawing data is passed as a zero-indexed multipart/form-data content or as raw body stream.
*CadApi* | [**postDrawingSaveAs**](CadApi.md#postDrawingSaveAs) | **POST** /cad/saveAs/\{outputFormat} | Export existing drawing to another format. Drawing data is passed as zero-indexed multipart/form-data content or as raw body stream. 
*CadApi* | [**postDrawingSTP**](CadApi.md#postDrawingSTP) | **POST** /cad/\{name}/stp | Export an existing drawing to STP format with export settings specified.
*CadApi* | [**postDrawingSvg**](CadApi.md#postDrawingSvg) | **POST** /cad/\{name}/svg | Export an existing drawing to SVG format with export settings specified.
*CadApi* | [**postDrawingThreeDS**](CadApi.md#postDrawingThreeDS) | **POST** /cad/\{name}/3ds | Export an existing drawing to 3ds format with export settings specified.
*CadApi* | [**postDrawingTiff**](CadApi.md#postDrawingTiff) | **POST** /cad/\{name}/tiff | Export an existing drawing into TIFF format with export settings specified.
*CadApi* | [**postDrawingU3d**](CadApi.md#postDrawingU3d) | **POST** /cad/\{name}/u3d | Export an existing drawing to U3d format with export settings specified.
*CadApi* | [**postDrawingWebp**](CadApi.md#postDrawingWebp) | **POST** /cad/\{name}/webp | Export an existing drawing to Webp format with export settings specified.
*CadApi* | [**postDrawingWmf**](CadApi.md#postDrawingWmf) | **POST** /cad/\{name}/wmf | Export an existing drawing to WMF format with export settings specified.
*CadApi* | [**putDrawingBmp**](CadApi.md#putDrawingBmp) | **PUT** /cad/bmp | Export drawing to BMP format. Drawing data is passed as zero-indexed multipart/form-data as well as export BMP options serialized as JSON. Order of drawing data and BMP options could vary.
*CadApi* | [**putDrawingCgm**](CadApi.md#putDrawingCgm) | **PUT** /cad/cgm | Export drawing to CGM format. Drawing data is passed as zero-indexed multipart/form-data as well as export CGM options serialized as JSON. Order of drawing data and CGM options could vary.
*CadApi* | [**putDrawingDicom**](CadApi.md#putDrawingDicom) | **PUT** /cad/dicom | Export drawing to Dicom format. Drawing data is passed as zero-indexed multipart/form-data as well as export Dicom options serialized as JSON. Order of drawing data and Dicom options could vary.
*CadApi* | [**putDrawingDraco**](CadApi.md#putDrawingDraco) | **PUT** /cad/drc | Export drawing to Draco format. Drawing data is passed as zero-indexed multipart/form-data as well as export Draco options serialized as JSON. Order of drawing data and Draco options could vary.
*CadApi* | [**putDrawingDwf**](CadApi.md#putDrawingDwf) | **PUT** /cad/dwf | Export drawing to Dwf format. Drawing data is passed as zero-indexed multipart/form-data as well as export Dwf options serialized as JSON. Order of drawing data and Dwf options could vary.
*CadApi* | [**putDrawingDXF**](CadApi.md#putDrawingDXF) | **PUT** /cad/dxf | Export drawing to DXF format. Drawing data is passed as zero-indexed multipart/form-data as well as export DXF options serialized as JSON. Order of drawing data and DXF options could vary.
*CadApi* | [**putDrawingFbx**](CadApi.md#putDrawingFbx) | **PUT** /cad/fbx | Export drawing to Fbx format. Drawing data is passed as zero-indexed multipart/form-data as well as export Fbx options serialized as JSON. Order of drawing data and Fbx options could vary.
*CadApi* | [**putDrawingGif**](CadApi.md#putDrawingGif) | **PUT** /cad/gif | Export drawing to GIF format. Drawing data is passed as zero-indexed multipart/form-data as well as export GIF options serialized as JSON. Order of drawing data and GIF options could vary.
*CadApi* | [**putDrawingGlb**](CadApi.md#putDrawingGlb) | **PUT** /cad/glb | Export drawing to GLB format. Drawing data is passed as zero-indexed multipart/form-data as well as export GLB options serialized as JSON. Order of drawing data and GLB options could vary.
*CadApi* | [**putDrawingGltf**](CadApi.md#putDrawingGltf) | **PUT** /cad/gltf | Export drawing to GLTF format. Drawing data is passed as zero-indexed multipart/form-data as well as export GLTF options serialized as JSON. Order of drawing data and GLTF options could vary.
*CadApi* | [**putDrawingJpeg**](CadApi.md#putDrawingJpeg) | **PUT** /cad/jpeg | Export drawing to JPEG format. Drawing data is passed as zero-indexed multipart/form-data as well as export JPEG options serialized as JSON. Order of drawing data and JPEG options could vary.
*CadApi* | [**putDrawingJpeg2000**](CadApi.md#putDrawingJpeg2000) | **PUT** /cad/jpeg2000 | Export drawing to JPEG2000 format. Drawing data is passed as zero-indexed multipart/form-data as well as export JPEG2000 options serialized as JSON. Order of drawing data and JPEG2000 options could vary.
*CadApi* | [**putDrawingObj**](CadApi.md#putDrawingObj) | **PUT** /cad/obj | Export drawing to Obj format. Drawing data is passed as zero-indexed multipart/form-data as well as export Obj options serialized as JSON. Order of drawing data and Obj options could vary.
*CadApi* | [**putDrawingPdf**](CadApi.md#putDrawingPdf) | **PUT** /cad/pdf | Export drawing to PDF format. Drawing data is passed as zero-indexed multipart/form-data as well as export PDF options serialized as JSON. Order of drawing data and PDF options could vary.
*CadApi* | [**putDrawingPng**](CadApi.md#putDrawingPng) | **PUT** /cad/png | Export drawing to PNG format. Drawing data is passed as zero-indexed multipart/form-data as well as export PNG options serialized as JSON. Order of drawing data and PNG options could vary.
*CadApi* | [**putDrawingPsd**](CadApi.md#putDrawingPsd) | **PUT** /cad/psd | Export drawing to PSD format. Drawing data is passed as zero-indexed multipart/form-data as well as export PSD options serialized as JSON. Order of drawing data and PSD options could vary.
*CadApi* | [**putDrawingSTP**](CadApi.md#putDrawingSTP) | **PUT** /cad/stp | Export drawing to Stp format. Drawing data is passed as zero-indexed multipart/form-data as well as export Stp options serialized as JSON. Order of drawing data and Stp options could vary.
*CadApi* | [**putDrawingSvg**](CadApi.md#putDrawingSvg) | **PUT** /cad/svg | Export drawing to SVG format. Drawing data is passed as zero-indexed multipart/form-data as well as export SVG options serialized as JSON. Order of drawing data and SVG options could vary.
*CadApi* | [**putDrawingThreeDS**](CadApi.md#putDrawingThreeDS) | **PUT** /cad/3ds | Export drawing to 3ds format. Drawing data is passed as zero-indexed multipart/form-data as well as export 3ds options serialized as JSON. Order of drawing data and 3ds options could vary.
*CadApi* | [**putDrawingTiff**](CadApi.md#putDrawingTiff) | **PUT** /cad/tiff | Export drawing to TIFF format. Drawing data is passed as zero-indexed multipart/form-data as well as export TIFF options serialized as JSON. Order of drawing data and TIFF options could vary.
*CadApi* | [**putDrawingU3d**](CadApi.md#putDrawingU3d) | **PUT** /cad/u3d | Export drawing to U3d format. Drawing data is passed as zero-indexed multipart/form-data as well as export U3d options serialized as JSON. Order of drawing data and U3d options could vary.
*CadApi* | [**putDrawingWebp**](CadApi.md#putDrawingWebp) | **PUT** /cad/webp | Export drawing to Webp format. Drawing data is passed as zero-indexed multipart/form-data as well as export Webp options serialized as JSON. Order of drawing data and Webp options could vary.
*CadApi* | [**putDrawingWmf**](CadApi.md#putDrawingWmf) | **PUT** /cad/wmf | Export drawing to WMF format. Drawing data is passed as zero-indexed multipart/form-data as well as export WMF options serialized as JSON. Order of drawing data and WMF options could vary.
*CadApi* | [**putEditMetadata**](CadApi.md#putEditMetadata) | **PUT** /cad/EditMetadata | Save Metadata
*CadApi* | [**storageExists**](CadApi.md#storageExists) | **GET** /cad/storage/\{storageName}/exist | Check if storage exists
*CadApi* | [**uploadFile**](CadApi.md#uploadFile) | **PUT** /cad/storage/file/\{path} | Upload file
*CadApi* | [**viewer**](CadApi.md#viewer) | **POST** /cad/Viewer | Return file for viewer
*CadApi* | [**watermark**](CadApi.md#watermark) | **POST** /cad/Watermark | Add watermark to drawing

## Documentation for Models

Class | Description
----- | -----
[**BitmapCompression**](BitmapCompression.md) | 
[**BmpOptionsDTO**](BmpOptionsDTO.md) | Export options for BMP format
[**CadDrawTypeMode**](CadDrawTypeMode.md) | 
[**CadRasterizationOptionsDTO**](CadRasterizationOptionsDTO.md) | Raster export options
[**CadResponse**](CadResponse.md) | Represents information about a drawing.
[**Cf2Properties**](Cf2Properties.md) | Represents information about CF2 drawing.
[**CgmOptionsDTO**](CgmOptionsDTO.md) | Export options for CGM format
[**Color**](Color.md) | 
[**ColorModes**](ColorModes.md) | 
[**CompressionMethod**](CompressionMethod.md) | 
[**DgnProperties**](DgnProperties.md) | Represents information about DGN drawing.
[**DicomOptionsDTO**](DicomOptionsDTO.md) | Export options for DICOM format
[**DiscUsage**](DiscUsage.md) | Class for disc space information.
[**DracoOptionsDTO**](DracoOptionsDTO.md) | Export options for Draco format
[**DrawingOptionsBaseDTO**](DrawingOptionsBaseDTO.md) | Image options base class
[**DwfOptionsDTO**](DwfOptionsDTO.md) | Export options for DWF format
[**DwfProperties**](DwfProperties.md) | Represents information about DWF drawing.
[**DwgProperties**](DwgProperties.md) | Represents information about DWG drawing.
[**DxfOptionsDTO**](DxfOptionsDTO.md) | Export options for DXF format
[**DxfProperties**](DxfProperties.md) | Represents information about DXF drawing.
[**ErrorDetails**](ErrorDetails.md) | The error details
[**ErrorModel**](ErrorModel.md) | Error
[**FbxOptionsDTO**](FbxOptionsDTO.md) | Export options for FBX format
[**FbxProperties**](FbxProperties.md) | Represents information about FBX drawing.
[**FilesList**](FilesList.md) | Files list
[**FilesUploadResult**](FilesUploadResult.md) | File upload result
[**FileVersion**](FileVersion.md) | File Version
[**FileVersions**](FileVersions.md) | File versions FileVersion.
[**GifOptionsDTO**](GifOptionsDTO.md) | Export options for GIF format
[**GlbOptionsDTO**](GlbOptionsDTO.md) | Export options for GLB format
[**GltfOptionsDTO**](GltfOptionsDTO.md) | Export options for GLTF format
[**GraphicsOptions**](GraphicsOptions.md) | 
[**IfcProperties**](IfcProperties.md) | Represents information about IFC drawing.
[**IgsProperties**](IgsProperties.md) | Represents information about IGS drawing.
[**InterpolationMode**](InterpolationMode.md) | 
[**Jpeg2000Codec**](Jpeg2000Codec.md) | 
[**Jpeg2000OptionsDTO**](Jpeg2000OptionsDTO.md) | Export options for JPEG2000 format
[**JpegCompressionColorMode**](JpegCompressionColorMode.md) | 
[**JpegCompressionMode**](JpegCompressionMode.md) | 
[**JpegOptionsDTO**](JpegOptionsDTO.md) | Export options for JPEG format
[**LineCap**](LineCap.md) | 
[**ObjectExist**](ObjectExist.md) | Object exists
[**ObjOptionsDTO**](ObjOptionsDTO.md) | Export options for FBX format
[**ObjProperties**](ObjProperties.md) | Represents information about OBJ drawing.
[**PdfCompliance**](PdfCompliance.md) | 
[**PdfDigitalSignatureDetailsCoreDTO**](PdfDigitalSignatureDetailsCoreDTO.md) | Contains details for a PDF digital signature.
[**PdfDigitalSignatureHashAlgorithmCore**](PdfDigitalSignatureHashAlgorithmCore.md) | 
[**PdfDocumentInfo**](PdfDocumentInfo.md) | 
[**PdfDocumentOptionsDTO**](PdfDocumentOptionsDTO.md) | Export document options.
[**PdfOptionsDTO**](PdfOptionsDTO.md) | Export options for PDF format
[**PenOptions**](PenOptions.md) | 
[**PltProperties**](PltProperties.md) | Represents information about PLT drawing.
[**PngColorType**](PngColorType.md) | 
[**PngFilterType**](PngFilterType.md) | 
[**PngOptionsDTO**](PngOptionsDTO.md) | Export options for PNG format
[**PsdOptionsDTO**](PsdOptionsDTO.md) | Export options for PSD format
[**RdOptimizerSettings**](RdOptimizerSettings.md) | 
[**ResolutionSetting**](ResolutionSetting.md) | 
[**RotateFlipType**](RotateFlipType.md) | 
[**SmoothingMode**](SmoothingMode.md) | 
[**StlProperties**](StlProperties.md) | Represents information about STL drawing.
[**StorageExist**](StorageExist.md) | Storage exists
[**StorageFile**](StorageFile.md) | File or folder information
[**StpOptionsDTO**](StpOptionsDTO.md) | Export options for STP format
[**StpProperties**](StpProperties.md) | Represents information about STP drawing.
[**SvgColorMode**](SvgColorMode.md) | 
[**SvgOptionsDTO**](SvgOptionsDTO.md) | Export options for SVG format
[**TextRenderingHint**](TextRenderingHint.md) | 
[**ThreeDSOptionsDTO**](ThreeDSOptionsDTO.md) | Export options for 3DS format
[**TiffByteOrder**](TiffByteOrder.md) | 
[**TiffCompressions**](TiffCompressions.md) | 
[**TiffExpectedFormat**](TiffExpectedFormat.md) | 
[**TiffOptionsDTO**](TiffOptionsDTO.md) | Export options for TIFF format
[**TiffPhotometrics**](TiffPhotometrics.md) | 
[**U3dOptionsDTO**](U3dOptionsDTO.md) | Export options for U3D format
[**UnitType**](UnitType.md) | 
[**VectorRasterizationOptionsDTO**](VectorRasterizationOptionsDTO.md) | Base raster export options class
[**WebpOptionsDTO**](WebpOptionsDTO.md) | Export options for WEBP format
[**WmfOptionsDTO**](WmfOptionsDTO.md) | Export options for WMF format

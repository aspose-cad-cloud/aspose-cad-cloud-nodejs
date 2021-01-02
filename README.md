# Aspose.CAD Cloud Node.Js SDK
[Aspose.CAD Cloud](https://products.aspose.cloud/cad) is a true [REST API](https://apireference.aspose.cloud/cad/) that enables you to perform a wide range of CAD and BIM drawings processing operations including manipulation, editing, export and conversion in a cloud, with zero initial costs.

This repository contains [Aspose.CAD Cloud Node.js SDK](https://products.aspose.cloud/cad/nodejs) source code which is written in TypeScript. This SDK allows you to work with Aspose.CAD Cloud REST APIs in your Node.js applications quickly and easily, with zero initial cost and gain all benefits of strong types and IDE highlights.

# Key Features

* Supports the latest versions of AutoCAD DWG, DXF, DWF, DWFX, DWT, STL, IGS, DGN, OBJ and CF2 files
* Convert CAD drawings to high quality PDF
* Convert CAD drawing to high quality raster images
* Convert CAD drawing to high quality vector files like SVG and WMF
* Modify and convert CAD drawing to DXF
* Modify and convert CAD drawing to DWF
* Select and modify specific entities
* Retrieve & update drawing properties and metadata
* Select and convert specific layouts
* Select and convert specific layers
* Track the file conversion process

#### Drawing Formats Support
Export the following drawing to various formats (generally supported ones are BMP, PSD, JPEG, TIFF, GIF, PNG, JPEG2000, SVG, WMF and PDF):
* DWG
* DXF
* DWF
* DWFX
* DWT
* STL
* IGS
* DGN
* OBJ
* CF2

Process options, change and return drawings in the same format:
* DXF
* DWF

Output formats to export:
* BMP
* PSD
* JPEG
* TIFF
* GIF
* PNG
* JPEG2000 (JP2, J2K)
* SVG
* WMF
* PDF

#### Supported CAD Operations
* Export 
* Resize
* Crop
* Rotate and Flip

Look at [API Reference](https://apireference.aspose.cloud/cad/) for full API specification.

For the complete list of use-cases, please refer to the [format support document](https://docs.aspose.cloud/cad/supported-file-formats/) to see what you can achieve!

Detalied official documentation can be found at the [following link](https://docs.aspose.cloud/cad/).

## Getting Started

1. **Sign Up**. Before you begin, you need to sign up for an account on our [Dashboard](https://dashboard.aspose.cloud/) and retrieve your [credentials](https://dashboard.aspose.cloud/#/apps).
2. **Minimum requirements**. This SDK requires [Node.js 6.x and higher](https://nodejs.org/download/release/).
3. **Install Aspose.CAD Cloud Node.Js SDK**.

Please, add the following [npm package](https://www.npmjs.com/package/@asposecloud/aspose-cad-cloud) to your project.json as a dependency.
```json
{
  "dependencies": {
    "@asposecloud/aspose-cad-cloud": "^20.11.0"
  }
}

```
Import the dependencies to your code as follows.
```ts
import * as cad from "@asposecloud/aspose-cad-cloud";
```

## How to use the SDK?

The complete source code is available in this repository folder. You can either directly use it in your project via source code or get [NPM distribution](https://www.npmjs.com/package/@asposecloud/aspose-cad-cloud) (recommended). For more details, please visit our [documentation website](https://docs.aspose.cloud/cad/available-sdks/).

#### Aspose.CAD Cloud-hosted service VS on-premise deployment
You can choose either to use Aspose.CAD Cloud-hosted drawings processing service (the standard way) or the Docker image from Docker Hub deployed on-premise to serve the requests - https://hub.docker.com/r/aspose/cad-cloud.
The details about key differences and deployment process is described on the dedicated Docker Hub page.

### Prerequisites

To use Aspose CAD for Cloud Java SDK you need to register an account with [Aspose Cloud](https://www.aspose.cloud/) and lookup/create App Key and SID at [Cloud Dashboard](https://dashboard.aspose.cloud/#/apps). There is free quota available. For more details, see [Aspose Cloud Pricing](https://purchase.aspose.cloud/pricing).

The solution is updated using [code generator](https://github.com/aspose-CAD-cloud/aspose-CAD-cloud-codegen).

# Example
```ts
// optional parameters are base URL, API version and debug mode
// default base URL is https://api.aspose.cloud/
// default API version is v3.0
// default debug mode is false
// authentication type is OAuth2.0 (bearer JWT token)

import * as cad from "@asposecloud/aspose-cad-cloud";

class MyApiWrapper
{
    public async myApiCall()
    {
        const cadApi: cad.CadApi = new cad.CadApi("yourAppKey", "yourAppSID");
        
        // this GET request converts drawing files
        // nullable parameters are input file folder, Aspose storage name (if you have more than one storage and want to use non-default one), rasterization options and output file path 
        // if output file path is not set, resulting image is returned in a stream; otherwise, it's saved at the specified path in the storage and null is returned
		const request: cad.GetDrawingSaveAsRequest = 
                            new cad.GetDrawingSaveAsRequest({ name: "inputDrawing.dxf", outputFormat: "png", folder: "InputFolder", storage: "Your Storage", outPath: "output.png" });

        // returns empty response data value, saves result to storage
        await cadApi.getDrawingSaveAs(request);
        
        const requestWithRet: cad.GetDrawingSaveAsRequest = 
                            new cad.GetDrawingSaveAsRequest({ name: "inputDrawing.dxf", outputFormat: "png", folder: "InputFolder", storage: null, outPath: null });
							
        // returns resulting image buffer
        const apiResponse = await cadApi.getDrawingSaveAs(requestWithRet);
    
        // another option is to use POST request and send drawing as a stream, if it's not present in your storage         
        postSaveRequest: cad.PostDrawingSaveAsRequest = new cad.PostDrawingSaveAsRequest({ drawingData: inputBytes, outputFormat: "png", outPath: "ResultFolder/resultDrawing.png", storage: "My Storage" });
        	
        // returns empty response data value, saves result to storage
        await cadApi.postDrawingSaveAs(postSaveRequest);
        
        postStreamRequest: cad.PostDrawingSaveAsRequest = new PostDrawingSaveAsRequest({ drawingData: inputBytes, outputFormat: "png", outPath: null, storage: null });
        	
        // returns resulting image bytes
        const bufferResponse = await cadApi.postDrawingSaveAs(postStreamRequest);
    }
}

// other requests typically follow the same principles
```

# Tests 
Tests from this repo are intended for internal usage only.

## Dependencies
* [Node.js 6.x and higher](https://nodejs.org/download/release/)

## Licensing
All Aspose.CAD Cloud SDKs, helper scripts and templates are licensed under [MIT License](LICENSE).

## Contact Us
Your feedback is very important to us. Please feel free to contact via
+ [**Free Support Forum**](https://forum.aspose.cloud/c/cad)
+ [**Paid Support Helpdesk**](https://helpdesk.aspose.cloud/)

## Resources
+ [**Web API reference**](https://apireference.aspose.cloud/cad/)
+ [**Website**](https://www.aspose.cloud)
+ [**Product Home**](https://products.aspose.cloud/cad)
+ [**Documentation**](https://docs.aspose.cloud/cad/)
+ [**Blog**](https://blog.aspose.cloud/category/aspose-products/aspose.cad-cloud/)

## Other languages
We generate our SDKs in different languages so you may check if yours is available in our [repository](https://github.com/aspose-cad-cloud). If you don't find your language in the list, feel free to request it from us, or use raw REST API requests as you can find it [here](https://products.aspose.cloud/cad/curl).

## Code generator
The solution is updated using [code generator](https://github.com/aspose-cad-cloud/aspose-cad-cloud-codegen).

![](https://img.shields.io/badge/api-v3.0-lightgrey) ![npm (scoped)](https://img.shields.io/npm/v/@asposecloud/aspose-cad-cloud) ![npm bundle size](https://img.shields.io/bundlephobia/min/@asposecloud/aspose-cad-cloud) ![node-current](https://img.shields.io/node/v/@asposecloud/aspose-cad-cloud) [![GitHub license](https://img.shields.io/github/license/aspose-cad-cloud/aspose-cad-cloud-nodejs)](LICENSE) ![GitHub last commit](https://img.shields.io/github/last-commit/Aspose-cad-Cloud/aspose-cad-cloud-nodejs)

# AutoCAD File Processing Node.js Cloud REST API
[Aspose.CAD Cloud](https://products.aspose.cloud/cad) is a true [REST API](https://apireference.aspose.cloud/cad/) that enables you to perform a wide range of CAD and BIM drawings processing operations including manipulation, export and conversion in a cloud, with zero initial costs.

This repository contains [Aspose.CAD Cloud Node.js SDK](https://products.aspose.cloud/cad/nodejs) source code which is written in Node.js. This SDK allows you to work with Aspose.CAD Cloud REST APIs in your .NET applications quickly and easily, with zero initial cost and gain all benefits of strong types and IDE highlights.

## CAD Processing Features
- Export CAD drawings to other file formats.
- Get image properties of a CAD drawing.
- Change the scale of an AutoCAD sketch.
- Flip and rotate a CAD image.
- Upload or download CAD drawings to the cloud storage.
- Copy, move, delete CAD files from the cloud storage.

## Read & Write CAD Formats
DXF (R12/2007/2010)

## Save CAD As
*Fixed Layout*: PDF (as a vector and as a raster)
*Images*: BMP, PNG, JPG, JPEG, JPEG2000, TIF, TIFF, PSD, GIF, WMF

## Read CAD Formats
DWG (13, 14, 2000, 2004), DWG (2010, 2013, 2014), DWG (2015, 2017, 2018), DWT (13, 14, 2000, 2004), DWT (2010, 2013, 2014), DWT (2015, 2017, 2018), DWF, DGN v7, IGES (IGS), PLT, Industry Foundation Classes (IFC), STereoLithography (STL)

Look at [API Reference](https://apireference.aspose.cloud/cad/) for full API specification.

For the complete list of use-cases, please refer to the [format support document](https://docs.aspose.cloud/cad/supported-file-formats/) to see what you can achieve!

Detailed official documentation can be found at the [following link](https://docs.aspose.cloud/cad/).

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

## Aspose.CAD Cloud SDKs in Popular Languages

| .NET | Java | PHP | Python | Ruby | Node.js |
|---|---|---|---|---|---|
| [GitHub](https://github.com/aspose-cad-cloud/aspose-cad-cloud-dotnet) | [GitHub](https://github.com/aspose-cad-cloud/aspose-cad-cloud-java) | [GitHub](https://github.com/aspose-cad-cloud/aspose-cad-cloud-php) | [GitHub](https://github.com/aspose-cad-cloud/aspose-cad-cloud-python) | [GitHub](https://github.com/aspose-cad-cloud/aspose-cad-cloud-ruby)  | [GitHub](https://github.com/aspose-cad-cloud/aspose-cad-cloud-node) |
| [NuGet](https://www.nuget.org/packages/Aspose.cad-Cloud/) | [Maven](https://repository.aspose.cloud/webapp/#/artifacts/browse/tree/General/repo/com/aspose/aspose-cad-cloud) | [Composer](https://packagist.org/packages/aspose/aspose-cad-cloud) | [PIP](https://pypi.org/project/aspose.cad-cloud/) | [GEM](https://rubygems.org/gems/aspose_cad_cloud)  | [NPM](https://www.npmjs.com/package/aspose-cad-cloud) |

[Product Page](https://products.aspose.cloud/cad/nodejs) | [Documentation](https://docs.aspose.cloud/display/cadcloud/Home) | [API Reference](https://apireference.aspose.cloud/cad/) | [Code Samples](https://github.com/aspose-cad-cloud/aspose-cad-cloud-nodejs) | [Blog](https://blog.aspose.cloud/category/cad/) | [Free Support](https://forum.aspose.cloud/c/cad) | [Free Trial](https://dashboard.aspose.cloud/#/apps)|

### CAD - Save as: convert a drawing from a storage to a raster or vector format and store it to storage
```ts
// optional parameters are base URL, API version and debug mode
const cadApi = new cad.cadApi("yourAppKey", "yourAppSID");
        
// convert image from storage to PDF
const request: cad.GetDrawingSaveAsRequest = new cad.GetDrawingSaveAsRequest(
    { 
        name: "test.dwg", // drawing previously uploaded into your Aspose Cloud storage
        outputFormat: "pdf", // output file format
        folder: "", // folder where input file wiil be seeked on
        storage: "storage", // storage name
        outPath: "path/test.pdf" // path inside the storage to place output file to
    });

    const response = await this.cadApi.getDrawingSaveAs(request);

// other cad requests typically follow the same principles regarding stream/storage relations
```

### CAD - Save as: convert a drawing from a storage to a raster or vector format and return it on response
```ts
// optional parameters are base URL, API version and debug mode
const cadApi = new cad.cadApi("yourAppKey", "yourAppSID");
        
// convert image from storage to PDF
const request: cad.GetDrawingSaveAsRequest = new cad.GetDrawingSaveAsRequest(
    { 
        name: "test.dxf", // drawing previously uploaded into your Aspose Cloud storage
        outputFormat: "gif", // output file format
        folder: "", // folder where input file wiil be seeked on
        storage: "storage", // storage name
        outPath: null // make 'outPath' empty to force return output result on response
    });

    const response = await this.cadApi.getDrawingSaveAs(request);

// other cad requests typically follow the same principles regarding stream/storage relations
```

### CAD - Save as: convert a drawing from a request stream to another format
```ts
// read input file
fs = require('fs');
var input = fs.readFile("test.dwf");

// optional parameters are base URL, API version and debug mode
const cadApi = new cad.cadApi("yourAppKey", "yourAppSID");
        
// convert image from storage to GIF
const request: cad.PostDrawingSaveAsRequest = new cad.PostDrawingSaveAsRequest(
    { 
        drawingData: input,
        outputFormat: "png", // output file format
        outPath: null // make 'outPath' empty to force return output result on response
    });

    const response = await this.cadApi.postDrawingSaveAs(request);
    console.log(response.length > 0);

// other cad requests typically follow the same principles regarding stream/storage relations
```
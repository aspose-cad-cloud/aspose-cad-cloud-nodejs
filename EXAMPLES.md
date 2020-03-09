### Imaging - Save as: convert image from storage to another format
```ts
// optional parameters are base URL, API version and debug mode
const imagingApi = new cad.ImagingApi("yourAppKey", "yourAppSID");
        
try {
    // get local image
    const localInputImage = fs.readFileSync("test.png");

    // upload local image to storage
    const uploadFileRequest =
        new cad.UploadFileRequest({ path: "ExampleFolderNet/inputImage.png", file: localInputImage });
    const result: imaging.FilesUploadResult = await imagingApi.uploadFile(uploadFileRequest);
    // inspect result.errors list if there were any
    // inspect result.uploaded list for uploaded file names

    // convert image from storage to JPEG
     const saveAsRequest =
        new cad.SaveImageAsRequest({
            name: "inputImage.png", format: "jpg", folder: "ExampleFolderNet" });

    const convertedImage =
        await imagingApi.saveImageAs(saveAsRequest);

    // process resulting image
    // for example, save it to storage
    uploadFileRequest =
        new cad.UploadFileRequest({ path: "ExampleFolderNet/resultImage.jpg", file: convertedImage });
    result = await imagingApi.uploadFile(uploadFileRequest);
    // inspect result.errors list if there were any
    // inspect result.uploaded list for uploaded file names
} finally {
    // remove files from storage
    await imagingApi.deleteFile(
        new cad.DeleteFileRequest({ path: "ExampleFolderNet/inputImage.png" }));
    await imagingApi.deleteFile(
        new cad.DeleteFileRequest({ path: "ExampleFolderNet/resultImage.jpg" }));
}

// other Imaging requests typically follow the same principles regarding stream/storage relations
```

### Imaging - Save as: convert image from stream to another format
```ts
// optional parameters are base URL, API version and debug mode
const imagingApi = new cad.ImagingApi("yourAppKey", "yourAppSID");
        
try {
    // get local image
    const localInputImage = fs.readFileSync("test.png");

    // convert image from request stream to JPEG and save it to storage
    // please, use outPath parameter for saving the result to storage
    const saveAsToStorageRequest =
        new cad.CreateSavedImageAsRequest({
    imageData: localInputImage, format: "jpg", outPath: "ExampleFolderNet/resultImage.jpg" });

    await imagingApi.createSavedImageAs(saveAsToStorageRequest);

    // download saved image from storage and process it
    const savedFile =
       await imagingApi.downloadFile(
           new cad.DownloadFileRequest({ path: "ExampleFolderNet/resultImage.jpg" }));
    
    // convert image from request stream to JPEG and read it from resulting stream
    // please, set outPath parameter as null to return result in request stream instead of saving to storage
    const saveAsToStreamRequest =
        new cad.CreateSavedImageAsRequest({ imageData: localInputImage, format: "jpg", outPath: null });

    // process resulting image from response stream
    const convertedImage = await imagingApi.createSavedImageAs(saveAsToStreamRequest);
} finally {
    // remove files from storage
    await imagingApi.deleteFile(
        new cad.DeleteFileRequest({ path: "ExampleFolderNet/resultImage.jpg" }));
}

// other Imaging requests typically follow the same principles regarding stream/storage relations
```

### Imaging.AI - Compare two images
```ts
const imagingApi = new cad.ImagingApi("yourAppKey", "yourAppSID");
 
// create search context or use existing search context ID if search context was created earlier
const apiResponse = await imagingApi.createImageSearch(
    new cad.CreateImageSearchRequest());
const searchContextId = apiResponse.id;
 
// specify images for comparing (image ID is a path to image in storage)
const imageInStorage1 = "WorkFolder\Image1.jpg";
const imageInStorage2 = "WorkFolder\Image2.jpg";
  
// compare images
const response = await imagingApi.compareImages(
    new cad.CompareImagesRequest({ 
        searchContextId, imageId1: imageInStorage1, imageId2: imageInStorage2 }));
const similarity = response.results[0].similarity;
```

### Imaging.AI - Find similar images
```ts
const imagingApi = new cad.ImagingApi("yourAppKey", "yourAppSID");
 
// create search context or use existing search context ID if search context was created earlier
const apiResponse = await imagingApi.createImageSearch(
    new cad.CreateImageSearchRequest());
const searchContextId = apiResponse.id;
 
// extract images features if it was not done before
await imagingApi.createImageFeatures(
    new cad.CreateImageFeaturesRequest({ 
        searchContextId, imageId: null, imagesFolder: "WorkFolder" }));
 
// wait 'till image features extraction is completed
while ((await imagingApi.getImageSearchStatus(
    new cad.GetImageSearchStatusRequest({ searchContextId }))).searchStatus !== "Idle") {
        await new Promise((resolve) => setTimeout(resolve, 10000));
}    
 
const imageFromStorage: boolean = true;
 
let results: imaging.SearchResultsSet;
if (imageFromStorage) {
    // use search image from storage
    const storageImageId = "searhImage.jpg";
    results = await imagingApi.findSimilarImages(
        new cad.FindSimilarImagesRequest({ 
            searchContextId: apiResponse.id, similarityThreshold: 90,
                maxCount: 5, imageData: null, imageId: storageImageId }));
} else {
    // load search image as a stream
    const imageStream: Buffer = fs.readFileSync("yourLocalImagePath");
    results = await imagingApi.findSimilarImages(
            new cad.FindSimilarImagesRequest({ 
                searchContextId: apiResponse.id, similarityThreshold: 90, 
                    maxCount: 5, imageData: imageStream }));
}
             
// process search results
for (const searchResult of results.results) {
   console.log(`ImageName: ${searchResult.imageId}, Similarity: ${searchResult.similarity}`);
}
```

### Imaging.AI - Find duplicate images
```ts
const imagingApi = new cad.ImagingApi("yourAppKey", "yourAppSID");
 
// create search context or use existing search context ID if search context was created earlier
const apiResponse = await imagingApi.createImageSearch(
    new cad.CreateImageSearchRequest());
const searchContextId = apiResponse.id;
 
// extract images features if it was not done before
await imagingApi.createImageFeatures(
    new cad.CreateImageFeaturesRequest({ 
        searchContextId, imageId: null, imagesFolder: "WorkFolder" }));
 
// wait 'till image features extraction is completed
while ((await imagingApi.getImageSearchStatus(
    new cad.GetImageSearchStatusRequest({ searchContextId }))).searchStatus !== "Idle") {
        await new Promise((resolve) => setTimeout(resolve, 10000));
}    

// request finding duplicates
const response = await imagingApi.findImageDuplicates(
    new cad.FindImageDuplicatesRequest({ searchContextId, similarityThreshold: 90 }));
 
// process duplicates search results
for (const duplicates of response.duplicates) {
    console.log("Duplicates:");
    for (const duplicate of duplicates.duplicateImages) { 
        console.log(
           `ImageName: ${duplicate.imageId}, Similarity: ${duplicate.similarity}`);
    }
}
```

### Imaging.AI - Search images by tags
```ts
const imagingApi = new cad.ImagingApi("yourAppKey", "yourAppSID");
 
// create search context or use existing search context ID if search context was created earlier
const apiResponse = await imagingApi.createImageSearch(
    new cad.CreateImageSearchRequest());
const searchContextId = apiResponse.id;
 
// extract images features if it was not done before
await imagingApi.createImageFeatures(
    new cad.CreateImageFeaturesRequest({
        searchContextId, imageId: null, imagesFolder: "WorkFolder" }));
 
// wait 'till image features extraction is completed
while ((await imagingApi.getImageSearchStatus(
    new cad.GetImageSearchStatusRequest({ searchContextId }))).searchStatus !== "Idle") {
        await new Promise((resolve) => setTimeout(resolve, 10000));
}    
 
const tag = "MyTag";
// load tag image as a stream
const tagImageStream: Buffer = fs.readFileSync("yourLocalImage");
await imagingApi.createImageTag(
    new cad.CreateImageTagRequest({ 
        imageData: tagImageStream, searchContextId, tagName: tag }));
 
// serialize search tags collection to JSON
const searchTags = JSON.stringify([ tag ]);
 
// search images by tags
const response = await imagingApi.findImagesByTags(
    new cad.FindImagesByTagsRequest({ 
        tags: searchTags, searchContextId, similarityThreshold: 90, maxCount: 10 }));
 
// process search results
for (const searchResult of response.results) {
    console.log(`ImageName: ${searchResult.imageId}, Similarity: ${searchResult.similarity}`);
}
```

### Imaging.AI - Delete search context
```ts
// search context is stored in the storage, and in case if search context is not needed anymore it should be removed
await imagingApi.deleteImageSearch(new cad.DeleteImageSearchRequest({ searchContextId }));
```

### Exception handling and error codes
```ts
try {
    await imagingApi.deleteImageSearch(
        new cad.DeleteImageSearchRequest({ searchContextId: "xxx" }));
} catch (err) {
    console.log(`Error status code: ${err.statusCode}`);
    console.log(`Error message: ${err.message}`);
    // inspect err.error
}
```
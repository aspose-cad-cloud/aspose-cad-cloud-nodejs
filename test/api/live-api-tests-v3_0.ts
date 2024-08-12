/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose">
*   Copyright (c) 2018-2019 Aspose Pty Ltd. All rights reserved.
* </copyright>
* <summary>
*   Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the "Software"), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
* 
*  The above copyright notice and this permission notice shall be included in all
*  copies or substantial portions of the Software.
* 
*  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
*  SOFTWARE.
* </summary>
* --------------------------------------------------------------------------------------------------------------------
*/

import * as cad from "../../lib/api";
import { ApiTester } from "../base/api-tester";

/**
 * Class for testing save as API calls
 */
class LiveApiTests extends ApiTester {
    
    public async postPaperToCadTest(formatExtension: string) {
        let name: string = null;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;
        const formatsToExport: string[] = Object.assign([], this.BasicCadExportFormats);

        for (const inputFile of this.InputTestFiles) {
            if (inputFile.name.endsWith(formatExtension)) {
                name = inputFile.name;
            } else {
                continue;
            }

            for (const outputFormat of formatsToExport) {                
                let finalFileName = `${name}_paper_to_cad.${outputFormat}`;

                await this.testPostRequest(
                        "postPaperToCadTest",
                        `Input drawing: ${name}; Output format: ${outputFormat}`,
                        name,
                        async (inputStream) => {
                            const request: cad.PaperToCadRequest = 
                            new cad.PaperToCadRequest({ drawingData: inputStream, outputFormat});
                            const response = await this.cadApi.paperToCad(request);
                            return response;
                        },
                        folder,
                        null,
                        finalFileName,
                        storage);
            }
        }
    }

    public async postConvertTest(formatExtension: string, ...additionalExportFormats: string[]) {
        let name: string = null;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;
        const formatsToExport: string[] = Object.assign([], this.BasicExportFormats);

        for (const additionalExportFormat of additionalExportFormats) {
            if (!formatsToExport.includes(additionalExportFormat)) {
                formatsToExport.push(additionalExportFormat);
            }
        }

        for (const inputFile of this.InputTestFiles) {
            if (inputFile.name.endsWith(formatExtension)) {
                name = inputFile.name;
            } else {
                continue;
            }

            for (const outputFormat of formatsToExport) {                
                let finalFileName = `${name}_convert.${outputFormat}`;

                await this.testPostRequest(
                        "postConvertTest",
                        `Input drawing: ${name}; Output format: ${outputFormat}`,
                        name,
                        async (inputStream) => {
                            const request: cad.ConvertRequest = 
                            new cad.ConvertRequest({ drawingData: inputStream, outputFormat});
                            const response = await this.cadApi.convert(request);
                            return response;
                        },
                        folder,
                        null,
                        finalFileName,
                        storage);
            }
        }
    }

    public async postWatermarkTest(formatExtension: string, ...additionalExportFormats: string[]) {
        let name: string = null;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;
        const formatsToExport: string[] = Object.assign([], this.BasicExportFormats);

        for (const additionalExportFormat of additionalExportFormats) {
            if (!formatsToExport.includes(additionalExportFormat)) {
                formatsToExport.push(additionalExportFormat);
            }
        }

        const watermarkRGB = new cad.WatermarkRGB({
            B: 0,
            G: 255,
            R: 0,
            text: "watermark"
        })

        for (const inputFile of this.InputTestFiles) {
            if (inputFile.name.endsWith(formatExtension)) {
                name = inputFile.name;
            } else {
                continue;
            }

            for (const outputFormat of formatsToExport) {                
                let finalFileName = `${name}_watermark.${outputFormat}`;

                await this.testPostRequest(
                        "postWatermarkTest",
                        `Input drawing: ${name}; Output format: ${outputFormat}`,
                        name,
                        async (inputStream) => {
                            const request: cad.WatermarkRequest = 
                            new cad.WatermarkRequest(
                                { 
                                drawingData: inputStream,
                                outputFormat: outputFormat,
                                watermark: JSON.stringify(watermarkRGB)
                            });
                            const response = await this.cadApi.watermark(request);
                            return response;
                        },
                        folder,
                        null,
                        finalFileName,
                        storage);
            }
        }
    }

    public async postExtractTextTest(formatExtension: string) {
        let name: string = null;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;
        const formatsToExport: string[] = new Array<string>("txt");

        for (const inputFile of this.InputTestFiles) {
            if (inputFile.name.endsWith(formatExtension)) {
                name = inputFile.name;
            } else {
                continue;
            }

            for (const outputFormat of formatsToExport) {                
                let finalFileName = `${name}_extract_text.${outputFormat}`;

                await this.testPostRequest(
                        "postExtractTextTest",
                        `Input drawing: ${name}; Output format: ${outputFormat}`,
                        name,
                        async (inputStream) => {
                            const request: cad.ExtractTextRequest = 
                            new cad.ExtractTextRequest({ drawingData: inputStream});
                            const response = await this.cadApi.extractText(request);
                            return response;
                        },
                        folder,
                        null,
                        finalFileName,
                        storage);
            }
        }
    }

    public async postExtractMetadataTest(formatExtension: string) {
        let name: string = null;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;
        const formatsToExport: string[] =  new Array<string>("json", "xml", "txt");

        for (const inputFile of this.InputTestFiles) {
            if (inputFile.name.endsWith(formatExtension)) {
                name = inputFile.name;
            } else {
                continue;
            }

            for (const outputFormat of formatsToExport) {                
                let finalFileName = `${name}_extract_metadata.${outputFormat}`;

                await this.testPostRequest(
                        "postExtractMetadataTest",
                        `Input drawing: ${name}; Output format: ${outputFormat}`,
                        name,
                        async (inputStream) => {
                            const request: cad.ExtractMetadataRequest = 
                            new cad.ExtractMetadataRequest({ drawingData: inputStream, outputFormat});
                            const response = await this.cadApi.extractMetadata(request);
                            return response;
                        },
                        folder,
                        null,
                        finalFileName,
                        storage);
            }
        }
    }

    public async postEditMetadataTest(formatExtension: string) {
        let name: string = null;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;
        const formatsToExport: string[] = new Array<string>("json");

        for (const inputFile of this.InputTestFiles) {
            if (inputFile.name.endsWith(formatExtension)) {
                name = inputFile.name;
            } else {
                continue;
            }

            for (const outputFormat of formatsToExport) {                
                let finalFileName = `${name}_post_edit_metadata.${outputFormat}`;

                await this.testPostRequest(
                        "postEditMetadataTest",
                        `Input drawing: ${name}; Output format: ${outputFormat}`,
                        name,
                        async (inputStream) => {
                            const request: cad.EditMetadataRequest = 
                            new cad.EditMetadataRequest({ drawingData: inputStream});
                            const response = await this.cadApi.editMetadata(request);
                            return response;
                        },
                        folder,
                        null,
                        finalFileName,
                        storage);
            }
        }
    }

    public async putEditMetadataTest(formatExtension: string) {
        let name: string = null;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;
        const formatsToExport: string[] = new Array<string>("dxf");
        const metadataComponent: string = "{\"Name\":\"DxfImage\",\"Level\":0,\"Components\":[{\"Name\":\"SummaryInfoWrapper\",\"Level\":0,\"Components\":[{\"Name\":\"Title\",\"Value\":\"TestValue\",\"Type\":\"String\",\"Level\":0,\"Components\":[]},{\"Name\":\"Subject\",\"Type\":\"String\",\"Level\":0,\"Components\":[]},{\"Name\":\"Author\",\"Type\":\"String\",\"Level\":0,\"Components\":[]},{\"Name\":\"Keywords\",\"Type\":\"String\",\"Level\":0,\"Components\":[]},{\"Name\":\"Comments\",\"Type\":\"String\",\"Level\":0,\"Components\":[]},{\"Name\":\"LastSavedBy\",\"Type\":\"String\",\"Level\":0,\"Components\":[]},{\"Name\":\"RevisionNumber\",\"Type\":\"String\",\"Level\":0,\"Components\":[]},{\"Name\":\"HyperlinkBase\",\"Type\":\"String\",\"Level\":0,\"Components\":[]},{\"Name\":\"EditingTime\",\"Value\":\"01:59:54.7930000\",\"Type\":\"TimeSpan\",\"Level\":0,\"Components\":[]},{\"Name\":\"CreateDateTime\",\"Value\":\"1888-04-12T07:59:59\",\"Type\":\"DateTime\",\"Level\":0,\"Components\":[]},{\"Name\":\"ModifiedDateTime\",\"Value\":\"1998-03-26T10:23:29\",\"Type\":\"DateTime\",\"Level\":0,\"Components\":[]},{\"Name\":\"CreateDateTimeUtc\",\"Type\":\"DateTime\",\"Level\":0,\"Components\":[]},{\"Name\":\"ModifiedDateTimeUtc\",\"Type\":\"DateTime\",\"Level\":0,\"Components\":[]}]}]}".toLowerCase();
        
        for (const inputFile of this.InputTestFiles) {
            if (inputFile.name.endsWith(formatExtension)) {
                name = inputFile.name;
            } else {
                continue;
            }

            for (const outputFormat of formatsToExport) {                
                let finalFileName = `${name}_put_edit_metadata.${outputFormat}`;

                await this.testPutRequest(
                        "putEditMetadataTest",
                        `Input drawing: ${name}; Output format: ${outputFormat}`,
                        name,
                        async (inputStream) => {
                            const request: cad.PutEditMetadataRequest = 
                            new cad.PutEditMetadataRequest({ drawingData: inputStream, metadataComponent});
                            const response = await this.cadApi.putEditMetadata(request);
                            return response;
                        },
                        folder,
                        null,
                        finalFileName,
                        storage);
            }
        }
    }
}

//process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
const testClass: LiveApiTests = new LiveApiTests();
const useExtendedTests: boolean = process.env.ExtendedTests === "true";
console.log("Extended: " + useExtendedTests);

beforeEach(() => {
    jest.setTimeout(ApiTester.DefaultTimeout);
});

beforeAll(async () =>  {
    await testClass.beforeAll();
}, 60000);

afterAll(async () =>  {
    await testClass.afterAll();
}, 60000);

describe.each([[".dwg", false], [".dxf", false]])(
    "Live_V3",
    (formatExtension, saveResultToStorage) => {
        test(`ConvertTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.postConvertTest(formatExtension);
        });

        test(`PaperToCadTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.postPaperToCadTest(formatExtension);
        });

        test(`WatermarkTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.postWatermarkTest(formatExtension);
        });

        beforeEach(() => {
            jest.setTimeout(ApiTester.DefaultTimeout);
        });
    },
);
describe.each([[".png", false], [".dxf", false]])(
    "Live_V3",
    (formatExtension, saveResultToStorage) => {

        test(`PaperToCadTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.postPaperToCadTest(formatExtension);
        });

        beforeEach(() => {
            jest.setTimeout(ApiTester.DefaultTimeout);
        });
    },
);

describe.each([[".dxf", false]])(
    "Live_V3",
    (formatExtension, saveResultToStorage) => {
        test(`ExtractTextTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.postExtractTextTest(formatExtension);
        });

        test(`ExtractMetadataTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.postExtractMetadataTest(formatExtension);
        });
    
        test(`EditMetadataTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.postEditMetadataTest(formatExtension);
        });

        test(`PutEditMetadatatTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.putEditMetadataTest(formatExtension);
        });

        beforeEach(() => {
            jest.setTimeout(ApiTester.DefaultTimeout);
        });
    },
);
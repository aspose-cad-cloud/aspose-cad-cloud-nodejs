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
class BmpApiTests extends ApiTester {
    
    public async postBmpTest(formatExtension: string, saveResultToStorage: boolean) {
        let name: string = null;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;
        const outputFormat: string = "bmp";

        const exportOpt: cad.BmpOptionsDTO = new cad.BmpOptionsDTO({
            vectorRasterizationOptions: new cad.CadRasterizationOptionsDTO({
                pageHeight: 400,
                pageWidth: 500,
                drawColor: new cad.ColorDTO({
                    B:0,
                    R:0,
                    G:0
                })
            })
       })

        for (const inputFile of this.InputTestFiles) {
            if (inputFile.name.endsWith(formatExtension)) {
                name = inputFile.name;
            } else {
                continue;
            }

            let outPath: string = null;

            let finalFileName = `${name}_post_bmp.${outputFormat}`;

            if (saveResultToStorage) {
                outPath = folder + "/" + finalFileName;
            }

            await this.testPostRequest(
                    "postBmpTest",
                    `Input drawing: ${name}; Output format: ${outputFormat}`,
                    name,
                    async () => {
                        const request: cad.PostDrawingBmpRequest = 
                        new cad.PostDrawingBmpRequest({
                            name: name,
                            folder: folder,
                            options: exportOpt,
                            outPath: outPath,
                            storage: storage
                        });
                        const response = await this.cadApi.postDrawingBmp(request);
                        return response;
                    },
                    folder,
                    outPath,
                    finalFileName,
                    storage);
        }
    }

    public async putBmpWithOptionsTest(formatExtension: string, saveResultToStorage: boolean) {
        let name: string = null;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;
        const outputFormat: string = "bmp";

        const exportOpt: cad.BmpOptionsDTO = new cad.BmpOptionsDTO({
            vectorRasterizationOptions: new cad.CadRasterizationOptionsDTO({
                pageHeight: 200,
                pageWidth: 200,
                drawColor: new cad.ColorDTO({
                    B:255,
                    R:0,
                    G:0
                })
            })
       })

        for (const inputFile of this.InputTestFiles) {
            if (inputFile.name.endsWith(formatExtension)) {
                name = inputFile.name;
            } else {
                continue;
            }

            let outPath: string = null;

            let finalFileName = `${name}_put_bmp_with_options.${outputFormat}`;

            if (saveResultToStorage) {
                outPath = folder + "/" + finalFileName;
            }

            await this.testPostRequest(
                    "putBmpTest",
                    `Input drawing: ${name}; Output format: ${outputFormat}`,
                    name,
                    async (inputStream) => {
                        const request: cad.PutDrawingBmpRequest = 
                        new cad.PutDrawingBmpRequest({
                            drawingData: inputStream,
                            outPath: outPath,
                            exportOptions: JSON.stringify(exportOpt)
                        });
                        const response = await this.cadApi.putDrawingBmp(request);
                        return response;
                    },
                    folder,
                    outPath,
                    finalFileName,
                    storage);
        }
    }

    public async putBmpWithOutOptionsTest(formatExtension: string, saveResultToStorage: boolean) {
        let name: string = null;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;
        const outputFormat: string = "bmp";

        for (const inputFile of this.InputTestFiles) {
            if (inputFile.name.endsWith(formatExtension)) {
                name = inputFile.name;
            } else {
                continue;
            }

            let outPath: string = null;

            let finalFileName = `${name}_put_bmp_with_out_options.${outputFormat}`;

            if (saveResultToStorage) {
                outPath = folder + "/" + finalFileName;
            }
            
            await this.testPutRequest(
                    "putBmpTest",
                    `Input drawing: ${name}; Output format: ${outputFormat}`,
                    name,
                    async (inputStream) => {
                        const request: cad.PutDrawingBmpRequest = 
                        new cad.PutDrawingBmpRequest(
                            {
                                drawingData: inputStream,
                                outPath: outPath,
                                storage: storage
                            });
                        const response = await this.cadApi.putDrawingBmp(request);
                        return response;
                    },
                    folder,
                    outPath,
                    finalFileName,
                    storage);
            
        }
    }
}

//process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
const testClass: BmpApiTests = new BmpApiTests();
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


describe.each([[".dwg", true], [".dxf", false]])(
    "Bmp_V3",
    (formatExtension, saveResultToStorage) => {
        test(`BmpTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.postBmpTest(formatExtension, saveResultToStorage);
        });

        test(`PutBmpWithOptionsTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.putBmpWithOptionsTest(formatExtension, saveResultToStorage);
        });

        test(`PutBmpWithOutOptionsTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.putBmpWithOutOptionsTest(formatExtension, saveResultToStorage);
        });

        beforeEach(() => {
            jest.setTimeout(ApiTester.DefaultTimeout);
        });
    },
);
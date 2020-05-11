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
 * Class for testing rotate flip as API calls
 */
class ResizeApiTests extends ApiTester {

    public async getResizeDrawingTest(
        formatExtension: string, 
        newWidth: number, 
        newHeight: number, 
        saveResultToStorage: boolean, 
        ...additionalExportFormats: string[]) {

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
            if (inputFile.Name.endsWith(formatExtension)) {
                name = inputFile.Name;
            } else {
                continue;
            }

            for (const outputFormat of formatsToExport) {
                let outPath: string = null;
                if (saveResultToStorage) {
                    outPath = folder + "/" + name + "." + outputFormat;
                }

                await this.testGetRequest(
                        "getResizeDrawingTest",
                        `Input drawing: ${name}; Output format: ${outputFormat}, newWidth: ${newWidth}, newHeight: ${newHeight}`,
                        name,
                        async () => {
                            const request: cad.GetDrawingResizeRequest = 
                            new cad.GetDrawingResizeRequest({ name, outputFormat, folder, storage, outPath, newWidth, newHeight });

                            const response = await this.cadApi.getDrawingResize(request);
                            return response;
                        },
                        folder,
                        outPath,
                        storage);
            }
        }
    }

    public async postResizeDrawingTest(
        formatExtension: string, 
        newWidth: number, 
        newHeight: number,
        saveResultToStorage: boolean, 
        ...additionalExportFormats: string[]) {
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
            if (inputFile.Name.endsWith(formatExtension)) {
                name = inputFile.Name;
            } else {
                continue;
            }

            for (const outputFormat of formatsToExport) {

                let outPath: string = null;
                if (saveResultToStorage) {
                    outPath = folder + "/" + name + "." + outputFormat;
                }

                await this.testPostRequest(
                        "postResizeDrawingTest",
                        `Input drawing: ${name}; Output format: ${outputFormat}, newWidth: ${newWidth}, newHeight: ${newHeight}`,
                        name,
                        async (inputStream) => {
                            const request: cad.PostDrawingResizeRequest = 
                            new cad.PostDrawingResizeRequest({ drawingData: inputStream, outputFormat, outPath, storage, newWidth, newHeight });
                            const response = await this.cadApi.postDrawingResize(request);
                            return response;
                        },
                        folder,
                        outPath,
                        storage);
            }
        }
    }
}

const testClass: ResizeApiTests = new ResizeApiTests();
const useExtendedTests: boolean = process.env.ExtendedTests === "true";
console.log("Extended: " + useExtendedTests);
beforeEach(() => {
    jest.setTimeout(ApiTester.DefaultTimeout);
});

beforeAll(async () =>  {
    await testClass.beforeAll();
});

afterAll(async () =>  {
    await testClass.afterAll();
});

describe.each([[".dwg", 640, 480, true], [".dxf", 1024, 768, false]])(
    "ResizeTestSuite_V3",
    (formatExtension, newWidth, newHeight, saveResultToStorage) => {
        if (!saveResultToStorage) {
            test(`getResizeDrawingTest: saveResultToStorage - ${saveResultToStorage}, width - ${newWidth}, height = ${newHeight}`, async () => {
                await testClass.getResizeDrawingTest(formatExtension, newWidth, newHeight, saveResultToStorage);
            });
        }

        test(`postResizeDrawingTest: saveResultToStorage - ${saveResultToStorage}, width - ${newWidth}, height - ${newHeight}`, async () => {
            await testClass.postResizeDrawingTest(formatExtension, newWidth, newHeight, saveResultToStorage);
        });

        beforeEach(() => {
            jest.setTimeout(ApiTester.DefaultTimeout);
        });
    },
);

if (useExtendedTests) {
    console.log("Extended tests enabled");
    
    describe.each([[".dgn", 500, 600, true],  [".dwf", 240, 320, false]])
        ("ResizeTestSuite_V3",
        (formatExtension, newWidth, newHeight, saveResultToStorage) => {
            if (!saveResultToStorage) {
                test(`getResizeDrawingTest: saveResultToStorage - ${saveResultToStorage} width - ${newWidth}, height - ${newHeight}`, async () => {
                    await testClass.getResizeDrawingTest(formatExtension, newWidth, newHeight, saveResultToStorage);
                });
            }
    
            test(`postResizeDrawingTest: saveResultToStorage - ${saveResultToStorage}, width - ${newWidth}, height - ${newHeight}`, async () => {
                await testClass.postResizeDrawingTest(formatExtension, newWidth, newHeight, saveResultToStorage);
            });

            beforeEach(() => {
                jest.setTimeout(ApiTester.DefaultTimeout);
            });
        },
    );
}

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
class RotateFlipApiTests extends ApiTester {

    public async getRotateFlipDrawingTest(
        formatExtension: string, 
        operation: 'RotateNoneFlipNone' | 'Rotate90FlipNone' | 'Rotate180FlipNone' | 'Rotate270FlipNone' | 'RotateNoneFlipX' | 'Rotate90FlipX' | 'Rotate180FlipX' | 'Rotate270FlipX' | 'RotateNoneFlipY' | 'Rotate90FlipY' | 'Rotate180FlipY' | 'Rotate270FlipY' | 'RotateNoneFlipXY' | 'Rotate90FlipXY' | 'Rotate180FlipXY' | 'Rotate270FlipXY', 
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
            if (inputFile.name.endsWith(formatExtension)) {
                name = inputFile.name;
            } else {
                continue;
            }

            for (const outputFormat of formatsToExport) {
                let outPath: string = null;
                if (saveResultToStorage) {
                    outPath = folder + "/" + name + "." + outputFormat;
                }

                await this.testGetRequest(
                        "getRotateFlipDrawingTest",
                        `Input drawing: ${name}; Output format: ${outputFormat}, operation: ${operation}`,
                        name,
                        async () => {
                            const request: cad.GetDrawingRotateFlipRequest = 
                            new cad.GetDrawingRotateFlipRequest({ name, outputFormat, folder, storage, outPath, rotateFlipType: operation });

                            const response = await this.cadApi.getDrawingRotateFlip(request);
                            return response;
                        },
                        folder,
                        outPath,
                        storage);
            }
        }
    }

    public async postRotateFlipDrawingTest(
        formatExtension: string, 
        operation: 'RotateNoneFlipNone' | 'Rotate90FlipNone' | 'Rotate180FlipNone' | 'Rotate270FlipNone' | 'RotateNoneFlipX' | 'Rotate90FlipX' | 'Rotate180FlipX' | 'Rotate270FlipX' | 'RotateNoneFlipY' | 'Rotate90FlipY' | 'Rotate180FlipY' | 'Rotate270FlipY' | 'RotateNoneFlipXY' | 'Rotate90FlipXY' | 'Rotate180FlipXY' | 'Rotate270FlipXY', 
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
            if (inputFile.name.endsWith(formatExtension)) {
                name = inputFile.name;
            } else {
                continue;
            }

            for (const outputFormat of formatsToExport) {

                let outPath: string = null;
                if (saveResultToStorage) {
                    outPath = folder + "/" + name + "." + outputFormat;
                }

                await this.testPostRequest(
                        "postRotateFlipDrawingTest",
                        `Input drawing: ${name}; Output format: ${outputFormat}, operation: ${operation}`,
                        name,
                        async (inputStream) => {
                            const request: cad.PostDrawingRotateFlipRequest = 
                            new cad.PostDrawingRotateFlipRequest({ drawingData: inputStream, outputFormat, outPath, storage, rotateFlipType: operation });
                            const response = await this.cadApi.postDrawingRotateFlip(request);
                            return response;
                        },
                        folder,
                        outPath,
                        storage);
            }
        }
    }
}

const testClass: RotateFlipApiTests = new RotateFlipApiTests();
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

// rotateFlipType: 'RotateNoneFlipNone' | 'Rotate90FlipNone' | 'Rotate180FlipNone' | 'Rotate270FlipNone' | 'RotateNoneFlipX' | 'Rotate90FlipX' | 'Rotate180FlipX' | 'Rotate270FlipX' | 'RotateNoneFlipY' | 'Rotate90FlipY' | 'Rotate180FlipY' | 'Rotate270FlipY' | 'RotateNoneFlipXY' | 'Rotate90FlipXY' | 'Rotate180FlipXY' | 'Rotate270FlipXY'
describe.each([[".dwg", 'RotateNoneFlipNone', true], [".dxf", 'Rotate90FlipX', false]])(
    "RotateFlipTestSuite_V3",
    (formatExtension, operation, saveResultToStorage) => {
        if (!saveResultToStorage) {
            test(`getRotateFlipDrawingTest: saveResultToStorage - ${saveResultToStorage}, op - ${operation}`, async () => {
                await testClass.getRotateFlipDrawingTest(formatExtension, operation, saveResultToStorage);
            });
        }

        test(`postRotateFlipDrawingTest: saveResultToStorage - ${saveResultToStorage}, op - ${operation}`, async () => {
            await testClass.postRotateFlipDrawingTest(formatExtension, operation, saveResultToStorage);
        });

        beforeEach(() => {
            jest.setTimeout(ApiTester.DefaultTimeout);
        });
    },
);

if (useExtendedTests) {
    console.log("Extended tests enabled");
    
    describe.each([[".dgn", 'RotateNoneFlipY', true],  [".dwf", 'RotateNoneFlipX', false]])
        ("RotateFlipTestSuite_V3",
        (formatExtension, operation, saveResultToStorage) => {
            if (!saveResultToStorage) {
                test(`getRotateFlipDrawingTest: saveResultToStorage - ${saveResultToStorage} op - ${operation}`, async () => {
                    await testClass.getRotateFlipDrawingTest(formatExtension, operation, saveResultToStorage);
                });
            }
    
            test(`postRotateFlipDrawingTest: saveResultToStorage - ${saveResultToStorage}, op - ${operation}`, async () => {
                await testClass.postRotateFlipDrawingTest(formatExtension, operation, saveResultToStorage);
            });

            beforeEach(() => {
                jest.setTimeout(ApiTester.DefaultTimeout);
            });
        },
    );
}

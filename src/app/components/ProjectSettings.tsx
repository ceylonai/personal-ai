import React, {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Progress} from '@/components/ui/progress';
import {Textarea} from '@/components/ui/textarea';
import {FileUp, FileText, Trash2, Upload} from 'lucide-react';
import {create, BaseDirectory, exists, mkdir} from '@tauri-apps/plugin-fs';

async function fileToUint8Array(file: File): Promise<Uint8Array> {
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
        reader.onload = () => {
            const arrayBuffer = reader.result;
            if (!arrayBuffer) {
                reject(new Error('Failed to read file as ArrayBuffer'));
                return;
            }
            const uint8Array = new Uint8Array(arrayBuffer as ArrayBuffer);
            resolve(uint8Array);
        };

        reader.onerror = () => reject(reader.error);

        reader.readAsArrayBuffer(file);
    });
}

export default function ProjectSettings() {
    const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
    const [instructions, setInstructions] = useState('');
    const [saveStatus, setSaveStatus] = useState('saved');

    const updateWithDebounce = (value: string) => {
        setSaveStatus('saving');
        setInstructions(value);
        setTimeout(() => setSaveStatus('saved'), 500);
    };


    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {

            if (!(await exists('', {baseDir: BaseDirectory.AppConfig}))) {
                await mkdir('', {baseDir: BaseDirectory.AppConfig})
            }

            const file = await create('bar.txt', {baseDir: BaseDirectory.AppData});
            await file.write(await fileToUint8Array(Array.from(files)[0]));
            await file.close();

            console.log(file);

            setUploadedFiles(prev => [...prev, ...Array.from(files).map(file => file.name)]);
        }
    };

    const removeFile = (fileName: string) => {
        setUploadedFiles(prev => prev.filter(file => file !== fileName));
    };

    const capacityUsed = Math.min(uploadedFiles.length * 10, 100);

    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 p-6">
            <div className="max-w-4xl mx-auto">
                <Card className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 shadow-lg">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Project
                                Configuration</CardTitle>
                            <div className="flex items-center space-x-2">
                <span className={`text-xs ${
                    saveStatus === 'saving' ? 'text-amber-500 dark:text-amber-400' :
                        saveStatus === 'saved' ? 'text-emerald-500 dark:text-emerald-400' :
                            'text-red-500 dark:text-red-400'
                }`}>•</span>
                                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  {saveStatus === 'saving' ? 'Saving...' :
                      saveStatus === 'saved' ? 'Changes saved' :
                          'Save failed'}
                </span>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Project
                                Instructions</h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">Provide instructions for Claude
                                within Company Handler : Policy Department.</p>
                            <Textarea
                                value={instructions}
                                onChange={(e) => updateWithDebounce(e.target.value)}
                                placeholder="Think step by step and show reasoning for complex problems. Use specific examples."
                                className="min-h-[120px] bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-300 placeholder-zinc-500"
                            />
                        </div>

                        <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-4">Project
                                Knowledge</h3>
                            <Label htmlFor="file-upload"
                                   className="flex flex-col items-center justify-center w-full h-48 border-2 border-zinc-300 dark:border-zinc-700 border-dashed rounded-lg cursor-pointer bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <Upload className="w-8 h-8 mb-3 text-zinc-600 dark:text-zinc-400"/>
                                    <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">
                                        <span className="font-semibold">Click to upload</span> or drag and drop
                                    </p>
                                    <p className="text-xs text-zinc-500">PDF, DOC, TXT (MAX. 10MB)</p>
                                </div>
                                <Input id="file-upload" type="file" multiple onChange={handleFileUpload}
                                       className="hidden"/>
                            </Label>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="text-sm text-zinc-600 dark:text-zinc-400">{capacityUsed}% of knowledge capacity used</span>
                            <Progress value={capacityUsed} className="w-1/2"/>
                        </div>

                        <div className="space-y-2">
                            {uploadedFiles.length === 0 ? (
                                <div>
                                    <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Example
                                        Knowledge Base
                                    </div>
                                    <div className="space-y-2">
                                        <div
                                            className="flex items-center justify-between bg-zinc-100 dark:bg-zinc-800 p-3 rounded">
                                            <div className="flex items-center space-x-3">
                                                <FileUp className="w-5 h-5 text-red-500 dark:text-red-400"/>
                                                <span
                                                    className="text-zinc-700 dark:text-zinc-300">company_policy_2024.pdf</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <span className="text-xs text-zinc-500">2.1 MB</span>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="text-zinc-600 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                                                >
                                                    <Trash2 className="w-4 h-4"/>
                                                </Button>
                                            </div>
                                        </div>
                                        {/* Repeat similar patterns for other example files */}
                                    </div>
                                </div>
                            ) : (
                                uploadedFiles.map((file: string, index) => (
                                    <div key={index}
                                         className="flex items-center justify-between bg-zinc-100 dark:bg-zinc-800 p-3 rounded">
                                        <div className="flex items-center space-x-3">
                                            {file.endsWith('.pdf') ? (
                                                <FileUp className="w-5 h-5 text-red-500 dark:text-red-400"/>
                                            ) : (
                                                <FileText className="w-5 h-5 text-blue-500 dark:text-blue-400"/>
                                            )}
                                            <span className="text-zinc-700 dark:text-zinc-300">{file}</span>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => removeFile(file)}
                                            className="text-zinc-600 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                                        >
                                            <Trash2 className="w-4 h-4"/>
                                        </Button>
                                    </div>
                                ))
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
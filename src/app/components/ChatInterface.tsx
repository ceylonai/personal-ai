'use client'

import * as React from 'react'
import {ChevronDown, Image, Paperclip} from 'lucide-react'
import {Avatar, AvatarFallback} from "@/components/ui/avatar"
import {Button} from "@/components/ui/button"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import {Textarea} from "@/components/ui/textarea"
import {PanelContent} from "@/types/panel.ts";
import {MarkdownPanel} from "@/app/components/markdown-panel.tsx";

export default function ChatInterface() {
    const [showPanel, setShowPanel] = React.useState(true)
    const [panelContent, ] = React.useState<PanelContent>({
        title: 'Complete PHP Learning Guide',
        content: '...',
        lastEdited: '7 hours ago'
    })

    return (
        <div className="flex flex-col min-h-screen bg-[#1C1C1C] text-white">
            {/* Top Bar */}
            <div className="flex items-center justify-center p-2 border-b border-gray-800">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="gap-2 text-gray-300">
                            <span>Structured Python Learning Guide</span>
                            <ChevronDown className="w-4 h-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>Option 1</DropdownMenuItem>
                        <DropdownMenuItem>Option 2</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Chat Area */}
                <div className="flex-1 overflow-auto p-4">
                    <div className="max-w-3xl mx-auto space-y-8">
                        {/* List of changes */}
                        <div className="space-y-2">
                            <div>1. Replaced daily structure with learning phases</div>
                            <div>2. Added more context to each project suggestion</div>
                            <div>3. Organized concepts in a logical progression</div>
                            <div>4. Included best practices section</div>
                            <div>5. Added more detailed tips for success</div>
                        </div>

                        {/* User Message */}
                        <div className="flex gap-3">
                            <Avatar className="h-8 w-8 bg-gray-800">
                                <AvatarFallback className="bg-gray-800 text-white">DH</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <div className="font-medium mb-1 text-sm">create another one for php</div>
                            </div>
                        </div>

                        {/* Assistant Message with Document */}
                        <div className="flex gap-3">
                            <Avatar className="h-8 w-8 bg-gray-800">
                                <AvatarFallback className="bg-gray-800 text-white">C</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <div className="mb-4">I'll create a comprehensive guide for learning PHP.</div>
                                <Button
                                    variant="outline"
                                    className="gap-2"
                                    onClick={() => setShowPanel(true)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path
                                            d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                                        <polyline points="14 2 14 8 20 8"/>
                                    </svg>
                                    Complete PHP Learning Guide
                                    <span className="text-xs text-gray-400">Click to open document</span>
                                </Button>
                            </div>
                        </div>

                        {/* Assistant Message */}
                        <div className="flex gap-3">
                            <div className="h-8 w-8 rounded-lg bg-orange-600/20 flex items-center justify-center">
                                <div className="w-4 h-4 text-orange-500">★</div>
                            </div>
                            <div className="flex-1">
                                <div className="text-sm text-gray-400">
                                    Claude can make mistakes. Please double-check responses.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 p-4">
                        <div className="max-w-3xl mx-auto">
                            <div className="relative">
                                <Textarea
                                    placeholder="Reply to Claude..."
                                    className="min-h-[56px] w-full bg-gray-800 border-gray-700 resize-none pr-20"
                                />
                                <div className="absolute right-2 bottom-2 flex gap-2">
                                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                                        <Image className="w-4 h-4"/>
                                    </Button>
                                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                                        <Paperclip className="w-4 h-4"/>
                                    </Button>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                                            Claude 3.5 Sonnet
                                            <ChevronDown className="w-4 h-4 ml-2"/>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>Claude 3.5 Sonnet</DropdownMenuItem>
                                        <DropdownMenuItem>Other Model</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                                            Choose style
                                            <ChevronDown className="w-4 h-4 ml-2"/>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>Default</DropdownMenuItem>
                                        <DropdownMenuItem>Professional</DropdownMenuItem>
                                        <DropdownMenuItem>Casual</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Markdown Panel */}
                {showPanel && (
                    <MarkdownPanel
                        content={panelContent}
                        onClose={() => setShowPanel(false)}
                    />
                )}
            </div>

            {/* Input Area */}

        </div>
    )
}


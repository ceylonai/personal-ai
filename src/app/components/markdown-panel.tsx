import {ArrowLeft} from 'lucide-react'
import {PanelContent} from "@/types/panel.ts";

interface MarkdownPanelProps {
    content: PanelContent
    onClose: () => void
}

export default function MarkdownPanel({content, onClose}: MarkdownPanelProps) {
    return (
        <div className="flex flex-col w-full h-full bg-gray-100 rounded-2xl">
            {/* Header Bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200 shadow-sm rounded-tl-2xl">
                <div className="flex items-center space-x-2">
                    <ArrowLeft
                        className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer"
                        onClick={onClose}
                    />
                    <span className="text-gray-800 font-medium">Adaptive Sheet Composer</span>
                </div>
                <div className="flex space-x-2">
                    <button className="px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors">
                        Preview
                    </button>
                    <button className="px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors">
                        Code
                    </button>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-white m-4 rounded-lg shadow-sm">
                {content.content}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-2 bg-white border-t border-gray-200 shadow-sm rounded-bl-2xl">
                <span className="text-xs text-gray-600">Last edited 2 minutes ago</span>
                <button className="px-4 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors">
                    Publish
                </button>
            </div>
        </div>
    )
}
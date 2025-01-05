import {ArrowUpRight, ChevronDown, ChevronUp, Image, MessageSquare, Paperclip, Sun, X} from 'lucide-react'

export default function ChatStartInterface() {
    const recentChats = [
        {title: 'Collapsible Right Panel UI', time: '6 hours ago'},
        {title: 'React Dashboard UI Structure', time: '6 hours ago'},
        {title: 'Seeking Clarification', time: '6 hours ago'},
        {title: 'Heartfelt New Year Wishes', time: '9 hours ago'},
        {title: 'Clearing NPM Cache', time: '10 hours ago'},
        {title: 'Troubleshooting npm package installation...', time: '10 hours ago'}
    ];

    return (
        <div className="h-full bg-gray-100 text-gray-800 p-8 dark">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-medium flex items-center gap-2">
                    <Sun className="text-orange-400" size={24}/>
                    Good morning, Dewmal
                </h1>
            </div>

            {/* Model Selection Bar */}
            <div className="bg-white/90 rounded-lg p-4 mb-4 shadow-sm">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="font-medium">Model 212</span>
                        <ChevronDown size={16} className="text-gray-600"/>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Choose project</span>
                        <ChevronDown size={16} className="text-gray-600"/>
                    </div>
                </div>
            </div>

            {/* Attachment Bar */}
            <div className="bg-white/80 rounded-lg p-3 mb-6 shadow-sm">
                <div className="flex items-center gap-4">
                    <Paperclip size={20} className="text-gray-600"/>
                    <Image size={20} className="text-gray-600"/>
                    <div className="flex-grow"></div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <span>Use a project</span>
                        <ChevronDown size={16}/>
                    </div>
                </div>
            </div>

            {/* New Version Banner */}
            <div className="bg-white/90 rounded-lg p-4 mb-8 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3">
                    <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
                    <div>
                        <div className="font-medium">Try the upgraded</div>
                        <div className="text-sm text-gray-600">A new version with broad improvements, especially for
                            coding and complex reasoning
                        </div>
                    </div>
                </div>
                <X size={20} className="text-gray-600 cursor-pointer hover:text-gray-800"/>
            </div>

            {/* Recent Chats Section */}
            <div className="mb-4">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <MessageSquare size={16} className="text-gray-600"/>
                        <span className="font-medium">Your recent chats</span>
                        <ChevronUp size={16} className="text-gray-600"/>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 cursor-pointer hover:text-gray-800">
                        <span>View all</span>
                        <ArrowUpRight size={16}/>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    {recentChats.map((chat, index) => (
                        <div key={index}
                             className="bg-white/80 rounded-lg p-4 cursor-pointer hover:bg-white/90 transition-colors shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                                <MessageSquare size={16} className="text-gray-600"/>
                            </div>
                            <h3 className="font-medium mb-2">{chat.title}</h3>
                            <p className="text-sm text-gray-600">{chat.time}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
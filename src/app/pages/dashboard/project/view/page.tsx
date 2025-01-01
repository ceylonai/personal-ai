import {useState} from 'react';
import {ArrowUp, ChevronLeft, ChevronRight, FileText, Layout, Paperclip, Plus} from 'lucide-react';

const ProjectUI = () => {
    const [isPanelVisible, setIsPanelVisible] = useState(true);

    return (
        <div className="flex h-screen bg-black text-gray-100">
            {/* Left Sidebar */}
            <div className="w-16 bg-gray-900 border-r border-gray-800 p-4 flex flex-col items-center space-y-6">
                <div className="w-8 h-8 bg-gray-800 rounded-lg mb-6"></div>
                <Plus className="text-gray-400"/>
                <Layout className="text-gray-400"/>
                <FileText className="text-gray-400"/>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">

                {/* Content Area with Chat */}
                <div className="flex-1 flex flex-col">
                    {/* File Structure */}
                    <div className="p-4 flex-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <img src="/api/placeholder/24/24" className="rounded" alt="Project icon"/>
                            <span>Landing Page / Dashboard Screen Elements:</span>
                        </div>

                        <div className="space-y-3 text-gray-400 text-sm ml-4">
                            <div>Navigation bar at the top Quick statistics panel showing:</div>
                            <div>Total number of projects Recently accessed projects System status</div>
                            <div>Project list/grid view with:</div>
                            <div>Project name Creation date Last accessed date Resource count Status indicator</div>

                            {/* File Structure Box */}
                            <div className="mt-8 bg-gray-900 rounded-lg p-4">
                                <div className="flex items-center space-x-2 text-sm mb-4">
                                    <span>📁 dashboard</span>
                                    <span className="text-gray-500">v1</span>
                                </div>
                                <div className="space-y-2 ml-4">
                                    <div className="text-gray-500">Generated app/page.tsx</div>
                                    <div className="text-gray-500">Generated app/components/Header.tsx</div>
                                    <div className="text-gray-500">Generated app/components/QuickStats.tsx</div>
                                    <div className="text-gray-500">Generated app/components/ProjectList.tsx</div>
                                    <div className="text-gray-500">Generated app/components/CreateProjectButton.tsx
                                    </div>
                                    <div className="text-gray-500">Generated app/components/SearchBar.tsx</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Chat Interface */}
                    <div className="border-t border-gray-800 p-4">
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                            <span>You have 1 message remaining today.</span>
                            <button className="text-blue-400 hover:text-blue-300">Upgrade Plan</button>
                        </div>
                        <div className="flex items-center space-x-2 bg-gray-900 rounded-lg p-2">
                            <Paperclip className="text-gray-400" size={18}/>
                            <input
                                type="text"
                                placeholder="Ask a follow up..."
                                className="flex-1 bg-transparent border-none outline-none text-sm"
                            />
                            <button className="p-1.5 hover:bg-gray-800 rounded">
                                <ArrowUp size={18} className="text-gray-400"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setIsPanelVisible(!isPanelVisible)}
                className="bg-gray-900 border-l border-r border-gray-800 px-1 hover:bg-gray-800 focus:outline-none"
            >
                {isPanelVisible ? <ChevronRight/> : <ChevronLeft/>}
            </button>

            {/* Right Panel */}
            {isPanelVisible && (
                <div className="w-96 bg-gray-900 border-l border-gray-800">
                    <div className="p-4 border-b border-gray-800">
                        <h2 className="text-sm font-medium">Console</h2>
                    </div>
                    <div className="p-4 text-sm text-gray-400">
                        No console output available to display
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectUI;
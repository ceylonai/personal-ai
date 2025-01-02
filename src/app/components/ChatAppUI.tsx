import {useState} from 'react';
import {MessageSquare, Send} from 'lucide-react';

const ChatInterface = () => {
    const [message, setMessage] = useState('');

    const handleSend = () => {
        if (message.trim()) {
            // Handle message sending
            setMessage('');
        }
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 bg-white shadow-sm">
                <div className="inline-flex items-center px-3 py-1 space-x-2 bg-gray-100 rounded-full">
                    <MessageSquare size={16} className="text-gray-600"/>
                    <span className="text-sm text-gray-600">use dark lite theme only</span>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
                    {/* Message bubbles would go here */}
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                        <p className="text-gray-800">Sample message content</p>
                    </div>
                </div>
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 p-4 bg-white shadow-sm">
                <div className="flex items-center space-x-2">
                    <div className="flex-1 relative">
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Reply to CeylonAI..."
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-500 resize-none focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
                            rows={1}
                        />
                    </div>
                    <button
                        onClick={handleSend}
                        className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                        <Send size={20}/>
                    </button>
                </div>

                {/* Bottom Bar */}
                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">Ceylon AI Agent</span>
                        <div className="h-4 border-l border-gray-200"></div>
                        <button className="text-sm text-gray-600 hover:text-gray-800 transition-colors">
                            Choose style
                        </button>
                    </div>
                    <div className="flex items-center space-x-2">
                        {/* Action buttons */}
                        <button className="px-2 py-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded transition-colors">
                            Copy
                        </button>
                        <button className="px-2 py-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded transition-colors">
                            Retry
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatInterface;
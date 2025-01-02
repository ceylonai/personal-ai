import {SidebarTrigger} from "@/components/ui/sidebar";
import MarkdownPanel from "@/app/components/markdown-panel.tsx";
import ChatInterface from "@/app/components/ChatAppUI.tsx";
import Layout from "@/app/pages/dashboard/project/layout.tsx";

const ChatDashboard = () => {

    return (
        <Layout>
            <main className={"bg-slate-50 w-full"}>
                <div className={"flex flex-row"}>
                    <div className={"w-fit"}>
                        <SidebarTrigger/>
                    </div>
                    <div className={"flex-1"}>
                        {/*<ChatStartInterface/>*/}
                        <ChatInterface/>
                    </div>
                    <div className={"bg-slate-50 w-full h-screen flex-1 pl-20 py-4"}>
                        <MarkdownPanel content={{
                            title: "Test",
                            content: "Test",
                            lastEdited: "Test"
                        }} onClose={function (): void {
                            throw new Error("Function not implemented.");
                        }}/>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default ChatDashboard;
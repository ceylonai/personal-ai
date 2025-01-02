import ChatStartInterface from "@/app/components/ChatStartInterface.tsx";
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {AppSidebar} from "@/app/components/AppSideBar.tsx";
import MarkdownPanel from "@/app/components/markdown-panel.tsx";

const ChatDashboard = () => {

    return (
        <SidebarProvider>
            <AppSidebar/>
            <main className={"bg-slate-50 w-full"}>
                <div className={"flex flex-row"}>
                    <div className={"w-fit"}>
                        <SidebarTrigger/>
                    </div>
                    <div className={"flex-1"}>
                        <ChatStartInterface/>
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
        </SidebarProvider>
    );
};

export default ChatDashboard;
import {SidebarProvider} from "@/components/ui/sidebar";
import {AppSidebar} from "@/app/components/AppSideBar.tsx";
import {ReactNode} from "react";


interface LayoutProps {
    children: ReactNode
}
export default function Layout({children}: LayoutProps) {
    return (
        <SidebarProvider>
            <AppSidebar/>
            <main className={"bg-slate-50 w-full"}>
                {children}
            </main>
        </SidebarProvider>
    )
}


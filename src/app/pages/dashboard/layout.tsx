import Header from "@/app/components/Header.tsx";
import {ReactNode} from "react";

interface LayoutProps {
    children: ReactNode
}
export default function Layout({children}: LayoutProps) {
    return (
        <div className="min-h-screen bg-background">
            <Header/>
            <main className="container mx-auto px-4 py-8">
                {children}
            </main>
        </div>
    )
}

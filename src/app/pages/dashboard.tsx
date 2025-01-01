import Header from "@/app/components/Header.tsx";
import QuickStats from "@/app/components/QuickStats.tsx";
import CreateProjectButton from "@/app/components/CreateProjectButton.tsx";
import SearchBar from "@/app/components/SearchBar.tsx";
import ProjectList from "@/app/components/ProjectList.tsx";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-background">
            <Header/>
            <main className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
                    <QuickStats/>
                </div>
                <div className="flex justify-between items-center mb-6">
                    <CreateProjectButton/>
                    <SearchBar/>
                </div>
                <ProjectList/>
            </main>
        </div>
    )
}


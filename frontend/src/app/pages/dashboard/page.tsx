import QuickStats from "@/app/components/QuickStats.tsx";
import CreateProjectButton from "@/app/components/CreateProjectButton.tsx";
import SearchBar from "@/app/components/SearchBar.tsx";
import ProjectList from "@/app/components/ProjectList.tsx";
import Layout from "@/app/pages/dashboard/layout.tsx";

export default function Page() {
    return (
        <Layout>
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
                <QuickStats/>
            </div>
            <div className="flex justify-between items-center mb-6">
                <CreateProjectButton/>
                <SearchBar/>
            </div>
            <ProjectList/>
        </Layout>
    )
}


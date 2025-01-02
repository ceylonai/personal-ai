import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "@/routes/AppRoutes.tsx";
import {Providers} from "@/providers.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Providers>
            <AppRoutes/>
        </Providers>
    </React.StrictMode>,
);

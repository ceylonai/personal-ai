import "./App.css";

function App() {
    // const [greetMsg, setGreetMsg] = useState("");
    // const [name, setName] = useState("");
    //
    // async function greet() {
    //     // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    //     setGreetMsg(await invoke("greet", {name}));
    // }

    return (
        <main className="container">
            <a href={"/dashboard"}>Dashboard</a>
        </main>
    );
}

export default App;

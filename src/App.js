import "./App.css";
import "./dashboard.css";
import NavBar from "./Components/NavBar";
import DashBoard from "./Components/DashBoard";

function App() {
    return (
        <div className="App">
            <div className="container-component">
                <NavBar />
                <DashBoard />
            </div>
        </div>
    );
}

export default App;

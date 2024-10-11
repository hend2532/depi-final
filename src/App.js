import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./sidebar";
import Upper from "./upperdiv";
import Home from "./home";
import AddMeal from "./components/AddMeal.jsx";

function App() {
  return (
    <div className="App">
      {/* <Sidebar></Sidebar> */}
      {/* <Upper></Upper> */}
      {/* <Home></Home> */}

      <AddMeal />
    </div>
  );
}

export default App;

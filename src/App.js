import HomeScreen from "./screens/HomeScreen";
import "./App.css";
// import Navbar from "./components/Navbar";
import NavScrollExample from "./components/Navbar";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
  return (
    <div className="App">
      <NavScrollExample />
      <HomeScreen />
      
    </div>
  );
}

export default App;

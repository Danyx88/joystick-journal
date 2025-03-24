import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Home />
      </div>
    </>
  );
}

export default App;

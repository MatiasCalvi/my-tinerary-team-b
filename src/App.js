import "./App.css";
import Home1 from "./pages/Home1";
import Home2 from "./pages/Home2";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home1 />}/>
      <Route path="/" element={<Home2 />}/>
    </Routes>
  
    );
}

export default App;

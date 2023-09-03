import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Projects from "./routes/Projects";

function App() {
  return (
    <Router>
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />        
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

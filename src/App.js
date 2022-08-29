import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Projects from "./components/Projects.js";
import ContactMe from "./components/ContactMe.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/projects" element={<Projects />} />
       <Route path="/contact" element={<ContactMe />} />z
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import ContactMe from "./components/ContactMe.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "./styles/Global";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
    <BodyStyle>
      <Header />
      <Routes>
        <Route path="/my-portfolio/" element={<Home />} />
        <Route path="/my-portfolio/projects" element={<Projects />} />
        <Route path="/my-portfolio/contact" element={<ContactMe />} />
      </Routes>
      <Footer />
      </BodyStyle>
    </BrowserRouter>
  );
}

const BodyStyle = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`

export default App;

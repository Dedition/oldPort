//*                           React
import { useState } from "react";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";

//*                       React Libraries
import { AnimatePresence } from "framer-motion";

//*                     Files & Components
import Home from './components/HomePage/Home.js'
import About from './components/AboutPage/About';
import Skills from "./components/SkillsPage/Skills.js";
import Projects from './components/ProjectsPage/Projects';
// import Work from './components/WorkPage/Work';
import Contact from './components/ContactPage/Contact';
import Navbar from "./components/NavbarPage/Navbar.js";

//*                           Context
import { MenuContext } from "./context/MenuContext";

//*                          Styling
import "./styles/index.scss";


function App() {
  const [menuText, setMenuText] = useState("Home");

  return (
    <HashRouter base="/">
      <Navbar />
      <MenuContext.Provider value={{ menuText, setMenuText }}>
        <AnimatePresence exitBeforeEnter>
          <Routes>
            {["/", "/*"].map((path, idx) => {
              return (
                <Route path={path} element={
                  <Home />}
                  key={idx}
                />
              );
            })}
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/work" element={<Work />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </MenuContext.Provider>
    </HashRouter>
  );
}

export default App;

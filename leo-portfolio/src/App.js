//*                           React
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

//*                       React Libraries
import { AnimatePresence } from "framer-motion";

//*                     Files & Components
import About from './components/AboutPage/About';
import Home from './components/HomePage/Home'
import Projects from './components/ProjectsPage/Projects';
import Contact from './components/ContactPage/Contact';
import Work from './components/WorkPage/Work';
import NotFound from './components/NotFoundPage/NotFound';

//*                           Context
import { MenuContext } from "./context/MenuContext";


function App() {
  const location = useLocation();
  const [menuText, setMenuText] = useState("Home");

  return (
    <div className="Homepage">
      <MenuContext.Provider value={{ menuText, setMenuText }}>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Work />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </MenuContext.Provider>
    </div>
  );
}

export default App;

//*                           React
import { useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

//*                       React Libraries
import { AnimatePresence } from "framer-motion";

//*                     Files & Components
import Home from './components/HomePage/Home'
import About from './components/AboutPage/About';
import Projects from './components/ProjectsPage/Projects';
import Work from './components/WorkPage/Work';
import Contact from './components/ContactPage/Contact';
import NotFound from './components/NotFoundPage/NotFound';

//*                           Context
import { MenuContext } from "./context/MenuContext";


function App() {
  const location = useLocation();
  const [menuText, setMenuText] = useState("Home");

  return (
    <BrowserRouter>
      <MenuContext.Provider value={{ menuText, setMenuText }}>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path={["/", "/*"]} element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </MenuContext.Provider>
    </BrowserRouter>
  );
}

export default App;

import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const [menuText, setMenuText] = useState("Home");

  return (
    <div className="Homepage">
      <AnimatePresence exitBeforeEnter>
        {/* INPUT MENU PROVIDER HERE */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </AnimatePresence>
      {/* FINISH MENU PROVIDER HERE */}
    </div>
  );
}

export default App;

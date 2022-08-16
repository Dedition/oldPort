import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuContext } from "../../context/MenuContext";
import MenuList from "../MenuPage/MenuList";
import MenuPage from "../MenuPage/MenuPage";


const Home = () => {
    const { menuText, setMenuText } = useContext(MenuContext);
    return (
        <div className="Homepage">
            <MenuContext.Provider value={{ menuText, setMenuText }}>
                <AnimatePresence exitBeforeEnter>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="Homepage__container"
                    >
                        <MenuList />
                        <MenuPage />
                    </motion.div>
                </AnimatePresence>
            </MenuContext.Provider>
        </div>
    );
}

export default Home;

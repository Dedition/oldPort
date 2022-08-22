import { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
    const [isProject1Displayed, setIsProject1Displayed] = useState(false);
    const [isProject2Displayed, setIsProject2Displayed] = useState(false);
    const [isProject3Displayed, setIsProject3Displayed] = useState(false);
    const [isProject4Displayed, setIsProject4Displayed] = useState(false);

    const handleVideoDisplay = (projectNumber) => {
        if (`isProject${projectNumber}Displayed` === "false") return 3;
        else return 0;
    };

    const onWheel = (e) => {
        if (window.innerWidth <= 768) return;

        const container = document.getElementById("projects-scroller");
        const containerScrollPosition = document.getElementById("projects-scroller").scrollLeft;
        container.scrollTo({
            top: 0,
            left: containerScrollPosition + e.deltaY,
            behavior: "smooth",
        });

        if (e.deltaY > 0) {
            if (containerScrollPosition === 0) {
                setIsProject1Displayed(true);
                setIsProject2Displayed(false);
                setIsProject3Displayed(false);
                setIsProject4Displayed(false);
            } else if (containerScrollPosition === window.innerWidth) {
                setIsProject1Displayed(false);
                setIsProject2Displayed(true);
                setIsProject3Displayed(false);
                setIsProject4Displayed(false);
            } else if (containerScrollPosition === window.innerWidth * 2) {
                setIsProject1Displayed(false);
                setIsProject2Displayed(false);
                setIsProject3Displayed(true);
                setIsProject4Displayed(false);
            } else if (containerScrollPosition === window.innerWidth * 3) {
                setIsProject1Displayed(false);
                setIsProject2Displayed(false);
                setIsProject3Displayed(false);
                setIsProject4Displayed(true);
            }
        }

        if (e.deltaY < 0) {
            if (containerScrollPosition === window.innerWidth) {
                setIsProject1Displayed(false);
                setIsProject2Displayed(true);
                setIsProject3Displayed(false);
                setIsProject4Displayed(false);
            } else if (containerScrollPosition === window.innerWidth * 2) {
                setIsProject1Displayed(false);
                setIsProject2Displayed(false);
                setIsProject3Displayed(true);
                setIsProject4Displayed(false);
            } else if (containerScrollPosition === window.innerWidth * 3) {
                setIsProject1Displayed(false);
                setIsProject2Displayed(false);
                setIsProject3Displayed(false);
                setIsProject4Displayed(true);
            }
        }

        if (e.deltaY === 0) {
            if (containerScrollPosition === 0) {
                setIsProject1Displayed(true);
                setIsProject2Displayed(false);
                setIsProject3Displayed(false);
                setIsProject4Displayed(false);
            } else if (containerScrollPosition === window.innerWidth) {
                setIsProject1Displayed(false);
                setIsProject2Displayed(true);
                setIsProject3Displayed(false);
                setIsProject4Displayed(false);
            } else if (containerScrollPosition === window.innerWidth * 2) {
                setIsProject1Displayed(false);
                setIsProject2Displayed(false);
                setIsProject3Displayed(true);
                setIsProject4Displayed(false);
            } else if (containerScrollPosition === window.innerWidth * 3) {
                setIsProject1Displayed(false);
                setIsProject2Displayed(false);
                setIsProject3Displayed(false);
                setIsProject4Displayed(true);
            }
        }


        return (
            <motion.main className="mainContainer projects-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <section className="projects-scroller" onWheel={onWheel}>
                    )


}

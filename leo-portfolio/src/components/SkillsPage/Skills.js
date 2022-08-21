import { motion } from 'framer-motion';
import { useSpring, animated } from "react-spring";

const Skills = () => {
    const anim = useSpring({
        from: {
            opacity: 0,
            transform: "translateY(20px)",
        },
        to: {
            opacity: 1,
            transform: "translateY(0px)",
        },
    });
    return (
        <motion.main className='mainContainer mainSkills' style={anim} exit={{ opacity: 0 }}>
            <h2>Skills & Technologies</h2>
            <div className='skillsContainer'>
                <span className="skillsContainer__html">HTML5</span>
                <span className="skillsContainer__css">CSS3</span>
                <span className="skillsContainer__js">Javascript</span>
                <span className="skillsContainer__sass">Sass</span>
                <span className="skillsContainer__react">React</span>
                <span className="skillsContainer__node">NodeJS</span>
                <span className="skillsContainer__heroku">Heroku</span>
                <span className="skillsContainer__git">Git</span>
                <span className="skillsContainer__github">Github</span>
            </div>
        </motion.main>
    );
}

export default Skills;

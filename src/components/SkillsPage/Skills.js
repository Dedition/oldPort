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
                <span className="skillsContainer__python">Python</span>
                <span className="skillsContainer__js">Javascript</span>
                <span className="skillsContainer__npm">NPM</span>
                <span className="skillsContainer__node">NodeJS</span>
                <span className="skillsContainer__html">HTML5</span>
                <span className="skillsContainer__sass">Sass</span>
                <span className="skillsContainer__css">CSS3</span>
                <span className="skillsContainer__pug">PugJS</span>
                <span className="skillsContainer__react">ReactJS</span>
                <span className="skillsContainer__redux">Redux</span>
                <span className="skillsContainer__react">React-Router</span>
                <span className="skillsContainer__react">React-Spring</span>
                <span className="skillsContainer__react">React-Hooks</span>
                <span className="skillsContainer__flask">Flask</span>
                <span className="skillsContainer__flask">Flask-SQLAlchemy</span>
                <span className="skillsContainer__postgres">PostgreSQL</span>
                <span className="skillsContainer__js">Express.js</span>
                <span className="skillsContainer__sequelize">Sequelize</span>
                {/* <span className="skillsContainer__js">NodeJS</span> */}
                <span className="skillsContainer__docker">Docker</span>
                <span className="skillsContainer__aws">AWS S3</span>
                <span className="skillsContainer__heroku">Heroku</span>
                <span className="skillsContainer__github">Github</span>
                <span className="skillsContainer__git">Git</span>
                <span className="skillsContainer__scrum">Test-Driven Development</span>
                <span className="skillsContainer__scrum">SCRUM</span>
                <span className="skillsContainer__scrum">Kanban</span>
                <span className="skillsContainer__api">REST API</span>
            </div>
        </motion.main>
    );
}

export default Skills;

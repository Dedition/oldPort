import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";
import { useEffect, useState } from "react";

const AboutMePage = () => {
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
        <>
            <motion.main className="mainAbout" exit={{ opacity: 0 }}>
                <>
                    <h2>About me</h2>
                </>

                <div className="aboutContainer">
                    <>
                        <p>
                            I like to consider myself one of the lucky ones. Old enough to
                            remember the days where technology didn't dominate the world,
                            young enough to appreciate the qualitative improvement that came
                            with technological innovation. <br /><br />
                            Growing up, I was fortunate enough to be surrounded by people who
                            knew how to handle a business but not how they could weave in technology to
                            help them achieve greater heights.
                            <br /><br />Until recently in life, I was one of those individuals.<br /><br />
                            What I now bring to the table is a new perspective on the world of
                            business technological needs. I know how business needs and technological solutions
                            can meet to obtain an outcome that is beneficial to everyone involved.
                            
                            {/* <br /><br />
                            Technically speaking:
                            I am experienced in Software Engineering, Web Development, Economics, and Business.

                            <br /><br />
                            Within my assortment of varied skills, I am also accomplished in leveraging AGILE methodologies
                            to create and maintain software.
                            My preferred method of development is
                            through the use of the Kanban methodology when development time allows for it.
                            Adversely, I am also a strong believer in the use of the
                            SCRUM methodology for similar reasons. */}
                        </p>
                    </>
                    <>
                        <div className="aboutStrong">
                            {/* <span>“Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live”
                                ― John Woods</span> */}
                            <span>Ambition </span>
                            <span>is </span>
                            <span>the </span>
                            <span>path </span>
                            <span>to </span>
                            <span>success. </span>
                            <span>Persistence is the vehicle you arrive in. </span>
                            <span>- Bill Bradley</span>
                        </div>
                    </>

                    <br />
                    <>
                        <div className="second__heading">
                            <span>But who am I as a developer?</span>
                        </div>
                        <p className="second__heading-text">
                            As a developer, I am a person who is passionate about technology and
                            the way it can be used to solve problems. I am a problem solver, a
                            solutions architect, a scholar and a leader.
                            I'm not someone who is ashamed of asking for help - but I'm also not
                            someone who is afraid to Google for 10 hours first. <br /><br />


                            I am your next hire. <br />Contact me and let me know how I can help meet
                            
                            {/* I am your next hire. */}

                            <br /><br />
                            I am experienced in Software Engineering, Web Development, Economics, and Business.

                            <br /><br />
                            Within my assortment of varied skills, I am also accomplished in leveraging AGILE methodologies
                            to create and maintain software.
                            My preferred method of development is
                            through the use of the Kanban methodology when development time allows for it.
                            Adversely, I am also a strong believer in the use of the
                            SCRUM methodology for similar reasons.

                            <br />Contact me and let me know how I can help meet
                            your business needs.
                        </p>
                    </>

                    {/* <div className="second__heading"></div> */}

                    <div className="aboutContact">
                        <>
                            <a className="contactLink" href="mailto:yems500@gmail.com">
                                <span>Contact me</span>
                                <div className="barHover"></div>{" "}
                            </a>
                        </>
                        <a href="https://www.linkedin.com/in/leo-l-79a260b0/" className="linkedin">
                            <span>LinkedIn</span>
                            <div className="barHover"></div>{" "}
                        </a>
                        <a href="https://github.com/Dedition" className="github">
                            {/* <i className="fab fa-github"></i> */}
                            <span>Github</span>
                            <div className="barHover"></div>{" "}
                        </a>
                    </div>
                </div>
            </motion.main>
        </>
    );
}

export default AboutMePage;

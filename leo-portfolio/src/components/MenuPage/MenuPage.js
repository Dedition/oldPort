import { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";

const MenuPage = () => {
    const { menuText, setMenuText } = useContext(MenuContext);
    return (
        <div className="MenuPage">
            <div className="MenuPage__container"
                onMouseEnter={() => setMenuText("Home")}
            >
                {menuText === "Home" || menuText === "" ? (
                    <div className="MenuPage__text">
                        <p className="primaryText menuTextListAnimation">
                            <img src={require("../../assets/images/face.jpg")} alt="my face" className="MenuPage__profile_picture" />
                            Hello, I'm Leo, your friendly neighborhood web developer. But you can just call
                            me your next hire. It's my ever-growing pleasure to make your acquaintance!
                        </p>
                        <p className="secondaryText">
                            I'm a full-stack web developer with a passion for creating
                            beautiful, responsive websites.
                        </p>
                        <a className="resume-download" href="./assets/Resume.docx" download>
                            My Resume
                        </a>
                    </div>
                ) : menuText === "Projects" ? (
                    <div className="MenuPage__text">
                        <p className="primaryText menuTextListAnimation">
                            Here's a selection of my projects I did during my free time and during some collaborations
                            with other developers.
                        </p>
                        <p className="secondaryText">
                            These projects were all done on a strict deadline where my sole purpose was to
                            showcase my skills and abilities of completing a seamless full-stack web application
                            that would be responsive and user-friendly.
                        </p>
                    </div>
                ) : menuText === "Skills" ? (
                    <div className="MenuPage__text">
                        <p className="primaryText menuTextListAnimation">
                            Here's a selection of my skills and technologies I use in my role as a Software Engineer.
                        </p>
                        <p className="secondaryText">
                            I'm fortunate enough to have gained a wide variety of skills and knowledge through
                            my work as a web developer and this is just a way for me to keep track of all of
                            the skills I've acquired.
                        </p>
                    </div>
                ) : menuText === "About" ? (
                    <div className="MenuPage__text">
                        <p className="primaryText menuTextListAnimation">
                            This is only if you're more interested in things other than my life as a web developer.
                            Get to know me a little better.
                        </p>
                        <p className="secondaryText">
                            If you want to get an idea of who I am as an individual or a developer, then look no further.
                        </p>
                    </div>
                ) : menuText === "Contact" ? (
                    <div className="MenuPage__text">
                        <p className="primaryText menuTextListAnimation">
                            Feel free to reach out to me if you have any questions or want to work together.
                        </p>
                        <p className="secondaryText">
                            Contact
                        </p>
                    </div>
                ) : menuText === "Work" ? (
                    <div className="MenuPage__text">
                        <p className="primaryText menuTextListAnimation">
                            If you were looking for my work experience/resume, <a href="./assets/Resume.docx" download>here you go!</a>
                        </p>
                        <p className="secondaryText">
                        </p>
                    </div>
                ) : null}
            </div>
        </div>

    );
}

export default MenuPage;

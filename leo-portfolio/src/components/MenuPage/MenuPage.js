import { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";

const MenuPage = () => {
    const { menuText, setMenuText } = useContext(MenuContext);
    return (
        // List Home, About Me, Projects, Work, Skills, Contact
        <div className="MenuPage">
            <div className="MenuPage__container"
                onMouseEnter={() => setMenuText("Home")}
            >
                {menuText === "Home" || menuText === "" ? (
                    <div className="MenuPage__text">
                        <p className="primaryText menuTextListAnimation">
                            Hello, I'm Leo, your friendly neighborhood web developer. But you can just call
                            me your next hire. It's my ever-growing pleasure to make your acquaintance!
                        </p>
                        <p className="secondaryText menuTextListAnimation">
                            I'm a full-stack web developer with a passion for creating
                            beautiful, responsive websites.
                        </p>
                    </div>
                ) : menuText === "Projects" ? (
                    <div className="MenuPage__text">
                        <p className="primaryText menuTextListAnimation">
                            Here's a selection of my projects I did during my free time and during some collaborations
                            with other developers.
                        </p>
                        <p className="secondaryText menuTextListAnimation">
                            Projects
                        </p>
                    </div>
                ) : menuText === "Skills" ? (
                    <div className="MenuPage__text">
                        <p className="primaryText menuTextListAnimation">
                            Here's a selection of my skills and technologies I use in my role as a Software Engineer.
                        </p>
                        <p className="secondaryText menuTextListAnimation">
                            Skills
                        </p>
                    </div>
                ) : menuText === "About" ? (
                    <div className="MenuPage__text">
                        <p className="primaryText menuTextListAnimation">
                            This is only if you're more interested in things other than my life as a web developer.
                            Get to know me a little better.
                        </p>
                        <p className="secondaryText menuTextListAnimation">
                            About Me
                        </p>
                    </div>
                ) : menuText === "Contact" ? (
                    <div className="MenuPage__text">
                        <p className="primaryText menuTextListAnimation">
                            Feel free to reach out to me if you have any questions or want to work together.
                        </p>
                        <p className="secondaryText menuTextListAnimation">
                            Contact
                        </p>
                    </div>
                ) : menuText === "Work" ? (
                    <div className="MenuPage__text">
                        <p className="primaryText menuTextListAnimation">
                            Work
                        </p>
                        <p className="secondaryText menuTextListAnimation">
                            Work
                        </p>
                    </div>
                ) : null}
            </div>
        </div>

    );
}

export default MenuPage;

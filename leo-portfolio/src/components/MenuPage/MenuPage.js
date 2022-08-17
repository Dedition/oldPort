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
                    <p className="primaryText menuTextListAnimation">
                        Hello, I'm Leo, your friendly neighborhood web developer.
                    </p>
                ) : (
                    <p className="secondaryText menuTextListAnimation">
                        Hello, I'm Leo, your friendly neighborhood web developer.
                    </p>
                )}
            </div>
            <div className="MenuPage__container"
                onMouseEnter={() => setMenuText("Projects")}
            >
                {menuText === "Projects" ? (
                    <p className="primaryText menuTextListAnimation">
                        View my projects
                    </p>
                ) : (
                    <p className="secondaryText menuTextListAnimation">
                        View my projects
                    </p>
                )}
            </div>
            <div className="MenuPage__container"
                onMouseEnter={() => setMenuText("Work")}
            >
                {menuText === "Work" ? (
                    <p className="primaryText menuTextListAnimation">
                        View my work
                    </p>
                ) : (
                    <p className="secondaryText menuTextListAnimation">
                        View my work
                    </p>
                )}
            </div>
            <div className="MenuPage__container"
                onMouseEnter={() => setMenuText("Contact")}
            >
                {menuText === "Contact" ? (
                    <p className="primaryText menuTextListAnimation">
                        Contact me
                    </p>
                ) : (
                    <p className="secondaryText menuTextListAnimation">
                        Contact me
                    </p>
                )}
            </div>
            <div className="MenuPage__container"
                onMouseEnter={() => setMenuText("About")}
            >
                {menuText === "About" ? (
                    <p className="primaryText menuTextListAnimation">
                        About me
                    </p>
                ) : (
                    <p className="secondaryText menuTextListAnimation">
                        About me
                    </p>
                )}
            </div>
            <div className="MenuPage__container"
                onMouseEnter={() => setMenuText("Skill")}
            >
                {menuText === "Skill" ? (
                    <p className="primaryText menuTextListAnimation">
                        My skills
                    </p>
                ) : (
                    <p className="secondaryText menuTextListAnimation">
                        My skills
                    </p>
                )}
            </div>
        </div>
    );
}

export default MenuPage;

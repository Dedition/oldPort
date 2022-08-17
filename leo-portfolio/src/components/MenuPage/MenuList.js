import { useState, useContext } from "react";
import { MenuContext } from "../../context/MenuContext";
import { Link } from "react-router-dom";

const MenuList = () => {
    const { setMenuText } = useContext(MenuContext);
    const [isProjectHovered, setIsProjectHovered] = useState(false);
    const [isWorkHovered, setIsWorkHovered] = useState(false);
    const [isContactHovered, setIsContactHovered] = useState(false);
    const [isAboutHovered, setIsAboutHovered] = useState(false);
    const [isSkillHovered, setIsSkillHovered] = useState(false);

    return (
        <div className="MenuList">
            <ul className="MenuList__list">
                <li
                    onMouseEnter={() => {
                        setMenuText("About");
                        setIsAboutHovered(true);
                        setIsProjectHovered(false);
                        setIsWorkHovered(false);
                        setIsContactHovered(false);
                        setIsSkillHovered(false)
                    }}
                    onMouseLeave={() => setMenuText("")}
                    className="MenuList__item"
                >
                    <Link to="/about" className="MenuList__link">
                        {isAboutHovered ? (
                            <p className="primaryText menuTextListAnimation">
                                About
                            </p>
                        ) : (
                            <p className="secondaryText menuTextListAnimation">
                                About
                            </p>
                        )
                        }
                    </Link>
                    <div className={isAboutHovered ? "MenuList__indicator" : "MenuList__indicator--hidden"}></div>
                </li>
                <li
                    onMouseEnter={() => {
                        setMenuText("Work")
                        setIsWorkHovered(true);
                        setIsProjectHovered(false);
                        setIsContactHovered(false);
                        setIsAboutHovered(false);
                        setIsSkillHovered(false)
                    }
                    }
                    onMouseLeave={() => setMenuText("")}
                    className="MenuList__item"
                >
                    <Link to="/work" className="MenuList__link">
                        {isWorkHovered ? (
                            <p className="primaryText menuTextListAnimation">
                                Work
                            </p>
                        ) : (
                            <p className="secondaryText menuTextListAnimation">
                                Work
                            </p>
                        )}
                    </Link>
                    <div className={isWorkHovered ? "MenuList__indicator" : "MenuList__indicator--hidden"}></div>
                </li>
                <li
                    onMouseEnter={() => {
                        setMenuText("Skills");
                        setIsSkillHovered(true)
                        setIsProjectHovered(false);
                        setIsWorkHovered(false);
                        setIsContactHovered(false);
                        setIsAboutHovered(false);
                    }}
                    onMouseLeave={() => setMenuText("")}
                    className="MenuList__item"
                >
                    <Link to="/skills" className="MenuList__link">
                        {isSkillHovered ? (
                            <p className="primaryText menuTextListAnimation">
                                Skills
                            </p>
                        ) : (
                            <p className="secondaryText menuTextListAnimation">
                                Skills
                            </p>
                        )}
                    </Link>
                    <div className={isSkillHovered ? "MenuList__indicator" : "MenuList__indicator--hidden"}></div>
                </li>
                <div className={isContactHovered ? "MenuList__indicator" : "MenuList__indicator--hidden"}></div>
                <li
                    onMouseEnter={() => {
                        setMenuText("Projects");
                        setIsProjectHovered(true);
                        setIsWorkHovered(false);
                        setIsContactHovered(false);
                        setIsAboutHovered(false);
                        setIsSkillHovered(false)
                    }
                    }
                    onMouseLeave={() => setMenuText("")}
                    className="MenuList__item"
                >
                    <Link to="/projects" className="MenuList__link">
                        {isProjectHovered ? (
                            <p className="primaryText menuTextListAnimation">
                                Projects
                            </p>
                        ) : (
                            <p className="secondaryText menuTextListAnimation">
                                Projects
                            </p>
                        )}
                    </Link>
                    <div className={isProjectHovered ? "MenuList__indicator" : "MenuList__indicator--hidden"}></div>
                </li>
                <li
                    onMouseEnter={() => {
                        setMenuText("Contact");
                        setIsContactHovered(true);
                        setIsProjectHovered(false);
                        setIsWorkHovered(false);
                        setIsAboutHovered(false);
                        setIsSkillHovered(false)
                    }
                    }
                    onMouseLeave={() => setMenuText("")}
                    className="MenuList__item"
                >
                    <Link to="/contact" className="MenuList__link">
                        {isContactHovered ? (
                            <p className="primaryText menuTextListAnimation">
                                Contact
                            </p>
                        ) : (
                            <p className="secondaryText menuTextListAnimation">
                                Contact
                            </p>
                        )}
                    </Link>
                    <div className={isContactHovered ? "MenuList__indicator" : "MenuList__indicator--hidden"}></div>
                </li>
            </ul>
        </div >
    );
}


export default MenuList;

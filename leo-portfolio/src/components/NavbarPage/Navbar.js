import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="Navbar">
            <nav>
                <span>Leo Ladipo</span>
                <div>
                    <>
                        <Link to="/">Menu</Link>
                        <div className="MenuList__indicator"></div>
                    </>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

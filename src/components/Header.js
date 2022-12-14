import logo from '../images/Rick-and-Morty.png';
import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        <header className="header">
            <NavLink className="header__link" to="/">
                <img className="header__logo" src={logo} alt="Logo"></img>
            </NavLink>
      </header>
    );
}

export default Header;
//import logo from '../images/Rick-and-Morty.png'
import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        <header className="header">
            <NavLink to="/">
                <h1>Rick y Morty</h1>
                {/* <img className='logo' src={logo} alt=""></img> */}
            </NavLink>
      </header>
    );
}

// Header.propTypes = {

// };

export default Header;
import { NavLink } from "react-router-dom";
import logo from '../images/Rick-and-Morty.png';
import pickleRick from '../images/pickleRickLanding.png';

const Landing = (props) => {

    return (
        <section className="landing">
            <img className="landing__logo" src={logo} alt="Logo"></img>
            <p className="landing__title">Click on Pickle Rick to start</p>
            <NavLink className="landing__link" to={"/characters"}><img className="landing__img" src={pickleRick} alt="Pickle Rick" title="Pickle Rick"></img></NavLink>
        </section>
    );
}

export default Landing;
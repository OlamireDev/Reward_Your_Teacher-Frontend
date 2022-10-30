import "./navbar.scss"
import help from "../RegisterPage/rwt.png"
import { Link } from "react-router-dom";
import { useState } from "react";


const NavBar = () => { 

    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const openBurger = () => setIsBurgerOpen(!isBurgerOpen);
    return ( 

        <div className="navbar-wrapper">
            <div className="logo-section">
                <img className="helper-hand" src={help}/>
            </div>
            <div className={`navlink-section ${isBurgerOpen ? "navlink-section-active": "openBurger"}`}>
                <ul className="navlink-wrapper">
                    <li><Link className="navlinks" to="/">Home</Link></li>
                    <li><Link className="navlinks" to="/">About</Link></li>
                    <li><Link className="navlinks" to="/">Reward Yor Teacher</Link></li>
                    <li><Link className="navlinks" to="/">Contact Us</Link></li>
                    <li><Link className="navlinks" to="/login"><span>Login</span></Link></li>
                </ul>
            </div>
            <div onClick={openBurger} className="hamburger">
                <i className="fa fa-bars"></i>
            </div>
        </div>
     );
}
 
export default NavBar;
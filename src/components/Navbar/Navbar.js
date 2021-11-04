import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/shared/logo.svg';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const [navClicked, setNavClicked] = useState(0);
    const toggle = () => setIsOpen(!isOpen);

    // const toggleClick = (index) => {
    //     setNavClicked(index);
    // }

    return (
        <header className="primary-header flex">
            <div>
                <Logo className="logo" />
            </div>
            <button onClick={toggle} className={`mobile-nav-toggle ${isOpen ? 'cross' : 'hamburger' }`} aria-controls="primary-navigation"></button>
            <nav>
                <ul id="primary-navigation" className={`primary-navigation ${isOpen ? 'show' : ''} underline-indicators flex`}>
                    <li><Link to="/" onClick={toggle} className= "ff-sans-cond uppercase text-white letter-spacing-2"><span aria-hidden = "true">00</span>Home</Link></li>
                    <li><Link to="/destination" onClick={toggle} className="ff-sans-cond uppercase text-white letter-spacing-2"><span aria-hidden = "true">01</span>Destination</Link></li>
                    <li><Link to="/crew" onClick={toggle} className="ff-sans-cond uppercase text-white letter-spacing-2"><span aria-hidden = "true">02</span>Crew</Link></li>
                    <li><Link to="/technology" onClick={toggle} className="ff-sans-cond uppercase text-white letter-spacing-2"><span aria-hidden = "true">03</span>Technology</Link></li>

                </ul>
            </nav>                               
        </header> 
    )
}

export default Navbar;

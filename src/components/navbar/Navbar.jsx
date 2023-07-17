import React, { useState } from 'react'
import './navbar.scss'
import logo from '../../assets/logo.png'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { Link, animateScroll as scroll } from 'react-scroll'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false) // Menu toggle

    const [active, setActive] = useState('pf__navbar-links') // Navbar links toggle animation
    const navToggle = () => {
        if (active === 'pf__navbar-links') {
            setActive('pf__navbar-links pf__navbar-links__active')
        } else setActive('pf__navbar-links')
    }

    const scrollToTop = () => {
        scroll.scrollToTop(); 
    };


    return (
        <nav className="pf__navbar section__padding">
            <div className="pf__navbar-logo" onClick={scrollToTop}>
                <img src={logo} alt="logo" />
                <h3>Nicolo G. Galinato</h3>
            </div>
            <ul className={active}>
                <li className="pf__navbar-links_items">
                    <Link activeClass="active" to="pf__home" smooth={true} duration={500} onClick={() => {setActive('pf__navbar-links'); setToggleMenu(false);}}>
                        Home
                    </Link>
                </li>
                <li className="pf__navbar-links_items">
                    <Link activeClass="active" to="pf__about" offset={-80} smooth={true} duration={500} onClick={() => {setActive('pf__navbar-links'); setToggleMenu(false);}}>
                        About
                    </Link>
                </li>
                <li className="pf__navbar-links_items">
                    <Link activeClass="active" to="pf__projects"  smooth={true} duration={500} onClick={() => {setActive('pf__navbar-links'); setToggleMenu(false);}}>
                        Projects
                    </Link>
                </li>
                <li className="pf__navbar-links_items">
                    <Link activeClass="active" to="pf__contact" offset={-80} smooth={true} duration={500} onClick={() => {setActive('pf__navbar-links'); setToggleMenu(false);}}>
                        Contact
                    </Link>
                </li>
            </ul>
            <div className="pf__navbar-menu" onClick={navToggle}>
                {/* Navbar hamburger and close menu*/}
                {toggleMenu ? (
                    <RiCloseLine className="icons" color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                ) : (
                    <RiMenu3Line className="icons" color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                )}
            </div>
        </nav>
    )
}

export default Navbar

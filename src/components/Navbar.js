import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DiAtom } from "react-icons/di";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import './Navbar.css';

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const handleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    const handleCloseMobileMenu = () => {
        setMobileMenu(false);
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo'><DiAtom className='navbar-logo-atom' onClick={handleCloseMobileMenu} /><p className='navbar-logo-title' onClick={handleCloseMobileMenu}>Front Web Developer</p> </Link>
                    <ul className={mobileMenu ? 'navbar-menu active' : 'navbar-menu'}>
                        <li className="nav-items">
                            <Link to='/' className='nav-links' onClick={handleCloseMobileMenu}>Home</Link>
                        </li>
                        <li className="nav-items">
                            <Link to='/projects' className='nav-links' onClick={handleCloseMobileMenu}>My projects</Link>
                        </li>
                        <li className="nav-items">
                            <Link to='https://github.com/jerzyk2007' className='nav-links' onClick={handleCloseMobileMenu}>GitHub</Link>
                        </li>
                        <li className="nav-items">
                            <Link to='/about-me' className='nav-links' onClick={handleCloseMobileMenu}>About Me</Link>
                        </li>
                        {/* <li className="nav-items">
                            <Link className='nav-links' onClick={handleCloseMobileMenu}>ENG/PL</Link>
                        </li> */}
                    </ul>
                    <div className="navbar-menu-icon">
                        {!mobileMenu ? <HiOutlineMenu onClick={handleMobileMenu} /> : <HiOutlineX onClick={handleMobileMenu} />}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
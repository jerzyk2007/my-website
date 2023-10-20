// import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { DiAtom } from "react-icons/di";
// import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import './Navmenu.css';

const Navmenu = ({ handleCloseMobileMenu, mobileMenu }) => {

    return (
        <>
            <ul className={mobileMenu ? 'navmenu__menu active' : 'navmenu__menu'}>
                <li className="navmenu-items">
                    <Link to='/' className='navmenu-links' onClick={handleCloseMobileMenu}>Home</Link>
                </li>
                <li className="navmenu-items">
                    <Link to='/projects' className='navmenu-links' onClick={handleCloseMobileMenu}>My projects</Link>
                </li>
                <li className="navmenu-items">
                    <Link to='https://github.com/jerzyk2007' className='navmenu-links' onClick={handleCloseMobileMenu}>GitHub</Link>
                </li>
                <li className="navmenu-items">
                    <Link to='/about-me' className='navmenu-links' onClick={handleCloseMobileMenu}>About Me</Link>
                </li>
                {/* <li className="navmenu-items">
                            <Link className='navmenu-links' onClick={handleCloseMobileMenu}>ENG/PL</Link>
                        </li> */}
            </ul>

        </>
    );
};

export default Navmenu;
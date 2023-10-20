import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DiAtom } from "react-icons/di";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import './Header.css';
import Navmenu from './Navmenu';


const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const handleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    const handleCloseMobileMenu = () => {
        setMobileMenu(false);
    };

    return (
        <>
            <nav className="header">
                <div className="header-container">
                    <Link to='/' className='header-logo'>
                        <DiAtom className='header-logo-atom' onClick={handleCloseMobileMenu} /><p className='header-logo-title' onClick={handleCloseMobileMenu}>Front Web Developer</p> </Link>
                    <Navmenu
                        handleCloseMobileMenu={handleCloseMobileMenu} mobileMenu={mobileMenu} />
                    <div className="header-menu">
                        {!mobileMenu ? <HiOutlineMenu onClick={handleMobileMenu} /> : <HiOutlineX onClick={handleMobileMenu} />}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
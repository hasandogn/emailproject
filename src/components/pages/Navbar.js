import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IoRocketSharp } from 'react-icons/io5'
import { Button } from './Button'
import './Navbar.css'
import { IconContext } from 'react-icons/lib'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                            <IoRocketSharp className="navbar-icon" />
                        emailrockets
                    </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    Ana Sayfa
                            </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/forwhom' className='nav-links' onClick={closeMobileMenu}>
                                    Kimler İçin?
                            </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                    Hizmetler
                            </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                    Ürünler
                            </Link>
                            </li>
                            <li className="nav-btn">
                                {button ? (
                                    <Link to='/signup' className='btn-link'>
                                        <Button buttonStyle='btn--outline'>Üye ol</Button>
                                    </Link>
                                ) : (
                                    <Link to='/signup' className='btn-link' onClick={closeMobileMenu}>
                                        <Button
                                            buttonStyle='btn--outline'
                                            buttonSize='btn--mobile'>
                                            Üye ol
                                    </Button>
                                    </Link>
                                )}
                            </li>

                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar

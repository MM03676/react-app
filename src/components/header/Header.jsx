import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.scss';

function Header() {
    return (
        <div className='header'>
            <Link to="/" className='logo-container'>
                <Logo />
            </Link>
            <div className="options-container">
                <Link to="/shop" className='option'>
                    SHOP
                </Link>
                <Link to="/contact" className='option'>
                    CONTACT
                </Link>
                <Link to="/sign" className='option'>
                    Sign In / Up
                </Link>
            </div>
        </div>
    )
}

export default Header

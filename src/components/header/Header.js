import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

// Creat header component 
const Header = () => {
    return (
        <div className="Header">
            <img src={logo} alt="" />
            
            {/* Creat Navigation bar  */}
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Invenory</a>
            </nav>
        </div>
    );
};

export default Header;
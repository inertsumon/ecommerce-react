import React from 'react';
import "./Header.css";
import logo from "../../images/logo.png";
const Header = () => {
    return (
        <div>
            <div className="header-logo">
                <img src={logo} alt="" />
            </div>
            <div className="header-nav">
                <nav>
                    <a href="/shop">Shop</a>
                    <a href="/order">Order Review</a>
                    <a href="/inventory">Manage Inventory Here</a>
</nav>
            </div>

        </div>
    );
};

export default Header;
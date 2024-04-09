import React from 'react';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {

    let history = useHistory();

    const navigateToYourCart = () => {
        history.push("/yourcart"); // Navigate to the '/yourcart' route
    }


    return (
        <div className="navbar">
            <div className="navbar__logo">
                <img
                    className="navbar__logoImage"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                    alt="Amazon Logo"
                />
                <span className="navbar__address">Your Address Here</span>
            </div>
            <div className="navbar__search">
                <input type="text" className="navbar__searchInput" placeholder="Search..." />
                <FontAwesomeIcon icon={faSearch} className="navbar__searchIcon" />
            </div>
            <div className="navbar__language">
                <select className="navbar__languageDropdown">
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="es">Spanish</option>
                </select>
            </div>
            <div className="navbar__profile">
                <img
                    className="navbar__profileImage"
                    src="https://via.placeholder.com/150"
                    alt="Profile"
                />
            </div>
            <div className="navbar__cart">
                <button className="navbar__cartButton" onClick={navigateToYourCart}>
                    <FontAwesomeIcon icon={faShoppingCart} className="navbar__cartIcon" /> Your Cart
                </button>
            </div>
        </div>
    );
};

export default Navbar;

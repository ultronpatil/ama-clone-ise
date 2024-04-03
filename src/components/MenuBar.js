import React from 'react';
import './MenuBar.css';
import { Link } from 'react-router-dom';
const MenuBar = () => {
    return (
        <div className="menu-bar">
            <ul className="menu-bar__list">
                <li className="menu-bar__item">
                    <Link to='all' className="menu-bar__link">
                        All
                    </Link>
                </li>
                <li className="menu-bar__item">
                    <Link to='minitv' className="menu-bar__link">
                        Amazon Mini TV
                    </Link>
                </li>
                <li className="menu-bar__item">
                    <Link to='clothes' className="menu-bar__link">
                        Clothes
                    </Link>
                </li>
                <li className="menu-bar__item">
                    <Link to="/books" className="menu-bar__link">
                        Books
                    </Link>
                </li>

                <li className="menu-bar__item">
                    <Link to="/electronics" className="menu-bar__link">
                        Electronics
                    </Link>
                </li>
                <li className="menu-bar__item">
                    <Link to="/homedecor" className="menu-bar__link">
                        Home Decor</Link>
                </li>
                <li className="menu-bar__item">
                    <Link to="/coupons" className="menu-bar__link">
                        Coupons
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default MenuBar;

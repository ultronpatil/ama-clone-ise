import React from 'react';
import './Footer.css';
import { useHistory } from 'react-router-dom';

const Footer = () => {

    const history = useHistory();
    const handleAboutUsClick = () => {
        history.push('/aboutus');
    };
    const handleCaeersClick = () => {
        history.push('/careers');
    };


    return (
        <footer className="footer">
            <div className="footer__column">
                <h3></h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="footer__column">
                <h3>Get to Know Us</h3>
                <ul>
                    <li onClick={handleAboutUsClick}>About Us</li>
                    <li onClick={handleCaeersClick}>Careers</li>
                    <li>Press Releases</li>
                    <li>Amazon Science</li>
                </ul>
            </div>
            <div className="footer__column">
                <h3>Connect with Us</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </div>
            <div className="footer__column">
                <h3>Make Money with Us</h3>
                <ul>
                    <li>Sell on Amazon</li>
                    <li>Sell under Amazon Accelerator</li>
                    <li>Protect and Build Your Brand</li>
                    <li>Amazon Global Selling</li>
                    <li>Become an Affiliate</li>
                    <li>Fulfilment by Amazon</li>
                    <li>Advertise Your Products</li>
                    <li>Amazon Pay on Merchants</li>
                </ul>
            </div>
            <div className="footer__column">
                <h3>Let Us Help You</h3>
                <ul>
                    <li>COVID-19 and Amazon</li>
                    <li>Your Account</li>
                    <li>Returns Centre</li>
                    <li>100% Purchase Protection</li>
                    <li>Amazon App Download</li>
                    <li>Help</li>
                </ul>
            </div>
            <div className="footer__column">
                <h3></h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;

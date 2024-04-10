import React from 'react';
import Navbar from './Navbar';
import MenuBar from './MenuBar';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faAddressCard, faCreditCard, faCog, faSignOutAlt, faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Profile.css'; // Import CSS for Profile page styling

const Profile = () => {
    return (
        <>
            <Navbar />
            <MenuBar />
            <div className="profile-container">

                <div className="account-info">
                    <h2><FontAwesomeIcon icon={faUser} /> Account Information</h2>
                    <div className="info">
                        <p><FontAwesomeIcon icon={faUser} /> Name: John Doe</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> Email: johndoe@example.com</p>
                        <p><FontAwesomeIcon icon={faPhone} /> Phone: +1234567890</p>
                    </div>
                </div>


                <div className="profile-content">

                    <div className="profile-options">
                        <div className="profile-option">
                            <FontAwesomeIcon icon={faUserCircle} className="profile-icon" />
                            <p>Account Settings</p>
                        </div>
                        <div className="profile-option">
                            <FontAwesomeIcon icon={faAddressCard} className="profile-icon" />
                            <p>Address Book</p>
                        </div>
                        <div className="profile-option">
                            <FontAwesomeIcon icon={faCreditCard} className="profile-icon" />
                            <p>Payment Methods</p>
                        </div>

                        <div className="profile-option signout-option">
                            <FontAwesomeIcon icon={faSignOutAlt} className="profile-icon" />
                            <p className="signout-text">Sign Out</p>
                        </div>
                        <div className="profile-option ">
                            <FontAwesomeIcon icon={faCog} className="profile-icon" />
                            <p>Settings</p>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default Profile;

import React from 'react';
import Navbar from './Navbar';
import MenuBar from './MenuBar';
import Footer from './Footer';
import './AboutUs.css'; // Import external CSS file

const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <MenuBar />
            <div className="about-us-container">
                <h1>About Us</h1>
                <div className="about-us-content">
                    <p>Welcome to Amazon!</p>
                    <p>Amazon is a multinational technology company based in Seattle, Washington. It is one of the largest e-commerce platforms in the world, offering a wide range of products and services to millions of customers worldwide.</p>
                    <p>Our mission at Amazon is to be Earth's most customer-centric company, where customers can find and discover anything they might want to buy online.</p>
                    <p>Founded by Jeff Bezos in 1994, Amazon started as an online bookstore and has since expanded into various categories, including electronics, fashion, home goods, and cloud computing services.</p>
                    <p>We are committed to innovation, customer satisfaction, and providing a seamless shopping experience for our users.</p>
                </div>
            </div>

            <div className="news-container">
                <h2>Amazon News</h2>
                <ul>
                    <li><a href="#">Amazon announces new sustainability initiatives</a></li>
                    <li><a href="#">Amazon Prime Day sets new records for sales</a></li>
                    <li><a href="#">Amazon launches new delivery drone technology</a></li>
                    <li><a href="#">Amazon expands its grocery delivery service to new cities</a></li>
                    <li><a href="#">Amazon partners with local businesses to offer same-day delivery</a></li>
                </ul>
            </div>

            <div className="careers-container">
                <h2>Careers at Amazon</h2>
                <p>Join our team and be part of a global workforce dedicated to innovation and customer satisfaction. Explore exciting career opportunities at Amazon:</p>
                <ul>
                    <li><a href="#">Software Engineer</a></li>
                    <li><a href="#">Marketing Manager</a></li>
                    <li><a href="#">Warehouse Associate</a></li>
                    <li><a href="#">Data Scientist</a></li>
                    <li><a href="#">Customer Service Representative</a></li>
                </ul>
            </div>

            <div className="trending-container">
                <h2>Trending Now</h2>
                <ul>
                    <li><a href="#">Bestselling books</a></li>
                    <li><a href="#">Top-rated electronics</a></li>
                    <li><a href="#">Fashion trends</a></li>
                    <li><a href="#">Home essentials</a></li>
                    <li><a href="#">Health & wellness products</a></li>
                </ul>
            </div>

            <Footer />
        </div>
    );
}

export default AboutUs;

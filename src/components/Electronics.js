import React from 'react';
import Navbar from './Navbar';
import MenuBar from './MenuBar';
import Footer from './Footer';
import './HomeDecor.css'; // Rename Books.css to HomeDecor.css
import SideBar from './SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Electronics = () => {

    const renderStars = (rating) => {
        const filledStars = [];
        const emptyStars = [];

        // Filled stars
        for (let i = 0; i < rating; i++) {
            filledStars.push(<FontAwesomeIcon key={`filled-${i}`} icon={faStar} style={{ color: '#ffd700', marginRight: '5px' }} />);
        }

        // Empty stars
        for (let i = rating; i < 5; i++) {
            emptyStars.push(<FontAwesomeIcon key={`empty-${i}`} icon={faStar} style={{ color: '#ccc', marginRight: '5px' }} />);
        }

        return [...filledStars, ...emptyStars];
    };

    // Dummy home decor product data
    const homeDecorProducts = [
        {
            id: 1,
            title: 'Modern Wall Clock',
            description: 'Stylish wall clock for your home decor.',
            imageUrl: 'https://imgs.search.brave.com/qFLzS_w-YvTT1BThb2r84t0CI58PDe4y7S8wgX4J17M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFaMXZ3bk13Y0wu/anBn', // Replace with actual image URL

        },
        {
            id: 2,
            title: 'Smart LED Light Bulb',
            description: 'Energy-efficient smart LED light bulb with customizable colors and brightness.',
            imageUrl: 'https://imgs.search.brave.com/-ECRKBgD79Y7IXoel_Zgt6KoK15g_YinxfOvxN9VoEE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL3ZhZGVyLXBy/b2QuczMuYW1hem9u/YXdzLmNvbS8xNjgy/NTE3NjMwLW5hbm9s/ZWFmLWVzc2VudGlh/bHMtc21hcnQtbGVk/LWNvbG9yLWNoYW5n/aW5nLWxpZ2h0LWJ1/bGItNjQ0OTJlNzk4/ZThjZi5qcGc_Y3Jv/cD0xeHc6MXhoO2Nl/bnRlcix0b3AmcmVz/aXplPTk4MDoq', // Replace with actual image URL

        },
        {
            id: 3,
            title: 'Wireless Bluetooth Speaker',
            description: 'Portable wireless Bluetooth speaker for music on the go.',
            imageUrl: 'https://imgs.search.brave.com/Q4x9fvcBKe_1RwrXmBHGvm0EaAuxGZ2A0XX1CDL934M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxM29Lck9qWG1M/LmpwZw', // Replace with actual image URL

        },
        {
            id: 4,
            title: 'Robot Vacuum Cleaner',
            description: 'Automated robot vacuum cleaner for hassle-free cleaning.',
            imageUrl: 'https://imgs.search.brave.com/OHfXKK9YVAIWQJt-52TQawzrE4AgLOtoVFBeNweigVY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mb3J0/dW5lLmNvbS9pbWct/YXNzZXRzL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzAxL0dl/dHR5SW1hZ2VzLTEw/NDA4OTcxMzYtZTE2/NzQwNTMyMjU1ODku/anBnP3c9MTQ0MCZx/PTc1',

        },
        {
            id: 5,
            title: 'Smart Thermostat',
            description: 'Programmable smart thermostat for efficient home heating and cooling control.',
            imageUrl: 'https://imgs.search.brave.com/eGqjFTeKqClak87ESIDUCclJMUpOlz-Oj0-vvJ45G3M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE1/NTMyNTA0MC9waG90/by91c2luZy1zbWFy/dC10aGVybW9zdGF0/LXRvLWNoYW5nZS10/ZW1wcmV0dXJlLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1v/QVNjd1JmSzlETW9m/SWhNWUJ1aWt2dTVG/NE9ROXEzdmxvZ05a/OUYxWG44PQ',

        },
        {
            id: 6,
            title: 'Wireless Charging Pad',
            description: 'Convenient wireless charging pad compatible with various devices.',
            imageUrl: 'https://imgs.search.brave.com/r9OnU77ejXH-vprWe-qAQNmUYW0oHa--ejEewlSVedw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L1o4/U2FYQkZqTjJtRXNl/aXdaZ2dEMk0tMzIw/LTgwLmpwZw',

        },
        {
            id: 7,
            title: 'Smart Wi-Fi Plug',
            description: 'Smart Wi-Fi plug for controlling home appliances remotely via smartphone.',
            imageUrl: 'https://imgs.search.brave.com/iD7WvRXQZKgUyIDrRYflug1qBWzIILUbE3_JDBWPl4A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudHAtbGluay5j/b20vdXBsb2FkL2lt/YWdlLWxpbmUvVGFw/by1QMTI1TV8zcGtf/bm9ybWFsXzIwMjMw/MzE2MjM0MjMxby5q/cGc',

        },
        {
            id: 8,
            title: 'Security Camera System',
            description: 'Comprehensive security camera system for monitoring your home or office.',
            imageUrl: 'https://imgs.search.brave.com/DlttdxYHLHt72D579Y2kT3esv3ud5wkxwyEWrwbCKco/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFoMEI3T0tnUUwu/anBn',

        },
        {
            id: 9,
            title: 'Wireless Earbuds',
            description: 'Compact wireless earbuds with high-quality audio for immersive listening experience.',
            imageUrl: 'https://en.wikipedia.org/wiki/Bluetooth',

        },
        {
            id: 10,
            title: 'Portable Power Bank',
            description: 'Portable power bank for charging devices on the go.',
            imageUrl: 'https://imgs.search.brave.com/hH6QrRgxKknbxAphcjhDnAoqn_Ncs-qpjZg2tKvZzJU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL3ZhZGVyLXBy/b2QuczMuYW1hem9u/YXdzLmNvbS8xNjg0/NDI3MzQ5LW1hc3Rl/ci1keW5hbWljLW13/MDgtMy0xNjE2NDM5/NjQyLmpwZz9jcm9w/PTF4dzoxeGg7Y2Vu/dGVyLHRvcCZyZXNp/emU9OTgwOio',

        },
        {
            id: 11,
            title: 'Smart Doorbell',
            description: 'Smart doorbell with video monitoring and motion detection features.',
            imageUrl: 'https://imgs.search.brave.com/C2FUIvoZBh259I6SUuGGWrR7wsfNk6T8O5R1FpR1Fjw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9naC0x/MjEzMjAtc21hcnQt/ZG9vcmJlbGxzLTE2/MTA2NTIxNTkucG5n/P2Nyb3A9MC40OTh4/dzowLjc2NnhoOzAu/MzQweHcsMC4xMDh4/aCZyZXNpemU9NjQw/Oio',

        },
        {
            id: 12,
            title: 'Wireless Gaming Mouse',
            description: 'Ergonomic wireless gaming mouse with customizable buttons and RGB lighting.',
            imageUrl: 'https://imgs.search.brave.com/Z9fk3apCr5NvwMUoKrlhzvHCXk4ysqYsMHDNTCeFRWg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L2s4/NW5tYzN0ekxpdWR1/aktHMndYY1ItMzIw/LTgwLmpwZw',

        },
        {
            id: 13,
            title: 'Smart Scale',
            description: 'Smart scale for tracking weight and body composition metrics.',
            imageUrl: 'https://imgs.search.brave.com/4k16S1k0WYqr19aYI_Gr_Vr_ZbAgR-rlWImcQ6dsCCg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wZW9w/bGUuY29tL3RobWIv/VVdqdWY2QTlmZEFS/TE5qS1JnM0F4Mm8y/NnhnPS9maXQtaW4v/MTUwMHgxMDAwL2Zp/bHRlcnM6bm9fdXBz/Y2FsZSgpOm1heF9i/eXRlcygxNTAwMDAp/OnN0cmlwX2ljYygp/L3p4Y3pkeDItYmRm/NjIwYzBjZGVhNGIz/NjllZGNmYmNiYjVj/NjI5ODkuanBn',

        },
        {
            id: 14,
            title: 'Noise-Canceling Headphones',
            description: 'Premium noise-canceling headphones for immersive audio experience.',
            imageUrl: 'https://imgs.search.brave.com/4PR0dfbON3I1dGWv79SxYq7v6vmySHwwoFdBvefegJw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFXUTBtQnRCWUwu/anBn',

        },
        {
            id: 15,
            title: 'Smart Home Hub',
            description: 'Centralized smart home hub for controlling various smart devices.',
            imageUrl: 'https://imgs.search.brave.com/Z0QOHaTrJE4S1y04IzZM-h09joyEOn8uXLEwpI9hz2s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWRzLmRhaWx5ZG90/LmNvbS8yMDE5LzA0/L3doYXRfaXNfYV9z/bWFydF9ob21lX2h1/Yl9hcHBsZV90di5q/cGc_YXV0bz1jb21w/cmVzcyZmbT1wanBn',

        }


    ];

    return (
        <div>
            <Navbar />
            <MenuBar />
            <div style={{ display: 'flex' }}>
                <div className="sidebar">

                    <div className="sidebar_content">
                        <h3>New Arrivals</h3>
                        <ul>
                            <li>Last 30 days</li>
                            <li>Last 60 days</li>
                            <li>Last 90 days</li>
                        </ul>
                    </div>
                    <div className="sidebar_content">
                        <h3>Styles</h3>
                        <ul>
                            <li>Modern</li>
                            <li>Classic</li>
                            <li>Vintage</li>
                            <li>Minimalist</li>
                            {/* Add more style options as needed */}
                        </ul>
                    </div>
                    <div className="sidebar_content">
                        <h3>Room Type</h3>
                        <ul>
                            <li>Living Room</li>
                            <li>Bedroom</li>
                            <li>Kitchen</li>
                            <li>Bathroom</li>
                            {/* Add more room type options as needed */}
                        </ul>
                    </div>
                    <div className="sidebar_content">
                        <h3>Brand</h3>
                        <ul>
                            <li><input type="checkbox" id="brandA" name="brandA" /><label htmlFor="brandA">Brand A</label></li>
                            <li><input type="checkbox" id="brandB" name="brandB" /><label htmlFor="brandB">Brand B</label></li>
                            <li><input type="checkbox" id="brandC" name="brandC" /><label htmlFor="brandC">Brand C</label></li>
                            <li><input type="checkbox" id="brandD" name="brandD" /><label htmlFor="brandD">Brand D</label></li>
                            <li><input type="checkbox" id="brandE" name="brandE" /><label htmlFor="brandE">Brand E</label></li>
                            {/* Add more brand options as needed */}
                        </ul>
                    </div>
                    <div className="sidebar_content">
                        <h3>Rating</h3>
                        <ul>
                            <li>{renderStars(5)} 5 star</li>
                            <li>{renderStars(4)} 4 star & up</li>
                            <li>{renderStars(3)} 3 star & up</li>
                            <li>{renderStars(2)} 2 star & up</li>
                            <li>{renderStars(1)} 1 star & up</li>
                        </ul>
                    </div>
                    <div className="sidebar_content">
                        <h3>Condition</h3>
                        <ul>
                            <li>New</li>
                            <li>Used</li>
                        </ul>
                    </div>
                    <div className="sidebar_content">
                        <h3>Price Range</h3>
                        <ul>
                            <li>Under ₹100</li>
                            <li>₹100 - ₹200</li>
                            <li>₹200 - ₹500</li>
                            <li>₹500 - ₹1,000</li>
                            <li>Over ₹1,000</li>
                        </ul>
                    </div>
                    <div className="sidebar_content">
                        <h3>Discount</h3>
                        <ul>
                            <li>10% Off or more</li>
                            <li>25% Off or more</li>
                            <li>35% Off or more</li>
                            <li>50% Off or more</li>
                            <li>60% Off or more</li>
                        </ul>
                    </div>
                </div>


                <div className="decor-container" style={{ flex: '1' }}>
                    {homeDecorProducts.map(product => (
                        <div key={product.id} className="decor-card">
                            <img src={product.imageUrl} alt={product.title} />
                            <div className="decor-details">
                                <h4>{product.title}</h4>
                                <p>{product.description}</p>
                                <p>Price: ₹{Math.floor(Math.random() * 1000)}</p>
                                <div className="rating">
                                    {renderStars(Math.floor(Math.random() * 5) + 1)} {Math.floor(Math.random() * 1000)}
                                </div>

                                <div className="buttons">
                                    <button className="amazon-button">Buy Now</button>
                                    <button className="amazon-button">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Electronics;


import React from 'react';
import Navbar from './Navbar';
import MenuBar from './MenuBar';
import Footer from './Footer';
import './HomeDecor.css'; // Rename Books.css to HomeDecor.css
import SideBar from './SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const HomeDecor = () => {

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
            title: 'Vase',
            description: 'Stylish Vase for your home decor.',
            imageUrl: 'https://img.freepik.com/free-photo/close-up-arrangement-modern-vases_23-2149646533.jpg?t=st=1712754020~exp=1712757620~hmac=56496cf74c77a329278fbfa61f61e115bc8f731cbb43ef53d0fbd7742effadeb&w=360', // Replace with actual image URL

        },
        {
            id: 2,
            title: 'Sofa',
            description: '',
            imageUrl: 'https://img.freepik.com/free-psd/sofa-isolated-transparent-background_191095-10351.jpg?t=st=1712754090~exp=1712757690~hmac=be22809f0cf59f35d592f75d300b605cc146ab834bfefd6f5ffc16093b32913f&w=740', // Replace with actual image URL

        },
        {
            id: 3,
            title: 'Wireless Bluetooth Speaker',
            description: 'Portable wireless Bluetooth speaker for music on the go.',
            imageUrl: 'https://imgs.search.brave.com/Q4x9fvcBKe_1RwrXmBHGvm0EaAuxGZ2A0XX1CDL934M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxM29Lck9qWG1M/LmpwZw', // Replace with actual image URL

        },
        {
            id: 4,
            title: 'Chair',
            description: 'Automated robot vacuum cleaner for hassle-free cleaning.',
            imageUrl: 'https://img.freepik.com/free-psd/slipper-chair-isolated-transparent-background_191095-13677.jpg?t=st=1712754127~exp=1712757727~hmac=4d50591dce9c2e12ba87b0ba68a80d8fbd5819176fe94c19d370e44d7ff58a55&w=740',

        },
        {
            "id": 5,
            "title": "Rustic Wall Clock",
            "description": "Add a touch of rustic charm to your home decor with this stylish wall clock.",
            "imageUrl": "https://img.freepik.com/free-photo/circular-clock-outdoors-still-life_23-2150436123.jpg?t=st=1712754372~exp=1712757972~hmac=e4385c4e3f542f415bded31b84aab8ad3f75a21e5a7d1399e465df70669e62ec&w=360"
        },
        {
            "id": 6,
            "title": "Decorative Throw Pillows",
            "description": "Elevate the coziness of your living space with these decorative throw pillows.",
            "imageUrl": "https://img.freepik.com/free-photo/house-couch-sofa-comfort-home_1203-4826.jpg?w=996"
        },
        {
            "id": 7,
            "title": "Elegant Table Lamp",
            "description": "Illuminate your space with sophistication using this elegant table lamp.",
            "imageUrl": "https://img.freepik.com/premium-photo/modern-ceramic-table-lamp-dark-surface-background-with-empty-space-text_829699-3467.jpg?w=360"
        },
        {
            "id": 8,
            "title": "Cozy Area Rug",
            "description": "Infuse warmth and comfort into your home decor with this cozy area rug.",
            "imageUrl": "https://img.freepik.com/free-photo/beautiful-luxury-pillow-sofa-decoration-living-room-interior-vintage-light-filter_74190-1688.jpg?t=st=1712754467~exp=1712758067~hmac=59c2d0cf04acd4599808b73fd0cee5bd8213a22add5db447b51d11a45d09a3c0&w=360"
        },
        {
            "id": 9,
            "title": "Vintage Wall Art",
            "description": "Add character to your walls with this vintage-inspired wall art piece.",
            "imageUrl": "https://img.freepik.com/free-vector/hand-drawn-boho-cover-collection_23-2149068407.jpg?t=st=1712754486~exp=1712758086~hmac=d45489b4a7a15a13cca487a08115c05cf7c50aa7fb41d0e9ba43dbfaaa1aa49a&w=996"
        },
        {
            "id": 10,
            "title": "Decorative Vases",
            "description": "Enhance the aesthetic appeal of your home with these decorative vases.",
            "imageUrl": "https://img.freepik.com/free-photo/cozy-decor-items-interior-beautiful-vases-bright-orange-background-standing-table_169016-15550.jpg?t=st=1712754508~exp=1712758108~hmac=a900a6025a4257fabeb8210e4ae0dac6b5ca0c4c970d055d0333c2fd3f20dc8f&w=1060"
        },
        {
            "id": 11,
            "title": "Chic Wall Mirror",
            "description": "Make a statement in any room with this chic wall mirror.",
            "imageUrl": "https://img.freepik.com/free-photo/modern-entryway-with-furniture-home-decor_23-2150831784.jpg?t=st=1712754532~exp=1712758132~hmac=cfd2dfacb827a864f604eb4a43b74f49e03b7b2aaa96bcac5633c3bb7fa9ea8e&w=360"
        },
        {
            "id": 12,
            "title": "Minimalist Wall Shelves",
            "description": "Organize and display your belongings with these sleek minimalist wall shelves.",
            "imageUrl": "https://img.freepik.com/free-photo/shoe-rack-indoors-still-life_23-2150695639.jpg?t=st=1712754551~exp=1712758151~hmac=bdac4edb92e887661134da801a018d8d242c4f934fc2d5fc4b21d7b84161802d&w=360"
        },
        {
            "id": 13,
            "title": "Modern Plant Stand",
            "description": "Bring the outdoors in with this modern plant stand, perfect for displaying your greenery.",
            "imageUrl": "https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022095.jpg?t=st=1712754577~exp=1712758177~hmac=3db150ca13ec32236287c7c5b278f9d6ae2ea77a192ff93be9ab51f5da2e25c1&w=360"
        },
        {
            "id": 14,
            "title": "Sculptural Home Decor",
            "description": "Add a unique focal point to your space with this sculptural home decor piece.",
            "imageUrl": "https://img.freepik.com/free-photo/minimalist-modern-vases-books_23-2149681093.jpg?t=st=1712754621~exp=1712758221~hmac=b9d8324e5269d1b21f2d463681465da7925f1cc193302e0fde0118b46858cd30&w=996"
        },
        {
            "id": 15,
            "title": "Artisanal Ceramic Vases",
            "description": "Add an artisanal touch to your decor with these beautiful ceramic vases.",
            "imageUrl": "https://img.freepik.com/premium-photo/real-antique-chinese-vase-gray-background_1048944-26285617.jpg?w=360"
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

export default HomeDecor;


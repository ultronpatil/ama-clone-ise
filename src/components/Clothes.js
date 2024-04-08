import React from 'react';
import Navbar from './Navbar';
import MenuBar from './MenuBar';
import Footer from './Footer';
import './Clothes.css'; // Create a CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Clothes = () => {

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
    // const couponsData = [
    //     { id: 1, name: "50% Off", provider: "Coupon Provider A", image: "https://img.freepik.com/free-vector/seasonal-sale-discounts-presents-purchase-visiting-boutiques-luxury-shopping-price-reduction-promotional-coupons-special-holiday-offers-vector-isolated-concept-metaphor-illustration_335657-2766.jpg?w=740" },
    //     { id: 2, name: "Free Shipping", provider: "Coupon Provider B", image: "https://img.freepik.com/free-photo/purple-open-gift-box-with-voucher-bonus-surprise-minimal-present-greeting-celebration-promotion-discount-sale-reward-icon-3d-illustration_56104-2100.jpg?w=826" },
    //     { id: 3, name: "BOGO", provider: "Coupon Provider C", image: "https://img.freepik.com/free-vector/biggest-sale-modern-banner-design_1017-17478.jpg?w=826" },
    //     { id: 4, name: "10% Off", provider: "Coupon Provider D", image: "https://img.freepik.com/premium-vector/food-gift-voucher-discount-design-template_57516-1341.jpg?w=740" },
    //     { id: 5, name: "20% Off", provider: "Coupon Provider E", image: "https://img.freepik.com/free-vector/creative-coupon-voucher-template-concept_23-2147938596.jpg?w=740" },
    //     { id: 6, name: "Special Offer", provider: "Coupon Provider F", image: "https://img.freepik.com/premium-vector/voucher-card-cash-back-template-design-with-coupon-code-promotion-price-offers-sale_684471-10.jpg?w=740" },
    //     { id: 7, name: "Discount", provider: "Coupon Provider G", image: "https://img.freepik.com/premium-vector/christmas-gift-vouchers_1302-13981.jpg?w=740" },
    //     { id: 8, name: "Cashback", provider: "Coupon Provider H", image: "https://img.freepik.com/premium-vector/colorful-coupon-template-with-flat-design_23-2147960470.jpg?w=740" },
    //     { id: 9, name: "Buy One Get One", provider: "Coupon Provider I", image: "https://img.freepik.com/premium-vector/creative-gift-vouch-template-sales_23-2147950027.jpg?w=740" },
    //     { id: 10, name: "Limited Time Offer", provider: "Coupon Provider J", image: "https://img.freepik.com/free-vector/flat-cartoon-character-customer-50-percent-discount-with-coupon_1150-34875.jpg?w=740" },
    //     { id: 11, name: "50% Off", provider: "Coupon Provider A", image: "https://img.freepik.com/free-vector/seasonal-sale-discounts-presents-purchase-visiting-boutiques-luxury-shopping-price-reduction-promotional-coupons-special-holiday-offers-vector-isolated-concept-metaphor-illustration_335657-2766.jpg?w=740" },
    //     { id: 12, name: "Free Shipping", provider: "Coupon Provider B", image: "https://img.freepik.com/free-photo/purple-open-gift-box-with-voucher-bonus-surprise-minimal-present-greeting-celebration-promotion-discount-sale-reward-icon-3d-illustration_56104-2100.jpg?w=826" },
    //     { id: 13, name: "BOGO", provider: "Coupon Provider C", image: "https://img.freepik.com/free-vector/biggest-sale-modern-banner-design_1017-17478.jpg?w=826" },
    //     { id: 14, name: "10% Off", provider: "Coupon Provider D", image: "https://img.freepik.com/premium-vector/food-gift-voucher-discount-design-template_57516-1341.jpg?w=740" },
    //     { id: 15, name: "20% Off", provider: "Coupon Provider E", image: "https://img.freepik.com/free-vector/creative-coupon-voucher-template-concept_23-2147938596.jpg?w=740" },
    //     { id: 16, name: "Special Offer", provider: "Coupon Provider F", image: "https://img.freepik.com/premium-vector/voucher-card-cash-back-template-design-with-coupon-code-promotion-price-offers-sale_684471-10.jpg?w=740" },
    //     { id: 17, name: "Discount", provider: "Coupon Provider G", image: "https://img.freepik.com/premium-vector/christmas-gift-vouchers_1302-13981.jpg?w=740" },
    //     { id: 18, name: "Cashback", provider: "Coupon Provider H", image: "https://img.freepik.com/premium-vector/colorful-coupon-template-with-flat-design_23-2147960470.jpg?w=740" },
    //     { id: 19, name: "Buy One Get One", provider: "Coupon Provider I", image: "https://img.freepik.com/premium-vector/creative-gift-vouch-template-sales_23-2147950027.jpg?w=740" },
    //     { id: 20, name: "Limited Time Offer", provider: "Coupon Provider J", image: "https://img.freepik.com/free-vector/flat-cartoon-character-customer-50-percent-discount-with-coupon_1150-34875.jpg?w=740" },

    // ];

    // Dummy clothes data
    const clothesData = [
        {
            id: 1,
            title: "Men's T-Shirt",
            description: "Comfortable cotton t-shirt for everyday wear.",
            imageUrl: "https://imgs.search.brave.com/q_kJjk3BYKxQHsqEAeLz6jEEc7CoaAX1LZ4cIiETNCg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zb2xp/ZHRocmVhZHMuY29t/L2Nkbi9zaG9wL3By/b2R1Y3RzL21lbnNf/bmljZV9oYW1tZXJl/ZF92aW50YWdlX2lu/c3BpcmVkX3RyaWJs/ZW5kX2tlbGx5X3Rl/ZV9zaGlydF93aXRo/X2Nvb2xfZnVubnlf/c3RfcGF0dHlzX2dy/YXBoaWMuanBnP3Y9/MTcwMDI1MzQzNiZ3/aWR0aD0xNjAw",
        },
        {
            id: 2,
            title: "Women's Dress",
            description: "Elegant dress for special occasions.",
            imageUrl: "https://example.com/womens-dress.jpg",
        },
        {
            id: 3,
            title: "Men's Jeans",
            description: "Classic denim jeans for a timeless look.",
            imageUrl: "https://imgs.search.brave.com/BAcKSon6z8Ii833bO_62_8TIk560Yi4oCucVM0n5sjk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2VhcnBhdHJvbC5j/b20vd3AtY29udGVu/dC91cGxvYWRzL3Np/dGVzLzIvMjAyMy8w/OC9pbWctMzg4NS0x/NjYxMjYwNjU0LWpw/Zy53ZWJwP3c9MTky/MCZjcm9wPTAsNSwx/MDAsODk",
        },
        {
            id: 4,
            title: "Women's jacket",
            description: "Stylish blouse perfect for office or casual wear.",
            imageUrl: "https://imgs.search.brave.com/5ux0n5A3rf28IE9trtU-n_lHjxvcBtpWt-Cfq0V5mQI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZXZvLmNvbS9p/bWdwLzI1MC8yMzkx/NzIvMTA1Mzk0NS9w/aWN0dXJlLW9yZ2Fu/aWMtYWxsZWEtM2wt/eHBvcmUtamFja2V0/LXdvbWVuLXMtLmpw/Zw",
        },
        {
            id: 5,
            title: "Men's Formal Shirt",
            description: "Sophisticated formal shirt for professional settings.",
            imageUrl: "https://imgs.search.brave.com/pS9Ieb74gdZACU1l-dLTsSgtutEqgUrqvHKBsNbL388/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFlOGZlT0VtREwu/anBn",
        },
        {
            id: 6,
            title: "Women's shoes",
            description: "Flattering skirt for versatile styling options.",
            imageUrl: "https://imgs.search.brave.com/-B9sXbWx_DO80bNCHnNEJvRlMvnZ4R5vTdP4k1L1uNM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MjE5OTY2NTk0OTAt/MzI3NWI0ZDBkOTUx/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tkh4OGQy/OXRaVzRsTWpCemFH/OWxjM3hsYm53d2ZI/d3dmSHg4TUE9PQ.jpeg",
        },
        {
            id: 7,
            title: "Men's Shorts",
            description: "Cool and comfortable shorts for casual outings.",
            imageUrl: "https://imgs.search.brave.com/JwtFHW5u8K30Qxkxyh6GRpvnDO97cAPGl_VenUZd1-U/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTEw/MzMzNjM5L3Bob3Rv/L21lbnMtc2hvcnRz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz0xRHdEWU85VzQ4/RlhDbnBMZzRSSUwz/NkF3OUJHMUJRdjZr/VXQ1QmRCc2xFPQ",
        },
        {
            id: 8,
            title: "Women's Jacket",
            description: "Fashionable jacket to layer up in style.",
            imageUrl: "https://imgs.search.brave.com/XE5YU87DeJtTWLRMsMNAz5oVmIyUP6wHCxJryetnuDQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzErSWRMclgwUEwu/anBn",
        },
        {
            id: 9,
            title: "Men's Sweatshirt",
            description: "Warm and cozy sweatshirt for chilly days.",
            imageUrl: "https://imgs.search.brave.com/J0Rg0YDgf0biD7IMSLUarMhEG-a5gNZlTaBbXMtCrvE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ob3ds/ZXJicm9zLmNvbS9j/ZG4vc2hvcC9wcm9k/dWN0cy9GMjJfU2Vs/ZWN0UHVsbG92ZXIt/SG9vZGllX0NhbXAt/SG93bGVyLVBldHJv/bC1IZWF0aGVyX0Zs/YXQtRnJvbnRfZDJh/MWQ3ZjQtNmNlYy00/N2YwLThkODEtZDI4/Yzg3YzI1ZjllLmpw/Zz92PTE2NzM1NTk1/MTYmd2lkdGg9MTUw/MA",
        },
        {
            id: 10,
            title: "Women's Cardigan",
            description: "Versatile cardigan for effortless layering.",
            imageUrl: "https://imgs.search.brave.com/nWzrW1PaDDvL9N8E5lIHSuI1mW9VN0TMUFrqop97I8Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9kZncvNGZm/OWM2YzktNzJkMC9r/Mi1fNDkxOGQ5Nzgt/NjcxNS00NDM3LTgx/OTItMDRhNmQyODk2/OTFkLnYxLmpwZw",
        },
        {
            id: 11,
            title: "Men's Polo Shirt",
            description: "Classic polo shirt for a smart-casual look.",
            imageUrl: "https://imgs.search.brave.com/wfWp1jrvb5KDPZoeT_BqMqEenbeE1Ea5sJmluefHi3o/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mcmVz/aGNsZWFudGVlcy5j/b20vY2RuL3Nob3Av/ZmlsZXMvZjEyNjFl/NTc3ZTI3ZGNjYWEz/ZDRhOGI3NjNkMWVm/ZGY1MzNkM2NlMS0x/NTAweDIwMDBfNDUw/eDYwMC5qcGc_dj0x/NzA3NDM0MjMy",
        },

        {
            id: 13,
            title: "Men's Hoodie",
            description: "Casual hoodie for laid-back weekends.",
            imageUrl: "https://imgs.search.brave.com/5xptktAU6BX02jRl_2vTjJ7hpigrNyKNnsJl3D_aLjw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFnNCt6U3FDSkwu/anBn",
        },
        {
            id: 14,
            title: "Women's Jumpsuit",
            description: "Chic jumpsuit for effortless style.",
            imageUrl: "https://imgs.search.brave.com/BWuFtqU1CVzLxEQvAnlqakxBahX_t6BB7l50eMvEiaU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9nZWFy/bW9vc2UuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzEx/L0Jlc3RfTWVuc19I/b29kaWVzLmpwZw",
        },
        {
            id: 15,
            title: "Men's Chinos",
            description: "Stylish chinos for a polished casual look.",
            imageUrl: "https://imgs.search.brave.com/Y5BqNM6BuBYy9HNd5Tbt8aD0o2skvhbPS4D79f55bqQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90aW1l/LmNvbS9zaG9wcGlu/Zy9zdGF0aWMvY2Y2/NzMwZDE5YWI2NzU2/MjVlMjIzNWM2ZGYw/YjRlZjUvNTdlMTcv/YmVzdC1jaGlub3Mt/Zm9yLW1lbi5qcGc",
        },
        // Add more clothes data as needed
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
                            <li>Formal Wear</li>
                            <li>Casual Wear</li>
                            <li>Party Dresses</li>
                            <li>Street Style</li>
                            {/* Add more style options as needed */}
                        </ul>
                    </div>
                    <div className="sidebar_content">
                        <h3>Size</h3>
                        <ul>
                            <li>XS</li>
                            <li>S</li>
                            <li>M</li>
                            <li>L</li>
                            <li>XL</li>
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


                {/* <div className='coupon-wrapper'>
                    <div className='electronics-coupons'>Random Coupons</div>
                    <div className='coupon-container'>
                        {couponsData.map((item) => (
                            <div key={item.id} className='coupon-card'>
                                <img
                                    className='coupon-image'
                                    src={item.image}
                                    alt={item.name}
                                />
                                <div className='coupon-details'>
                                    <h4>{item.name}</h4>
                                    <p>{item.provider}</p>
                                </div>
                                <button className='collect-button'>Collect</button>
                            </div>
                        ))}
                    </div>
                </div> */}



                <div className="clothes-container" style={{ flex: '1' }}>
                    {clothesData.map(item => (
                        <div key={item.id} className="clothes-card">
                            <img src={item.imageUrl} alt={item.title} />
                            <div className="clothes-details">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
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

export default Clothes;

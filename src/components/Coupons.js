import React, { useRef } from 'react';
import Navbar from './Navbar';
import MenuBar from './MenuBar';
import Footer from './Footer';
import { FaTicketAlt, FaShoppingCart, FaTv, FaTshirt, FaShoppingBag } from 'react-icons/fa';
import './Coupons.css'
import CouponCards from './CouponCards';

const Coupons = () => {
    const couponsData = [
        { id: 1, name: "50% Off", provider: "Coupon Provider A", image: "https://img.freepik.com/free-vector/seasonal-sale-discounts-presents-purchase-visiting-boutiques-luxury-shopping-price-reduction-promotional-coupons-special-holiday-offers-vector-isolated-concept-metaphor-illustration_335657-2766.jpg?w=740" },
        { id: 2, name: "Free Shipping", provider: "Coupon Provider B", image: "https://img.freepik.com/free-photo/purple-open-gift-box-with-voucher-bonus-surprise-minimal-present-greeting-celebration-promotion-discount-sale-reward-icon-3d-illustration_56104-2100.jpg?w=826" },
        { id: 3, name: "BOGO", provider: "Coupon Provider C", image: "https://img.freepik.com/free-vector/biggest-sale-modern-banner-design_1017-17478.jpg?w=826" },
        { id: 4, name: "10% Off", provider: "Coupon Provider D", image: "https://img.freepik.com/premium-vector/food-gift-voucher-discount-design-template_57516-1341.jpg?w=740" },
        { id: 5, name: "20% Off", provider: "Coupon Provider E", image: "https://img.freepik.com/free-vector/creative-coupon-voucher-template-concept_23-2147938596.jpg?w=740" },
        { id: 6, name: "Special Offer", provider: "Coupon Provider F", image: "https://img.freepik.com/premium-vector/voucher-card-cash-back-template-design-with-coupon-code-promotion-price-offers-sale_684471-10.jpg?w=740" },
        { id: 7, name: "Discount", provider: "Coupon Provider G", image: "https://img.freepik.com/premium-vector/christmas-gift-vouchers_1302-13981.jpg?w=740" },
        { id: 8, name: "Cashback", provider: "Coupon Provider H", image: "https://img.freepik.com/premium-vector/colorful-coupon-template-with-flat-design_23-2147960470.jpg?w=740" },
        { id: 9, name: "Buy One Get One", provider: "Coupon Provider I", image: "https://img.freepik.com/premium-vector/creative-gift-vouch-template-sales_23-2147950027.jpg?w=740" },
        { id: 10, name: "Limited Time Offer", provider: "Coupon Provider J", image: "https://img.freepik.com/free-vector/flat-cartoon-character-customer-50-percent-discount-with-coupon_1150-34875.jpg?w=740" },
        { id: 11, name: "50% Off", provider: "Coupon Provider A", image: "https://img.freepik.com/free-vector/seasonal-sale-discounts-presents-purchase-visiting-boutiques-luxury-shopping-price-reduction-promotional-coupons-special-holiday-offers-vector-isolated-concept-metaphor-illustration_335657-2766.jpg?w=740" },
        { id: 12, name: "Free Shipping", provider: "Coupon Provider B", image: "https://img.freepik.com/free-photo/purple-open-gift-box-with-voucher-bonus-surprise-minimal-present-greeting-celebration-promotion-discount-sale-reward-icon-3d-illustration_56104-2100.jpg?w=826" },
        { id: 13, name: "BOGO", provider: "Coupon Provider C", image: "https://img.freepik.com/free-vector/biggest-sale-modern-banner-design_1017-17478.jpg?w=826" },
        { id: 14, name: "10% Off", provider: "Coupon Provider D", image: "https://img.freepik.com/premium-vector/food-gift-voucher-discount-design-template_57516-1341.jpg?w=740" },
        { id: 15, name: "20% Off", provider: "Coupon Provider E", image: "https://img.freepik.com/free-vector/creative-coupon-voucher-template-concept_23-2147938596.jpg?w=740" },
        { id: 16, name: "Special Offer", provider: "Coupon Provider F", image: "https://img.freepik.com/premium-vector/voucher-card-cash-back-template-design-with-coupon-code-promotion-price-offers-sale_684471-10.jpg?w=740" },
        { id: 17, name: "Discount", provider: "Coupon Provider G", image: "https://img.freepik.com/premium-vector/christmas-gift-vouchers_1302-13981.jpg?w=740" },
        { id: 18, name: "Cashback", provider: "Coupon Provider H", image: "https://img.freepik.com/premium-vector/colorful-coupon-template-with-flat-design_23-2147960470.jpg?w=740" },
        { id: 19, name: "Buy One Get One", provider: "Coupon Provider I", image: "https://img.freepik.com/premium-vector/creative-gift-vouch-template-sales_23-2147950027.jpg?w=740" },
        { id: 20, name: "Limited Time Offer", provider: "Coupon Provider J", image: "https://img.freepik.com/free-vector/flat-cartoon-character-customer-50-percent-discount-with-coupon_1150-34875.jpg?w=740" },

    ];
    const couponshome = [
        { id: 1, name: "50% Off", provider: "Coupon Provider A", image: "https://img.freepik.com/free-vector/realistic-cyber-monday-banners_23-2147702407.jpg?w=740" },
        { id: 2, name: "Free Shipping", provider: "Coupon Provider B", image: "https://img.freepik.com/free-vector/blue-cyber-monday-banners_23-2147701133.jpg?w=740" },
        { id: 3, name: "BOGO", provider: "Coupon Provider C", image: "https://img.freepik.com/free-vector/colorful-cyber-monday-banners-with-flat-design_23-2147945995.jpg?w=740" },
        { id: 4, name: "10% Off", provider: "Coupon Provider D", image: "https://img.freepik.com/free-vector/flat-design-cyber-monday-banners-template_23-2148310518.jpg?w=740" },
        { id: 5, name: "20% Off", provider: "Coupon Provider E", image: "https://img.freepik.com/free-vector/collection-ciber-monday-realistic-banners_23-2148318527.jpg?w=740" },
        { id: 6, name: "Special Offer", provider: "Coupon Provider F", image: "https://img.freepik.com/free-vector/pack-ciber-monday-realistic-banners_23-2148318541.jpg?w=740" },
        { id: 7, name: "Discount", provider: "Coupon Provider G", image: "https://img.freepik.com/free-vector/twitch-banner-template-cyber-monday_23-2149707776.jpg?w=1380" },
        { id: 8, name: "Cashback", provider: "Coupon Provider H", image: "https://img.freepik.com/premium-vector/colorful-coupon-template-with-flat-design_23-2147960470.jpg?w=740" },
        { id: 9, name: "Buy One Get One", provider: "Coupon Provider I", image: "https://img.freepik.com/premium-vector/creative-gift-vouch-template-sales_23-2147950027.jpg?w=740" },
        { id: 10, name: "50% Off", provider: "Coupon Provider A", image: "https://img.freepik.com/free-vector/realistic-cyber-monday-banners_23-2147702407.jpg?w=740" },
        { id: 11, name: "Free Shipping", provider: "Coupon Provider B", image: "https://img.freepik.com/free-vector/blue-cyber-monday-banners_23-2147701133.jpg?w=740" },
        { id: 12, name: "BOGO", provider: "Coupon Provider C", image: "https://img.freepik.com/free-vector/colorful-cyber-monday-banners-with-flat-design_23-2147945995.jpg?w=740" },
        { id: 13, name: "10% Off", provider: "Coupon Provider D", image: "https://img.freepik.com/free-vector/flat-design-cyber-monday-banners-template_23-2148310518.jpg?w=740" },
        { id: 14, name: "20% Off", provider: "Coupon Provider E", image: "https://img.freepik.com/free-vector/collection-ciber-monday-realistic-banners_23-2148318527.jpg?w=740" },

    ];

    return (
        <div>
            <Navbar />
            <MenuBar />
            <div>
                <div className='coupon-box'>
                    <div className="coupon-symbol"><FaTicketAlt size={50} /></div>
                    <div className="Your-Coupons">Your Coupons</div>
                    <div className="coupon-category">
                        <div className="smaller-text">Collected</div>
                        <div className="bigger-text">0 Coupon</div>
                    </div>
                    <div className="coupon-category">
                        <div className="smaller-text">Expiring Soon</div>
                        <div className="bigger-text">0 Coupon</div>
                    </div>
                </div>
                <div className='Coupon-gif'>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Coupons/BAU/coupon_pc_1500x300.gif" alt="Coupon Image" />
                </div>
                <div className="icon-container">
                    <div className="outer-circle">
                        <div className="icon-circle"><FaShoppingCart /></div>
                        <div className="icon-label">All Coupons</div>
                    </div>
                    <div className="outer-circle">
                        <div className="icon-circle"><FaTv /></div>
                        <div className="icon-label">Electronics</div>
                    </div>
                    <div className="outer-circle">
                        <div className="icon-circle"><FaTshirt /></div>
                        <div className="icon-label">Clothing</div>
                    </div>
                    <div className="outer-circle">
                        <div className="icon-circle"><FaShoppingBag /></div>
                        <div className="icon-label">Personalize</div>
                    </div>
                </div>
            </div>
            <div className='coupon-wrapper'>
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
            </div>

            <div className='coupon-wrapper'>
                <div className='electronics-coupons'>Electronics Coupons</div>
                <div className='coupon-container'>
                    {couponshome.map((item) => (
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
            </div>
            <Footer />
        </div>
    );
};

export default Coupons;



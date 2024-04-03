import React from 'react';
import Navbar from './Navbar';
import MenuBar from './MenuBar'
import Footer from './Footer';
const Coupons = () => {
    return (
        <div>
            <Navbar />
            <MenuBar />

            <div className='coupon-box' style={{ display: 'flex' }}>
                <div className="coupon-category" style={{ marginRight: '20px' }}>Your Coupons </div>
                <div className="coupon-category" style={{ marginRight: '20px' }}>
                    <div>Collected</div>
                    <div>0 Coupon</div>
                </div>
                <div className="coupon-category">
                    <div>Expiring Soon</div>
                    <div>0 Coupon</div>
                </div>
                <div className="horizontal-line"></div>
            </div>


            <Footer />
        </div >
    );
};

export default Coupons;

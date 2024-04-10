import React, { useState } from 'react'
import './YourCart.css'
import Navbar from './Navbar'
import MenuBar from './MenuBar'
import Footer from './Footer'
const YourCart = () => {




    const recomData = [
        { id: 1, name: "50% Off", provider: "Coupon Provider A", image: "https://img.freepik.com/free-vector/seasonal-sale-discounts-presents-purchase-visiting-boutiques-luxury-shopping-price-reduction-promotional-coupons-special-holiday-offers-vector-isolated-concept-metaphor-illustration_335657-2766.jpg?w=740" },
        { id: 2, name: "Free Shipping", provider: "Coupon Provider B", image: "https://img.freepik.com/free-photo/purple-open-gift-box-with-voucher-bonus-surprise-minimal-present-greeting-celebration-promotion-discount-sale-reward-icon-3d-illustration_56104-2100.jpg?w=826" },
        { id: 1, name: "50% Off", provider: "Coupon Provider A", image: "https://img.freepik.com/free-vector/seasonal-sale-discounts-presents-purchase-visiting-boutiques-luxury-shopping-price-reduction-promotional-coupons-special-holiday-offers-vector-isolated-concept-metaphor-illustration_335657-2766.jpg?w=740" },
        { id: 2, name: "Free Shipping", provider: "Coupon Provider B", image: "https://img.freepik.com/free-photo/purple-open-gift-box-with-voucher-bonus-surprise-minimal-present-greeting-celebration-promotion-discount-sale-reward-icon-3d-illustration_56104-2100.jpg?w=826" },

    ]
    const YourItemData = [
        { id: 1, name: "50% Off", image: "https://img.freepik.com/free-vector/seasonal-sale-discounts-presents-purchase-visiting-boutiques-luxury-shopping-price-reduction-promotional-coupons-special-holiday-offers-vector-isolated-concept-metaphor-illustration_335657-2766.jpg?w=740" },
        { id: 2, name: "Free Shipping", image: "https://img.freepik.com/free-photo/purple-open-gift-box-with-voucher-bonus-surprise-minimal-present-greeting-celebration-promotion-discount-sale-reward-icon-3d-illustration_56104-2100.jpg?w=826" },
        { id: 1, name: "50% Off", image: "https://img.freepik.com/free-vector/seasonal-sale-discounts-presents-purchase-visiting-boutiques-luxury-shopping-price-reduction-promotional-coupons-special-holiday-offers-vector-isolated-concept-metaphor-illustration_335657-2766.jpg?w=740" },
        { id: 2, name: "Free Shipping", image: "https://img.freepik.com/free-photo/purple-open-gift-box-with-voucher-bonus-surprise-minimal-present-greeting-celebration-promotion-discount-sale-reward-icon-3d-illustration_56104-2100.jpg?w=826" },

    ]
    const getRandomStars = () => {
        const starsCount = Math.floor(Math.random() * 5) + 1; // Generates random number between 1 and 5
        return '★'.repeat(starsCount); // Repeat ★ based on starsCount
    };
    // const [cards, setCards] = useState([]);

    // Function to add a new card
    // const addCard = () => {
    //     const newCard = {
    //         id: cards.length + 1,
    //         title: `Clothing Item ${cards.length + 1}`,
    //         rating: '★★★★☆', // Dummy rating
    //         price: `$${(Math.random() * 100).toFixed(2)}`, // Random price
    //     };

    //     setCards([...cards, newCard]);
    // };

    // Calculate the height of the right container based on the number of cards
    // const rightContainerHeight = 200 + (item.length * 220);
    return (
        <div>
            <Navbar />
            <MenuBar />
            <div className='your-cart'>
                <div className='left-container'>
                    <div className='left-top'>
                        <div className='left-top-title'>Your Cart is empty.</div>
                        <div className='left-top-sub'>Your shopping cart is waiting.</div>
                        <div className='left-top-sub'> Give it purpose - fill it with groceries, clothing, household supplies, electronics and more.</div>
                        <div className='left-top-sub'> Continue shopping on the Amazon.in homepage, learn about today's deals, or visit your Wish List.</div>
                    </div>
                    <div className='left-bottom'>
                        <div className='left-bottom-top'>Your Items</div>
                        <div className='left-bottom-card'>
                            {YourItemData.map(item => (
                                <div key={item.id} className='your-item'>
                                    <img src={item.image} alt={item.name} />
                                    <div className='item-name'>{item.name}</div>
                                    <div className='item-price'>Price: ₹{Math.floor(Math.random() * 1000)}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='right-container'>
                    <div className='recomendation'>Recommended for you</div>
                    {recomData.map(item => (
                        <div key={item.id} className='recom-container'>
                            <div className='recom-left'>
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className='recom-right'>
                                <div className='recom-title'>{item.name}</div>
                                <div className='recom-star'>{item.provider}</div>
                                <div className='recom-star'>{getRandomStars()}</div>
                                <p>Price: ₹{Math.floor(Math.random() * 1000)}</p>
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
    )
}

export default YourCart

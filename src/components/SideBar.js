// import React from 'react';
// import './SideBar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';

// const SideBar = () => {
//     const renderStars = (rating) => {
//         const filledStars = [];
//         const emptyStars = [];

//         // Filled stars
//         for (let i = 0; i < rating; i++) {
//             filledStars.push(<FontAwesomeIcon key={`filled-${i}`} icon={faStar} style={{ color: '#ffd700', marginRight: '5px' }} />);
//         }

//         // Empty stars
//         for (let i = rating; i < 5; i++) {
//             emptyStars.push(<FontAwesomeIcon key={`empty-${i}`} icon={faStar} style={{ color: '#ccc', marginRight: '5px' }} />);
//         }

//         return [...filledStars, ...emptyStars];
//     };

//     return (

//         <div className="sidebar">

//             <div className="sidebar_content">
//                 <h3>new arrival</h3>
//                 <ul>
//                     <li>Last 30 days</li>
//                     <li>Last 60 days</li>
//                     <li>Last 90 days</li>
//                 </ul>
//             </div>
//             <div className="sidebar_content">
//                 <h3>English & Indian Languages</h3>
//                 <ul>
//                     <li><input type="checkbox" id="english" name="english" /><label htmlFor="english">English</label></li>
//                     <li><input type="checkbox" id="hindi" name="hindi" /><label htmlFor="hindi">Hindi</label></li>
//                     <li><input type="checkbox" id="marathi" name="marathi" /><label htmlFor="marathi">Marathi</label></li>
//                     <li><input type="checkbox" id="tamil" name="tamil" /><label htmlFor="tamil">Tamil</label></li>
//                     <li><input type="checkbox" id="telugu" name="telugu" /><label htmlFor="telugu">Telugu</label></li>
//                     <li><input type="checkbox" id="spanish" name="spanish" /><label htmlFor="spanish">Spanish</label></li>
//                 </ul>
//             </div>
//             <div className="sidebar_content">
//                 <h3>Category</h3>
//                 <ul>
//                     <li>Action & Adventure</li>
//                     <li>Arts, Film & Photography</li>
//                     <li>Biographies, Diaries &</li>
//                     <li>True Accounts</li>
//                     <li>Business & Economics</li>
//                     <li>Children's Books</li>
//                     <li>Comics & Mangas</li>
//                     <li>Computers & Internet</li>
//                     <li>Crafts, Hobbies & Home</li>
//                 </ul>
//             </div>
//             <div className="sidebar_content">
//                 <h3>Made for Amazon Brands</h3>
//                 <ul>
//                     <li><input type="checkbox" id="madeForAmazon" name="madeForAmazon" /><label htmlFor="madeForAmazon">Made for Amazon</label></li>                </ul>
//             </div>
//             <div className="sidebar_content">
//                 <h3>Author</h3>
//                 <ul>
//                     <li><input type="checkbox" id="benyamin" name="benyamin" /><label htmlFor="benyamin">Benyāmin</label></li>
//                     <li><input type="checkbox" id="akhilPDharmajan" name="akhilPDharmajan" /><label htmlFor="akhilPDharmajan">Akhil P Dharmajan</label></li>
//                     <li><input type="checkbox" id="jamesClear" name="jamesClear" /><label htmlFor="jamesClear">James Clear</label></li>
//                     <li><input type="checkbox" id="janYager" name="janYager" /><label htmlFor="janYager">Jan Yager</label></li>
//                     <li><input type="checkbox" id="rdSharma" name="rdSharma" /><label htmlFor="rdSharma">R.D. Sharma</label></li>
//                 </ul>
//             </div>
//             <div className="sidebar_content">
//                 <h3>Avg. Customer Review</h3>
//                 <ul>
//                     <li>{renderStars(5)} 5 star</li>
//                     <li>{renderStars(4)} 4 star & up</li>
//                     <li>{renderStars(3)} 3 star & up</li>
//                     <li>{renderStars(2)} 2 star & up</li>
//                     <li>{renderStars(1)} 1 star & up</li>
//                 </ul>
//             </div>
//             <div className="sidebar_content">
//                 <h3>Item Condition</h3>
//                 <ul>
//                     <li>New</li>
//                     <li>Used</li>
//                 </ul>
//             </div>
//             <div className="sidebar_content">
//                 <h3>Price</h3>
//                 <ul>
//                     <li>Under ₹100</li>
//                     <li>₹100 - ₹200</li>
//                     <li>₹200 - ₹500</li>
//                     <li>₹500 - ₹1,000</li>
//                     <li>Over ₹1,000</li>
//                 </ul>
//             </div>
//             <div className="sidebar_content">
//                 <h3>Discount</h3>
//                 <ul>
//                     <li>10% Off or more</li>
//                     <li>25% Off or more</li>
//                     <li>35% Off or more</li>
//                     <li>50% Off or more</li>
//                     <li>60% Off or more</li>
//                 </ul>
//             </div>
//         </div>



//     );
// };

// export default SideBar;

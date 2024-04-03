import React from 'react';
import Navbar from './Navbar';
import MenuBar from './MenuBar';
import Footer from './Footer';
import './Books.css';
import SideBar from './SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const Books = () => {

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
    // Dummy book data (replace with actual data or fetch from an API)
    const books = [
        {
            id: 1,
            title: 'The Secret Garden',
            author: 'Frances Hodgson Burnett',
            imageUrl: 'https://img.freepik.com/free-vector/hand-drawn-book-club-poster-template_23-2149750475.jpg?t=st=1711992573~exp=1711996173~hmac=0f348400da58b36e304337cf14b64819ba793a6cf15554f0c3327d6175a2bafd&w=740',
            amazonLink: 'https://www.amazon.com/book1',
        },
        {
            id: 2,
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
            imageUrl: 'https://img.freepik.com/free-psd/world-book-day-flyer-template_23-2148886468.jpg?t=st=1711992599~exp=1711996199~hmac=48e427b155f958ce42fec1ee289c812ec1ee49bf2076ab21664691aaadfb1daf&w=740',
            amazonLink: 'https://www.amazon.com/book2',
        },
        {
            id: 3,
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            imageUrl: 'https://img.freepik.com/free-vector/editable-festival-poster-template_23-2147496243.jpg?t=st=1711992616~exp=1711996216~hmac=d0f5434d6898f9724e447f91984293e3f0fd3252e6591e19f48cba1a62a5c978&w=740',
            amazonLink: 'https://www.amazon.com/book3',
        },
        {
            id: 4,
            title: '1984',
            author: 'George Orwell',
            imageUrl: 'https://img.freepik.com/free-vector/colorful-business-booklet_1035-2930.jpg?t=st=1712124996~exp=1712128596~hmac=27f1dfa81525a7722635e97da5136d8bddabaa57d421a94414196e1193d93e22&w=740',
            amazonLink: 'https://www.amazon.com/book4',
        },
        {
            id: 5,
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            imageUrl: 'https://img.freepik.com/free-vector/abstract-business-brochure_1035-4638.jpg?t=st=1712125047~exp=1712128647~hmac=a2a0e4fd4c19c35a798b9c4a9e7da4dada4a319950170c4aef73c9aa6e0f0d8d&w=740',
            amazonLink: 'https://www.amazon.com/book5',
        },
        {
            id: 6,
            title: 'The Hobbit',
            author: 'J.R.R. Tolkien',
            imageUrl: 'https://img.freepik.com/premium-vector/cards-with-watercolor-background-design-your-date-postcard-banner-logo_187069-16810.jpg?w=740',
            amazonLink: 'https://www.amazon.com/book6',
        },
        {
            id: 7,
            title: 'Moby Dick',
            author: 'Herman Melville',
            imageUrl: 'https://img.freepik.com/free-vector/green-orange-business-flyer-template_1201-1210.jpg?t=st=1712125102~exp=1712128702~hmac=02707d6bb6c4fb12204a2180c1c86038eada9ff860cca347dafff9ecedc45330&w=740',
            amazonLink: 'https://www.amazon.com/book7',
        },
        {
            id: 8,
            title: 'The Catcher in the Rye',
            author: 'J.D. Salinger',
            imageUrl: 'https://img.freepik.com/free-vector/polygonal-brochure-template_23-2147588482.jpg?t=st=1712125123~exp=1712128723~hmac=bf4f84c67fec67c84876f7f94ef4454b23b840f818ddebc79068091c5aefe52d&w=740',
            amazonLink: 'https://www.amazon.com/book8',
        },
        {
            id: 9,
            title: 'Brave New World',
            author: 'Aldous Huxley',
            imageUrl: 'https://img.freepik.com/free-vector/book-cover-template_1198-148.jpg?t=st=1712125157~exp=1712128757~hmac=a54e0dc63033805cd4697070443547a59020e3143ff44ade07353ec6561463c3&w=740',
            amazonLink: 'https://www.amazon.com/book9',
        },
        {
            id: 10,
            title: 'The Lord of the Rings',
            author: 'J.R.R. Tolkien',
            imageUrl: 'https://img.freepik.com/premium-vector/corporate-business-official-abstract-company-book-cover-template_616632-4026.jpg?w=996',
            amazonLink: 'https://www.amazon.com/book10',
        },
        {
            id: 11,
            title: 'Crime and Punishment',
            author: 'Fyodor Dostoevsky',
            imageUrl: 'https://img.freepik.com/premium-vector/cards-with-watercolor-background-design-your-cover-date-postcard-banner-logo_187069-24137.jpg?w=740',
            amazonLink: 'https://www.amazon.com/book11',
        },
        {
            id: 12,
            title: 'Anna Karenina',
            author: 'Leo Tolstoy',
            imageUrl: 'https://img.freepik.com/free-vector/polygonal-brochure-template_23-2147588482.jpg?t=st=1712125123~exp=1712128723~hmac=bf4f84c67fec67c84876f7f94ef4454b23b840f818ddebc79068091c5aefe52d&w=740',
            amazonLink: 'https://www.amazon.com/book12',
        },
    ];



    return (
        <div>
            <Navbar />
            <MenuBar />
            <div style={{ display: 'flex' }}>
                <div className="sidebar">

                    <div className="sidebar_content">
                        <h3>new arrival</h3>
                        <ul>
                            <li>Last 30 days</li>
                            <li>Last 60 days</li>
                            <li>Last 90 days</li>
                        </ul>
                    </div>
                    <div className="sidebar_content">
                        <h3>English & Indian Languages</h3>
                        <ul>
                            <li><input type="checkbox" id="english" name="english" /><label htmlFor="english">English</label></li>
                            <li><input type="checkbox" id="hindi" name="hindi" /><label htmlFor="hindi">Hindi</label></li>
                            <li><input type="checkbox" id="marathi" name="marathi" /><label htmlFor="marathi">Marathi</label></li>
                            <li><input type="checkbox" id="tamil" name="tamil" /><label htmlFor="tamil">Tamil</label></li>
                            <li><input type="checkbox" id="telugu" name="telugu" /><label htmlFor="telugu">Telugu</label></li>
                            <li><input type="checkbox" id="spanish" name="spanish" /><label htmlFor="spanish">Spanish</label></li>
                        </ul>
                    </div>
                    <div className="sidebar_content">
                        <h3>Category</h3>
                        <ul>
                            <li>Action & Adventure</li>
                            <li>Arts, Film & Photography</li>
                            <li>Biographies, Diaries &</li>
                            <li>True Accounts</li>
                            <li>Business & Economics</li>
                            <li>Children's Books</li>
                            <li>Comics & Mangas</li>
                            <li>Computers & Internet</li>
                            <li>Crafts, Hobbies & Home</li>
                        </ul>
                    </div>
                    <div className="sidebar_content">
                        <h3>Made for Amazon Brands</h3>
                        <ul>
                            <li><input type="checkbox" id="madeForAmazon" name="madeForAmazon" /><label htmlFor="madeForAmazon">Made for Amazon</label></li>                </ul>
                    </div>
                    <div className="sidebar_content">
                        <h3>Author</h3>
                        <ul>
                            <li><input type="checkbox" id="benyamin" name="benyamin" /><label htmlFor="benyamin">Benyāmin</label></li>
                            <li><input type="checkbox" id="akhilPDharmajan" name="akhilPDharmajan" /><label htmlFor="akhilPDharmajan">Akhil P Dharmajan</label></li>
                            <li><input type="checkbox" id="jamesClear" name="jamesClear" /><label htmlFor="jamesClear">James Clear</label></li>
                            <li><input type="checkbox" id="janYager" name="janYager" /><label htmlFor="janYager">Jan Yager</label></li>
                            <li><input type="checkbox" id="rdSharma" name="rdSharma" /><label htmlFor="rdSharma">R.D. Sharma</label></li>
                        </ul>
                    </div>
                    <div className="sidebar_content">
                        <h3>Avg. Customer Review</h3>
                        <ul>
                            <li>{renderStars(5)} 5 star</li>
                            <li>{renderStars(4)} 4 star & up</li>
                            <li>{renderStars(3)} 3 star & up</li>
                            <li>{renderStars(2)} 2 star & up</li>
                            <li>{renderStars(1)} 1 star & up</li>
                        </ul>
                    </div>
                    <div className="sidebar_content">
                        <h3>Item Condition</h3>
                        <ul>
                            <li>New</li>
                            <li>Used</li>
                        </ul>
                    </div>
                    <div className="sidebar_content">
                        <h3>Price</h3>
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

                <div className="books-container" style={{ flex: '1' }}>
                    {books.map(book => (
                        <div key={book.id} className="book-card">
                            <img src={book.imageUrl} alt={book.title} />
                            <div className="book-details">
                                <h4>{book.title}</h4>
                                <p>By {book.author}</p>
                                <p>Price: ₹{Math.floor(Math.random() * 1000)}</p> {/* Replace $10 with the actual price */}
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

export default Books;

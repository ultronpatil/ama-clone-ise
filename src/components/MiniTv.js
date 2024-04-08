import React, { useState, useRef } from 'react';
import Navbar from './Navbar';
import MenuBar from './MenuBar'
import Footer from './Footer';
import './MiniTv.css'
const MiniTv = () => {

    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const [selectedItem, setSelectedItem] = useState(null); // Define selectedItem state

    const handleSelectItem = (item) => {
        const index = BannerData.findIndex((data) => data.id === item.id);
        setSelectedItemIndex(index);
        setSelectedItem(item); // Update selectedItem state
    };

    const handleNext = () => {
        setSelectedItemIndex((prevIndex) => (prevIndex + 1) % BannerData.length);
    };

    const handlePrevious = () => {
        setSelectedItemIndex((prevIndex) => (prevIndex - 1 + BannerData.length) % BannerData.length);
    };

    const BannerData = [
        {
            id: 1,
            title: "Boys",
            imageUrl: "https://img.freepik.com/premium-vector/cinema-festival-social-media-cover-template_23-2149939383.jpg?w=1380"
        }
    ]


    const MiniTVData = [
        {
            id: 1,
            title: "The Marvelous ",
            imageUrl: "https://imgs.search.brave.com/gt8Ppj18sVlB04OenzlM9FlBYbcD9JQlDhGgptx9-4k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFaQkxabkxiOUwu/anBn",
        },
        {
            id: 2,
            title: "Jack Ryan",
            imageUrl: "https://imgs.search.brave.com/196buwIdyo1Ch9sHLi5Ro_asI4hD_kcQTn69G6S7AGQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFYMFpDYnhZU0wu/anBn",
        },
        {
            id: 3,
            title: "The Boys",
            imageUrl: "https://imgs.search.brave.com/AmQ9OyAV-e9LwZ-6FP8HsZoksAdjH9_2Px_hKY7mIXc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjE0ZnRUYUJXSUwu/anBn",
        },
        {
            id: 1,
            title: "The Marvelous ",
            imageUrl: "https://imgs.search.brave.com/5bYN54IrMtFkR4l2buRhAVOuCBZcDwpmq26O26ZZgRY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFkM0xxSkdrNUwu/anBn",
        },
        {
            id: 2,
            title: "Jack Ryan",
            imageUrl: "https://imgs.search.brave.com/lX79eX9MjHO6iQ6tnmInMwlJI-Jg1Bglyx-uHZVLFVg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTF2cXcyTGo0NUwu/anBn",
        },
        {
            id: 3,
            title: "The Boys",
            imageUrl: "https://imgs.search.brave.com/Q9R-TThUIPFL8LLYRHmxUaPOxLcAo5IA08FamagD-Ps/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjE1UjgzSEk3eEwu/anBn",
        },
        {
            id: 1,
            title: "The Marvelous ",
            imageUrl: "https://imgs.search.brave.com/oI1ePM4Nf8kgjqZJRoZGlsw09bHdYfLysXm4ksjlLwQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFJV2dEQWkreEwu/anBn",
        },
        {
            id: 2,
            title: "Jack Ryan",
            imageUrl: "https://imgs.search.brave.com/IDPaonZ4dDVUT74JCg_VBT4146jUYjHr0yNKfI6Q2dI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFQU2xGNjNXU0wu/anBnn",
        },
        {
            id: 3,
            title: "The Boys",
            imageUrl: "https://imgs.search.brave.com/wv4-2Vx6TQpaZEfav8pGtwYXrEgDaJBQyF1fAH9Y2YE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFXb0I0cE1yK0wu/anBn",
        },
        {
            id: 1,
            title: "The Marvelous ",
            imageUrl: "https://imgs.search.brave.com/8ED0wkuigZQD8AM5LLHfswG4a_SBqgVjqzCRo2H-lz8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzQ4NTE1MDc5L2Mv/MTk5OS8xOTk5LzAv/NjkxL2lsLzM5YmVi/NC81ODczMTg5MjMz/L2lsXzYwMHg2MDAu/NTg3MzE4OTIzM19k/NnZmLmpwZw",
        },
        {
            id: 2,
            title: "Jack Ryan",
            imageUrl: "https://imgs.search.brave.com/pQN6gO72njxYNwBylG8j0nz0axBW6GwAa7lXeufZsVI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2RhLzZm/L2M2L2RhNmZjNjgy/MzI2NTM2MzYzMWI1/YTA2MmI2YmM1YzRm/LmpwZw",
        },
        {
            id: 3,
            title: "The Boys",
            imageUrl: "https://imgs.search.brave.com/v1pyI9QQCasB6Dk9v6qyZMuHvoqBeAC0oCrJrxhXEYU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxRHJSYTRNN3ZM/LmpwZw",
        },
        // Add more mini TV shows as needed
    ];
    return (
        <div>
            <Navbar />
            <MenuBar />


            <div className="main-container">
                <h1 className="main-header">Amazon Mini TV</h1>
                <div className="miniTVShows-container">
                    {BannerData.map((item, index) => (
                        <div key={item.id} className={`miniTVShow-item ${index === selectedItemIndex ? 'selected-item' : ''}`} onClick={() => handleSelectItem(item)}>
                            <img src={item.imageUrl} alt={item.title} className="miniTVImage" />
                            <p className="miniTVTitle">{item.title}</p>
                        </div>
                    ))}
                </div>
                <div className="navigation">
                    <button onClick={handlePrevious}>&lt; Previous</button>
                    <button onClick={handleNext}>Next &gt;</button>
                </div>
                {selectedItemIndex !== null && (
                    <div className="selectedItem-container">
                        <img src={BannerData[selectedItemIndex].imageUrl} alt={BannerData[selectedItemIndex].title} className="selectedItemImage" />
                        <p className="selectedItemTitle">{BannerData[selectedItemIndex].title}</p>
                    </div>
                )}
            </div>




            <div className="container">
                <h1 className="header">Amazon Mini TV</h1>
                <div className="miniTVShows">
                    {MiniTVData.map((item) => (
                        <div key={item.id} className="miniTVShow" onClick={() => handleSelectItem(item)}>
                            <img src={item.imageUrl} alt={item.title} className="miniTVImage" />
                            <p className="miniTVTitle">{item.title}</p>
                        </div>
                    ))}
                </div>
                {selectedItem && (
                    <div className="selectedItem">
                        <img src={selectedItem.imageUrl} alt={selectedItem.title} className="selectedItemImage" />
                        <p className="selectedItemTitle">{selectedItem.title}</p>
                    </div>
                )}

            </div>


            <div className="container">
                <h1 className="header">Amazon Mini TV</h1>
                <div className="miniTVShows">
                    {MiniTVData.map((item) => (
                        <div key={item.id} className="miniTVShow" onClick={() => handleSelectItem(item)}>
                            <img src={item.imageUrl} alt={item.title} className="miniTVImage" />
                            <p className="miniTVTitle">{item.title}</p>
                        </div>
                    ))}
                </div>
                {selectedItem && (
                    <div className="selectedItem">
                        <img src={selectedItem.imageUrl} alt={selectedItem.title} className="selectedItemImage" />
                        <p className="selectedItemTitle">{selectedItem.title}</p>
                    </div>
                )}

            </div>

            <div className="container">
                <h1 className="header">Amazon Mini TV</h1>
                <div className="miniTVShows">
                    {MiniTVData.map((item) => (
                        <div key={item.id} className="miniTVShow" onClick={() => handleSelectItem(item)}>
                            <img src={item.imageUrl} alt={item.title} className="miniTVImage" />
                            <p className="miniTVTitle">{item.title}</p>
                        </div>
                    ))}
                </div>
                {selectedItem && (
                    <div className="selectedItem">
                        <img src={selectedItem.imageUrl} alt={selectedItem.title} className="selectedItemImage" />
                        <p className="selectedItemTitle">{selectedItem.title}</p>
                    </div>
                )}

            </div>
            <Footer />
        </div>
    );
};

export default MiniTv;

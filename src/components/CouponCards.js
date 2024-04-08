import React, { useRef } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const CouponCards = ({ data }) => {
    console.log("Data received in CouponCards:", data); // Debugging line
    const sliderRef = useRef(null);

    const slideLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= 500;
        }
    };

    const slideRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += 500;
        }
    };

    return (
        <>
            <div className='relative flex items-center'>
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
                <div
                    ref={sliderRef}
                    className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                >
                    {data && data.map((item, index) => (
                        <img
                            key={index}
                            className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                            src={item.img}
                            alt=''
                        />
                    ))}
                </div>
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
            </div>
        </>
    );
}

export default CouponCards;

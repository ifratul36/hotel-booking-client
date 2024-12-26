import React from 'react';
import leaf from '../assets/leaf.jpg';
import dining from '../assets/dining.jpg';
import glass from '../assets/glass.jpg';
import watch from '../assets/watch.jpg';
import plant from "../assets/plant.png";

const HotelStyle = () => {
    return (
        <div className='max-w-7xl mx-auto mt-6 px-4 '>
            <div className="divider lg:w-96 mx-auto md:px-5 my-10">
                <img src={plant} alt="Plant" />
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
                {/* Left section (Image) */}
                <div className='w-full md:w-[50%]'>
                    <img src={leaf} alt="Leaf" className="w-full h-auto rounded-lg " />
                </div>

                {/* Right section (Text and Info) */}
                <div className='w-full md:w-[50%] md:px-10'>
                    <p className='text-md font-normal mb-2'>THE CAPPA LUXURY HOTEL</p>
                    <h1 className='mb-4 text-3xl sm:text-4xl font-semibold'>Stay with Comfort and Style</h1>
                    <p className='mb-2 text-sm sm:text-base font-light my-4'>
                        Experience the perfect blend of comfort and style with our carefully curated collection, designed to make every moment enjoyable. Embrace luxury and elegance in every detail for ultimate satisfaction.
                    </p>
                    <p className='mb-2 text-lg font-normal my-4'>
                        Experience the perfect blend of comfort and style with our carefully curated collection, designed to make every moment enjoyable. Embrace luxury and elegance in every detail for ultimate satisfaction.
                    </p>

                    {/* Icon Section */}
                    <div className='flex flex-col md:flex-row justify-between items-center gap-6 my-4'>
                        <div className='flex flex-row justify-center items-center gap-2'>
                            <img src={dining} alt="Dining" className="w-12 h-12 rounded-full" />
                            <p className='text-xl font-medium'>The Best <br /> Restaurants</p>
                        </div>
                        <div className='flex flex-row justify-center items-center gap-2'>
                            <img src={glass} alt="Glass" className="w-12 h-12 rounded-full" />
                            <p className='text-xl font-medium'>The Best Cocktail <br /> Bar</p>
                        </div>
                    </div>

                    <hr className="my-4" />

                    {/* Buttons and Contact Section */}
                    <div className='md:pl-8 flex flex-col md:flex-row justify-start items-center gap-6 my-6'>
                        <div className='border-b-2 border-r-2 shadow-lg'>
                            <button className='mb-1 mr-1 px-8 py-4 rounded-sm text-md font-normal border border-gray-300'>
                                Know About Us
                            </button>
                        </div>
                        <div className='flex flex-row justify-center items-center gap-2'>
                            <img src={watch} alt="Watch" className="w-12 h-12" />
                            <div>
                                <p>Book Now</p>
                                <p>123456789</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelStyle;

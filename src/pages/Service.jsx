import React from 'react';
import pool from '../assets/pool.jpg';
import wifi from '../assets/wifi.jpg';
import ac from '../assets/ac.jpg';
import tv from '../assets/tv.jpg';
import bath from '../assets/bath.jpg';
import bar from '../assets/bar.jpg';
import key from '../assets/key.jpg';
import roomservice from '../assets/bar.jpg';

const Service = () => {
  return (
   <div className='bg-[#f6f5f0]'>
    <div className='max-w-6xl mx-auto'>
     <div className="service-section px-5 py-10 ">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
        SERVICES
      </h2>
      <p className='text-sm font-normal w-[70%] mx-auto pb-8 text-center'>Enjoy premium services including free WiFi, air conditioning, private bathrooms, flat-screen TVs, room service, a complimentary mini-bar, a sparkling pool, and more, all tailored to ensure your comfort and satisfaction!</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <div className="service-card text-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
          <img
            src={wifi}
            alt="Free WiFi"
            className="w-16 h-16 mx-auto mb-4 object-cover"
          />
          <h1 className="text-lg font-semibold text-gray-700">FREE WIFI</h1>
          <p className="text-sm text-gray-600 mt-2">
            Stay connected with high-speed internet, available throughout the
            property.
          </p>
        </div>
        <div className="service-card text-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
          <img
            src={ac}
            alt="Air Conditioning"
            className="w-16 h-16 mx-auto mb-4 object-cover"
          />
          <h1 className="text-lg font-semibold text-gray-700">
            AIR CONDITIONING
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Relax in a perfectly cooled room with our modern AC systems.
          </p>
        </div>
        <div className="service-card text-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
          <img
            src={bath}
            alt="Private Bathroom"
            className="w-16 h-16 mx-auto mb-4 object-cover"
          />
          <h1 className="text-lg font-semibold text-gray-700">
            PRIVATE BATHROOM
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Enjoy your privacy with a fully equipped modern bathroom.
          </p>
        </div>
        <div className="service-card text-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
          <img
            src={key}
            alt="Safe"
            className="w-16 h-16 mx-auto mb-4 object-cover"
          />
          <h1 className="text-lg font-semibold text-gray-700">SAFE</h1>
          <p className="text-sm text-gray-600 mt-2">
            Keep your valuables secure with our in-room safety deposit box.
          </p>
        </div>
        <div className="service-card text-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
          <img
            src={tv}
            alt="Flat Screen TV"
            className="w-16 h-16 mx-auto mb-4 object-cover"
          />
          <h1 className="text-lg font-semibold text-gray-700">
            FLAT SCREEN TV
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Catch up on your favorite shows with our large-screen TVs.
          </p>
        </div>
        <div className="service-card text-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
          <img
            src={bar}
            alt="Free Mini Bar"
            className="w-16 h-16 mx-auto mb-4 object-cover"
          />
          <h1 className="text-lg font-semibold text-gray-700">
            FREE MINI BAR
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Complimentary mini bar stocked with refreshments for your stay.
          </p>
        </div>
        <div className="service-card text-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
          <img
            src={roomservice}
            alt="Room Service"
            className="w-16 h-16 mx-auto mb-4 object-cover"
          />
          <h1 className="text-lg font-semibold text-gray-700">ROOM SERVICE</h1>
          <p className="text-sm text-gray-600 mt-2">
            Enjoy delicious meals and drinks delivered straight to your room.
          </p>
        </div>
        <div className="service-card text-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
          <img
            src={pool}
            alt="Pool"
            className="w-16 h-16 mx-auto mb-4 object-cover"
          />
          <h1 className="text-lg font-semibold text-gray-700">POOL</h1>
          <p className="text-sm text-gray-600 mt-2">
            Dive into our sparkling pool for a refreshing experience.
          </p>
        </div>
      </div>
    </div>
   </div>
   </div>
  );
};

export default Service;


import React from 'react';
import sea1 from '../assets/bg3.jpg';
import sea2 from '../assets/bg1.jpg';

const NewsUpdate = () => {
  return (
    <div className="bg-white py-16 px-6 max-w-7xl mx-auto">

      <p className="text-center text-lg font-light tracking-wide mb-2">STAY IN THE LOOP</p>
      <h2 className="text-center text-4xl font-bold tracking-wide mb-4">News & Update</h2>
      <p className='text-sm font-light md:w-[70%] mx-auto text-center mb-12'>"Stay updated with the latest news and announcements. Get all the details on new products, upcoming events, special promotions, and important updates right here!Stay updated with the latest news and announcements. Get all the details on new products, upcoming events, special promotions, and important updates right here!"</p>
      <div className="flex flex-col md:flex-row justify-center items-start gap-6">
        {/* First Card */}
        <div className="w-full md:w-[40%]">
          <img
            src={sea1}
            alt="Retro Lighting Design"
            className="w-full h-auto rounded-sm shadow-lg"
          />
          <div className="mt-4">
            <h3 className="text-2xl font-semibold mb-2">Retro Lighting Design in The Hotel</h3>
            <p className="text-gray-600 text-sm font-light leading-relaxed mb-4">
              Explore unique lighting designs that enhance the ambiance and provide a retro feel for your stay.
            </p>
            <button className="px-6 py-3 bg-black text-white font-medium rounded-sm hover:bg-gray-800 transition">
              Read More
            </button>
          </div>
        </div>

        {/* Second Card */}
        <div className="relative w-full md:w-[60%] flex flex-col-reverse md:flex-row">
          <img
            src={sea2}
            alt="Flexible Bookings"
            className="w-full h-auto rounded-sm shadow-lg"
          />
          <div className="md:absolute lg:bottom-10 md:bottom-4 left-4 w-[100%] mb-2 md:mb-0 md:w-[300px] bg-black bg-opacity-70 text-white px-4 py-2 rounded">
            <div className="p-4">
              <div className="flex items-center space-x-2 text-sm mb-2">
                <span>🧑 By Admin</span>
                <span>📅 October 18, 2024</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">24 hour cancellation on flexible bookings</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Enjoy flexible booking options with hassle-free cancellations within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsUpdate;

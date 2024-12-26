import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FeaturedSixRooms = () => {
  const [rooms, setRooms] = useState([]);

  // Fetch rooms data
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch('https://hotel-booking-server-flax.vercel.app/rooms');
        const data = await response.json();
        setRooms(data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchRooms();
  }, []);


  return (
    <div className="featured-rooms space-y-8 px-5 max-w-7xl mx-auto my-10">
    {/* Featured Rooms */}
    <h2 className="text-4xl font-extrabold text-center text-gray-900">
      Our Top-Rated Rooms
    </h2>
    <p className="text-center text-gray-600 max-w-2xl mx-auto">
      Discover the perfect place to stay with our exclusive collection of featured rooms.
    </p>
    <div className="room-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
      {rooms.slice(0, 6).map((room) => (
        <div
          className="room-card bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 relative"
          key={`${room.id}-${room.name}`}
        >
          {/* Badge */}
          <div className="absolute top-3 right-3 bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            Top Rated
          </div>
          {/* Image */}
          <div className="overflow-hidden rounded-t-lg">
            <img
              src={room.image}
              alt={room.name}
              className="room-image w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 truncate">
              {room.name}
            </h3>
            <p className="text-sm text-gray-600 mt-2 line-clamp-3">
              {room.description}
            </p>
            <p className="text-lg font-semibold text-indigo-600 mt-4">
              ${room.price} <span className="text-sm text-gray-500">/ night</span>
            </p>
            <Link
              to="/myrooms"
              className="book-now-button inline-block mt-5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium py-2 px-5 rounded-lg hover:shadow-md hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
  

  );
};

export default FeaturedSixRooms;

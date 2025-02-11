import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import axios from "axios";

const FeaturedRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchAllRooms();
  }, []);

  const fetchAllRooms = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/rooms`);
    setRooms(data);
  };

  return (
    <div className="md:max-w-6xl mx-auto md:px-4 mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms?.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedRooms;

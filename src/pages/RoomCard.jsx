import React from "react";
import { useNavigate } from "react-router-dom";

const RoomCard = ({ room }) => {
  const navigate = useNavigate();
  const { _id, name, price, image } = room;

  const handleClick = () => {
    navigate(`/roomDetails/${_id}`);
  };
  return (
    <div className="mx-auto">
      <div
        onClick={handleClick}
        className="relative  w-[300px] md:w-[355px] h-[400px] shadow-xl overflow-hidden rounded-sm"
      >
        {/* Background Image */}
        <img
          src={image}
          alt="rooms"
          className="absolute w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50"></div>
        {/* Text Content */}
        <div className="absolute bottom-0 left-0 w-full p-4 text-white">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-sm font-medium">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;

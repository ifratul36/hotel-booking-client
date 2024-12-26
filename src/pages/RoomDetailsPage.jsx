import { Link, useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RoomDetailsPage = () => {
  const {
    _id,
    rate,
    availability,
    recommendedFor,
    capacity,
    size,
    location,
    description,
    price,
    name,
    image,
    roomType,
  } = useLoaderData();

console.log(_id);

  return (
    <div className="p-4">
      <div className="max-w-[900px] mx-auto p-6 bg-white rounded-md shadow-lg">
        {/* Image and Room Name */}
        <div className="mb-6">
          <img
            src={image}
            alt={name}
            className="w-full h-[300px] object-cover rounded-md"
          />
          <h2 className="text-2xl font-bold mt-4">{name}</h2>
          <p className="text-lg text-gray-600 mt-2">Price: ${price}/night</p>
          <p className="text-md text-gray-500 mt-2">{description}</p>
        </div>

        {/* Room Details */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Room Details</h3>
          <ul className="list-disc ml-4">
            <li><strong>Location:</strong> {location}</li>
            <li><strong>Rate:</strong> {rate}</li>
            <li><strong>Size:</strong> {size}</li>
            <li><strong>Capacity:</strong> {capacity.join(", ")} person(s)</li>
            <li><strong>Room Type:</strong> {roomType.join(", ")}</li>
            <li><strong>Recommended For:</strong> {recommendedFor.join(", ")}</li>
            <li><strong>Availability:</strong> {availability ? "Available" : "Not Available"}</li>
          </ul>
        </div>

     

        {/* Booking Button */}
        <div className="mt-6">
          <Link to={`/booking-room/${_id}`}>
          <button className="btn bg-gradient-to-r from-purple-500 to-blue-500 text-white w-full md:w-auto">
            Book Now
          </button>
          </Link>
        </div>

     
      </div>
    </div>
  );
};

export default RoomDetailsPage;



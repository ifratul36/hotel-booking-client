import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import CSS for the date picker
import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RoomBookingModal = () => {
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [room, setRoom] = useState({});

  const { id } = useParams();
  console.log(id);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/rooms/${id}`)
      .then((res) => res.json())
      .then((data) => setRoom(data))
      .catch((error) => console.error("Error fetching room details:", error));
  }, [id]);


  const SubmitBookingApplication = (e) => {
    e.preventDefault();
  
    if (!arrivalDate || !departureDate) {
      console.error("Arrival and departure dates are required.");
      return;
    }
  
    const bookingApplication = {
      room_id: id,
      room_name: room.name,
      room_image: room.image,
      applicant_email: user.email,
      arrivalDate: arrivalDate.toISOString(),
      departureDate: departureDate.toISOString(),
      price: room.price,
    };
    console.log(bookingApplication);
  
    fetch(`${import.meta.env.VITE_API_URL}/booking_application`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Booking submitted successfully:", data);
        // After booking, change room availability
        fetch(`${import.meta.env.VITE_API_URL}/rooms/${_id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ availability: false }), // Update availability to false
        }).then((res) => res.json())
          .then((updatedRoom) => console.log(updatedRoom));
      })
      .catch((error) => {
        console.error("Error submitting booking application:", error);
      });
  };
  

  return (
    <div className="container mx-auto px-6 py-6">
      <form onSubmit={SubmitBookingApplication}>
        <div className="w-full mx-auto md:w-1/2 p-6 shadow-lg rounded-lg space-y-4">
          <img className="rounded-sm" src={room.image} alt={room.name} />
          <h1 className="text-xl font-semibold">{room.name}</h1>

          {/* ARRIVAL DATE */}
          <div className="my-2">
            <label className="block text-sm font-medium mb-2">
              Arrival Date
            </label>
            <DatePicker
              selected={arrivalDate}
              name="arrivalDate"
              onChange={(date) => setArrivalDate(date)}
              className="border-b-2 border-gray-300 focus:outline-none focus:border-neutral w-full text-sm px-2 py-1"
              placeholderText="Arrival Date"
              dateFormat="MMMM d, yyyy"
            />
          </div>

          {/* DEPARTURE DATE */}
          <div className="my-2">
            <label className="block text-sm font-medium mb-2">
              Departure Date
            </label>
            <DatePicker
              selected={departureDate}
              name="departureDate"
              onChange={(date) => setDepartureDate(date)}
              className="border-b-2 border-gray-300 focus:outline-none focus:border-neutral w-full text-sm px-2 py-1"
              placeholderText="Departure Date"
              dateFormat="MMMM d, yyyy"
            />
          </div>

          {/* PRICE */}
          <div className="my-2">
            <label className="block text-sm font-medium mb-2">Price</label>
            <input
              type="text"
              name="price"
              className="border-b-2 border-gray-300 focus:outline-none focus:border-neutral w-full text-sm px-2 py-1"
              placeholder="Price"
              defaultValue={room?.price} // Set default value from the room data
              required
            />
          </div>

          {/* CONFIRM BUTTON */}
         
            <button type="submit" className="w-full md:w-auto bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity">
              Confirm Booking
            </button>
        </div>
      </form>
    </div>
  );
};

export default RoomBookingModal;

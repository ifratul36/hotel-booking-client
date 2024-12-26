import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../hooks/useAuth";
import { Link, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import useAxiosSecure from "../aixos/useAxiosSecure";

const MyBookings = () => {
  const { user } = useAuth(); // Assuming useAuth hook gives the logged-in user
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);

  const axiosSecure = useAxiosSecure();

  const { roomId } = useParams(); // /review-room/:roomId
console.log(roomId);

  useEffect(() => {
    // Fetch bookings for the logged-in user using Axios
    const fetchBookings = async () => {
      try {
        // const response = await axios.get(`${import.meta.env.VITE_API_URL}/booking_application`, {
        //   withCredentials: true
        // });
        const response = await axiosSecure.get(`/booking_application`);
        const userBookings = response.data.filter(
          (booking) => booking.applicant_email === user.email
        );
        setBookings(userBookings);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, [axiosSecure, user.email]);

  const handleCancelBooking = async (bookingId, arrivalDate) => {
    // Get the current date
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Reset time to ensure accurate comparison

    // Convert arrivalDate to a Date object and adjust time
    const bookingDate = new Date(arrivalDate);
    bookingDate.setHours(0, 0, 0, 0); // Reset time to ensure accurate comparison

    // Check if cancellation is allowed (1 day before arrival date)
    const dayDifference = (bookingDate - currentDate) / (1000 * 3600 * 24);
    if (dayDifference <= 1) {
      toast.error(
        "You can only cancel a booking up to 1 day before the arrival date."
      );
      return;
    }

    try {
      // Send DELETE request to backend
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/booking_application/${bookingId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // Remove the canceled booking from the state
        setBookings((prevBookings) =>
          prevBookings.filter((booking) => booking._id !== bookingId)
        );
        toast.success("Booking canceled successfully!");
      } else {
        toast.error("Failed to cancel the booking.");
      }
    } catch (error) {
      console.error("Error canceling booking:", error);
      toast.error("An error occurred while canceling the booking.");
    }
  };

  const modernDelete = (id, arrivalDate) => {
    toast((t) => (
      <div className="flex gap-3 items-center">
        <p className="text-xl">
          Are You <span className="font-bold">Sure</span>?
        </p>
        <button
          className="bg-red-400 text-white px-3 py-1 rounded-md"
          onClick={() => {
            toast.dismiss(t.id);
            handleCancelBooking(id, arrivalDate);
          }}
        >
          Delete
        </button>
        <button
          className="bg-green-400 text-white px-3 py-1 rounded-md"
          onClick={() => toast.dismiss(t.id)}
        >
          Cancel
        </button>
      </div>
    ));
  };

  const openUpdateModal = (booking) => {
    const { arrivalDate, departureDate } = booking;
    const arrivalDateObj = new Date(arrivalDate);
    const today = new Date();

    if ((arrivalDateObj - today) / (1000 * 3600 * 24) < 1) {
      toast.error("Arrival date can only be updated at least 1 day before.");
      return;
    }

    setSelectedBooking(booking._id);
    setArrivalDate(new Date(arrivalDate));
    setDepartureDate(new Date(departureDate));
  };

  const updateBookingDates = async () => {
    if (!arrivalDate || !departureDate || !selectedBooking) {
      toast.error("Please select valid dates!");
      return;
    }

    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_API_URL
        }/booking_application/${selectedBooking}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            arrivalDate: arrivalDate.toISOString(),
            departureDate: departureDate.toISOString(),
          }),
        }
      );

      if (response.ok) {
        setBookings((prev) =>
          prev.map((booking) =>
            booking._id === selectedBooking
              ? { ...booking, arrivalDate, departureDate }
              : booking
          )
        );
        toast.success("Booking dates updated successfully!");
        closeUpdateModal();
      } else {
        toast.error("Failed to update the booking dates.");
      }
    } catch (error) {
      console.error("Error updating booking:", error);
      toast.error("An error occurred while updating the booking.");
    }
  };

  const closeUpdateModal = () => {
    setSelectedBooking(null);
    setArrivalDate(null);
    setDepartureDate(null);
  };

  return (
    <div className="container mx-auto px-6 py-6">
      <h2 className="text-2xl font-bold mb-4">My Bookings 🛌</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Room</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Arrival Date</th>
              <th className="px-4 py-2 text-left">Departure Date</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id} className="border-t">
                <td className="px-4 py-2">
                  <img
                    src={booking.room_image}
                    alt={booking.room_name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>
                <td>{booking.room_name}</td>
                <td className="px-4 py-2">${booking.price}</td>
                <td className="px-4 py-2">
                  {new Date(booking.arrivalDate).toLocaleDateString()}
                </td>
                <td className="px-4 py-2">
                  {new Date(booking.departureDate).toLocaleDateString()}
                </td>
                <td className="px-4 py-2">
                  <div className="flex space-x-4">
                    <button
                      onClick={() =>
                        modernDelete(booking._id, booking.arrivalDate)
                      }
                      className="text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                    <button onClick={() => openUpdateModal(booking)}>
                      <Link className="text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </Link>
                    </button>

                    {selectedBooking && (
                      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                          <h3 className="text-xl font-bold mb-4">
                            Update Booking Dates
                          </h3>
                          <div className="mb-4">
                            <label className="block mb-2 font-medium">
                              Arrival Date
                            </label>
                            <DatePicker
                              selected={arrivalDate}
                              onChange={(date) => setArrivalDate(date)}
                              className="border px-3 py-2 rounded-md w-full"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block mb-2 font-medium">
                              Departure Date
                            </label>
                            <DatePicker
                              selected={departureDate}
                              onChange={(date) => setDepartureDate(date)}
                              className="border px-3 py-2 rounded-md w-full"
                            />
                          </div>
                          <div className="flex justify-end space-x-4">
                            <button
                              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                              onClick={closeUpdateModal}
                            >
                              Cancel
                            </button>
                            <button
                              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                              onClick={updateBookingDates}
                            >
                              Save Changes
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    <Link to={`/review/${booking._id}`}>
                      <button className="text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                          />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;

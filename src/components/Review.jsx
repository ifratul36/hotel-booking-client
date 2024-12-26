import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { useParams } from "react-router-dom"; // To get roomId from the URL

const Review = () => {
  const { user } = useAuth();
  const { id } = useParams(); // Get the roomId from the URL params
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [timestamp] = useState(new Date().toLocaleString());
 console.log(id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const rating = form.rating.value;
    const comment = form.comment.value;

    // Now, roomId is directly coming from useParams()
    const formData = { email, rating, comment, timestamp, room_id: id };
    console.log(formData);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/review`,
        formData
      );
      console.log(data);
    } catch (error) {
      console.error("Error submitting review", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mt-5">
      <h2 className="text-2xl font-bold mb-4">Submit Your Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">
            User
          </label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            disabled={true}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="rating" className="block text-gray-700">
            Rating
          </label>
          <select
            name="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select a rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="comment" className="block text-gray-700">
            Comment
          </label>
          <textarea
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="4"
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="timestamp" className="block text-gray-700">
            Timestamp
          </label>
          <input
            type="text"
            id="timestamp"
            value={timestamp}
            readOnly
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default Review;

import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/"); // Redirects to the home page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* Background GIF/Image */}
      <div className="relative">
        <img
          src="https://media.giphy.com/media/26gYKiUdk7NLiVnlG/giphy.gif"
          alt="404 Not Found"
          className="w-full max-w-lg rounded-lg shadow-xl"
        />
      </div>

      {/* Error Message */}
      <h1 className="text-6xl font-bold mt-6">404</h1>
      <p className="text-xl mt-2">
        Oops! The page you are looking for doesn't exist.
      </p>

      {/* Back to Home Button */}
      <button
        onClick={handleBackToHome}
        className="btn border-none mt-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white w-full md:w-auto"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;

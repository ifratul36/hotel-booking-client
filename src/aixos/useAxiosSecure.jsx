// import axios from "axios";
// import React, { useEffect } from "react";
// import useAuth from "../hooks/useAuth";
// import { useNavigate } from "react-router-dom";

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:3000",
//   withCredentials: true,
// });

// const useAxiosSecure = () => {
//   const { logOut } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     axiosInstance.interceptors.response.use(
//       (response) => {
//         return response;
//       },
//       (error) => {
//         console.log("error caught in interceptors", error);

//         if (error.status === 401 || error.status === 403) {
//           console.log("need to logout the user");
//           logOut()
//             .then(() => {
//               console.log("logged out user");
//               navigate("/login");
//             })
//             .catch((error) => console.log(error));
//         }
//         return Promise.reject(error);
//       }
//     );
//   }, []);

//   return axiosInstance;
// };

// export default useAxiosSecure;



import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => response, // Return the response if successful
      (error) => {
        console.log("Error in interceptor:", error);

        const status = error.response?.status; // Safely access status
        if (status === 401 || status === 403) {
          console.log("Unauthorized or Forbidden - redirecting to login...");
          logOut()
            .then(() => {
              console.log("User logged out");
              navigate("/login"); // Navigate to the login page
            })
            .catch((err) => console.error("Error during logout:", err));
        }

        return Promise.reject(error); // Propagate the error
      }
    );
  }, [logOut, navigate]);

  return axiosInstance;
};

export default useAxiosSecure;

import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Authentiction/Login";
import Register from "../pages/Authentiction/Register";
import MyBookings from "../components/MyBookings";
import PrivateRoute from "./PrivateRoute";
import RoomDetailsPage from "../pages/RoomDetailsPage";
import FeaturedRooms from "../pages/FeaturedRooms";
import RoomBookingModal from "../components/RoomBookingModal";
import MapSection from "../components/MapSection";
import ContactForm from "../components/ContactForm";
import Review from "../components/Review";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/roomDetails/:id",
        element:  <PrivateRoute>
         <RoomDetailsPage />
         </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:3000/rooms/${params.id}`)
      },
      {
        path: "/mybooks",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            <ContactForm />
          </PrivateRoute>
        ),
      },
      {
        path: "/review/:id",
        element: (
          <PrivateRoute>
            <Review />
          </PrivateRoute>
        ),
      },
      {
        path: "/maps",
        element: (
          <PrivateRoute>
            <MapSection />
          </PrivateRoute>
        ),
      },
      {
        path: "/booking-room/:id",
        element: (
          <PrivateRoute>
            <RoomBookingModal />
          </PrivateRoute>
        ),
      },
      {
        path: "/myrooms",
        element: (
          <PrivateRoute>
            <FeaturedRooms />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;

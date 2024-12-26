import React from "react";
import { Link, NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-white text-center p-6 md:p-10 relative">
      <hr className="my-6"/>
      {/* Navigation Links */}
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mb-6 text-sm md:text-base">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-bold text-gray-900" : "hover:text-gray-700"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/maps"
          className={({ isActive }) =>
            isActive ? "font-bold text-gray-900" : "hover:text-gray-700"
          }
        >
          Maps
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "font-bold text-gray-900" : "hover:text-gray-700"
          }
        >
         Contact
        </NavLink>
        <NavLink
          to="/myrooms"
          className={({ isActive }) =>
            isActive ? "font-bold text-gray-900" : "hover:text-gray-700"
          }
        >
          All Room
        </NavLink>
        <NavLink
          to="/mybooks"
          className={({ isActive }) =>
            isActive ? "font-bold text-gray-900" : "hover:text-gray-700"
          }
        >
          My Books
        </NavLink>
        <NavLink
          to="/checkout"
          className={({ isActive }) =>
            isActive ? "font-bold text-gray-900" : "hover:text-gray-700"
          }
        >
          Checkout
        </NavLink>
      </div>

      {/* Social Icons */}
      <p className="font-semibold mb-4">Follow us:</p>
      <div className="flex flex-wrap justify-center items-end space-x-4 space-y-4 md:space-y-0 text-3xl">
        <Link to="https://www.facebook.com/" target="_blank" className="hover:text-blue-700" aria-label="Facebook">
          <i className="fab fa-facebook-f"></i>
        </Link>
        <Link to="https://www.twitter.com/" target="_blank" className="hover:text-black" aria-label="Twitter">
        <i className="fab fa-twitter"></i>
        </Link>
        <Link to="https://www.instagram.com/" target="_blank" className="hover:text-red-700" aria-label="Instagram">
        <i className="fab fa-instagram"></i>
        </Link>
        <Link to="https://www.whatsapp.com/" target="_blank" className="hover:text-green-700" aria-label="Whatsapp">
        <i className="fab fa-whatsapp"></i>
        </Link>
      </div>

      {/* Copyright */}
      <p className="mt-6 text-sm text-gray-500">
        Copyright © 2024 JRyas | Hotex.com
        <br />
        This Demo is part of JRyas Theme. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;


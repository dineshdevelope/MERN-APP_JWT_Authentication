import React from "react";
import { Link } from "react-router-dom";

const HeroPage = () => {
  return (
    <div>
      <h1 className="text-2xl text-center py-5">
        Welcome to MERN-AUTH Project by{" "}
        <a href="#" target="blank" className="hover:underline cursor-pointer">
          Dinesh
        </a>
      </h1>
      <p className="px-7 py-4">
        MERN-Auth is a full-stack authentication project utilizing the MERN
        stack (MongoDB, Express.js, React, and Node.js), alongside Redux Toolkit
        for state management and React Router Dom for routing. The backend
        handles user data via RESTful APIs, enabling registration, login,
        logout, and profile management functionalities. Secure authentication is
        implemented through JSON Web Tokens. React components drive frontend
        tasks such as user registration, login, and profile management, while
        Firebase storage facilitates profile image uploads. Tailwind CSS
        enriches the frontend with visually appealing styles for an enhanced
        user experience
      </p>
      <div>
        <div className="flex items-center justify-evenly py-10">
          <Link
            to={"/login"}
            className="text-white font-semibold hover:underline cursor-pointer bg-gray-900 hover:bg-gray-950 p-1 rounded"
          >
            Login
          </Link>
          <Link
            to={"/register"}
            className="text-white font-semibold hover:underline cursor-pointer bg-gray-900 hover:bg-gray-950 p-1 rounded"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center bg-gray-500 p-7">
        <Link to={"/"}>
          <h1 className="text-xl font-semibold text-white cursor-pointer hover:underline">
            MERN AUTH
          </h1>
        </Link>
        <div className="space-x-5">
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

export default Header;

import React from "react";

// images
import Logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between pb-12 bg-offWhite">
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="hidden">mobile</div>
      </div>
      <div>
        <ul className="flex gap-x-10 ">
          <li className="text-primaryColor duration-300 ease-in-out hover:text-brown">
            <a href="#">Home</a>
          </li>
          <li className="text-primaryColor duration-300 ease-in-out hover:text-brown">
            <a href="#">News</a>
          </li>
          <li className="text-primaryColor duration-300 ease-in-out hover:text-brown">
            <a href="#">Popular</a>
          </li>
          <li className="text-primaryColor duration-300 ease-in-out hover:text-brown">
            <a href="#">Trending</a>
          </li>
          <li className="text-primaryColor duration-300 ease-in-out hover:text-brown">
            <a href="#">Categories</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

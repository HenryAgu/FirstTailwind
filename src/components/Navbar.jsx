import React, { useState } from 'react';

// images
import Logo from "../images/logo.svg";
import Menu from "../images/menu.svg";
import Close from "../images/menu-close.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-col xl:flex-row md:flex-row xl:items-center md:items-center justify-between pb-3 bg-offWhite">
      <div className="flex justify-between items-center mb-5">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <button onClick={toggleNavbar}>{isOpen ? <img src={Close} alt="close" className="xl:hidden md:hidden"/> : <img src={Menu} alt="menu" className="xl:hidden md:hidden"/>}</button>
      </div>
      <div className='hidden xl:block md:block'>
        <ul className="flex flex-col xl:flex-row md:flex-row gap-x-10 ">
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

      {/* For mobile */}
{isOpen && (<div className='block duration-1000 xl:hidden md:hidden'>
        <ul className="flex flex-col xl:flex-row md:flex-row gap-x-10 ">
          <li className="text-navy duration-300 ease-in-out hover:text-brown p-2">
            <a href="#">Home</a>
          </li>
          <li className="text-navy duration-300 ease-in-out hover:text-brown p-2">
            <a href="#">News</a>
          </li>
          <li className="text-navy duration-300 ease-in-out hover:text-brown p-2">
            <a href="#">Popular</a>
          </li>
          <li className="text-navy duration-300 ease-in-out hover:text-brown p-2">
            <a href="#">Trending</a>
          </li>
          <li className="text-navy duration-300 ease-in-out hover:text-brown p-2">
            <a href="#">Categories</a>
          </li>
        </ul>
      </div>)}
    </nav>
  );
};

export default Navbar;

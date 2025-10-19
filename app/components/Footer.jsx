'use client'
import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  return (
    <footer className="bg-gray-100 w-full flex md:flex-row flex-col justify-around items-start p-10 md:p-20 ">
      {/* Brand & Social */}
      <div>
        <p className="text-gray-800 font-bold text-3xl pb-6">
          Zenan<span className="text-green-600">Zähmeti</span>
        </p>

        <div className="flex gap-6 pb-5">
          <FaLinkedin className="text-2xl cursor-pointer hover:text-gray-500" />
          <FaInstagram className="text-2xl cursor-pointer hover:text-gray-500" />
          <FaPhone className="text-2xl cursor-pointer hover:text-gray-500" />
          <LuMail className="text-2xl cursor-pointer hover:text-gray-500" />
        </div>
      </div>

      {/* Menu */}
      <div>
        <p className="text-gray-800 font-bold text-2xl pb-4">Menu</p>
        <ul>
          {["Home", "Explore", "Profile", "Sign In"].map((item) => (
            <li
              key={item}
              className="cursor-pointer text-gray-500 pb-1 hover:text-black"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Support */}
      <div>
        <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
        <ul>
          {["FAQ", "Contact", "Help Center"].map((item) => (
            <li
              key={item}
              className="cursor-pointer text-gray-500 pb-1 hover:text-black"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Explore */}
      <div>
        <p className="text-gray-800 font-bold text-2xl pb-4">Explore</p>
        <ul>
          {["Categories", "New Listings"].map((item) => (
            <li
              key={item}
              className="cursor-pointer text-gray-500 pb-1 hover:text-black"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Dropdown */}
      <div className="relative inline-block mt-8 md:mt-0">
        <button
          type="button"
          onClick={toggleDropdown}
          className="px-4 py-2 text-white font-bold bg-black hover:bg-gray focus:ring-4 focus:outline-none focus:ring-blue-100  rounded-lg text-sm inline-flex items-center"
        >
          English
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1  ring-opacity-5 font-bold">
            <ul
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {["Russian", "Turkmen"].map((option) => (
                <li key={option}>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeDropdown}
                  >
                    {option}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </footer>
  );
}

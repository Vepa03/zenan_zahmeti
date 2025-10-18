import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdClose, MdFavoriteBorder } from "react-icons/md";
import { SlBasket } from "react-icons/sl";

export default function Navbar() {
  const categories = [
    "All",
    "New In",
    "Women",
    "Men",
    "Kids",
    "Home",
    "Beauty",
    "Electronics",
    "Sports",
    "Accessories",
    "Sale %",
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur">
      {/* Row 1 */}
      <div className="w-full px-5 lg:px-8 xl:px-[8%] h-20 flex items-center justify-between">
        {/* Logo */}
        <p className="text-gray-800 font-bold text-3xl flex items-center">
          Zenan<span className="text-green-600 ml-1">Zahmeti</span>
        </p>

        {/* Search */}
        <div className="w-full max-w-xl hidden md:flex items-center gap-2 rounded-2xl border border-gray-300 bg-white px-4 py-2 shadow-sm">
          <FaSearch className="text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent outline-none placeholder:text-gray-400 text-base"
          />
          <button
            className="rounded-full p-1 hover:bg-gray-100 flex items-center justify-center"
            aria-label="Clear"
          >
            <MdClose className="w-5 h-5" />
          </button>
          <button className="rounded-xl px-3 py-1.5 text-sm font-medium bg-black text-white">
            Search
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            className="rounded-full p-2 hover:bg-gray-100 flex items-center justify-center"
            aria-label="Favorites"
          >
            <MdFavoriteBorder className="text-black w-6 h-6" />
          </button>
          <button
            className="rounded-full p-2 hover:bg-gray-100 flex items-center justify-center"
            aria-label="Basket"
          >
            <SlBasket className="text-black w-6 h-6" />
          </button>
          <button className="border rounded-full px-6 py-2 border-gray-500">
            Sign In
          </button>
        </div>
      </div>

      {/* Row 2: Categories */}
      <div className="w-full px-5 lg:px-8 xl:px-[8%] h-12 bg-white">
        <nav className="flex items-center justify-center gap-5 overflow-x-auto py-2 no-scrollbar">
          {categories.map((label) => (
            <a
              key={label}
              href="#"
              className="whitespace-nowrap rounded-full px-4 py-1.5 text-sm border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

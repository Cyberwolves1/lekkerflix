import React from "react";
import { FaFilm, FaGamepad, FaBookmark, FaTv, FaUser } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between bg-black text-yellow-500 px-6 py-4">
            <div className="flex items-center space-x-2">
                <FaFilm className="text-yellow-500 text-lg" />
                <span className="text-white font-semibold text-lg">lekkerflix</span>
            </div>

            <div className="flex-grow max-w-lg mx-4">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full px-4 py-2 rounded-lg bg-gray-200 text-black placeholder-gray-500 focus:outline-none"
                />
            </div>

            <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-1 cursor-pointer">
                    <FaGamepad />
                    <span className="hidden sm:inline">Gaming</span>
                </div>
                <div className="flex items-center space-x-1 cursor-pointer">
                    <FaBookmark />
                    <span className="hidden sm:inline">Watchlist</span>
                </div>
                <div className="flex items-center space-x-1 cursor-pointer">
                    <span>Movies</span>
                </div>
                <div className="flex items-center space-x-1 cursor-pointer">
                    <FaTv />
                    <span className="hidden sm:inline">TV Shows</span>
                </div>
                <div className="flex items-center space-x-1 cursor-pointer">
                    <FaUser />
                    <span className="hidden sm:inline">Login</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

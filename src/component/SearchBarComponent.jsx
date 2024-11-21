import React from "react";
import { useState } from "react"; // Import useState here
import ReactDOM from "react-dom";

import "./styles.scss";

function SearchBar() {
  
    return (
        <div className="SearchBar">

          {/* Search Bar */}
          <div className="flex border border-gray-300 rounded-lg shadow-md overflow-hidden bg-white">
            {/* Input field */}
            <input
              type="text"
              className="flex-grow py-2 px-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
              placeholder="Type a guess here..."
              aria-label="Search"
            />
    
            {/* Search button */}
            <button className="px-4 bg-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
    );
}

const rootElement = document.getElementById("root");


export default SearchBar;
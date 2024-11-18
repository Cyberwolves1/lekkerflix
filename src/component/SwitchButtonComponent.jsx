import React, { useState } from "react";

const SwitchButtons = () => {
    const [selectedOption, setSelectedOption] = useState("tv-shows");

    return (
        <div className="inline-flex items-center border border-gray-300 rounded-full overflow-hidden">
            <button
                onClick={() => setSelectedOption("tv-shows")}
                className={`px-4 py-2 focus:outline-none ${selectedOption === "tv-shows"
                        ? "bg-black text-yellow-500"
                        : "bg-white text-black"
                    }`}
            >
                TV Shows
            </button>
            <button
                onClick={() => setSelectedOption("movies")}
                className={`px-4 py-2 focus:outline-none ${selectedOption === "movies"
                        ? "bg-black text-yellow-500"
                        : "bg-white text-black"
                    }`}
            >
                Movies
            </button>
        </div>
    );
};

export default SwitchButtons;

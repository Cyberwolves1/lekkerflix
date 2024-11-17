import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-black text-white">
      <header className="flex items-center justify-between p-4 bg-black">
        <div className="flex items-center space-x-2">
          <img src="/assets/Frame.svg" alt="Lekkerflix Logo" className="h-6 w-6" />
          <span className="text-xl" style={{ fontFamily: "'Road Rage', cursive" }}>
            lekkerflix
          </span>
        </div>

        <div className="flex-grow mx-4">
          <input
            type="text"
            placeholder="search..."
            className="w-full py-2 px-4 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div className="flex items-center space-x-4 text-white">
          <a href="#" className="flex items-center space-x-1">
            <span className="material-icons text-yellow-500">videogame_asset</span>
            <span className="text-sm">Gaming</span>
          </a>
          <a href="#" className="flex items-center space-x-1">
            <span className="material-icons text-yellow-500">bookmark</span>
            <span className="text-sm">Watchlist</span>
          </a>
          <a href="#" className="text-sm">Movies</a>
          <a href="#" className="text-sm">TV Shows</a>
          <a href="#" className="material-icons text-yellow-500">person</a>
        </div>
      </header>

      <footer>
        <div className="flex items-center justify-evenly p-4 bg-blue-800 text-white space-x-8">
          <div className="flex flex-col items-center space-y-2 text-center">
            <div><b>Community</b></div>
            <ul className="list-none space-y-1">
              <li>Leaderboard</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="flex flex-col items-center space-y-2 text-center">
            <div><b>Platform</b></div>
            <ul className="list-none space-y-1">
              <li>Leaderboard</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="flex flex-col items-center space-y-2 text-center">
            <div><b>Legal</b></div>
            <ul className="list-none space-y-1">
              <li>Terms of use</li>
              <li>Privacy Policy</li>
              <li>DMCA Policy</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

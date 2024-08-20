import React from "react";
const Home = () => {
  return (

    <div className="bg-gray-100 min-h-screen">
        <nav className="bg-black bg-opacity-75 text-white py-4 px-8">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">
              <a href="/" className="hover:text-gray-400">
               Rishabh-Accuknox
              </a>
            </div>
            <ul className="flex space-x-6">
              <li>
                <a href="/" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/dashboard" className="hover:text-gray-400">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/About" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
    <div className="flex flex-col justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080')" }}>
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome to Your Dashboard
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-6">
          Manage all your cloud in one place.
        </p>
        <a
          href="/dashboard"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Click here to go to Dashboards
        </a>
      </div>
      <div className="mt-12 text-center">
        <p className="text-white">Scroll down to learn more</p>
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/down-squared.png"
          alt="Scroll down"
          className="animate-bounce mx-auto mt-4"
        />
      </div>
    </div></div>
  );
};

export default Home;

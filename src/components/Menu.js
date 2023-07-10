import React, { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-white font-semibold text-xl">FinEdge</div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              onClick={handleMenuToggle}
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.293 4.293a1 1 0 010 1.414L5.414 19.293a1 1 0 01-1.414-1.414L17.586 4.293a1 1 0 111.414 1.414L6.414 18.707a3 3 0 01-4.242 0l14.142-14.142z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z"
                  />
                )}
              </svg>
            </button>
          </div>
          <div
            className={`md:flex flex-col md:flex-row md:items-center md:justify-end ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            <a
              href="#home"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              About Us
            </a>
            <a
              href="#services"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;

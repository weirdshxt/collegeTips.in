import React, { useState } from 'react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div
      id="navbar"
      className="flex items-center justify-between p-8 px-12 fixed top-0 left-0 right-0 z-10"
    >
      <div className="logo flex items-center justify-center px-8">
        <h2 className="text-xl font-semibold cursor-pointer absolute z-10">
          PAWS
        </h2>
      </div>

      {/* Options for larger screens */}
      <div className="opt hidden md:flex items-center justify-between gap-8 cursor-pointer">
        <div className="flex">About</div>
        <div className="flex">Volunteer</div>
        <div className="flex">Impact</div>
        <div className="flex rounded-full py-2 px-4 cursor-pointer bg-amber-500 hover:bg-amber-600 text-white font-medium transition">
          Adopt
        </div>
      </div>

      {/* Mobile menu (hidden by default) */}
      <div
        className={`md:hidden absolute top-0 left-0 right-0 bg-white px-12 pt-8 pb-12 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        {/* Hamburger or Cross icon */}
        <div className="flex">Impact</div>
        <div className="flex bg-[#E16900] rounded-full py-2 px-4 cursor-pointer">
          Adopt
        </div>
      </div>

      {/* Hamburger icon for smaller screens */}
      <div
        className="md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      {/* Mobile menu (hidden by default) */}
      <div
        className={`md:hidden absolute top-0 left-0 right-0 bg-white px-12 pt-8 pb-12 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        {/* Hamburger or Cross icon */}
        <div
          className="absolute top-8 right-12"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        {/* Mobile Menu Options */}
        <div className="flex flex-col space-y-4 mt-16">
          <div className="cursor-pointer">About</div>
          <div className="cursor-pointer">Volunteer</div>
          <div className="cursor-pointer">Impact</div>
          <div className="bg-[#E16900] rounded-full py-2 px-4 cursor-pointer text-center text-white">
            Adopt
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar
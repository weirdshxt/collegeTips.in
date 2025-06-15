import React from 'react'
import SlidingNavbar from './SlidingGlass';
import { BrainCircuit, Languages } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-6 px-12 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between space-x-2">
        <BrainCircuit size={20} stroke="#2E3A40" />
        <h2 className="text-xl text-[#2E3A40] mb-1.5 font-medium">easifi</h2>
      </div>
      <div className="flex">
        <SlidingNavbar />
      </div>
      <div className="flex">
        <div className="flex items-center justify-between space-x-2 bg-white px-6 py-2 rounded-full cursor-pointer">
          <Languages size={20} stroke="#2E3A40" />
          <h2 className="text-sm text-[#2E3A40]">हिंदी</h2>
        </div>
      </div>
    </div>
  );
}

export default Navbar
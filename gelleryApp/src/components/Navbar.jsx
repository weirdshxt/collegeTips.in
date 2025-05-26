import React, { useState } from 'react'
import HamburgerIcon from './Hamburger';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {


    const [open, setOpen] = useState(false);

    const toggle = () => {
      setOpen(!open);
    };

    const closeDrawer = () => {
      setOpen(false);
    }

  return (
    <>
    <div
      id="navbar"
      className="flex items-center justify-between py-6 px-4 sm:py-8 sm:px-6 fixed top-0 left-0 right-0 z-50"
    >
      <div >
        <HamburgerIcon isOpen={open} onClick={toggle} />
      </div>
      <div className="flex items-center">

        <a href='/' className="text-[1rem] font-serif text-[#0f172a]">KABIR KHAN</a>
      </div>
      <div className="flex items-center">
        <a href="https://github.com/weirdshxt/collegeTips.in/tree/main/gelleryApp" target='_blank'>
          <span className="text-[1rem] font-semibold text-[#0f172a]">
            GitHub
          </span>
        </a>
      </div>
    </div>
    <div
      className={`glass-container fixed top-0 left-0 right-0 h-screen w-full sm:w-[20%] z-5 transition-transform transform ${
        open ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <ul className="text-2xl sm:text-xl font-semibold text-black flex flex-col items-center">
          <li className="mb-4">
            <Link to="/category/teamvibe" onClick={closeDrawer}>
            <span onClick={closeDrawer}>Team Vibes</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/category/workplay" onClick={closeDrawer}>
            <span onClick={closeDrawer}>Work, Play</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/category/celebration" onClick={closeDrawer}>
            <span onClick={closeDrawer}>Celebration</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/category/bts" onClick={closeDrawer}>
            <span onClick={closeDrawer}>Behind The Scene</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default Navbar
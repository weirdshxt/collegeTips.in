import React, { useState } from 'react'
import HamburgerIcon from './Hamburger';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const toggle = () => {
      setOpen(!open);
    };

  return (
    <div className="flex items-center justify-between p-4 fixed top-0 left-0 right-0">
      <div className="p-4 px-8">
        <HamburgerIcon isOpen={open} onClick={toggle} />
      </div>
      <div className="flex items-center">
        <h3 className="text-[1rem] font-serif text-[#0f172a]">KABIR KHAN</h3>
      </div>
      <div className="flex items-center px-8">
            <a href="/">
              <span className="text-[1rem] font-semibold text-[#0f172a]">GitHub</span>
            </a>
      </div>
    </div>
  );
}

export default Navbar
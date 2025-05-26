import React from "react";

const HamburgerIcon = ({ isOpen, onClick }) => {
  return (
    <div
      className={`hamburger-icon relative z-55 ${isOpen ? "open" : ""}`}
      onClick={onClick}
    >
      <div className="line1"></div>
      <div className="line2"></div>
    </div>
  );
};

export default HamburgerIcon;

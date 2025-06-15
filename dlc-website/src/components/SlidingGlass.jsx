import React, { useState, useRef, useEffect } from "react";

const SlidingNavbar = () => {
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [activeItemIndex, setActiveItemIndex] = useState(0); // Assume first item is active by default
  const navItemsRef = useRef([]);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Tutorials", link: "/tutorials" },
    { name: "AI", link: "/chatbot" },
    { name: "Feedback", link: "/feedback" },
  ];

  // Helper function to update indicator style
  const updateIndicatorPosition = (itemElement) => {
    if (itemElement) {
      const { offsetLeft, offsetWidth } = itemElement;
      setIndicatorStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  };

  // Effect to set initial indicator and update when activeItemIndex changes
  useEffect(() => {
    const activeElement = navItemsRef.current[activeItemIndex];
    if (activeElement) {
      updateIndicatorPosition(activeElement);
    }
  }, [activeItemIndex, navLinks.length]); // Re-run if active item or number of links changes

  const handleMouseEnter = (index) => {
    const itemElement = navItemsRef.current[index];
    updateIndicatorPosition(itemElement);
  };

  const handleMouseLeave = () => {
    // On mouse leave from an item, move indicator back to the currently active item
    const activeElement = navItemsRef.current[activeItemIndex];
    updateIndicatorPosition(activeElement);
  };

  const handleItemClick = (index) => {
    setActiveItemIndex(index);
    // The useEffect hook will handle updating the indicator's position
    // based on the new activeItemIndex.
  };

  return (
    <nav className="navbar rounded-4xl px-3 py-2 w-full mx-auto flex justify-center items-center">
      <div
        className="indicator relative h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/30 inset-shadow-xs inset-shadow-white group transition-all duration-300"
        style={indicatorStyle}
      >
        <div className="absolute glow -bottom-3 left-1/2 -translate-x-1/2 w-full h-8 blur-xl rounded-full"></div>
      </div>
      <ul className="nav-list space-x-2">
        {navLinks.map((item, index) => (
          <li
            key={item.name}
            ref={(el) => (navItemsRef.current[index] = el)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className="nav-item px-2 py-1 rounded-4xl relative text-[#2E3A40] text-[0.9rem]"
            onClick={() => handleItemClick(index)}
          >
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SlidingNavbar;

import React, { useState } from "react";
import img1 from "../assets/pets/cat.png";
import img2 from "../assets/pets/dog.png";
import img3 from "../assets/pets/dog2.png";
import img4 from "../assets/pets/cat2.png";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

const Adopt = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [direction, setDirection] = useState("next");
  const images = [img1, img2, img3, img4]; // Array of your image imports

  const nextSlide = () => {
    setDirection("next");
    setPrevIndex(currentIndex);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection("prev");
    setPrevIndex(currentIndex);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#FEF4D1]">
      <div className="carousel-container relative w-full h-full">
        <div
          className={`carousel-item w-full h-full transition-opacity duration-500 flex items-center justify-center flex-col relative  `}
        >
          <h1 className="text-[20rem] relative bottom-[10%] font-semibold font-serif">
            ADOPT
          </h1>

          <div className="relative bottom-[23%] right-[25%] text-right">
            <h1 className="text-6xl font-bold font-serif">
              add <span className="text-amber-500">colour</span>
            </h1>
            <h1 className="text-6xl font-bold font-serif">to their</h1>
            <h1 className="text-6xl font-bold font-serif">life</h1>
          </div>

          {images.map((img, index) => {
            let translateX = "translate-x-full";
            let transitionClass = "transition-transform duration-500 ease-in-out";
           

            if (index === currentIndex) {
              translateX = "translate-x-0";
              
            } else if (index === prevIndex) {
              if (direction === "next") {
                translateX = "-translate-x-full";
              } else {
                translateX = "translate-x-full";
              }
            } else {
              transitionClass = "";
            }

            return (
              <div
                key={index}
                className={`flex absolute w-[80%] h-full items-center justify-center ${transitionClass}
                  ${index === 0 ? "top-[40%] left-[13%]" : ""}
                  ${index === 1 ? "top-[5%] left-[5%]" : ""}
                  ${index === 2 ? "top-[30%] left-[10%]" : ""}
                  ${index === 3 ? "top-[45%] left-[20%]" : ""}
                  ${translateX}
                `}
                style={{ filter: "grayscale(100%)" }}
              >
                <img src={img} />
              </div>
            );
          })}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute bottom-[5%] right-22 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <ArrowLeftIcon />
      </button>
      <button
        onClick={nextSlide}
        className="absolute bottom-[5%] right-8 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
};

export default Adopt;

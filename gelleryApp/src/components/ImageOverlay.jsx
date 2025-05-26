import React from "react";
import { seminarImages } from "../assets/imageArrays";
import { BTSImages } from "../assets/imageArrays";
import { CeleImages } from "../assets/imageArrays";
import { chillImages } from "../assets/imageArrays";
import { workImages } from "../assets/imageArrays";

const ImageOverlay = () => {
  return (
    <div className="image flex flex-col absolute top-0 left-0 right-0 bottom-0 px-6 sm:px-12 gap-25 py-25">
      <div className="hero1 flex items-center justify-between">
        <div className="image-1 mt-36 mr-4">
          <img
            className="w-[23rem] h-[14rem] sm:w-[23rem] sm:h-[34rem] object-cover"
            src={BTSImages[4]}
            alt=""
          />
        </div>
        <div className="image-2 mr-4">
          <img
            className="w-[18rem] h-[15rem] sm:h-[25rem] object-cover"
            src={BTSImages[2]}
            alt=""
          />
        </div>
        <div className="image-3 mt-36">
          <img
            className="w-[18rem] h-[14rem] sm:w-[23rem] sm:h-[34rem] object-cover"
            src={BTSImages[5]}
            alt=""
          />
        </div>
      </div>
      <div className="hero flex items-center justify-between">
        <div className="image-1 mt-36 mr-4">
          <img
            className="w-[16rem] h-[14rem] sm:h-[24rem] object-cover"
            src={chillImages[4]}
            alt=""
          />
        </div>
        <div className="image-2 mr-4">
          <img
            className="w-[28rem] h-[17rem] sm:w-[28rem] sm:h-[37rem] object-cover"
            src={chillImages[5]}
            alt=""
          />
        </div>
        <div className="image-3 mt-36">
          <img
            className="w-[16rem] h-[14rem] sm:h-[24rem] object-cover"
            src={CeleImages[3]}
            alt=""
          />
        </div>
      </div>
      <div className="hero2 flex items-center justify-between">
        <div className="image-1 mr-4">
          <img
            className="w-[16rem] h-[14rem] sm:h-[24rem] object-cover"
            src={workImages[5]}
            alt=""
          />
        </div>
        <div className="image-3">
          <img
            className="w-[16rem] h-[14rem] sm:h-[24rem] object-cover"
            src={workImages[2]}
            alt=""
          />
        </div>
      </div>

      <div className="cards px-8 pb-4 grid grid-cols-1 md:grid-cols-2 sm:flex sm:flex-nowrap gap-7">
        <div className="card p-8 sm:flex-shrink-0">
          <img
            className="object-cover w-full h-full"
            src={workImages[4]}
            alt=""
          />
        </div>
        <div className="card p-8 sm:flex-shrink-0">
          <img
            className="object-cover w-full h-full"
            src={CeleImages[4]}
            alt=""
          />
        </div>
        <div className="card p-8 sm:flex-shrink-0">
          <img
            className="object-cover w-full h-full"
            src={chillImages[3]}
            alt=""
          />
        </div>
        <div className="card p-8 sm:flex-shrink-0">
          <img
            className="object-cover w-full h-full"
            src={BTSImages[1]}
            alt=""
          />
        </div>
        <div className="card p-8 sm:flex-shrink-0">
          <img
            className="object-cover w-full h-full"
            src={workImages[0]}
            alt=""
          />
        </div>
        <div className="card p-8 sm:flex-shrink-0">
          <img
            className="object-cover w-full h-full"
            src={seminarImages[4]}
            alt=""
          />
        </div>
        <div className="card p-8 sm:flex-shrink-0">
          <img
            className="object-cover w-full h-full"
            src={CeleImages[1]}
            alt=""
          />
        </div>
        <div className="card p-8 sm:flex-shrink-0">
          <img
            className="object-cover w-full h-full"
            src={BTSImages[3]}
            alt=""
          />
        </div>
        <div className="card p-8 sm:flex-shrink-0">
          <img
            className="object-cover w-full h-full"
            src={workImages[7]}
            alt=""
          />
        </div>
        <div className="card p-8 sm:flex-shrink-0">
          <img
            className="object-cover w-full h-full"
            src={seminarImages[0]}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ImageOverlay;

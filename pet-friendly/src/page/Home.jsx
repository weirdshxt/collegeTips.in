import React from "react";
import Loader from "../component/Loader";
import cloud from "../assets/images/cloud.png";
import field from "../assets/images/field.png";
import pets from "../assets/images/pets.png";
import Navbar from "../component/Navbar";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Home = () => {
  useGSAP(() => {
    gsap.from("#navbar", {
      duration: 1,
      y: -100,
      opacity: 0,
      ease: "power2.out",
    });

    gsap.from(".txt h1", {
      duration: 1,
      y: 300,
      scale: 0.5,
      opacity: 0,
      ease: "power2.out",
    });
  });

  return (
    <div className="relative flex items-center justify-center bg-[#FEF4D1] min-h-screen overflow-hidden">
      <Navbar />
      {/* <Loader /> */}
      <div className="bg flex absolute top-0 left-0">
        <div className="group-cloud flex mt-4">
          <div className="cloud w-[50%] h-full">
            <img src={cloud} alt="" />
          </div>
          <div className="cloud w-[50%] h-full">
            <img src={cloud} alt="" />
          </div>
        </div>
        <div className="field absolute top-0 left-0">
          <img
            className="w-full h-full object-bottom mt-4"
            src={field}
            alt=""
          />
        </div>
        <div className="txt overflow-hidden text-9xl text-[#884001] font-bold absolute top-[35%] left-[27%]">
          <h1>Make Cities</h1>
          <h1>Paw-Some!</h1>
        </div>
        <div className="pets flex items-center justify-center absolute left-[20%] top-[55%] w-[60%]">
          <img src={pets} />
        </div>
      </div>
    </div>
  );
};

export default Home;

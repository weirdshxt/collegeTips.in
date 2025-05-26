import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { chillImages } from "../assets/imageArrays";
import { CircleArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(useGSAP, SplitText);

const TeamVibes = () => {
  const navigate = useNavigate();

  const nextCate = () => {
    navigate("/category/workplay")
  }

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Scroll to top on mount
    window.scrollTo(0, 0);

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const isSmallScreen = window.matchMedia("(max-width: 639px)").matches;
  useGSAP(() => {
    const loader = document.querySelector("#loader");
    const title = document.querySelector("#title-text");

    let split = SplitText.create(".split", { type: "words, chars" });
    let splitSavi = SplitText.create(".saviText", { type: "words, chars" });

    // Initially set title color to white and visible
    gsap.set(split.chars, { color: "#ffffff", autoAlpha: 1 });

    // Animate loader out
    gsap.to(loader, {
      duration: 1.5,
      x: "-100%",
      ease: "power2.inOut",
      onComplete: () => {
        loader.style.display = "none";
      },
      onStart: () => {
        title.style.zIndex = "51"; // Bring title to the front during animation
        title.style.display = "block"; // Ensure title is visible during animation
        document.querySelector(".saviText").style.display = "none"; // Hide saviText initially
      },
    });

    gsap.to(title, {
      top: "17%",
      duration: 1,
      delay: 0.7,
      ease: "power2.inOut",
      onComplete: () => {
        document.querySelector(".saviText").style.display = "block"; // Ensure title is visible after animation
        title.style.display = "none";
        gsap.to(splitSavi.chars, {
          left: isSmallScreen ? "-45%" : "-95%",
          duration: 1,
          autoAlpha: 1,
          stagger: { each: 0.03, from: "end" },
          ease: "power2.inOut",
        });
      },
    });
    gsap.to(split.chars, {
      duration: 0.2,
      delay: 0.4,
      color: "#000",
      autoAlpha: 1,
      stagger: { each: 0.03, from: "end" },
      ease: "power2.inOut",
      onComplete: () => {
        title.style.zIndex = "0"; // Hide title after animation
      },
    });

    gsap.from("#navbar", {
      duration: 0.7,
      y: -100,
      opacity: 0,
      delay: 1,
      ease: "power2.inOut",
      stagger: 1,
    });

    gsap.fromTo(
      ".image-group",
      {
        opacity: 0,
      },
      {
        duration: 1.2,
        y: isSmallScreen ? "-20%" : "-50%",
        opacity: 1,
        delay: 0.7,
        ease: "power2.inOut",
        stagger: 0.5,
      }
    );

    gsap.from(".next ", {
      x: -50,
      opacity: 0,
      duration: 1,
      delay: 1.5,
      ease: "power2.inOut",
      stagger: 0.5,
    });
  });

  return (
    <div className="main min-h-screen bg-[#faede2] flex items-center justify-center relative">
      <Navbar />
      <h1
        id="title-text"
        className="text-5xl sm:text-9xl split absolute z-51 font-bold text-white"
      >
        Team Vibes
      </h1>
      <h1 className="text-5xl sm:text-9xl saviText absolute top-[17%] font-bold">
        Team Vibes
      </h1>

      <div
        className={`next absolute ${
          isSmallScreen ? "top-[18%] right-[10%]" : "top-[20%] right-[12%]"
        }  z-10 cursor-pointer`}
        onClick={() => {
          nextCate()
        }}
      >
        <CircleArrowRight size={isSmallScreen ? 40 : 100} />
      </div>

      <Loader />

      <div className="images bg-[#faede2] w-full absolute top-[70%] flex flex-col items-center justify-center px-8 gap-6 sm:gap-12 z-0">
        <div className="image-group flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="image-cate group overflow-hidden">
            <img
              className="object-cover w-full h-full hover-effect"
              src={chillImages[0]}
              alt=""
            />
          </div>
          <div className="image-cate group overflow-hidden">
            <img
              className="object-cover hover-effect w-full h-full"
              src={chillImages[1]}
              alt=""
            />
          </div>
          <div className="image-cate group overflow-hidden">
            <img
              className="object-cover hover-effect w-full h-full"
              src={chillImages[2]}
              alt=""
            />
          </div>
        </div>
        <div className="image-group flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="image-cate group overflow-hidden">
            <img
              className="object-cover hover-effect w-full h-full"
              src={chillImages[3]}
              alt=""
            />
          </div>
          <div className="image-cate group overflow-hidden">
            <img
              className="object-cover hover-effect w-full h-full"
              src={chillImages[4]}
              alt=""
            />
          </div>
          <div className="image-cate group overflow-hidden">
            <img
              className="object-cover hover-effect w-full h-full"
              src={chillImages[5]}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamVibes;

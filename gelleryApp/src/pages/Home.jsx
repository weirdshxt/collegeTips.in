import React, { useEffect } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger, Draggable);

import ImageOverlay from "../components/ImageOverlay";

const Home = () => {
  useEffect(() => {
    // Disable automatic scroll restoration by browser
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Scroll to top before page unload to reset scroll position on reload
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useGSAP(() => {
    const loader = document.querySelector("#loader");
    const title = document.querySelector("#title-text");

    const isSmallScreen = window.matchMedia("(max-width: 639px)").matches;

    let split = SplitText.create(".split", { type: "words, chars" });

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

    gsap.from(".hero1 .image-1 img", {
      duration: 1,
      y: -100,
      opacity: 0,
      delay: 1,
      ease: "power2.inOut",
      stagger: 0.5,
      clipPath: "inset(0% 0% 100% 0%)",
      transformOrigin: "top center",
    });

    gsap.from(".hero1 .image-3 img", {
      duration: 1,
      y: -100,
      opacity: 0,
      delay: 1.3,
      ease: "power2.inOut",
      stagger: 0.5,
      clipPath: "inset(0% 0% 100% 0%)",
      transformOrigin: "top center",
    });

    gsap.from(".hero1 .image-2 img", {
      duration: 0.8,
      y: 150,
      opacity: 0,
      delay: 1,
      ease: "power2.inOut",
      stagger: 1,
    });

    // Animate hero images

    gsap.from(".hero .image-1 img", {
      duration: 1,
      y: 100,
      opacity: 0,
      delay: 1.3,
      ease: "power2.inOut",
      stagger: 0.5,
      clipPath: "inset(100% 0% 0% 0%)",
      transformOrigin: "top center",
    });

    gsap.from(".hero .image-3 img", {
      duration: 1,
      y: 100,
      opacity: 0,
      delay: 1,
      ease: "power2.inOut",
      stagger: 0.5,
      clipPath: "inset(100% 0% 0% 0%)",
      transformOrigin: "top center",
    });

    gsap.from(".hero .image-2 img", {
      duration: 0.8,
      y: -150,
      opacity: 0,
      delay: 1,
      ease: "power2.inOut",
      stagger: 1,
    });

    gsap.to(".hero1 .image-1 img", {
      yPercent: -350,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".main",
        start: "top top",
        end: "bottom 50%",
        scrub: 1.5,
        markers: false,
      },
    });

    gsap.to(".saviText", {
      top: "40%",
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".main",
        start: "top top",
        end: "bottom 60%",
        scrub: 1.5,
        markers: false,
      },
    });

    gsap.to(".hero1 .image-2", {
      yPercent: -200,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".main",
        start: "top top",
        end: "bottom 40%",
        scrub: 1,
        markers: false,
      },
    });

    gsap.to(".hero1 .image-3", {
      yPercent: -250,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".main",
        start: "top top",
        end: "bottom 50%",
        scrub: 0.8,
        markers: false,
      },
    });

    gsap.to(".hero .image-1", {
      yPercent: -650,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".main",
        start: "top top",
        end: "bottom 20%",
        scrub: 1.5,
        markers: false,
      },
    });

    gsap.to(".hero .image-2", {
      yPercent: isSmallScreen ? -350 : -300,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".main",
        start: isSmallScreen ? "top -20%" : "top top",
        end: isSmallScreen ? "bottom 37%" : "bottom 10%",
        scrub: 1,
        markers: false,
      },
    });

    gsap.to(".hero .image-3", {
      yPercent: -600,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".main",
        start: "top top",
        end: "bottom 20%",
        scrub: 0.8,
        markers: false,
      },
    });

    gsap.to(".hero2 .image-1", {
      yPercent: isSmallScreen ? -620 : -520,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".main",
        start: isSmallScreen ? "top -30%" : "top top",
        end: isSmallScreen ? "bottom 35%" : "bottom 10%",
        scrub: 1,
        markers: false,
      },
    });

    gsap.to(".hero2 .image-3", {
      yPercent: isSmallScreen ? -650 : -560,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".main",
        start: isSmallScreen ? "top -35%" : "top top",
        end: isSmallScreen ? "bottom 30%" : "bottom 10%",
        scrub: 0.8,
        markers: false,
      },
    });

    gsap.to(".cards", {
      yPercent: isSmallScreen ? -110 : -360,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".main",
        start: isSmallScreen ? "top -35%" : "top top",
        end: "bottom top",
        scrub: isSmallScreen ? 0.2 : 0.8,
        markers: false,
      },
    });

    // Pin the main container during scroll
    ScrollTrigger.create({
      trigger: ".main",
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: true,
      markers: false,
    });

    if (window.matchMedia("(min-width: 640px)").matches) {
      // Make .cards draggable horizontally
      Draggable.create(".cards", {
        type: "x",
        edgeResistance: 0.1,
        bounds: ".cards",
        inertia: true,
        cursor: "grab",
        activeCursor: "grabbing",
        onPress: function () {
          // Increase z-index of sidebar to be on top when dragging starts
          const sidebar = document.querySelector(".cards");
          if (sidebar) {
            sidebar.style.zIndex = "0";
          }
        },
        onRelease: function () {
          // Reset z-index of sidebar when dragging ends
          const sidebar = document.querySelector(".glass-container");
          if (sidebar) {
            sidebar.style.zIndex = "5";
          }
        },
      });
    }

    // Automatic horizontal scrolling animation for .cards
    const cards = document.querySelector(".cards");

    // Disable animation on small screens
    if (window.matchMedia("(min-width: 640px)").matches) {
      const animation = gsap.fromTo(
        cards,
        {
          x: "80%",
        },
        {
          x: `-190%`,
          duration: 20,
          ease: "linear",
          repeat: false,
          paused: false,
        }
      );
    }

    -window.scrollTo(0, 0);
  });

  return (
    <div className="main min-h-screen bg-[#faede2] flex items-center justify-center">
      <Navbar />
      <h1
        id="title-text"
        className="text-5xl sm:text-9xl split absolute z-51 font-bold text-white"
      >
        collegeTips.in
      </h1>
      <h1 className="text-5xl sm:text-9xl saviText absolute top-[17%] font-bold">
        collegeTips.in
      </h1>

      <Loader />

      <ImageOverlay />
    </div>
  );
};

export default Home;

import React, { useState } from 'react'
import video from '../assets/cat.mp4'
import { FacebookIcon, Instagram, Youtube } from 'lucide-react';


const Footer = () => {

     const [form, setForm] = useState({
          name: "",
          email: "",
          city: "",
        });
    
        const handleChange = (e) => {
          setForm({ ...form, [e.target.name]: e.target.value });
        };
    
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log("Form Submitted:", form);
          // You can integrate this with your backend or API
        };
    

  return (
    <div className="relative flex items-center justify-center bg-[#FEF4D1] min-h-screen overflow-hidden">
      <video
        className="absolute w-full h-full object-cover"
        src={video}
        loop
        muted
        autoPlay
        style={{
          filter: "grayscale(100%) contrast(1) brightness(0.8) ",
        }}
      ></video>

      <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0"></div>
      <div className="w-full h-full absolute top-0 left-0">
        <div className="text-[16rem] text-white absolute top-[0%] left-[15%] font-semibold">
          <h1>Contact</h1>
        </div>
        <div className="flex items-center justify-center absolute top-[33%] left-[30%]">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 text-4xl text-white font-medium p-20"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="border-b-2 border-amber-400 focus:outline-none focus:border-amber-600 px-2 mx-1 w-[18rem]"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="border-b-2 border-amber-400 focus:outline-none focus:border-amber-600 px-2 mx-1 w-[18rem]"
            />
            <br />
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="Your City"
              required
              className="border-b-2 border-amber-400 focus:outline-none focus:border-amber-600 px-2 mx-1 w-xl mt-[4rem]"
            />

            <div className="text-center relative">
              <button
                type="submit"
                className="relative top-10 cursor-pointer -rotate-8 bg-amber-500 hover:bg-amber-600 text-white px-6 py-6 rounded-full text-lg transition"
              >
                see you
              </button>
            </div>
          </form>
        </div>
        <footer className="absolute bottom-0 left-0 right-0 p-8 flex items-center justify-between text-white">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} PAWS. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="hover:text-amber-400 transition"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              className="hover:text-amber-400 transition"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              className="hover:text-amber-400 transition"
              aria-label="Youtube"
            >
              <Youtube  size={24} />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer
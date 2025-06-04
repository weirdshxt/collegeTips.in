import React, { useEffect, useState } from 'react'

const Volunteer = () => {

    const [form, setForm] = useState({
      name: "",
      city: "",
      role: "",
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
    <div
      id="volunteer"
      className="flex flex-col relative items-center justify-center bg-[#FEF4D1] min-h-screen overflow-hidden"
    >
        <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 text-lg text-gray-800 font-medium p-20 text-center"
      >
        <h1 className="text-7xl space-y-6">
          I am{" "}
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="border-b-2 border-amber-400 focus:outline-none focus:border-amber-600 px-2 mx-1"
          />
          ,
          
          from the city of{" "}
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="Your City"
            required
            className="border-b-2 border-amber-400 focus:outline-none focus:border-amber-600 px-2 mx-1 w-xl"
          />
          ,
          and I wish to volunteer as a{" "}
          <select
           id='role'
            name="role"
            value={form.role}
            onChange={handleChange}
            required
            className={`border-b-2 border-amber-400 focus:outline-none focus:border-amber-600 px-2 mx-1 mb-6 ${
              form.role === "" ? "text-[#8E8F84]" : "text-gray-800"
            }`}
          >
            <option value="" disabled>
              Select a role
            </option>
            <option value="Feeder">Feeder</option>
            <option value="Rescuer">Rescuer</option>
          </select>
          to help build a kinder, pet-friendly world🐾
        </h1>
        <div className="text-center relative">
          <button
            type="submit"
            className="relative top-18 cursor-pointer -rotate-8 bg-amber-500 hover:bg-amber-600 text-white px-6 py-6 rounded-full text-lg transition"
          >
            Join the Movement
          </button>
        </div>
      </form>
        </div>
    </div>
  );
}

export default Volunteer
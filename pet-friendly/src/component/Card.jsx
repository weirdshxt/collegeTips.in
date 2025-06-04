import React from "react";


export default function Card({image, title, name, description}) {
  return (
    <div className="relative card w-[25rem] h-[30rem] rounded-2xl overflow-hidden shadow-xl/30">
      <img className="w-full h-full object-cover" src={image} alt="" />
      <div className="glass-gradient2 absolute top-0 left-0 w-full h-[20%]">
        <div className="text absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-[#884001]">{title}</h1>
        </div>
      </div>
      <div className="glass-gradient absolute bottom-0 left-0 w-full h-[40%]">
        <div className="text absolute top-0 left-0 w-full h-full flex items-center justify-center p-4 px-10">
          <p className="text-black text-[0.9rem] font-medium">
            <span className="text-xl font-bold">{name}</span>{description}
          </p>
        </div>
      </div>
    </div>
  );
}

import React from 'react'
import bg from "../assets/images/bg.png"
import Button from '../component/Button';

const About = () => {
  return (
    <div id='about' className="flex relative items-center justify-center bg-[#FEF4D1] min-h-screen overflow-hidden">
      <div className="flex flex-col items-center justify-center pb-14">
        <div className="text">
          <h1 className="text-8xl font-semibold flex items-center justify-between gap-4">
            We’re building{" "}
            <div className="rounded-full w-34 inline-block">
              <img className="rounded-full" src={bg} alt="" />
            </div>{" "}
            happier,
          </h1>
        </div>
        <div className="text mt-12">
          <h1 className="text-8xl font-semibold flex items-center justify-between gap-4">
            kinder{" "}
            <div className="rounded-full w-34 inline-block">
              <img className="rounded-full" src={bg} alt="" />
            </div>{" "}
            cities where pets{" "}
            <div className="rounded-full w-34 inline-block">
              <img className="rounded-full" src={bg} alt="" />
            </div>{" "}
          </h1>
        </div>
        <div className="text mt-12">
          <h1 className="text-8xl font-semibold flex items-center justify-between gap-4">
            and people{" "}
            <div className="rounded-full w-34 inline-block">
              <img className="rounded-full" src={bg} alt="" />
            </div>{" "}
            thrive together
          </h1>
        </div>
      </div>
      <div className="absolute bottom-[15%] right-[15%] rotate-12">
        <Button child={"Get Started"} />
      </div>
    </div>
  );
}

export default About
import React from "react";
import Navbar from "./Navbar";
import { Search } from "lucide-react";
import HeroImage from "../assets/Hero.jpg";

const Hero = () => {
  return (
    <section className="relative w-full flex flex-col justify-center items-center">
      <Navbar />
      <div className=" w-full h-[180vh] ">
        <img src={HeroImage} alt="Hero Image" className="w-full h-full object-cover object-center absolute top-0 brightness-110 shadow-i" />
       
      </div>

      <div className="absolute gap-10 flex flex-col lg:max-w-[90vw] m-auto top-25 max-[370px]:top-13 p-3 my-5 text-white">
        <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold text-center leading-normal">Make Your Interior More Minimalistic & Modern</h1>
        <p className="mt-4 px-5 text-center text-xl font-light text-gray-200  lg:max-w-[60%] m-auto">Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
        <div className="relative w-fit mx-auto mt-5">
          <input
            type="text"
            placeholder="Search furniture"
            className="border border-gray-300 rounded-4xl py-3 px-4 pr-12 text-[18px] font-light bg-transparent sm:w-[320px] w-full backdrop-blur-xs placeholder-gray-400 brightness-150"
          />
          <Search
            size={35}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-orange-400 rounded-full p-2"
          />
        </div>

      </div>

      <div className="h-30 w-full z-10 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;

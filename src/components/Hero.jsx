import React from "react";
import heroImage from "../assets/hero-Image.jpg";

function Hero() {
  return (
    <>
      <div className="bg-[#FDCA09] h-screen bg-hero-pattern bg-cover bg-center flex flex-col justify-between items-center">
        <h1 className="font-bold text-5xl lg:text-[100px] text-center leading-normal lg:leading-[110px] pt-40">
          Let’s create something <br className="hidden lg:block" /> great together.
        </h1>
        <img className="" src={heroImage} alt="" />
      </div>
    </>
  );
}

export default Hero;

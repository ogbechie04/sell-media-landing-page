import React from "react";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Form from "./components/Form";
import midImage from "./assets/Mid-Image.jpg";
import image1 from "./assets/image-1.jpg";
import image2 from "./assets/image-2.jpg";
import image3 from "./assets/image-3.jpg";

function LandingPage() {
  return (
    <>
      <NavBar />
      <Hero />
      <div className="lg:px-24 px-16 lg:pt-[135px] pt-14">
        <h2 className="font-bold lg:text-[44px] text-3xl leading-normal mb-9">
          Who we are
        </h2>
        <p className="lg:text-3xl text-xl text-justify leading-normal font-medium lg:mb-[135px] mb-14">
          We love what we do and create partnerships with our clients to ensure
          their digital transformation is positioned for long-term success.We
          believe that the human dimensions essential to start any successful
          project and that this is where splendid emotional relationships
          between the company and people are born.
        </p>
        <img src={midImage} alt="" className="lg:mb-[200px] mb-16" />
        <div className="flex flex-col items-stretch gap-4 lg:gap-[100px]">
          <h2 className="font-bold text-2xl lg:text-[44px] leading-normal text-center">
            Meet the heroes behind the magic
          </h2>
          <div className="flex flex-col items-center lg:flex-row gap-[70px]">
            <Card
              image={image1}
              firstName={"Esther"}
              lastName={"Howard"}
              jobRole={"Founder"}
            />
            <Card
              image={image2}
              firstName={"Cody"}
              lastName={"Fisher"}
              jobRole={"Developer"}
            />
            <Card
              image={image3}
              firstName={"Brooklyn"}
              lastName={"Simmons"}
              jobRole={"Designer"}
            />
          </div>
        </div>
      </div>
      <div className="flex lg:my-[200px] my-12 justify-between bg-black lg:px-24 px-4 h-[248px] items-center">
        <div className="flex flex-col gap-3.5">
          <h3 className="text-[#FEC00A] font-bold lg:text-6xl text-2xl leading-normal">
            350 +
          </h3>
          <p className="text-white lg:text-3xl text-base">Clients Worldwide</p>
        </div>
        <div className="flex flex-col gap-3.5">
          <h3 className="text-[#FEC00A] font-bold lg:text-6xl text-2xl leading-normal">
            20 +
          </h3>
          <p className="text-white lg:text-3xl text-base">Team Members</p>
        </div>
        <div className="flex flex-col gap-3.5">
          <h3 className="text-[#FEC00A] font-bold lg:text-6xl text-2xl leading-normal">
            100 +
          </h3>
          <p className="text-white lg:text-3xl text-base">Projects Completed</p>
        </div>
        <div className="flex flex-col gap-3.5">
          <h3 className="text-[#FEC00A] font-bold lg:text-6xl text-2xl leading-normal">
            85M +
          </h3>
          <p className="text-white lg:text-3xl text-base">Revenue Generated</p>
        </div>
      </div>
      <Form />
      <Footer />
    </>
  );
}

export default LandingPage;

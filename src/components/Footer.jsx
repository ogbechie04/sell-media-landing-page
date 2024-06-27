import React from "react";
import Button from "./Button";
import xLogo from "../assets/x-logo.svg";
import linkedIn from "../assets/linkedIn.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import group from "../assets/Group 15.svg";
import "../index.css";

function Footer() {
  return (
    <>
      <div className="flex flex-col lg:px-[120px] px-3 lg:pt-[79px] pt-8 lg:pb-[24px] bg-[#EFF0F1] lg:mt-[195px] mt-12">
        <div className="flex lg:flex-row flex-col justify-between items-start lg:mb-[78px] lg:gap-0 gap-3">
          <div className="flex flex-col lg:gap-[27px] gap-4">
            <a href="" className="text-2xl font-bold leading-6">
              Hand
            </a>
            <p className="font-body-small text-sm leading-5 text-[#525D6A]">
              We love what we do and create partnerships
            </p>
          </div>
          <div className="flex lg:flex-col lg:gap-[25px] gap-2 lg:justify-normal justify-center">
            <Button
              buttonText={"Start a project"}
              className="lg:px-6 px-5 lg:py-3 py-2 lg:text-base text-xs self-end"
            />
            <div className="flex flex-col gap-4 items-center">
              <p className="font-body-small text-sm leading-5 text-[#525D6A]">
                hello@devseal.tech
              </p>
              <div className="flex gap-[13px] justify-center items-center">
                <a href="" className="rounded-full border-[#DFDFDF] border-8">
                  <img src={xLogo} alt="Link to X" />
                </a>
                <a href="">
                  <img src={linkedIn} alt="Link to LinkedIn" />
                </a>
                <a href="">
                  <img src={facebook} alt="Link to Facebook" />
                </a>
                <a href="">
                  <img src={instagram} alt="Link to Instagram" />
                </a>
                <p className="font-body-small lg:text-base text-xs leading-normal text-[#525D6A] font-medium">
                  Hand
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mx-[124px]">
          <div className="w-full h-[1px] bg-[#525D6A] hidden lg:block"></div>
        </div>
        <div className="flex justify-between items-center lg:gap-0  mt-8">
          <p className="font-body-small lg:text-lg text-xs lg:leading-[28px] text-[#525D6A] font-normal ">
            &copy; 2024 hand. All Rights Reserved
          </p>
          <div className="font-body-small lg:text-base text-xs leading-[24px] text-[#525D6A] font-semibold flex lg:gap-[9px] gap-2">
            <a href="">Privacy Policy</a>
            <a href="">Media Kit</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

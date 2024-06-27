import React from "react";
import { useNavigate } from "react-router-dom";
import formImage from "../assets/image-7.png";

function Form() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/success");
  };

  return (
    <>
      <div className="flex lg:flex-row flex-col justify-between items-center lg:gap-[155px] gap-10 lg:px-[100px]">
        <div className="bg-[#FEF1E0] lg:w-[622px] lg:h-[891px] flex justify-center items-center">
          <img src={formImage} alt="" className="lg:w-[378px] lg:h-[656px]" />
        </div>
        <div className="flex flex-col lg:flex-1">
          <h2 className="font-bold lg:text-[44px] text-2xl leading-normal lg:text-right text-center lg:pb-12 pb-4">
            We'd love to hear <br className="hidden lg:block" /> from you
          </h2>
          <form
            action=""
            className="flex flex-col lg:gap-[30px] gap-5 placeholder:text-black placeholder:lg:text-[28px] placeholder:text-lg font-medium"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              id=""
              placeholder="Name*"
              className="border-2 border-black lg:pt-[33px] pt-7 lg:pb-[29px] pb-6 lg:pl-[53px] pl-10 rounded-lg placeholder:text-black placeholder: lg:text-[28px] font-medium"
              required
            />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email*"
              className="border-2 border-black lg:pt-[33px] pt-7 lg:pb-[29px] pb-6 lg:pl-[53px] pl-10 rounded-lg placeholder:text-black placeholder: lg:text-[28px] font-medium"
              required
            />
            <input
              type="text"
              name="websiteURL"
              id=""
              placeholder="Website URL*"
              className="border-2 border-black lg:pt-[33px] pt-7 lg:pb-[29px] pb-6 lg:pl-[53px] pl-10 rounded-lg placeholder:text-black placeholder: lg:text-[28px] font-medium"
              required
            />
            <textarea
              type="text"
              name="projectDetals"
              id=""
              placeholder="Project Details*"
              className="border-2 border-black lg:pt-[33px] pt-7 lg:pb-[29px] pb-6 lg:pl-[53px] pl-10 rounded-lg placeholder:text-black placeholder: lg:text-[28px] font-medium"
              required
            />
            <button
              className="bg-black text-white rounded-lg py-[31px] text-[28px] font-medium mt-5"
              type="submit"
            >
              Send Proposal
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;

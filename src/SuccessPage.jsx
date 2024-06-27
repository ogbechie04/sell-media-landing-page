import React from "react";
import Button from "./components/Button";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

function Success() {
    const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-9 w-screen h-screen">
        <FaCheckCircle color="#FEC00A" size={250}/>
        <h1 className="text-6xl font-bold">Success!!!</h1>
        <p>Your proposal has been received</p>
        <Button buttonText={'Return Home'} className={'px-8 py-3'} onClick={handleReturnHome}/>
      </div>
    </>
  );
}

export default Success;

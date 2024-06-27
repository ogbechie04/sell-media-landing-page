import React from "react";

function Card({image, firstName, lastName, jobRole}) {
    return (
        <>
        <div className="flex flex-col lg:gap-11 gap-6 lg:w-[433px] lg:h-[560px] shadow-lg items-center pt-[17px] px-5">
            <img src={image} alt={`${firstName} ${lastName}`} className="" />
            <div className="flex lg:gap-[9px] gap-1 flex-col items-start self-start">
                <p className="lg:text-[34px] text-xl font-bold">{firstName} {lastName}</p>
                <p className="lg:text-2xl text-lg font-medium opacity-50">{jobRole}</p>
            </div>
        </div>
        </>
    )
}

export default Card
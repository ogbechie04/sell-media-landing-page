import React from "react";

function Button({ buttonText, className, onClick }) {
  const baseClasses = "bg-black text-white rounded-lg";
  const combinedClasses = `${baseClasses} ${className || ""}`;

  return (
    <button className={combinedClasses} onClick={onClick}>{buttonText}</button>
  );
}

export default Button;

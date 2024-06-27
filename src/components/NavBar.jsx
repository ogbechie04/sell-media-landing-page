import React from "react";
import Button from "./Button";

function NavBar() {
  return (
    <>
      <nav className="lg:flex justify-around items-center py-6 hidden">
        <a href="" className="lg:text-2xl text-xl font-bold leading-6">
          Hand
        </a>
        <ul className="flex lg:gap-4 gap-2 lg:text-base text-sm font-bold leading-6 text-[#5A6675]">
          <li>
            <a href="" className="p-1 lg:p-2">
              Home&nbsp;
            </a>
          </li>
          <li>
            <a href="" className="p-1 lg:p-2">
              About Us&nbsp;
            </a>
          </li>
          <li>
            <a href="" className="p-1 lg:p-2">
              Services&nbsp;
            </a>
          </li>
          <li>
            <a href="" className="p-1 lg:p-2">
              Blog&nbsp;
            </a>
          </li>
          <li>
            <a href="" className="p-1 lg:p-2">
              Contact Us
            </a>
          </li>
        </ul>
        <Button
          buttonText={"Start a project"}
          className="px-6 py-3 text-base"
        />
      </nav>
    </>
  );
}

export default NavBar;

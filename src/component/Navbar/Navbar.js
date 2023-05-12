import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { MdClose } from "react-icons/md";

// import "./navbar.css";
const Navbarmenu = () => (
  <>
    <a href="#home">Home</a>

    <a href="#aboutme">AboutMe</a>

    <a href="#resume">Resume</a>

    <a href="#testimonial">Testimonial</a>

    <a href="#contactme">Contact</a>
  </>
);

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <div className="flex justify-between w-full">
        <div className="flex p-5">
          <a className="" href="index.html">
            FORGETTI
          </a>
        </div>
        <div className="flex p-5 max-sm:hidden">
          <Navbarmenu />
        </div>
        <div className="hidden max-sm:flex p-5">
          {toggle ? (
            <MdClose onClick={() => setToggle(false)} />
          ) : (
            <CiMenuFries onClick={() => setToggle(true)} />
          )}
          {toggle && (
            <div className="Navbar-animation">
              <Navbarmenu />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

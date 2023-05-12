import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { MdClose } from "react-icons/md";

// import "./navbar.css";
const Navbarmenu = () => (
  <>
    <a href="#home" className="hover:border-b-4 p-2 border-amber-600">Home</a>

    <a href="#aboutme" className="hover:border-b-4 p-2 border-amber-600">AboutMe</a>

    <a href="#resume" className="hover:border-b-4 p-2 border-amber-600">Resume</a>

    <a href="#testimonial" className="hover:border-b-4 p-2 border-amber-600">Testimonial</a>

    <a href="#contactme" className="hover:border-b-4 p-2 border-amber-600">Contact</a>
  </>
);

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <div className="flex justify-between w-full bg-blue-700 px-8">
        <div className="flex text-white text-2xl m-2">
          <a className="p-2 " href="index.html">
            FORGETTI
          </a>
        </div>
        <div className="flex max-sm:hidden gap-5 text-white m-2">
          <Navbarmenu />
        </div>
        <div className="hidden max-sm:flex m-2 p-2">
          {toggle ? (
            <MdClose color="#fff" size={27} onClick={() => setToggle(false)} />
          ) : (
            <CiMenuFries
              color="#fff"
              size={27}
              onClick={() => setToggle(true)}
            />
          )}
          {toggle && (
            <div className="Navbar-animation flex flex-col justify-end items-end text-end p-8 absolute top-10 right-0 mr-4 min-w-fit rounded drop-shadow">
              <Navbarmenu />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

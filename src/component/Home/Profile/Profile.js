import React from "react";
import Typewriter from "typewriter-effect";

// import "./profile.css";

const Home = () => {
  return (
    <section id="home">
      <div className="flex justify-around items-center w-full max-sm:flex-col-reverse p-8 bg-blue-900">
        <div className="flex flex-col ">
          <p className="text-xl text-white">
            Hello, I'm <span className="text-red-500">Mansir</span> Abdul Aziz
          </p>
          <h1 className="text-5xl text-white my-6">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Forgetti Dev")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Front-end Dev")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("React Dev")
                  .start();
              }}
            />
          </h1>
          <p className="text-white">I develop Awesome web pages</p>
          <div className="flex justify-around my-8">
            <a
              href="#contactme"
              className="rounded-full px-16 py-2 w-42 text-center bg-blue-900 text-sm text-white mr-8  border-2 border-white  hover:border-red-500"
            >
              Hire Me
            </a>
            <a
              className="rounded-full px-16 py-2 w-42 text-center bg-red-500 text-sm text-white border-2 border-red-500 hover:border-white"
              href="mansir_cv.pdf"
              download="Mansir Abdul Aziz"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="bg-[url('/src/Assets/profile-pic.jpg')] bg-cover h-96 w-96 rounded-full mb-16 hover:border border-white hover:scale-105 ease-out "></div>
      </div>
    </section>
  );
};

export default Home;

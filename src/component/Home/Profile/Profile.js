import React from "react";
import Typewriter from "typewriter-effect";

// import "./profile.css";

const Home = () => {
  return (
    <section>
      <div
        className="flex justify-around items-center w-full max-sm:flex-col-reverse p-8"
        id="home"
      >
        <div className="flex flex-col ">
          <p className="text-xl">
            Hello, I'm <span className="text-red-500">Mansir</span> Abdul Aziz
          </p>
          <h1 className="text-5xl my-6">
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
          <p>I develop Awesome web pages</p>
          <div className="flex justify-around my-8">
            <a href="#contactme" className="rounded-full px-8 py-4 w-40 text-center bg-blue-900 text-sm text-white mx-4 hover:border-4 border-red-500">
              Hire Me
            </a>
            <a
              className="rounded-full px-8 py-4 w-40 text-center bg-red-500 text-sm text-white mx-4 hover:border-4 border-white-500"
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

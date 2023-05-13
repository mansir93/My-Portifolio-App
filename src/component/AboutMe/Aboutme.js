import React from "react";

// import "./aboutme.css";

export const Aboutme = () => {
  return (
    <section id="aboutme">
          <h3 className="text-center">About Me</h3>
          <p className="text-center">why choose me?</p>
      <div className="flex">
        <div>
          <img
            src={require("../../Assets/my-pic.jpg")}
            alt="Mansir Abdul Aziz"
          />
        </div>

        <div>
          <h5>My Highlights</h5>
          <p>
            I am Mansir Abdul Aziz, a student at the University of Professional
            Studies Accra studying for a BSc in Information Technology
            Management.
          </p>

          <p>
            As a frontend junior developer, I have a passion for building
            user-friendly web applications and a strong foundation in frontend
            technologies such as HTML, CSS, JavaScript, and React Js .
          </p>
          <p>
            In my free time, I enjoy learning new development frameworks and
            tools, and working on personal projects to improve my skills. I am
            always looking for opportunities to grow and improve as a developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;

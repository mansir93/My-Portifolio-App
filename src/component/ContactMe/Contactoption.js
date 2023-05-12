import React from "react";
import Typewriter from "typewriter-effect";
import "./contactme.css";

const Contactoption = () => {
  return (
    <div className="col-lg-6">
      <div className="contact-me-message ">
        <h1>
          <Typewriter
                  onInit={(typewriter) => {
                    typewriter

                      .typeString("Get In Touch📧")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("Get In Touch📧")
                      .start();
                  }}
                />


        </h1>
        <div className="colz-icons">
          <a
            href="https://web.facebook.com/mansir.forgetit.1"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook-square"></i>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mansiraziz93@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-google-plus-square"></i>
          </a>
          <a
            href="https://www.instagram.com/mansir_aziz/"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com/mansir_aziz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            href="https://github.com/mansir93"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mansir-abdul-aziz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contactoption;

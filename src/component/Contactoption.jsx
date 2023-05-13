import React,{ useState } from "react";
import Typewriter from "typewriter-effect";
import { validateEmail } from "../utils";

const Contactoption = () => {

  const [Name, Setname] = useState("");
  const [Email, Setemail] = useState("");
  const [Message, Setmessage] = useState("");
  const [status, setStatus] = useState("Submit");

  const getIsFormValid = () => {
    return Name && validateEmail(Email) && Message;
  };

  const clearform = () => {
    Setname("");
    Setemail("");
    Setmessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    let response = await fetch("https://mailserver-api.vercel.app/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
    clearform();
  };


  return (
    <>
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

<div className=" col-lg-6">
<div className="contact-me-form">
  <form
    method="post"
    onSubmit={handleSubmit}
    id="contact-me"
    encType="multipart/form-data"
  >
    <div className="card border-primary">
      <div className="card-header p-0">
        <div className="bg-info text-white text-center py-2">
          <h4>Contact Me</h4>
          <p>Let's Stay inTouch</p>
        </div>
      </div>
      <div className="card-body">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="name"
            value={Name}
            onChange={(e) => {
              Setname(e.target.value);
            }}
            placeholder="Name"
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="email"
            value={Email}
            onChange={(e) => {
              Setemail(e.target.value);
            }}
            placeholder="Email: example@gmail.com"
          />
        </div>

        <div className="form-group">
          <textarea
            className="form-control"
            id="message"
            value={Message}
            onChange={(e) => {
              Setmessage(e.target.value);
            }}
            placeholder="Your message ..."
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            value="Submit"
            className="btn btn-info btn-block rounded-0 py-2"
            disabled={!getIsFormValid()}
          >
            {status}
          </button>
        </div>
      </div>
    </div>
  </form>
</div>
</div>
</>
  );
};

export default Contactoption;

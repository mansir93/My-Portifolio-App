import React from "react";
import { Navbar, Profile, Aboutme, Resume } from "./component";
// import { Testimonial } from "./component";


import "./App.css";
// import Test from "./component/Test";

function App() {

  alert('This website is still under development revisit in some few days')
  return (
    <div className="App">

      <Navbar />

      <Profile />

      <Aboutme />

      <Resume />

      {/* <Testimonial /> */}

      {/* <Contactoption /> */}
    </div>
  );
}

export default App;

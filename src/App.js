import React from "react";
import { Navbar, Profile, Aboutme, Resume,Testimonial } from "./component";


import "./App.css";
// import Test from "./component/Test";

function App() {
  return (
    <div className="App">

      <Navbar />

      <Profile />

      <Aboutme />

      <Resume />

      <Testimonial />

      {/* <Contactoption /> */}
    </div>
  );
}

export default App;

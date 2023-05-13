import React from "react";
import { Navbar, Profile, Aboutme, Resume } from "./component";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
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

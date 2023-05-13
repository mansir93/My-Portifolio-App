import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Resume = () => {
  return (
    <section id="resume">
      <h3>Resume</h3>
      <div>
        <Tabs
          defaultActiveKey="profile"
          id="justify-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="home" title="Education">
            University of Professional Studies, Accra BSc. Information
            Technology Management 2021 - 2025 IPMC College of Technology
            Certificate in Software Programming2020 - 2021 High School Sakafia
            Islamic Senior High School 2017 - 2020
          </Tab>
          <Tab eventKey="profile" title="Coding skills">
            Programming skills
          </Tab>
          <Tab eventKey="longer-tab" title="Projects">
            projects
          </Tab>
          <Tab eventKey="contact" title="Interest">
            Interest
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default Resume;

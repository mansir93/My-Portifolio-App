import React, { useState } from "react";

const Resume = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <section id="resume" className="mt-16">
      <h3 className="text-center m-8">Resume</h3>
      <div className="flex mx-8">
        <div className="flex flex-col bg-slate-600 w-6" />
        <div className="flex justify-around flex-col text-xl" dir="rtl">
          <div
            className={
              activeTab === 1
                ? "bg-slate-600 text-white px-8 my-8 rounded-s-lg resume-tabs-animate"
                : "px-8 my-8"
            }
          >
            <button onClick={() => handleTabClick(1)}>Education</button>
          </div>
          <div
            className={
              activeTab === 2
                ? "bg-slate-600 text-white px-8 my-8 rounded-s-lg resume-tabs-animate"
                : "px-8 my-8"
            }
          >
            <button onClick={() => handleTabClick(2)}>Coding Skills</button>
          </div>
          <div
            className={
              activeTab === 3
                ? "bg-slate-600 text-white px-8 my-8 rounded-s-lg resume-tabs-animate"
                : "px-8 my-8"
            }
          >
            <button onClick={() => handleTabClick(3)}>Projects</button>
          </div>
          <div
          className={
            activeTab === 4
              ? "bg-slate-600 text-white px-8 my-8 rounded-s-lg resume-tabs-animate"
              : "px-8 my-8"
          }
          >
            <button onClick={() => handleTabClick(4)}>Interest</button>
          </div>
        </div>
        <div className="flex flex-col bg-slate-600 w-1 m-1" />

        <div className="px-4">
          {activeTab === 1 && (
            <div>
              <div>
                University of Professional Studies, Accra BSc. Information
                Technology Management -2021 - 2025
              </div>
              <div>
                IPMC College of Technology Certificate in Software Programming
                2020 - 2021
              </div>
              <div>
                High School Sakafia Islamic Senior High School 2017 - 2020
              </div>
            </div>
          )}

          {activeTab === 2 &&
          <div>
            <div>Programming skills</div>
            <div>Programming skills</div>
            <div>Programming skills</div>
            <div>Programming skills</div>
            <div>Programming skills</div>
          </div>
          }

          {activeTab === 3 && <div>
          <div>projects</div>
          <div>projects</div>
          <div>projects</div>
          <div>projects</div>
          <div>projects</div>
          </div>
          }

          {activeTab === 4 && (
            <div>
               I like to do researching.  I Love learning new skills.  I Love
              to go on Tour.  I enjoy music.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;

import React, { useState } from "react";

const Resume = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <section id="resume" className="mt-16">
      <h3 className="text-center">Resume</h3>
      <div className="flex">
        <div className="flex flex-col bg-slate-600 w-6" />
        <div className="flex justify-around flex-col" dir="rtl">
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

        <div className="Tabs-contents min-w-fit">
          {activeTab === 1 && (
            <div className="flex flex-col">
              <div className="flex justify-between relative items-center mb-8">
                <div className="p-2">
                  <h3 className="text-lg text-red-500 font-bold">
                    University of Professional Studies, Accra
                  </h3>
                  <p className="text-sm">
                    BSc. Information Technology Management
                  </p>
                </div>
                <p className="text-xs text-center bg-red-500 p-1 rounded-full inline-block">
                  2021-2025
                </p>
              </div>

              <div className="flex justify-between relative items-center mb-8">
                <div className="p-2">
                  <h1 className="text-lg text-red-500 font-bold">
                    IPMC College of Technology
                  </h1>
                  <p className="text-sm">Certificate in Software Programming</p>
                </div>
                <p className="text-xs text-center bg-red-500 p-1 rounded-full inline-block">
                  2020-2021
                </p>
              </div>
              <div className="flex justify-between relative items-center mb-8">
                <div className="p-2">
                  <h1 className="text-lg text-red-500 font-bold">
                    High school
                  </h1>
                  <p className="text-sm">Sakafia Islamic Senior High School</p>
                </div>
                <p className="text-xs text-center bg-red-500 p-1 rounded-full inline-block">
                  2020-2021
                </p>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div>
              <div>Programming skills</div>
              <div>Programming skills</div>
              <div>Programming skills</div>
              <div>Programming skills</div>
              <div>Programming skills</div>
            </div>
          )}

          {activeTab === 3 && (
            <div>
              <div>projects</div>
              <div>projects</div>
              <div>projects</div>
              <div>projects</div>
              <div>projects</div>
            </div>
          )}

          {activeTab === 4 && (
            <div>
              <p> I like to do researching.</p>
              <p> I Love learning new skills.</p>
              <p>  I Love to go on Tour. </p>
              <p> I enjoy music.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;

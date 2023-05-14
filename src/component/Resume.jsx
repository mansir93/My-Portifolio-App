import React, { useState } from "react";

const Resume = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTabIndex(tabIndex);
  };

  return (
    <section id="resume" className="mt-8">
      <h3 className="text-center">Resume</h3>
      <div className="flex px-8">
        <div className="flex flex-col bg-slate-600 w-8" />
        <div className="flex flex-col p-8">
          <button
            onClick={() => handleTabClick(0)}
            className={activeTabIndex === 0 ? "active" : ""}
          >
            Tab 1
          </button>
          <button
            onClick={() => handleTabClick(1)}
            className={activeTabIndex === 1 ? "active" : ""}
          >
            Tab 2
          </button>
          <button
            onClick={() => handleTabClick(2)}
            className={activeTabIndex === 2 ? "active" : ""}
          >
            Tab 3
          </button>
        </div>

        <div className="tab-content">
          {activeTabIndex === 0 && <p>This is the content for Tab 1</p>}
          {activeTabIndex === 1 && <p>This is the content for Tab 2</p>}
          {activeTabIndex === 2 && <p>This is the content for Tab 3</p>}
        </div>
      </div>
    </section>
  );
};

export default Resume;

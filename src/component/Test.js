import React, { useState } from "react";

const Test = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTabIndex(tabIndex);
  };

  return (
    <div className="flex">
      <div className="flex flex-col bg-slate-600">
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
  );
};

export default Test;

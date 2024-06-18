import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const CourseInfo = ({ data }) => {
  const [selected, setSelected] = useState("prerequisites");

  const tabs = [
    { id: "prerequisites", label: "Our Program" },
    { id: "process", label: "How To Enroll" },
  ];

  const handleClick = (id) => {
    setSelected(id);
  };

  const TabContent = ({ id, content }) =>
    selected === id && (
      <ul className="flex flex-col gap-3 ml-5">
        {content.map((item, index) => (
          <li key={index} className="flex gap-2 items-center">
            <div className="p-2 bg-red-700 rounded-full">
              <FaCheck className="size-3 text-white" />
            </div>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    );

  return (
    <>
      <div className="flex flex-col items-center lg:flex-row gap-5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleClick(tab.id)}
            className={`btn-white w-full lg:w-auto ${selected === tab.id ? "bg-dark-blue text-white" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-5 h-full flex flex-col justify-center">
        <TabContent id="prerequisites" content={data.prerequisites} />
        <TabContent id="process" content={data.process} />
      </div>
    </>
  );
};

export default CourseInfo;

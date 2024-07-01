import { IoIosArrowForward } from "react-icons/io";
import { IoStorefrontOutline } from "react-icons/io5";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";
import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

const WhyBecomePilot = ({ reasons }) => {
  const whyReasons = [
    {
      title: reasons[0].title,
      description: reasons[0].description,
      icon: IoStorefrontOutline,
    },
    {
      title: reasons[1].title,
      description: reasons[1].description,
      icon: MdOutlineDashboardCustomize,
    },
    {
      title: reasons[2].title,
      description: reasons[2].description,
      icon: VscPreview,
    },
  ];

  const [description, setDescription] = useState([]);
  const [active, setActive] = useState(false);

  const handleClick = (e) => {
    setDescription(
      whyReasons.find(
        (item) => item.title === e.currentTarget.getAttribute("name")
      ).description
    );
    setActive(true);
  };

  const handleBackClick = () => {
    setActive(false);
  };

  return (
    <div className="relative my-6 h-fit">
      <div
        className={`flex flex-col gap-5 mb-3 ease-in-out ${active ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"} duration-300`}
      >
        {whyReasons.map((item) => (
          <div
            className="p-7 bg-white flex items-center justify-between shadow-lg group hover:bg-primary-dark duration-300 cursor-pointer"
            onClick={handleClick}
            key={item.title}
            name={item.title}
          >
            <div className="flex gap-5 items-center">
              <item.icon className="size-12 text-primary group-hover:text-accent duration-300" />
              <h3 className="text-primary-dark group-hover:text-white duration-300 font-medium text-lg">
                {item.title}
              </h3>
            </div>
            <div className="bg-primary/20 p-3 rounded-full group-hover:bg-accent duration-300">
              <IoIosArrowForward className="text-primary-dark group-hover:text-white duration-300" />
            </div>
          </div>
        ))}
      </div>
      <div
        className={`absolute h-full w-full flex flex-col items-start justify-center p-4 text-justify lg:p-14 gap-7 top-0 duration-300 ease-in-out ${active ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      >
        <button
          onClick={handleBackClick}
          className="flex gap-3 items-center cursor-pointer group"
        >
          <div className="p-3 bg-accent/15 rounded-full group-hover:bg-primary duration-300">
            <IoIosArrowRoundBack className="text-primary-dark size-6 group-hover:text-white duration-300" />
          </div>
          <p className="text-primary text-sm uppercase font-medium tracking-widest">
            Back
          </p>
        </button>
        <div className="flex flex-col gap-3">
          <p className="leading-normal lg:leading-relaxed font-sans1 text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyBecomePilot;

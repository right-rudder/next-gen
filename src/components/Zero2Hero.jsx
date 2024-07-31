import { useState } from "react";
import ProgramsAccordion from "./ProgramsAccordion";

const Zero2Hero = ({ programs }) => {
  const [open, setOpen] = useState("");
  const handleClick = (e) => {
    if (open === e.target.id) {
      setOpen("");
    } else {
      setOpen(e.target.id);
    }
  };

  return (
    <div className="w-full px-2 flex flex-col gap-2 ">
      {programs.map((step) => (
        <ProgramsAccordion
          key={step.title}
          step={step}
          toggled={step.title === open}
          onShow={handleClick}
        />
      ))}
    </div>
  );
};

export default Zero2Hero;

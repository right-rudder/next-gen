import { FaPlus, FaMinus } from "react-icons/fa6";

const ProgramsAccordion = ({ step, toggled, onShow }) => {
  return (
    <div className="flex flex-col items-start rounded lg:py-3 bg-gradient-to-b from-gray-100 to-gray-50">
      <button
        id={step.title}
        onClick={onShow}
        className={`w-full px-4 py-3 flex items-center justify-between`}
      >
        <p className="font-bold text-lg text-black">{step.title}</p>
        {toggled ? (
          <FaMinus className="mr-3 pointer-events-none" />
        ) : (
          <FaPlus className="mr-3 pointer-events-none" />
        )}
      </button>
      <ul
        className={`overflow-hidden text-black ${
          toggled ? "max-h-96" : "max-h-0"
        } transition-[max-height] duration-500 ease-in-out }`}
      >
        <li className="m-4">
          <p>{step.content}</p>
          {step.content2 && <p>{step.content2}</p>}
          <br />
          {step.linkTo && (
            <a
              href={step.linkTo.url}
              className="px-4 py-2 text-sm rounded bg-gray-700 text-gray-50 hover:text-gray-200 hover:bg-gray-900 trasnsition-colors duration-300"
            >
              {step.linkTo.title}
            </a>
          )}
        </li>
      </ul>
    </div>
  );
};

export default ProgramsAccordion;

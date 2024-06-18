const TrainingCourseCard = ({ name, duration, description, button, href }) => {
  return (
    <div className="group h-full">
      <div className="bg-white p-8 lg:p-16 text-dark-blue flex flex-col gap-3 justify-between h-full">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-2xl">{name}</h1>
          <h2 className="font-semibold text-gray-700">Duration: {duration}</h2>
          <p className="paragraph text-base font-normal">{description}</p>
        </div>

        <a
          href={href}
          className="btn-red mt-5 w-full text-sm py-4 px-0 font-light uppercase btn-red tracking-wider hover:from-dark-blue hover:to-blue-900 hover:text-white"
        >
          {button}
        </a>
      </div>
    </div>
  );
};

export default TrainingCourseCard;

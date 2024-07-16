import { useState } from "react";

const FleetTabs = ({ data }) => {
  const [currentTab, setCurrentTab] = useState(data[0]);

  const setLocation = (location) => {
    const tab = data.find((tab) => tab.location === location);
    setCurrentTab(tab);
  };

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          value={currentTab.location}
          className="block w-full border-gray-300 focus:border-primary focus:ring-primary"
          defaultValue={currentTab.location}
          onChange={(e) => setLocation(e.target.value)}
        >
          {data.map((tab) => (
            <option>{tab.location}</option>
          ))}
        </select>
      </div>

      <div className="hidden sm:block sticky top-24 z-20">
        <div
          className="isolate flex divide-x divide-gray-200 rounded-lg shadow"
          aria-label="Tabs"
        >
          {data.map((tab) => (
            <div
              className={`${currentTab.location === tab.location ? "text-gray-900" : "text-gray-500 hover:text-primary-dark"} cursor-pointer group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center font-medium hover:bg-accent hover:text-gray-100 duration-200 ease-out focus:z-20`}
              onClick={() => setCurrentTab(tab)}
            >
              <span>{tab.location}</span>
              <span
                aria-hidden="true"
                className={`${currentTab.location === tab.location ? "bg-primary" : "bg-transparent"} absolute inset-x-0 bottom-0 h-1`}
              ></span>
            </div>
          ))}
        </div>
      </div>
      <section className="bg-gray-200 py-16 lg:py-24">
        <div className="mx-auto text-center mb-16">
          <h3 className="font-bold text-5xl text-primary">
            {currentTab.location}
          </h3>
          <p className="text-2xl mt-4 px-4 lg:px-16">
            {currentTab.locationDescription}
          </p>
        </div>
        <div className="mx-auto max-w-9xl px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <ul
              role="list"
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {currentTab.aircraft.map((plane) => (
                <div className="flex flex-col bg-white group relative overflow-hidden last:lg:col-start-2">
                  <div className="w-full h-[27rem] overflow-hidden flex flex-col justify-center items-center align-middle">
                    <p className="z-10 w-full font-bold px-6 text-5xl lg:translate-y-12 drop-shadow-md text-center leading-10 text-white lg:text-white/80 group-hover:text-white group-hover:-translate-y-5 duration-300 ease-in-out">
                      {plane.title}
                    </p>
                    <div className="z-10 mt-2 w-1/2 px-6 text-lg text-accent lg:translate-y-12 drop-shadow-md text-center lg:opacity-0 group-hover:opacity-100 leading-tight group-hover:-translate-y-5 duration-500 ease-in-out">
                      <span>
                        <small className="text-white">Normal Rate: </small>$
                        <strong>{plane.normalRate}</strong>
                      </span>
                      <br />
                      <span>
                        <small className="text-white">Block Rate: </small>$
                        <strong>{plane.blockRate}</strong>
                      </span>
                    </div>
                    {plane.description && (
                      <p className="z-10 mt-3 lg:mt-0 px-8 w-full lg:leading-3 lg:translate-y-10 font-sans1 lg:opacity-0 text-base text-center leading-tight text-gray-100 group-hover:opacity-95 group-hover:-translate-y-1 group-hover:leading-tight duration-500 ease-out">
                        {plane.description}
                      </p>
                    )}
                    <img
                      src={plane.imagePath}
                      alt={plane.imageAlt}
                      className="absolute -z-0 h-full w-full object-cover group-hover:-translate-y-3 group-hover:saturate-150 group-hover:scale-110 duration-700 ease-out"
                    />
                    <div className="absolute z-0 w-full h-full bg-gray-900/40 lg:bg-black/20 group-hover:bg-gray-900/60 duration-500"></div>
                  </div>
                  <a
                    href={plane.link}
                    target="_self"
                    className="absolute btn-animate bottom-0 w-full h-16 bg-black lg:opacity-50 lg:translate-y-[101%] group-hover:brightness-125 group-hover:opacity-100 group-hover:translate-y-0 duration-300"
                  >
                    <div className="flex h-full w-full justify-center align-middle items-center">
                      <p className="relative z-10 text-center text-lg tracking-wider font-bold leading-loose text-white uppercase block">
                        {plane.linkText}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FleetTabs;

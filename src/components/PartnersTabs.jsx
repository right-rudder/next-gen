import { useState } from "react";

const PartnersTabs = ({ data }) => {
  const [currentTab, setCurrentTab] = useState(data[0]);

  const setProvider = (provider) => {
    const tab = data.find((tab) => tab.provider === provider);
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
          value={currentTab.provider}
          className="block w-full border-gray-300 focus:border-primary focus:ring-primary"
          defaultValue={currentTab.provider}
          onChange={(e) => setProvider(e.target.value)}
        >
          {data.map((tab) => (
            <option>{tab.provider}</option>
          ))}
        </select>
      </div>

      <div className="hidden sm:block sticky top-24 z-20 border-t-2 border-gray-100">
        <div
          className="isolate flex divide-x divide-gray-200 rounded-lg shadow"
          aria-label="Tabs"
        >
          {data.map((tab) => (
            <div
              className={`${currentTab.provider === tab.provider ? "text-gray-900" : "text-gray-500 hover:text-primary-dark"} cursor-pointer group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center font-medium hover:bg-accent hover:text-gray-100 duration-200 ease-out focus:z-20`}
              onClick={() => setCurrentTab(tab)}
            >
              <span>{tab.provider}</span>
              <span
                aria-hidden="true"
                className={`${currentTab.provider === tab.provider ? "bg-primary" : "bg-transparent"} absolute inset-x-0 bottom-0 h-1`}
              ></span>
            </div>
          ))}
        </div>
      </div>
      <section className="bg-white py-8 lg:py-16">
        <div className="mx-auto text-center">
          <h3 className="text-6xl text-center font-bold">
            {currentTab.provider}
          </h3>
          <p className="text-xl mt-6 px-4 lg:px-16 font-sans1">
            {currentTab.providerDescription}
          </p>
          <a
            href={currentTab.linkUrl}
            target="_blank"
            className="block mt-8 btn-primary btn-animate mx-auto w-4/5 md:w-1/2 lg:w-1/3"
          >
            <span className="relative z-10">{currentTab.linkText}</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default PartnersTabs;

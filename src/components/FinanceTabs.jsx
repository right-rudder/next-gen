import { useState } from "react";

const FinanceTabs = ({ data }) => {
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

      <div className="hidden sm:block sticky top-24 z-20">
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
          <div className="flex justify-center align-middle items-center py-8">
            <img
              src={currentTab.imagePath}
              alt={currentTab.imageAlt}
              className="h-24 w-auto"
            />
          </div>
          <p className="text-2xl mt-4 px-4 lg:px-16 font-sans1">
            {currentTab.providerDescription}
          </p>
        </div>
        <div className="flex justify-center align-middle items-center mt-8">
          <a
            className="btn-primary btn-animate"
            target="_blank"
            href={currentTab.linkUrl}
          >
            <span className="relative z-10">{currentTab.linkText}</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default FinanceTabs;

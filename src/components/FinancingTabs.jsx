import { useState } from "react";

const FinancingTabs = () => {
  const [currentTab, setCurrentTab] = useState("Stratus Financial");

  const surv = (
    <section className="flex flex-col items-center bg-gradient-to-br from-white to-gray-200 overflow-hidden">
      <div className="max-w-7xl px-10 flex flex-col items-center py-10">
        <div className="flex flex-col-reverse lg:flex-row items-center w-full justify-around py-10 gap-10">
          <div>
            <h2 className="text-5xl font-semibold text-center tracking-tight">
              Finance with Surv Credit
            </h2>
            <h3 className="pt-3 text-2xl text-center">
              Don’t let finances limit your pilot aspirations
            </h3>
          </div>
          <div className="h-20">
            <img
              src="/financing/surv-credit-logo.webp"
              alt="Meritize logo"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="tracking-wider">
          <p className="pt-5 font-sans1">
            We work with the most advanced lending solutions to provide you the
            financing you need.
          </p>
        </div>
        <a
          href="https://www.yourfinancingnow.com/ngfa/"
          target="_blank"
          className="btn-primary btn-animate block mt-12 mx-auto w-4/5 lg:w-1/3 md:w-1/2"
        >
          <span className="relative z-10">Apply Now</span>
        </a>
      </div>
    </section>
  );

  const stratusFinancial = (
    <section className="flex flex-col items-center bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl px-10 flex flex-col items-center py-10">
        <div className="flex flex-col-reverse lg:flex-row items-center w-full justify-around py-10 gap-10">
          <div>
            <h2 className="text-5xl font-semibold text-center tracking-tight">
              Finance with Stratus Financial
            </h2>
            <h3 className="pt-3 text-2xl text-center">
              Leverage financial support here
            </h3>
          </div>
          <img
            src="/financing/Stratus_financial_logo.webp"
            alt="Stratus Financial logo"
            className="h-16 md:h-20"
          />
        </div>
        <div className="tracking-wider">
          <p className="pt-5 font-sans1">
            NextGen Flight Academy is pleased to partner with Stratus Financial
            to make pilot training more affordable for our interested students!
            Take advantage of Stratus Financial’s unique loan structures and get
            up in the air in no time.
          </p>
          <div className="flex flex-col md:flex-row w-full gap-5">
            <div className="flex-1">
              <p className="pt-5 text-2xl font-semibold">
                Student Requirements
              </p>
              <ul className="list-disc mt-4 pl-10 font-sans1">
                <li>Must be a US Citizen or Permanent Resident*</li>
                <li>Paystubs for the past two (2) months</li>
                <li>Bank Statements for the past two (2) months</li>
                <li>Driver's License</li>
                <li>
                  Name & contact number of employer (for employee verification)
                </li>
                <li>1st or 2nd class Medical Certificate</li>
                <li>Co-borrower Recommended</li>
                <li>Pilot Certificate, if applicable</li>
                <li>Subject to Credit Check and Underwriting</li>
              </ul>
              <p className="pt-5 font-light text-2xl italic">
                *If non-US citizen, TSA verification is required.
              </p>
            </div>
            <div className="flex-1">
              <p className="md:pt-5 text-2xl font-semibold">Loan Process</p>
              <ol className="pl-10 mt-4 list-decimal font-sans1">
                <li>Application</li>
                <li>Processing</li>
                <li>Underwriting</li>
                <li>Approval</li>
                <li>Funding</li>
                <li>Pilot Training</li>
              </ol>
            </div>
          </div>
          <a
            href="https://stratus.finance/apply/nextgenflightacademy/"
            target="_blank"
            className="btn-primary btn-animate block mt-12 mx-auto w-4/5 lg:w-1/3 md:w-1/2"
          >
            <span className="relative z-10">Apply Now</span>
          </a>
        </div>
      </div>
    </section>
  );

  const flightTrainingFinance = (
    <section className="flex flex-col items-center bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl px-10 flex flex-col items-center py-10">
        <div className="flex flex-col-reverse lg:flex-row items-center w-full justify-around py-10 gap-10">
          <div>
            <h2 className="text-5xl font-semibold text-center tracking-tight">
              Finance with Flight Training Finance LLC
            </h2>
            <h3 className="pt-3 text-2xl text-center">
              Don’t let finances be the limiting factor
            </h3>
          </div>
          <img
            src="/financing/flight-training-finance-1.webp"
            alt="Flight Training Finance logo"
            className="h-12 sm:h-16 md:h-20"
          />
        </div>
        <div className="tracking-wider">
          <p className="pt-5 font-sans1">
            Embarking on your journey to becoming a pilot is an exciting
            endeavor, and at NextGen, we understand the importance of making
            flight training accessible to everyone. That's why we've partnered
            with Flight Training Finance to offer tailored financing solutions
            designed to support your flight goals.
          </p>
          <p className="pt-5 font-semibold text-xl">
            Why Choose Flight Training Finance?
          </p>
          <ul className="list-disc pl-10 pt-5 font-sans1">
            <li>
              <strong>Personalized Solutions:</strong> We believe that every
              student's journey is unique. With Flight Training Finance, you'll
              have access to financing options customized to your individual
              needs and circumstances.
            </li>
            <li>
              <strong>Guidance Every Step of the Way:</strong> Our user-friendly
              Flight Training Finance Application walks you through the process,
              ensuring clarity and simplicity as you apply for financing.
            </li>
            <li>
              <strong>Flexible Payment Plans:</strong> Whether you're looking to
              spread out your payments or make a larger down payment, our Yellow
              Sheet calculation tool allows you to explore different payment
              scenarios, empowering you to find a plan that fits your budget.
            </li>
            <li>
              <strong>Transparent Terms:</strong> Rest assured that with the
              Retail Installment Contract, you'll have a clear understanding of
              the terms of your financing agreement, providing peace of mind as
              you pursue your dreams.
            </li>
          </ul>
          <p className="pt-5 font-light text-2xl">
            If you are interested in getting started, please click{" "}
            <a
              href="https://www.flighttrainingfinancellc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent hover:underline text-primary-dark font-semibold"
            >
              here
            </a>{" "}
            to apply now.
          </p>
          <p className="pt-10 font-semibold text-xl">Partnering for Success</p>
          <p className="pt-5 font-sans1">
            NextGen and Flight Training Finance have come together to streamline
            the financing process, making flight training more accessible to
            aspiring pilots like you. Take the first step towards your aviation
            goals by exploring our financing options today.
          </p>
          <p className="pt-5 font-sans1">
            Don't let financial barriers hold you back from reaching new
            heights. Start your journey with NextGen and Flight Training
            Finance.
          </p>

          <p className="pt-10 font-semibold text-xl">Additional Resources</p>
          <ul className="list-disc pl-10">
            <li>
              <a
                href="../../public/files/ftf-program-guide.pdf"
                download="ftf-program-guide.pdf"
                className="hover:text-accent hover:underline text-primary-dark"
              >
                Program Guide
              </a>
            </li>
            <li>
              <a
                href="../../public/files/ftf-brochure.pdf"
                download="ftf-brochure.pdf"
                className="hover:text-accent hover:underline text-primary-dark"
              >
                FTF Brochure
              </a>
            </li>
          </ul>
        </div>
        <a
          href="https://www.flighttrainingfinancellc.com/"
          target="_blank"
          className="btn-primary btn-animate block mt-12 mx-auto w-4/5 lg:w-1/3 md:w-1/2"
        >
          <span className="relative z-10">Apply Now</span>
        </a>
      </div>
    </section>
  );

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-main-red focus:ring-main-red"
          defaultValue={currentTab}
          onChange={(e) => setCurrentTab(e.target.value)}
        >
          <option>Stratus Financial</option>
          <option>Flight Training Finance</option>
          <option>Surv Credit</option>
        </select>
      </div>

      <div className="hidden sm:block sticky top-24 z-20">
        <div
          className="isolate flex divide-x divide-gray-200 rounded-lg shadow"
          aria-label="Tabs"
        >
          <div
            className={`${currentTab === "Stratus Financial" ? "text-gray-900" : "text-gray-500 hover:text-gray-700"} cursor-pointer rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center font-medium hover:bg-gray-50 focus:z-10`}
            onClick={() => setCurrentTab("Stratus Financial")}
          >
            <span>Stratus Financial</span>
            <span
              aria-hidden="true"
              className={`${currentTab === "Stratus Financial" ? "bg-main-red" : "bg-transparent"} absolute inset-x-0 bottom-0 h-0.5`}
            ></span>
          </div>

          <div
            className={`${currentTab === "Flight Training Finance" ? "text-gray-900" : "text-gray-500 hover:text-gray-700"} cursor-pointer rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center font-medium hover:bg-gray-50 focus:z-10`}
            onClick={() => setCurrentTab("Flight Training Finance")}
          >
            <span>Flight Training Finance</span>
            <span
              aria-hidden="true"
              className={`${currentTab === "Flight Training Finance" ? "bg-main-red" : "bg-transparent"} absolute inset-x-0 bottom-0 h-0.5`}
            ></span>
          </div>

          <div
            className={`${currentTab === "Surv Credit" ? "text-gray-900" : "text-gray-500 hover:text-gray-700"} cursor-pointer rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center font-medium hover:bg-gray-50 focus:z-10`}
            aria-current="page"
            onClick={() => setCurrentTab("Surv Credit")}
          >
            <span>Surv Credit</span>
            <span
              aria-hidden="true"
              className={`${currentTab === "Surv Credit" ? "bg-main-red" : "bg-transparent"} absolute inset-x-0 bottom-0 h-0.5`}
            ></span>
          </div>
        </div>
      </div>

      {currentTab === "Surv Credit" && surv}
      {currentTab === "Stratus Financial" && stratusFinancial}
      {currentTab === "Flight Training Finance" && flightTrainingFinance}
    </div>
  );
};

export default FinancingTabs;

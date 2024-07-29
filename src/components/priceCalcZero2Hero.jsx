import { FaCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa6";

import { PHONE_NUMBER } from "../consts";

const PriceCalcZero2Hero = ({ programs }) => {
  const [total, setTotal] = useState(0);
  const pricePpl = programs.pricePpl;
  const priceInstrument = programs.priceInstrument;
  const priceCplShared = programs.priceCplShared;
  const priceCplSolo = programs.priceCplSolo;
  const priceCfi = programs.priceCfi;
  const priceCfii = programs.priceCfii;
  const priceMe = programs.priceMe;
  const priceMei = programs.priceMei;
  const priceMeTbd = programs.priceMeTbd;

  const priceStarter = 600;
  const priceCheckride = 6600;
  const priceWritten = 875;
  const priceHeadset = 899;

  const [starter, setStarter] = useState(false);
  const [checkride, setCheckride] = useState(false);
  const [written, setWritten] = useState(false);
  const [headset, setHeadset] = useState(false);

  const [ppl, setPpl] = useState(false);
  const [instrument, setInstrument] = useState(false);
  const [cplShared, setCplShared] = useState(false);
  const [cplSolo, setCplSolo] = useState(false);
  const [cfi, setCfi] = useState(false);
  const [cfii, setCfii] = useState(false);
  const [me, setMe] = useState(false);
  const [mei, setMei] = useState(false);
  const [meTbd, setMeTbd] = useState(false);

  const [heldPpl, setHeldPpl] = useState(false);
  const [heldInstrument, setHeldInstrument] = useState(false);
  const [heldCpl, setHeldCpl] = useState(false);
  const [heldCfi, setHeldCfi] = useState(false);
  const [heldCfii, setHeldCfii] = useState(false);
  const [heldMe, setHeldMe] = useState(false);

  useEffect(() => {
    setPpl(true);
    setInstrument(true);
    setCplShared(true);
    setCfi(true);
    setCfii(true);
    setMe(true);
    setMei(true);
    setTotal(
      total +
        pricePpl +
        priceInstrument +
        priceCplShared +
        priceCfi +
        priceCfii +
        priceMe +
        priceMei
    );
  }, []);

  return (
    <section id="price-calculator">
      <div className="bg-white py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto w-full lg:mx-0">
            <h2 className="xl:text-6xl text-5xl font-bold tracking-tight text-main-red text-center">
              Cost Estimator
            </h2>
            <p className="mt-4 text-lg leading-8 text-black text-center">
              How much does pilot training cost?
            </p>
          </div>
          <div className="mt-12 m-auto -space-y-4 items-center justify-center lg:flex md:space-y-0 xl:w-full">
            <div className="relative group w-full lg:w-1/2">
              <div
                aria-hidden="true"
                className="absolute top-0 w-full h-full rounded-2xl bg-gradient-to-br from-gray-200 to-gray-100 shadow-lg transition duration-500 group-hover:scale-105 transform-gpu"
              ></div>
              <div className="relative p-5 pt-12 md:p-8 md:pl-8 md:rounded-r-2xl lg:pl-10 lg:p-12">
                <div className="mt-2 flex justify-between gap-6 w-full">
                  <div className="grid grid-cols-1">
                    <fieldset>
                      <legend className="mb-2 text-xl text-gray-800 font-semibold">
                        Certificates and Ratings Currently Held:
                      </legend>

                      <div className="">
                        <input
                          type="checkbox"
                          checked={heldPpl}
                          className="mx-2"
                          id="heldPpl"
                          name="heldPpl"
                          onChange={(e) => {
                            setHeldPpl(!heldPpl);
                            if (ppl) {
                              setTotal(total - pricePpl);
                              setPpl(!ppl);
                            }
                          }}
                        />
                        <label htmlFor="heldPpl" className="text-sm">
                          Private Pilot Certificate{" "}
                          <small className="font-bold">(PPL)</small>
                        </label>
                      </div>

                      <div className="">
                        <input
                          type="checkbox"
                          checked={heldInstrument}
                          className="mx-2"
                          id="heldInstrument"
                          name="heldInstrument"
                          onChange={(e) => {
                            setHeldInstrument(!heldInstrument);
                            if (instrument) {
                              setTotal(total - priceInstrument);
                              setInstrument(!instrument);
                            }
                          }}
                        />
                        <label htmlFor="heldInstrument" className="text-sm">
                          Instrument Rating
                        </label>
                      </div>

                      <div className="">
                        <input
                          type="checkbox"
                          checked={heldCpl}
                          className="mx-2"
                          id="heldCpl"
                          name="heldCpl"
                          onChange={(e) => {
                            setHeldCpl(!heldCpl);
                            if (cplShared) {
                              setTotal(total - priceCplShared);
                              setCplShared(!cplShared);
                            }
                            if (cplSolo) {
                              setTotal(total - priceCplSolo);
                              setCplSolo(!cplSolo);
                            }
                          }}
                        />
                        <label htmlFor="heldCpl" className="text-sm">
                          Commercial Pilot Certificate{" "}
                          <small className="font-bold">(CPL)</small>
                        </label>
                      </div>

                      <div className="">
                        <input
                          type="checkbox"
                          checked={heldCfi}
                          className="mx-2"
                          id="heldCfi"
                          name="heldCfi"
                          onChange={(e) => {
                            setHeldCfi(!heldCfi);
                            if (cfi) {
                              setTotal(total - priceCfi);
                              setCfi(!cfi);
                            }
                          }}
                        />
                        <label htmlFor="heldCfi" className="text-sm">
                          Certified Flight Instructor{" "}
                          <small className="font-bold">(CFI)</small>
                        </label>
                      </div>

                      <div className="">
                        <input
                          type="checkbox"
                          checked={heldCfii}
                          className="mx-2"
                          id="heldCfii"
                          name="heldCfii"
                          onChange={(e) => {
                            setHeldCfii(!heldCfii);
                            if (cfii) {
                              setTotal(total - priceCfii);
                              setCfii(!cfii);
                            }
                          }}
                        />
                        <label htmlFor="heldCfii" className="text-sm">
                          Certified Flight Instructor-Instrument{" "}
                          <small className="font-bold">(CFII)</small>
                        </label>
                      </div>

                      <div className="">
                        <input
                          type="checkbox"
                          checked={heldMe}
                          className="mx-2"
                          id="heldMe"
                          name="heldMe"
                          onChange={(e) => {
                            setHeldMe(!heldMe);
                            if (me) {
                              setTotal(total - priceMe);
                              setMe(!me);
                            }
                          }}
                        />
                        <label htmlFor="heldMe" className="text-sm">
                          Multi-Engine Rating
                        </label>
                      </div>
                    </fieldset>
                    <div className="mt-4 flex justify-around lg:hidden">
                      <div className="flex items-center">
                        <div>
                          <span className="block  text-center  text-xl text-gray-700 font-bold">
                            Total $
                          </span>
                        </div>
                        <span className="text-xl text-center text-gray-700 font-bold leading-0">
                          {total.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative z-10 min-h-[screen-1/2] m-0 lg:-mx-4 group w-full lg:w-3/5 lg:max-w-3/5">
              <div
                aria-hidden="true"
                className="absolute top-0 w-full h-full rounded-2xl bg-gradient-to-b from-gray-300 to-gray-200 shadow-xl transition duration-500 group-hover:scale-105 transform-gpu"
              ></div>
              <div className="relative p-6 space-y-6 lg:p-8">
                <div className="p-6 space-y-6 lg:p-8">
                  <h3 className="text-3xl text-gray-800 font-bold text-center">
                    NextGen Flight Academy Training Calculator
                  </h3>
                  <p className="italic text-center text-gray-700">
                    Fly for a career, within a year!
                  </p>
                  <div className="flex justify-around has-tooltip">
                    <span class="tooltip">
                      This pricing is based on <strong>250 hours</strong> and
                      flying full-time. While pricing can vary within our other
                      programs, it does less so for our Zero to Hero Program.
                      However, the speed at which you can achieve the level you
                      wish will be based upon your availability and time
                      commitment. There is no way to go Zero to Hero in a year
                      doing anything less than full-time. Flying 3-4 days a week
                      makes Zero to Hero achievable in 12-15 months and flying
                      2-3 days a week is achievable in 15-18 months.
                    </span>
                    <div className="flex items-center">
                      <div className="">
                        <span className="block text-3xl text-gray-700 font-bold">
                          $
                        </span>
                      </div>
                      <span className="text-4xl text-gray-700 font-bold leading-0">
                        {total.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <ul
                    role="list"
                    className="w-full px-3 space-y-2 text-sm pb-6 m-auto text-gray-600 grid grid-cols-1 lg:grid-cols-2 gap-4"
                  >
                    {total == 0 && (
                      <li className="space-x-2 flex flex-nowrap align-middle justify-center items-center">
                        <span className="font-semibold text-xl text-center">
                          Choose your training goal
                        </span>
                      </li>
                    )}
                    {ppl && (
                      <li className="space-x-2 flex flex-nowrap align-middle items-center">
                        <FaCheckCircle className="text-green-600 text-xl" />
                        <span>Private Pilot Certificate</span>
                      </li>
                    )}
                    {instrument && (
                      <li className="space-x-2 flex flex-nowrap align-middle items-center">
                        <span className="text-sky-500 font-semibold">
                          <FaCheckCircle className="text-green-600 text-xl" />
                        </span>
                        <span>Instrument Rating</span>
                      </li>
                    )}
                    {(cplShared || cplSolo) && (
                      <li className="space-x-2 flex flex-nowrap align-middle items-center">
                        <span className="text-sky-500 font-semibold">
                          <FaCheckCircle className="text-green-600 text-xl" />
                        </span>
                        <span>Commercial Pilot Certificate</span>
                      </li>
                    )}
                    {cfi && (
                      <li className="space-x-2 flex flex-nowrap align-middle items-center">
                        <span className="text-sky-500 font-semibold">
                          <FaCheckCircle className="text-green-600 text-xl" />
                        </span>
                        <span>Certified Flight Instructor</span>
                      </li>
                    )}
                    {cfii && (
                      <li className="space-x-2 flex flex-nowrap align-middle items-center">
                        <span className="text-sky-500 font-semibold">
                          <FaCheckCircle className="text-green-600 text-xl" />
                        </span>
                        <span>Certified Flight Instructor-Instrument</span>
                      </li>
                    )}
                    {me && (
                      <li className="space-x-2 flex flex-nowrap align-middle items-center">
                        <span className="text-sky-500 font-semibold">
                          <FaCheckCircle className="text-green-600 text-xl" />
                        </span>
                        <span>Multi-Engine Rating</span>
                      </li>
                    )}
                    {(mei || meTbd) && (
                      <li className="space-x-2 flex flex-nowrap align-middle items-center">
                        <span className="text-sky-500 font-semibold">
                          <FaCheckCircle className="text-green-600 text-xl" />
                        </span>
                        <span>Multi-Engine Instructor</span>
                      </li>
                    )}
                  </ul>
                  <fieldset className="flex flex-col justify-center items-center align-top w-full text-left">
                    <legend className="mb-2 text-xl text-center w-full text-gray-800 font-semibold">
                      Add Ons:
                    </legend>

                    <div>
                      <div className="has-tooltip">
                        <input
                          type="checkbox"
                          checked={starter}
                          className="mx-2"
                          id="starter"
                          name="starter"
                          onChange={(e) => {
                            starter
                              ? setTotal(total - priceStarter)
                              : setTotal(total + priceStarter);
                            setStarter(!starter);
                          }}
                        />
                        <span class="tooltip text-sm">
                          Includes a passive headset, pilot bag, pilot training
                          books, a logbook, foggles, a ForeFlight subscription
                          while enrolled, and a kneeboard.
                        </span>
                        <label htmlFor="starter" className="text-sm">
                          Starter Package
                        </label>
                      </div>

                      <div className="has-tooltip">
                        <input
                          type="checkbox"
                          checked={checkride}
                          className="mx-2"
                          id="checkride"
                          name="checkride"
                          onChange={(e) => {
                            checkride
                              ? setTotal(total - priceCheckride)
                              : setTotal(total + priceCheckride);
                            setCheckride(!checkride);
                          }}
                        />
                        <span class="tooltip text-sm">
                          Depending on your DPE, you can plan to budget around
                          $900 for most checkrides with the exceptions being the
                          CFI initial (~$1,500) and CFI add-ons (~$1,200 each).
                        </span>
                        <label htmlFor="checkride" className="text-sm">
                          Checkride Fees
                        </label>
                      </div>

                      <div className="has-tooltip">
                        <input
                          type="checkbox"
                          checked={written}
                          className="mx-2"
                          id="written"
                          name="written"
                          onChange={(e) => {
                            written
                              ? setTotal(total - priceWritten)
                              : setTotal(total + priceWritten);
                            setWritten(!written);
                          }}
                        />
                        <span class="tooltip text-sm">
                          Written tests are ~$175 per certification (not
                          required for the Multi-Engine Rating or MEI add-on).
                        </span>
                        <label htmlFor="written" className="text-sm">
                          Written Test Fees
                        </label>
                      </div>

                      <div className="has-tooltip">
                        <input
                          type="checkbox"
                          checked={headset}
                          className="mx-2"
                          id="headset"
                          name="headset"
                          onChange={(e) => {
                            headset
                              ? setTotal(total - priceHeadset)
                              : setTotal(total + priceHeadset);
                            setHeadset(!headset);
                          }}
                        />
                        <span class="tooltip text-sm">
                          Receive <strong>$299.00</strong> off of your Zulu 3
                          Headset if you choose to upgrade your Starter Package
                          at Summit Flight Academy.
                        </span>
                        <label htmlFor="headset" className="text-sm">
                          Zulu 3 Headset
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="mt-8 mx-auto text-center">
                  CONTACT US
                  <a
                    href={`tel: ${PHONE_NUMBER}`}
                    className="mt-6 flex space-x-3 justify-center flex-nowrap hover:font-bold hover:scale-105 transition-all duration-500"
                  >
                    <FaPhone />
                    <span>{PHONE_NUMBER}</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative group w-full lg:w-1/2">
              <div
                aria-hidden="true"
                className="absolute top-0 w-full h-full rounded-2xl bg-gradient-to-tl from-gray-200 to-gray-100 shadow-lg transition duration-500 group-hover:scale-105 transform-gpu"
              ></div>
              <div className="relative p-5 pt-12 md:p-8 md:pl-8 md:rounded-r-2xl lg:pr-10 lg:p-12">
                <fieldset>
                  <legend className="mb-2 text-xl text-gray-800 font-semibold">
                    Certificates and Ratings You Want to Obtain:
                  </legend>

                  <div className="">
                    <input
                      type="checkbox"
                      checked={ppl}
                      disabled={heldPpl}
                      className="mx-2"
                      id="ppl"
                      name="ppl"
                      onChange={(e) => {
                        ppl
                          ? setTotal(total - pricePpl)
                          : setTotal(total + pricePpl);
                        setPpl(!ppl);
                      }}
                    />
                    <label htmlFor="ppl" className="text-sm">
                      Private Pilot Certificate{" "}
                      <small className="font-bold">(PPL)</small>
                    </label>
                  </div>

                  <div className="">
                    <input
                      type="checkbox"
                      checked={instrument}
                      disabled={heldInstrument}
                      className="mx-2"
                      id="instrument"
                      name="instrument"
                      onChange={(e) => {
                        instrument
                          ? setTotal(total - priceInstrument)
                          : setTotal(total + priceInstrument);
                        setInstrument(!instrument);
                      }}
                    />
                    <label htmlFor="instrument" className="text-sm">
                      Instrument Rating
                    </label>
                  </div>

                  <div className="has-tooltip">
                    <input
                      type="checkbox"
                      checked={cplShared}
                      disabled={heldCpl || cplSolo}
                      className="mx-2"
                      id="cplShared"
                      name="cplShared"
                      onChange={(e) => {
                        cplShared
                          ? setTotal(total - priceCplShared)
                          : setTotal(total + priceCplShared);
                        setCplShared(!cplShared);
                      }}
                    />
                    <span class="tooltip text-sm">
                      Shared time building will make this certification
                      achievable in a shorter time.
                    </span>
                    <label htmlFor="cplShared" className="text-sm">
                      Commercial Pilot Certificate{" "}
                      <small className="font-bold">(Shared)</small>
                    </label>
                  </div>

                  <div className="">
                    <input
                      type="checkbox"
                      checked={cplSolo}
                      disabled={heldCpl || cplShared}
                      className="mx-2"
                      id="cplSolo"
                      name="cplSolo"
                      onChange={(e) => {
                        cplSolo
                          ? setTotal(total - priceCplSolo)
                          : setTotal(total + priceCplSolo);
                        setCplSolo(!cplSolo);
                      }}
                    />
                    <label htmlFor="cplSolo" className="text-sm">
                      Commercial Pilot Certificate{" "}
                      <small className="font-bold">(Solo)</small>
                    </label>
                  </div>

                  <div className="">
                    <input
                      type="checkbox"
                      checked={cfi}
                      disabled={heldCfi}
                      className="mx-2"
                      id="cfi"
                      name="cfi"
                      onChange={(e) => {
                        cfi
                          ? setTotal(total - priceCfi)
                          : setTotal(total + priceCfi);
                        setCfi(!cfi);
                      }}
                    />
                    <label htmlFor="cfi" className="text-sm">
                      Certified Flight Instructor{" "}
                      <small className="font-bold">(CFI)</small>
                    </label>
                  </div>

                  <div className="">
                    <input
                      type="checkbox"
                      checked={cfii}
                      disabled={heldCfii}
                      className="mx-2"
                      id="cfii"
                      name="cfii"
                      onChange={(e) => {
                        cfii
                          ? setTotal(total - priceCfii)
                          : setTotal(total + priceCfii);
                        setCfii(!cfii);
                      }}
                    />
                    <label htmlFor="cfii" className="text-sm">
                      Certified Flight Instructor-Instrument{" "}
                      <small className="font-bold">(CFII)</small>
                    </label>
                  </div>

                  <div className="">
                    <input
                      type="checkbox"
                      checked={me}
                      disabled={heldMe}
                      className="mx-2"
                      id="me"
                      name="me"
                      onChange={(e) => {
                        me
                          ? setTotal(total - priceMe)
                          : setTotal(total + priceMe);
                        setMe(!me);
                      }}
                    />
                    <label htmlFor="me" className="text-sm has-tooltip">
                      <span className="tooltip text-sm">
                        Career track students need 25 total ME hours to reach a
                        Multi-Engine certification. You can achieve this by
                        either getting your MEI or flying 15 hours via time
                        building.
                      </span>
                      Multi-Engine Rating
                    </label>
                  </div>

                  <div className="">
                    <input
                      type="checkbox"
                      checked={mei}
                      disabled={meTbd}
                      className="mx-2"
                      id="mei"
                      name="mei"
                      onChange={(e) => {
                        mei
                          ? setTotal(total - priceMei)
                          : setTotal(total + priceMei);
                        setMei(!mei);
                      }}
                    />
                    <label htmlFor="mei" className="text-sm">
                      Multi-Engine Instructor{" "}
                      <small className="font-bold">(MEI)</small>
                    </label>
                  </div>

                  <div className="">
                    <input
                      type="checkbox"
                      checked={meTbd}
                      disabled={mei}
                      className="mx-2"
                      id="meTbd"
                      name="meTbd"
                      onChange={(e) => {
                        meTbd
                          ? setTotal(total - priceMeTbd)
                          : setTotal(total + priceMeTbd);
                        setMeTbd(!meTbd);
                      }}
                    />
                    <label htmlFor="meTbd" className="text-sm">
                      Multi-Engine Time Building{" "}
                      <small className="font-bold">(15 Hours)</small>
                    </label>
                  </div>
                </fieldset>
                <div className="mt-6 flex justify-between gap-6 w-full">
                  <div className="grid grid-cols-1">
                    <div className="mt-4 flex justify-around lg:hidden">
                      <div className="flex items-center">
                        <div>
                          <span className="block  text-center  text-xl text-gray-700 font-bold">
                            Total $
                          </span>
                        </div>
                        <span className="text-xl text-center  text-gray-700 font-bold leading-0">
                          {total.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalcZero2Hero;

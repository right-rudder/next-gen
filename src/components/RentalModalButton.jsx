import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { PHONE_NUMBER, EMAIL_ADDRESS } from "../consts";

const RentalModalButton = ({ btnStyle, btnText, aircraft }) => {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [userName, setUserName] = useState("");

  const [pursue, setPursue] = useState(false);
  const [guidance, setGuidance] = useState(false);

  const toggleModal = () => {
    console.log(btnStyle);
    console.log(aircraft);
    setShowModal(!showModal);
    setFormSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    if (formData.get("confirm-email")) {
      return;
    }

    const name = formData.get("firstName");
    setUserName(name);

    console.log("Form data:", formData);

    const url =
      "https://services.leadconnectorhq.com/hooks/9utaV888wQVmrsycFzyf/webhook-trigger/vn1xOINPdpSHL6K5rDex";

    fetch(url, {
      method: "POST",
      body: new URLSearchParams(formData),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => {
        if (response.ok) {
          setFormSubmitted(true);
          setTimeout(() => {
            toggleModal();
            document.body.style.overflow = "auto";
          }, 6300);
        } else {
          console.error("Form submission failed:", response.statusText);
        }
      })
      .catch((error) => {
        console.error(
          "Network error occurred while submitting the form:",
          error
        );
      });
  };

  return (
    <>
      <button
        className={btnStyle}
        onClick={() => {
          toggleModal();
          document.body.style.overflow = "hidden";
        }}
      >
        <span className="relative z-10">{btnText}</span>
      </button>
      {showModal && (
        <div id="quiz-modal" className="relative z-50">
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
            {!formSubmitted && (
              <div className="bg-white p-12 max-w-xl my-4 text-black h-[99%] rounded-sm-sm overflow-y-auto">
                <p className="text-base text-center font-bold leading-7 text-accent uppercase">
                  Rental Inquiry Form for
                </p>
                <h2 className="text-4xl text-center text-primary-dark font-bold mb-1">
                  {aircraft}
                </h2>
                <p className="text-center text-gray-600 italic text-base mt-0 mb-6">
                  Please fill out the form below to get started.
                </p>
                <form onSubmit={handleSubmit} className="mt-8">
                  <div className="mb-4">
                    <label
                      htmlFor="firstName"
                      className="mb-1 text-primary-dark font-semibold"
                    >
                      First Name
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        autoComplete="given-name"
                        className="w-full p-2 border text-black bg-accent-50 border-muted-500 rounded-sm"
                        required
                      />
                    </label>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="lastName"
                      className="mb-1 text-primary-dark font-semibold"
                    >
                      Last Name
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        autoComplete="family-name"
                        className="w-full p-2 border text-black bg-accent-50 border-muted-500 rounded-sm"
                        required
                      />
                    </label>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="mb-1 text-primary-dark font-semibold"
                    >
                      Email Address
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        className="w-full p-2 border text-black bg-accent-50 border-muted-500 rounded-sm"
                        required
                      />
                    </label>
                  </div>
                  <div className="hidden">
                    <label>
                      Don't fill this out if you're human:
                      <input name="confirm-email" type="text" />
                    </label>
                  </div>
                  <div className="hidden">
                    <input
                      type="text"
                      id="firstName"
                      name="aircraft"
                      value={aircraft}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="mb-1 text-primary-dark font-semibold"
                    >
                      Phone Number
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        min={10}
                        max={10}
                        autoComplete="tel"
                        className="w-full p-2 border text-black bg-accent-50 border-muted-500 rounded-sm"
                        required
                      />
                    </label>
                  </div>
                  <div className="mb-8">
                    <label
                      for="rental-date"
                      className="mb-1 text-primary-dark font-semibold"
                    >
                      Rental date:
                    </label>

                    <input
                      type="date"
                      id="rental-date"
                      name="rental-date"
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full p-2 border text-black bg-accent-50 border-muted-500 rounded-sm"
                    />
                  </div>

                  <div className="mb-4">
                    <fieldset className="flex justify-center gap-x-8">
                      <legend className="mb-1 text-primary-dark font-semibold text-center">
                        Would you be interested in scheduling a visit to NextGen
                        Flight Academy?
                      </legend>

                      <div>
                        <input
                          type="radio"
                          className="mx-2"
                          id="visit-yes"
                          name="visit-us"
                          value="visit-yes"
                          required
                        />
                        <label htmlFor="visit-yes">Yes</label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          className="mx-2"
                          id="visit-no"
                          name="visit-us"
                          value="visit-no"
                          required
                        />
                        <label htmlFor="visit-no">No</label>
                      </div>
                    </fieldset>
                  </div>
                  <button
                    className="btn-primary block btn-animate mt-8 w-full"
                    type="submit"
                  >
                    <span className="relative z-10">Submit</span>
                  </button>
                </form>
              </div>
            )}

            {formSubmitted && (
              <div className="bg-white p-12 max-w-xl m-4 text-black rounded-sm-md h-full overflow-y-auto text-center">
                <h2 className="font-bold text-4xl py-10">
                  Thank you {userName} for filling the form.
                </h2>

                <div className="flex flex-row justify-center">
                  <div className="bg-green-200 rounded-full py-3 px-4 mb-10">
                    <div className="text-accent text-5xl">✓</div>
                  </div>
                </div>

                <p className="px-5">
                  Thank you for contacting NextGen Flight Academy. We are
                  looking forward to working with you soon. We will review your
                  message and get back with you within 1-5 business days. <br />
                  <br />
                  You can also give us a call at{" "}
                  <a className="text-primary" href={`tel:${PHONE_NUMBER}`}>
                    {PHONE_NUMBER}
                  </a>{" "}
                  or
                  <br />
                  email us at{" "}
                  <a className="text-primary" href={`mailto:${EMAIL_ADDRESS}`}>
                    {EMAIL_ADDRESS}
                  </a>
                </p>
              </div>
            )}

            <button
              className="bg-accent p-1 rounded-full absolute top-2 right-2"
              onClick={() => {
                toggleModal();
                document.body.style.overflow = "auto";
              }}
            >
              <IoMdClose className="text-2xl text-primary-dark" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RentalModalButton;

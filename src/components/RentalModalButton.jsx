import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { PHONE_NUMBER, EMAIL_ADDRESS } from "../consts";

const RentalModalButton = ({
  btnStyle,
  btnText,
  aircraft,
  rentalWebhookURL,
  portalApiKey,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [userName, setUserName] = useState("");

  const toggleModal = () => {
    setShowModal(!showModal);
    setFormSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const confirmEmail = formData.get("confirm-email")?.trim();
    if (confirmEmail) return;

    const name = formData.get("firstName");
    setUserName(name);

    const webhookURL = rentalWebhookURL;
    const apiKey = portalApiKey;

    const urlEncodedBody = new URLSearchParams(formData).toString();

    const jsonBody = {
      first_name: formData.get("firstName")?.trim() || "",
      last_name: formData.get("lastName")?.trim() || "",
      email: formData.get("email")?.trim() || "",
      phone: formData.get("phone")?.trim() || "",
      campaign: "rental",
      account_random_id: "ac_vwzfezsv",
      metadata: {
        aircraft: formData.get("aircraft")?.trim() || "",
        rental_date: formData.get("rental-date")?.trim() || "",
        visit_us: formData.get("visit-us")?.trim() || "",
      },
    };

    try {
      const [ghlRes, portalRes] = await Promise.all([
        fetch(webhookURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: urlEncodedBody,
        }),
        fetch("https://portal.rightruddermarketing.com/api/leads", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-api-key": apiKey,
          },
          body: JSON.stringify(jsonBody),
        }),
      ]);

      if (ghlRes.ok && portalRes.ok) {
        setFormSubmitted(true);
        setTimeout(() => {
          toggleModal();
          document.body.style.overflow = "auto";
        }, 6300);
      } else {
        console.error("Submission failed", {
          ghlStatus: ghlRes.status,
          portalStatus: portalRes.status,
        });
      }
    } catch (err) {
      console.error("Submission error:", err);
    }
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
              <div className="relative bg-white p-12 max-w-xl my-4 text-black h-[99%] rounded-sm-sm overflow-y-auto">
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
                      readOnly
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
                      htmlFor="rental-date"
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
          </div>
        </div>
      )}
    </>
  );
};

export default RentalModalButton;

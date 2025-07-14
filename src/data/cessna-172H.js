const cessna172H = {
  data: {
    //SEO Header Stuff
    pageTitle: "Cessna 172H - Our Fleet | NextGen Flight Academy",
    pageDescription:
      "Fly in one of NextGen Flight Academy's Cessna 172 series airplanes and get started in your initial certifications and ratings.",
    pageKeywords:
      "Cessna 172H training aircraft, four-seat training airplane, vintage Cessna 172, classic training plane, primary flight training aircraft, private pilot training airplane, cross-country training aircraft, aviation training fleet, Cessna 172 series aircraft, reliable training plane, flight school aircraft rental, dual control airplane, traditional flight training, aircraft checkout training, NextGen Flight Academy fleet, flight training equipment, learn to fly Cessna 172H, training aircraft specifications, aviation education aircraft",

    //top header
    header: {
      imagePath:
        "/src/assets/in-flight-cfi-and-student-fly-over-los-angeles-ca.jpg",
      imageAlt: "in-flight-cfi-and-student-fly-over-los-angeles-ca",
      headerH1: "Cessna 172H",
      headerH2:
        "Explore our Cessna 172H at NextGen Flight Academy and learn to fly with the best.",
    },

    aircraft: {
      title: "Cessna 172H",
      normalRate: 154.99,
      blockRate: 149.99,
      location: ["Riverside Municipal Airport (RAL)"],
      images: [
        {
          imagePath:
            "/src/assets/side-of-cessna-172h-at-riverside-airport-RAL.jpg",
          imageAlt: "side-of-cessna-172h-at-riverside-airport-RAL",
        },
        {
          imagePath:
            "/src/assets/front-of-cessna-172h-at-riverside-airport-RAL.jpg",
          imageAlt: "front-of-cessna-172h-at-riverside-airport-RAL",
        },
        {
          imagePath:
            "/src/assets/cockpit-of-cessna-172h-at-riverside-airport-RAL.jpg",
          imageAlt: "cockpit-of-cessna-172h-at-riverside-airport-RAL",
        },
      ],
      rentUrl:
        "https://app.process.st/templates/NextGen-Aircraft-Checkout-qNoL_5yUWfBKy5Jd9PBNaw/checklists/run",
      documentation: [
        {
          docTitle: "Pilot Operating Handbook",
          docUrl: "/Cessna-172H-1967-POH.pdf",
        },
        /* {
          docTitle: "Weight & Balance",
          docUrl: "/src/assets/cessna-172-poh.pdf",
        }, */
        {
          docTitle: "Renter’s Agreement",
          docUrl:
            "https://docs.google.com/document/d/1c2laMGTFODpA9KyX-Vfyq2UPJ4dwCZQk/edit?usp=sharing&ouid=110319322993279427090&rtpof=true&sd=true",
        },
      ],
      description:
        "The Cessna 172H, another variant in the 172 series, offers slight performance upgrades over earlier models. It is typically used for both primary and advanced training, benefiting from reliable avionics and efficient fuel consumption. The 172H is equipped with a Continental O-300 engine, providing a balance of power and fuel efficiency. This model maintains the high-wing design and durable construction characteristic of the 172 series.",
      link: "/our-fleet/cessna-172",
      linkText: "Details",
    },

    enrollCTA: {
      heading: "Want a Test Ride?",
      subheading:
        "Book an intro flight to see if flight school is right for you",
      linkText: "Book an Intro Flight",
      linkUrl: "/intro-flight",
      imagePath:
        "/src/assets/nextgen-flight-academy-staff-flying-over-riverside-ca.jpg",
      imageAlt: "nextgen-flight-academy-staff-flying-over-riverside-ca",
    },
  },
};

export default cessna172H;

const cessna152 = {
  data: {
    //SEO Header Stuff
    pageTitle: "Cessna 152 - Our Fleet | NextGen Flight Academy",
    pageDescription:
      "Fly in NextGen Flight Academy's Cessna 152 and get started in your initial certifications and ratings.",
    pageKeywords:
      "Cessna 152 training aircraft, two-seater training plane, student pilot aircraft, beginner training airplane, primary flight training aircraft, aviation training fleet, flight school aircraft rental, Cessna 152 specifications, aircraft checkout training, dual control training plane, flight training equipment, affordable training aircraft, basic flight training plane, private pilot training aircraft, instrument panel familiarization, pre-solo training aircraft, flight instruction airplane, NextGen Flight Academy fleet, learn to fly Cessna 152, training aircraft rental Riverside",

    //top header
    header: {
      imagePath:
        "/src/assets/in-flight-cfi-and-student-fly-over-los-angeles-ca.jpg",
      imageAlt: "in-flight-cfi-and-student-fly-over-los-angeles-ca",
      headerH1: "Cessna 152",
      headerH2:
        "Explore our Cessna 152 at NextGen Flight Academy and learn to fly with the best.",
    },

    aircraft: {
      title: "Cessna 152",
      normalRate: 145.99,
      blockRate: 139.99,
      location: ["Riverside Municipal Airport (RAL)"],
      images: [
        {
          imagePath:
            "/src/assets/side-of-cessna-152-at-riverside-airport-RAL.jpg",
          imageAlt: "side-of-cessna-152-at-riverside-airport-RAL",
        },
        {
          imagePath:
            "/src/assets/front-of-cessna-152-at-riverside-airport-RAL.jpg",
          imageAlt: "front-of-cessna-152-at-riverside-airport-RAL",
        },
        {
          imagePath:
            "/src/assets/instrument-panel-of-cessna-152-at-riverside-airport-RAL.jpg",
          imageAlt: "instrument-panel-of-cessna-152-at-riverside-airport-RAL",
        },
      ],
      rentUrl:
        "https://app.process.st/templates/NextGen-Aircraft-Checkout-qNoL_5yUWfBKy5Jd9PBNaw/checklists/run",
      documentation: [
        {
          docTitle: "Pilot Operating Handbook",
          docUrl:
            "https://drive.google.com/file/d/10NY1Oo8C2RljuRrxf25-EQ9hQ-jDPjMC/view?usp=drive_link",
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
        "The Cessna 152 is a two-seat, single-engine aircraft specifically designed for flight training. It is known for its durability and simplicity, which makes it perfect for new pilots. Features include a reliable Lycoming O-235 engine, a fixed tricycle landing gear, and straightforward instrumentation. The aircraft's small size and responsive controls help students develop essential piloting skills.",
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

export default cessna152;

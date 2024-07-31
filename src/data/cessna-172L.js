const cessna172L = {
  data: {
    //SEO Header Stuff
    pageTitle: "Cessna 172L - Our Fleet | NextGen Flight Academy",
    pageDescription:
      "Fly in one of NextGen Flight Academy's Cessna 172 series airplanes and get started in your initial certifications and ratings.",
    pageKeywords:
      "NextGen Flight Academy, Flight school Riverside, California; Flight school Redlands, California; Learn to fly Riverside, California; Learn to fly Redlands, California; Pilot training Riverside, California; Pilot training Redlands, California; Flight lessons Riverside, California; Flight lessons Redlands, California; Riverside Redlands flight school; Inland Empire flight school; Flight training; Pilot training; Flight instruction; Flight lessons; Airplane lessons; Private pilot license (PPL) training; Instrument rating training; Commercial pilot license (CPL) training; Certified Flight Instructor (CFI) training",

    //top header
    header: {
      imagePath:
        "/src/assets/in-flight-cfi-and-student-fly-over-los-angeles-ca.jpg",
      imageAlt: "in-flight-cfi-and-student-fly-over-los-angeles-ca",
      headerH1: "Cessna 172L",
      headerH2:
        "Explore our Cessna 172L at NextGen Flight Academy and learn to fly with the best.",
    },

    aircraft: {
      title: "Cessna 172L",
      normalRate: 154.99,
      blockRate: 149.99,
      location: ["Riverside Municipal Airport (RAL)"],
      images: [
        {
          imagePath:
            "/src/assets/side-of-cessna-172l-at-riverside-airport-RAL.jpg",
          imageAlt: "side-of-cessna-172l-at-riverside-airport-RAL",
        },
        {
          imagePath:
            "/src/assets/front-of-cessna-172l-at-riverside-airport-RAL.jpg",
          imageAlt: "front-of-cessna-172l-at-riverside-airport-RAL",
        },
        {
          imagePath:
            "/src/assets/instrument-panel-of-cessna-172l-at-riverside-airport-RAL.jpg",
          imageAlt: "instrument-panel-of-cessna-172l-at-riverside-airport-RAL",
        },
      ],
      rentUrl:
        "https://app.process.st/templates/NextGen-Aircraft-Checkout-qNoL_5yUWfBKy5Jd9PBNaw/checklists/run",
      documentation: [
        {
          docTitle: "Pilot Operating Handbook",
          docUrl: "/Cessna-172H-1967-POH.pdf",
        },
        {
          docTitle: "Weight & Balance",
          docUrl:
            "https://drive.google.com/file/d/1LYORjd_tAiRnSNDCGuxm1Hzkk_65RBn0/view?usp=drive_link",
        },
        {
          docTitle: "Renter’s Agreement",
          docUrl:
            "https://docs.google.com/document/d/1c2laMGTFODpA9KyX-Vfyq2UPJ4dwCZQk/edit?usp=sharing&ouid=110319322993279427090&rtpof=true&sd=true",
        },
      ],
      description:
        "The Cessna 172L is a variant of the Cessna 172, featuring a more streamlined design and minor performance improvements. This model retains the core attributes of the 172 series, such as the high-wing configuration and stable flight characteristics, making it well-suited for both primary and advanced flight training. The 172L includes enhancements like improved aerodynamics and slightly better fuel efficiency, which benefit both instructors and students during long training sessions.",
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

export default cessna172L;

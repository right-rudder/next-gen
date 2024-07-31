const cessna172 = {
  data: {
    //SEO Header Stuff
    pageTitle: "Cessna 172 - Our Fleet | NextGen Flight Academy",
    pageDescription:
      "Fly in one of NextGen Flight Academy's Cessna 172 series airplanes and get started in your initial certifications and ratings.",
    pageKeywords:
      "NextGen Flight Academy, Flight school Riverside, California; Flight school Redlands, California; Learn to fly Riverside, California; Learn to fly Redlands, California; Pilot training Riverside, California; Pilot training Redlands, California; Flight lessons Riverside, California; Flight lessons Redlands, California; Riverside Redlands flight school; Inland Empire flight school; Flight training; Pilot training; Flight instruction; Flight lessons; Airplane lessons; Private pilot license (PPL) training; Instrument rating training; Commercial pilot license (CPL) training; Certified Flight Instructor (CFI) training",

    //top header
    header: {
      imagePath:
        "/src/assets/in-flight-cfi-and-student-fly-over-los-angeles-ca.jpg",
      imageAlt: "in-flight-cfi-and-student-fly-over-los-angeles-ca",
      headerH1: "Cessna 172",
      headerH2:
        "Explore our Cessna 172 at NextGen Flight Academy and learn to fly with the best.",
    },

    aircraft: {
      title: "Cessna 172",
      normalRate: 154.99,
      blockRate: 149.99,
      location: [
        "Riverside Municipal Airport (RAL)",
        "Redlands Municipal Airport (REI)",
      ],
      images: [
        {
          imagePath:
            "/src/assets/side-of-cessna-172l-at-redlands-airport-REI.jpg",
          imageAlt: "side-of-cessna-172-at-redlands-airport-REI",
        },
        {
          imagePath:
            "/src/assets/N7815C-cessna-nextgen-flight-academy-learn-to-fly-redlands-ca.jpg",
          imageAlt: "N7561G-nextgen-flight-academy-riverside-ca",
        },
        {
          imagePath:
            "/src/assets/instrument-panel-of-cessna-172l-at-redlands-airport-REI.jpg",
          imageAlt: "instrument-panel-of-cessna-172l-at-redlands-airport-REI",
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
            "https://drive.google.com/file/d/1d8Op4hWggSixP3keE8TIF0AAhYI6CnlQ/view?usp=drive_link",
        },
        {
          docTitle: "Renter’s Agreement",
          docUrl:
            "https://docs.google.com/document/d/1c2laMGTFODpA9KyX-Vfyq2UPJ4dwCZQk/edit?usp=sharing&ouid=110319322993279427090&rtpof=true&sd=true",
        },
      ],
      description:
        "The Cessna 172 Skyhawk is a four-seat, single-engine, high-wing aircraft. Known for its reliability and ease of handling, it is the most popular aircraft for flight training. Its stable flight characteristics, simple control systems, and forgiving landing gear make it ideal for student pilots. Features include a high-wing design for excellent visibility, sturdy tricycle landing gear, and a robust airframe that can withstand the rigors of frequent training flights.",
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

export default cessna172;

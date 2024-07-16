const cessna172L = {
  data: {
    //SEO Header Stuff
    pageTitle: "Cessna 172L - Our Fleet | NextGen Flight Academy",
    pageDescription:
      "NextGen Flight Academy offers career-track, zero-to-hero pilot training programs at Riverside Municipal Airport (RAL) and Redlands Municipal Airport (REI). With 320 flying days a year and an FAA-approved Gleim syllabus, our academy provides top-tier education and flexible scheduling options to meet the needs of aspiring pilots. Our programs are designed to ensure high-quality instruction and extensive flying lessons, helping students achieve their goals in flight training efficiently and effectively.",
    pageKeywords:
      "NextGen Flight Academy, Flight school Riverside, California; Flight school Redlands, California; Learn to fly Riverside, California; Learn to fly Redlands, California; Pilot training Riverside, California; Pilot training Redlands, California; Flight lessons Riverside, California; Flight lessons Redlands, California; Riverside Redlands flight school; Inland Empire flight school; Flight training; Pilot training; Flight instruction; Flight lessons; Airplane lessons; Private pilot license (PPL) training; Instrument rating training; Commercial pilot license (CPL) training; Certified Flight Instructor (CFI) training",

    //top header
    header: {
      imagePath:
        "/src/assets/in-flight-cfi-and-student-fly-over-los-angeles-ca.jpg",
      imageAlt: "in-flight-cfi-and-student-fly-over-los-angeles-ca",
      headerH1: "Cessna 172L",
      headerH2:
        "Explore our Cessna 172L at NextGen Flight Academy and learn to fly with the best",
    },

    aircraft: {
      title: "Cessna 172L",
      normalRate: 154.99,
      blockRate: 149.99,
      location: ["Riverside Municipal Airport (RAL)"],
      images: [
        {
          imagePath: "/src/assets/greg-rosenke-0DizjoNOCrw-unsplash.jpg",
          imageAlt: "cessna-172-landing-at-airport",
        },
        {
          imagePath: "/src/assets/mila-young-pgGnvJF7p20-unsplash.jpg",
          imageAlt: "cessna-172-cockpit",
        },
        {
          imagePath: "/src/assets/tadeu-jnr-kAzSa_azENM-unsplash.jpg",
          imageAlt: "cessna-172-interior",
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
          docUrl: "/src/assets/cessna-172-poh.pdf",
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

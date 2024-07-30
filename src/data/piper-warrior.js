const piperWarrior = {
  data: {
    //SEO Header Stuff
    pageTitle: "Piper Warrior - Our Fleet | NextGen Flight Academy",
    pageDescription:
      "NextGen Flight Academy offers career-track, zero-to-hero pilot training programs at Riverside Municipal Airport (RAL) and Redlands Municipal Airport (REI). With 320 flying days a year and an FAA-approved Gleim syllabus, our academy provides top-tier education and flexible scheduling options to meet the needs of aspiring pilots. Our programs are designed to ensure high-quality instruction and extensive flying lessons, helping students achieve their goals in flight training efficiently and effectively.",
    pageKeywords:
      "NextGen Flight Academy, Flight school Riverside, California; Flight school Redlands, California; Learn to fly Riverside, California; Learn to fly Redlands, California; Pilot training Riverside, California; Pilot training Redlands, California; Flight lessons Riverside, California; Flight lessons Redlands, California; Riverside Redlands flight school; Inland Empire flight school; Flight training; Pilot training; Flight instruction; Flight lessons; Airplane lessons; Private pilot license (PPL) training; Instrument rating training; Commercial pilot license (CPL) training; Certified Flight Instructor (CFI) training",

    //top header
    header: {
      imagePath:
        "/src/assets/in-flight-cfi-and-student-fly-over-los-angeles-ca.jpg",
      imageAlt: "in-flight-cfi-and-student-fly-over-los-angeles-ca",
      headerH1: "Piper Warrior",
      headerH2:
        "Explore our Piper Warrior at NextGen Flight Academy and learn to fly with the best",
    },

    aircraft: {
      title: "Piper Warrior",
      normalRate: 179.99,
      blockRate: 174.99,
      location: ["Redlands Municipal Airport (REI)"],
      images: [
        {
          imagePath: "/src/assets/N415MS-nextgen-flight-academy-learn-to-fly-redlands-ca-copy.jpg",
          imageAlt: "cessna-172-interior",
        },
        {
          imagePath: "/src/assets/side-of-piper-warrior-at-redlands-airport-REI.jpg",
          imageAlt: "side-of-piper-warrior-at-redlands-airport-REI",
        },
        {
          imagePath: "/src/assets/front-of-piper-warrior-at-redlands-airport-REI.jpg",
          imageAlt: "front-of-piper-warrior-at-redlands-airport-REI",
        },
      ],
      rentUrl:
        "https://app.process.st/templates/NextGen-Aircraft-Checkout-qNoL_5yUWfBKy5Jd9PBNaw/checklists/run",
      documentation: [
        {
          docTitle: "Pilot Operating Handbook",
          docUrl:
            "https://drive.google.com/file/d/1V1tOfTAjMsCjGOrML8vOmqa7nfy-fA4a/view?usp=sharing",
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
        "The Piper Warrior Skyhawk is a four-seat, single-engine, high-wing aircraft. Known for its reliability and ease of handling, it is the most popular aircraft for flight training. Its stable flight characteristics, simple control systems, and forgiving landing gear make it ideal for student pilots. Features include a high-wing design for excellent visibility, sturdy tricycle landing gear, and a robust airframe that can withstand the rigors of frequent training flights.",
      link: "/our-fleet/piper-warrior",
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

export default piperWarrior;

const ourFleet = {
  data: {
    //SEO Header Stuff
    pageTitle: "Our Fleet | NextGen Flight Academy",
    pageDescription:
      "NextGen Flight Academy offers career-track, zero-to-hero pilot training programs at Riverside Municipal Airport (RAL) and Redlands Municipal Airport (REI). With 320 flying days a year and an FAA-approved Gleim syllabus, our academy provides top-tier education and flexible scheduling options to meet the needs of aspiring pilots. Our programs are designed to ensure high-quality instruction and extensive flying lessons, helping students achieve their goals in flight training efficiently and effectively.",
    pageKeywords:
      "NextGen Flight Academy, Flight school Riverside, California; Flight school Redlands, California; Learn to fly Riverside, California; Learn to fly Redlands, California; Pilot training Riverside, California; Pilot training Redlands, California; Flight lessons Riverside, California; Flight lessons Redlands, California; Riverside Redlands flight school; Inland Empire flight school; Flight training; Pilot training; Flight instruction; Flight lessons; Airplane lessons; Private pilot license (PPL) training; Instrument rating training; Commercial pilot license (CPL) training; Certified Flight Instructor (CFI) training",

    //top header
    header: {
      imagePath:
        "/src/assets/in-flight-cfi-and-student-fly-over-los-angeles-ca.jpg",
      imageAlt: "in-flight-cfi-and-student-fly-over-los-angeles-ca",
      headerH1: "Our Fleet",
      headerH2:
        "Explore our aircraft at NextGen Flight Academy and learn to fly with the best",
    },

    fleet: [
      {
        location: "Riverside Municipal Airport (RAL)",
        locationDescription:
          "The NextGen Flight Academy fleet includes Cessna 172s, Piper Arrow, Cessna 120, Duchess, and a Cessna 152. Thorough VFR and IFR checkout flights are mandatory. An FAA Flight Review can be added with minimal extra time. Renters and students must carry renters insurance.",
        aircraft: [
          {
            title: "Cessna 172",
            normalRate: 154.99,
            blockRate: 149.99,
            imagePath:
              "/src/assets/passing-a-checkride-at-nextgen-flight-learn-to-fly.jpg",
            imageAlt: "passing-a-checkride-at-nextgen-flight-learn-to-fly",
            description:
              "The Cessna 172 Skyhawk is a four-seat, single-engine, high-wing aircraft. Known for its reliability and ease of handling.",
            link: "/our-fleet/cessna-172",
            linkText: "Details",
          },
          {
            title: "Instrument Rating",
            normalRate: 154.99,
            blockRate: 149.99,
            imagePath:
              "/src/assets/instrument-rating-training-at-nextgen-flight-academy.jpg",
            imageAlt: "instrument-rating-training-at-nextgen-flight-academy",
            description:
              "The Instrument Rating (IR) enables you to fly in various weather conditions by using instruments for navigation. This rating is essential for advancing to commercial piloting and providing more consistent flight opportunities regardless of weather.",
            link: "/training-programs/instrument-rating",
            linkText: "Explore",
          },
          {
            title: "Commercial Pilot Certificate",
            normalRate: 154.99,
            blockRate: 149.99,
            imagePath:
              "/src/assets/commercial-pilot-program-nextgen-flight-academy.jpg",
            imageAlt: "commercial-pilot-program-nextgen-flight-academy",
            description:
              "The Commercial Pilot Certificate (CPL) allows you to earn money as a pilot. It opens career paths in commercial aviation, such as flight instruction, banner towing, and aerial photography, laying the foundation for airline transport roles.",
            link: "/training-programs/commercial-pilot",
            linkText: "Explore",
          },
          {
            title: "Multi-Engine Rating",
            normalRate: 154.99,
            blockRate: 149.99,
            imagePath:
              "/src/assets/multi-engine-aircraft-at-nextgen-flight-academy.jpg",
            imageAlt: "multi-engine-plane-at-redlands-airport",
            description:
              "The Multi-Engine Rating (ME) qualifies you to fly aircraft with more than one engine. It is crucial for piloting more complex and faster aircraft, which is essential for commercial and airline transport pilots.",
            link: "/training-programs/multi-engine-rating",
            linkText: "Explore",
          },
        ],
      },
      {
        location: "Redlands Municipal Airport (REI)",
        locationDescription:
          "The Learn to Fly LLC (sister company of NextGen Flight Academy and our nominal “Redlands location”) fleet includes a Cessna 172 and a Piper Warrior. Thorough VFR checkout flights are mandatory. An FAA Flight Review can be added with minimal extra time.",
        aircraft: [
          {
            title: "Flight Instructor (CFI, CFII, MEI)",
            normalRate: 154.99,
            blockRate: 149.99,
            imagePath: "/src/assets/flight-instructor-training-redlands-ca.jpg",
            imageAlt: "flight-instructor-training-redlands-ca",
            description:
              "Becoming a Flight Instructor allows you to teach others to fly. This role not only helps build your flight hours but also opens career opportunities in aviation education and mentoring. You can specialize as a Certified Flight Instructor (CFI), Certified Flight Instructor-Instrument (CFII), or Multi-Engine Instructor (MEI).",
            link: "/training-programs/certified-flight-instructor",
            linkText: "Explore",
          },
          {
            title: "Airline Transport Pilot",
            normalRate: 154.99,
            blockRate: 149.99,
            imagePath:
              "/src/assets/atp-training-at-nextgen-flight-academy-riverside-ca.jpg",
            imageAlt: "atp-training-at-nextgen-flight-academy-riverside-ca",
            description:
              "The Airline Transport Pilot (ATP) certification is the highest level of pilot certification. It qualifies you to command multi-crew aircraft and pursue top-tier positions with airlines, corporate flight departments, and cargo carriers.",
            link: "/training-programs/airline-transport-pilot",
            linkText: "Explore",
          },
          {
            title: "High Performance Endorsement",
            normalRate: 154.99,
            blockRate: 149.99,
            imagePath:
              "/src/assets/piper-cherokee-six-high-performance-endorsement.jpg",
            imageAlt: "planes-flying-over-san-bernadino-ca",
            description: `<small class="uppercase italic font-bold text-accent">Must provide your own aircraft.</small><br>The High Performance Endorsement allows you to fly aircraft with an engine of more than 200 horsepower. It grants access to faster, more powerful aircraft.`,
            link: "/training-programs/high-performance-endorsement",
            linkText: "Explore",
          },
          {
            title: "High Altitude Endorsement",
            normalRate: 154.99,
            blockRate: 149.99,
            imagePath: "/src/assets/high-altitude-endorsement.jpg",
            imageAlt: "high-altitude-endorsement",
            description: `<small class="uppercase italic font-bold text-accent">Must provide your own aircraft.</small><br>The High Altitude Endorsement prepares you to operate pressurized aircraft above 25,000 feet. It allows you to fly higher and more efficient routes, often necessary for certain commercial operations.`,
            link: "/training-programs/high-altitude-endorsement",
            linkText: "Explore",
          },
          {
            title: "Complex Endorsement",
            normalRate: 154.99,
            blockRate: 149.99,
            imagePath:
              "/src/assets/nextgen-flight-academy-california-riverside-commercial-checkride .jpg",
            imageAlt: "completing-an-endorsement-at-riverside-airport",
            description:
              "The Complex Endorsement allows you to fly aircraft with retractable landing gear, flaps, and a controllable pitch propeller. It is required for operating more sophisticated aircraft, which is essential for many advanced piloting roles.",
            link: "/training-programs/complex-endorsement",
            linkText: "Explore",
          },
        ],
      },
    ],
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

export default ourFleet;

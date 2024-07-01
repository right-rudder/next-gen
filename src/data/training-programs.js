const trainingPrograms = {
  data: {
    //SEO Header Stuff
    pageTitle: "XYZ Flight School in Rudderville, RRM",
    pageDescription: "meta description goes here",
    pageKeywords:
      "add keywords here.  take a look at the consts.ts file for more guidance on keywords",

    //top header
    header: {
      imagePath:
        "/src/assets/in-flight-cfi-and-student-fly-over-los-angeles-ca.jpg",
      imageAlt: "in-flight-cfi-and-student-fly-over-los-angeles-ca",
      headerH1: "Pilot Training Programs",
      headerH2:
        "Start flying, complete your ratings, and earn your endorsements",
    },
    underHeader: {
      upperHeading: "Featured Program",
      heading: "Career Track Pilot Training",
      description: [
        "Our Career Track program (also known as a “Zero to Hero” program) takes you from no flying experience to becoming a professional pilot. This start-to-finish course prepares you for a career in aviation, offering opportunities in commercial aviation, airlines, and more.",
        "Submit your enrollment interest today to learn more about our timelines and training structure.",
      ],
      imagePath: "/src/assets/redlands-plane-on-dry-lake.jpg",
      imageAlt: "redlands-plane-on-dry-lake",
      linkText: "Enroll with NextGen",
      linkUrl: "/contact",
    },
    programs: {
      upperHeading: "Explore",
      heading: "Our Programs",
      cards: [
        {
          title: "Private Pilot Certificate",
          imagePath:
            "/src/assets/passing-a-checkride-at-nextgen-flight-learn-to-fly.jpg",
          imageAlt: "passing-a-checkride-at-nextgen-flight-learn-to-fly",
          description:
            "The Private Pilot Certificate (PPL) is your first step in flight training, allowing you to fly solo or with passengers under Visual Flight Rules (VFR). It enables you to rent and pilot aircraft for personal use, recreational flying, and travel.",
          link: "/enrollment",
          linkText: "Enroll Now",
        },
        {
          title: "Instrument Rating",
          imagePath:
            "/src/assets/instrument-rating-training-at-nextgen-flight-academy.jpg",
          imageAlt: "instrument-rating-training-at-nextgen-flight-academy",
          description:
            "The Instrument Rating (IR) enables you to fly in various weather conditions by using instruments for navigation. This rating is essential for advancing to commercial piloting and providing more consistent flight opportunities regardless of weather.",
          link: "/enrollment",
          linkText: "Enroll Now",
        },
        {
          title: "Commercial Pilot Certificate",
          imagePath:
            "/src/assets/commercial-pilot-program-nextgen-flight-academy.jpg",
          imageAlt: "commercial-pilot-program-nextgen-flight-academy",
          description:
            "The Commercial Pilot Certificate (CPL) allows you to earn money as a pilot. It opens career paths in commercial aviation, such as flight instruction, banner towing, and aerial photography, laying the foundation for airline transport roles.",
          link: "/enrollment",
          linkText: "Enroll Now",
        },
        {
          title: "Multi-Engine Rating",
          imagePath: "/src/assets/multi-engine-plane-at-redlands-airport.jpg",
          imageAlt: "multi-engine-plane-at-redlands-airport",
          description:
            "The Multi-Engine Rating (ME) qualifies you to fly aircraft with more than one engine. It is crucial for piloting more complex and faster aircraft, which is essential for commercial and airline transport pilots.",
          link: "/enrollment",
          linkText: "Enroll Now",
        },
        {
          title: "Flight Instructor (CFI, CFII, MEI)",
          imagePath: "/src/assets/flight-instructor-training-redlands-ca.jpg",
          imageAlt: "flight-instructor-training-redlands-ca",
          description:
            "Becoming a Flight Instructor allows you to teach others to fly. This role not only helps build your flight hours but also opens career opportunities in aviation education and mentoring. You can specialize as a Certified Flight Instructor (CFI), Certified Flight Instructor-Instrument (CFII), or Multi-Engine Instructor (MEI).",
          link: "/enrollment",
          linkText: "Enroll Now",
        },
        {
          title: "Airline Transport Pilot",
          imagePath:
            "/src/assets/atp-training-at-nextgen-flight-academy-riverside-ca.jpg",
          imageAlt: "atp-training-at-nextgen-flight-academy-riverside-ca",
          description:
            "The Airline Transport Pilot (ATP) certification is the highest level of pilot certification. It qualifies you to command multi-crew aircraft and pursue top-tier positions with airlines, corporate flight departments, and cargo carriers.",
          link: "/enrollment",
          linkText: "Enroll Now",
        },
        {
          title: "High Performance Endorsement",
          imagePath: "/src/assets/planes-flying-over-san-bernadino-ca.jpg",
          imageAlt: "planes-flying-over-san-bernadino-ca",
          description: `<small class="uppercase italic font-bold">Must provide your own aircraft.</small><br>The High Performance Endorsement allows you to fly aircraft with an engine of more than 200 horsepower. It grants access to faster, more powerful aircraft.`,
          link: "/enrollment",
          linkText: "Enroll Now",
        },
        {
          title: "High Altitude Endorsement",
          imagePath: "/src/assets/high-altitude-endorsement.jpg",
          imageAlt: "high-altitude-endorsement",
          description: `<small class="uppercase italic font-bold">Must provide your own aircraft.</small><br>The High Altitude Endorsement prepares you to operate pressurized aircraft above 25,000 feet. It allows you to fly higher and more efficient routes, often necessary for certain commercial operations.`,
          link: "/enrollment",
          linkText: "Enroll Now",
        },
        {
          title: "Complex Endorsement",
          imagePath:
            "/src/assets/completing-an-endorsement-at-riverside-airport.jpg",
          imageAlt: "completing-an-endorsement-at-riverside-airport",
          description:
            "The Complex Endorsement allows you to fly aircraft with retractable landing gear, flaps, and a controllable pitch propeller. It is required for operating more sophisticated aircraft, which is essential for many advanced piloting roles.",
          link: "/enrollment",
          linkText: "Enroll Now",
        },
      ],
    },
    enrollCTA: {
      heading: "Want a Test Ride?",
      subheading:
        "Book an intro flight to see if flight school is right for you",
      linkText: "Book an Intro Flight",
      linkUrl: "/contact",
      imagePath:
        "/src/assets/nextgen-flight-academy-staff-flying-over-riverside-ca.jpg",
      imageAlt: "nextgen-flight-academy-staff-flying-over-riverside-ca",
    },
  },
};

export default trainingPrograms;

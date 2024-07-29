const careerTrack = {
  data: {
    //SEO Header Stuff
    pageTitle: "Career Track | NextGen Flight Academy",
    pageDescription:
      "NextGen Flight Academy offers career-track, zero-to-hero pilot training programs at Riverside Municipal Airport (RAL) and Redlands Municipal Airport (REI). With 320 flying days a year and an FAA-approved Gleim syllabus, our academy provides top-tier education and flexible scheduling options to meet the needs of aspiring pilots. Our programs are designed to ensure high-quality instruction and extensive flying lessons, helping students achieve their goals in flight training efficiently and effectively.",
    pageKeywords:
      "NextGen Flight Academy, Flight school Riverside, California; Flight school Redlands, California; Learn to fly Riverside, California; Learn to fly Redlands, California; Pilot training Riverside, California; Pilot training Redlands, California; Flight lessons Riverside, California; Flight lessons Redlands, California; Riverside Redlands flight school; Inland Empire flight school; Flight training; Pilot training; Flight instruction; Flight lessons; Airplane lessons; Private pilot license (PPL) training; Instrument rating training; Commercial pilot license (CPL) training; Certified Flight Instructor (CFI) training",

    //top header
    header: {
      imagePath:
        "/src/assets/in-flight-cfi-and-student-fly-over-los-angeles-ca.jpg",
      imageAlt: "in-flight-cfi-and-student-fly-over-los-angeles-ca",
      headerH1: "Career Track",
      headerH2:
        "Zero to Hero Pilot Training Programs at NextGen Flight Academy",
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

    programs: [
      {
        title: "Private Pilot Certificate (PPL)",
        linkTo: {
          title: "Learn More",
          url: "/flight-programs/private-pilot-training",
        },
        content:
          "Your private training is your first step as a professional pilot. This certificate allow you to fly single-engine piston aircraft for non-commercial purposes.",
        content2:
          "Your training includes flight instruction and aircraft time along with the associated ground school and instructor time to prepare your for your first FAA pilot certificate.",
      },
      {
        title: "Instrument Rating",
        linkTo: {
          title: "Learn More",
          url: "/flight-programs/instrument-rating",
        },
        content: `An instrument rating gives you the skills and confidence to safely fly through clouds and in weather conditions that would keep you grounded with only a private pilot certificate.  We strive to provide every student as much "actual" instrument conditions to train in as is safely possible.`,
        content2: `You'll learn procedures in a RedBird simulator and fly in our Garmin-equipped aircraft to earn your instrument rating and build cross-country and additional night flight experience.`,
      },
      {
        title: "Commercial Pilot Certificate (CPL)",
        linkTo: {
          title: "Learn More",
          url: "/flight-programs/commercial-pilot-training",
        },
        content:
          "A commercial pilot certificate refines your flying skills and teaches you the regulations related to commercial aviation. You'll spend about 50 flight hours prepping for your commercial certificate, along with associated ground instruction. ",
        content2:
          "To obtain the remaining hours needed to sit for the commercial checkride, students have a variety of options.",
      },
      {
        title: "Certified Flight Instructor (CFI)",
        linkTo: {
          title: "Learn More",
          url: "/career/instructor-training",
        },
        content:
          "A Certificated Flight Instructor (CFI) is often the most challenging, yet rewarding, certificate many pilots earn. It entrusts you with training the next generation of pilots. The CFI certificate typically enables you to build time efficiently towards the 1500 hours you need to qualify for an Airline Transport Pilot (ATP) certificate.",
        content2:
          "Your training will include approximately 15 hours of right seat flight time plus extensive ground school refining your lesson plans and developing effective teaching techniques on the ground and in the air.",
      },
      {
        title: "Certificated Flight Instructor-Instrument (CFII)",
        linkTo: {
          title: "Learn More",
          url: "/career/instructor-training",
        },
        content:
          "Many flight schools strongly prefer instructors who can teach private/commercial and instrument students to help maintain a student-instructor relationship throughout training.   For those pilots without significant instrument time, this add-on certificate will hone your instrument stills and provide a more diverse set of students to teach.",
        content2:
          "Your CFI-I training will include additional simulator time to learn how to effectively teach in a simulator environment. Your right-seat flying skills on instruments will be honed and you'll learn additional skills in teaching instrument pilots.​",
      },
      {
        title: "Multi-Engine Rating",
        linkTo: {
          title: "Learn More",
          url: "/flight-programs/multi-engine-rating",
        },
        content:
          "Adding on a multi-engine rating and building 25-50 multi-engine hours is often a pre-requisite of most professional pilot jobs.",
        content2:
          "Your training starts with time in a RedBird simulator to learn multi-engine procedures. Then, we offer the option of earning your multi-engine certificate and 25 hours in a Piper Twin Commanche multi-engine aircraft or earning your multi-engine certificate plus multi-engine instructor rating to build further multi-engine hours.",
      },
      {
        title: "Multi-Engine Instructor (MEI)",
        linkTo: {
          title: "Learn More",
          url: "/career/instructor-training",
        },
        content:
          "With this certification, you'll gain expertise in instructing in multi-engine aircraft, imparting knowledge and skills essential for operating these high-performance machines.",
        content2:
          "This is also where you can reach your required 25 hours of time building for your Multi-Engine Rating.",
      },
    ],

    priceCalc: {
      title: "Price Calculator",
      subtitle: "How much does pilot training cost?",

      calcHeading: "NextGen Flight Academy Training Calculator",
      calcSubheading: "Fly for a career, within a year!",

      pricePpl: 1111,
      priceInstrument: 2222,
      priceCpl: 4444,
      priceCfi: 5555,
      priceCfii: 6666,
      priceMe: 7777,
      priceMei: 8888,
      priceAtp: 11212,

      zeroTotal: "Choose your training goals",

      totalTooltip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      meTooltip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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

export default careerTrack;

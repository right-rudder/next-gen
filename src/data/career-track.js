const careerTrack = {
  data: {
    //SEO Header Stuff
    pageTitle: "Pilot Career Training | NextGen Flight Academy",
    pageDescription:
      "Embark on a professional aviation career with NextGen Flight Academy's Career Track program. From zero experience to professional pilot, our comprehensive training prepares you for opportunities in commercial aviation, airlines, and more.",
    pageKeywords:
      "NextGen Flight Academy, Pilot career training, Zero to Hero program, Professional pilot training, Private Pilot Certificate, Instrument Rating, Commercial Pilot Certificate, Multi-Engine Rating, Certified Flight Instructor, Airline Transport Pilot, Flight training programs, Aviation career opportunities",

    //top header
    header: {
      imagePath:
        "/src/assets/in-flight-cfi-and-student-fly-over-los-angeles-ca.jpg",
      imageAlt: "in-flight-cfi-and-student-fly-over-los-angeles-ca",
      headerH1: "Career Track",
      headerH2:
        "Zero to Hero Pilot Training at NextGen Flight Academy",
    },
    underHeader: {
      upperHeading: "Featured Program",
      heading: "Career Track Flight Training",
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
          url: "/training-programs/private-pilot",
        },
        content:
          "The Private Pilot Certificate allows you to fly single-engine aircraft for personal use, travel, and recreation. This certification provides essential skills and knowledge for safe and competent flying. To earn this license, you must complete a minimum of 40 flight hours, which includes 20 hours of flight training with an instructor and 10 hours of solo flight. The training covers cross-country flight, night flight, instrument training, and preparation for the practical test. You must also pass a medical exam to obtain a third-class medical certificate."
      },
      {
        title: "Instrument Rating",
        linkTo: {
          title: "Learn More",
          url: "/training-programs/instrument-rating",
        },
        content: `An Instrument Rating (IR) enhances your flying skills by allowing you to fly in various weather conditions using only your aircraft's instruments. This rating is critical for increasing flight safety and expanding your flying opportunities. It prepares you to handle flights in clouds, fog, and low visibility, making you a more versatile and capable pilot. To earn this rating, you must already hold a Private Pilot Certificate and complete additional flight training focused on instrument navigation.`,
      },
      {
        title: "Commercial Pilot Certificate (CPL)",
        linkTo: {
          title: "Learn More",
          url: "/training-programs/commercial-pilot",
        },
        content:
          "The Commercial Pilot Certificate (CPL) is your ticket to a professional aviation career. This certification allows you to be compensated for your flying services, opening doors to various opportunities such as charter services, agricultural aviation, and corporate aviation. The training focuses on refining your piloting skills to meet high commercial standards. It includes advanced maneuvers, complex flight operations, and emergency procedures.",
      },
      {
        title: "Multi-Engine Rating",
        linkTo: {
          title: "Learn More",
          url: "/training-programs/multi-engine-rating",
        },
        content:
          "A Multi-Engine Rating (MER) allows you to fly aircraft with more than one engine, significantly enhancing your piloting skills and expanding your career opportunities. This rating is essential for pilots who aim to fly larger, faster, and more complex aircraft, including those used in commercial aviation. The training focuses on multi-engine aerodynamics, engine-out procedures, and the operation of multi-engine aircraft systems. Achieving a Multi-Engine Rating demonstrates your ability to manage the increased complexity of multi-engine aircraft. This certification opens up new opportunities for pilots, including the potential to fly more advanced and higher-performance aircraft. It also makes you more competitive in the job market, as many commercial and corporate aviation roles require or prefer pilots with multi-engine experience.",
      },
      {
        title: "Certified Flight Instructor (CFI)",
        linkTo: {
          title: "Learn More",
          url: "/training-programs/certified-flight-instructor",
        },
        content:
          "Becoming a Certified Flight Instructor (CFI) allows you to share your passion for aviation by teaching others to fly. This certification provides an opportunity to build flight hours and gain experience while opening pathways to advanced piloting careers. CFIs play a critical role in the aviation industry by ensuring that new pilots receive high-quality training and develop the necessary skills for safe and effective flying. Many CFIs eventually move on to careers as commercial or airline pilots, making this an excellent step for those pursuing long-term aviation goals.",
      },
      {
        title: "Certified Flight Instructor-Instrument (CFII)",
        linkTo: {
          title: "Learn More",
          url: "/training-programs/certified-flight-instructor",
        },
        content:
          "The Certified Flight Instructor - Instrument (CFII) rating allows you to teach instrument flying, enabling students to fly safely in various weather conditions and low visibility. This certification is essential for those who wish to specialize in instrument training and ensures that new pilots are well-equipped to handle instrument flight rules (IFR).",
      },
      {
        title: "Multi-Engine Instructor (MEI)",
        linkTo: {
          title: "Learn More",
          url: "/training-programs/certified-flight-instructor",
        },
        content:
          "Becoming a Multi-Engine Instructor (MEI) allows you to teach students how to operate aircraft with multiple engines, preparing them for advanced piloting roles. This certification builds on your existing flight instructor experience and adds the ability to train others in more complex flight operations, enhancing your skills and expanding your teaching opportunities.",
      },
      {
        title: "Airline Transport Pilot (ATP)",
        linkTo: {
          title: "Learn More",
          url: "/training-programs/airline-transport-pilot",
        },
        content:
          "With this certification, you'll gain expertise in instructing in multi-engine aircraft, imparting knowledge and skills essential for operating these high-performance machines.",
        content2:
          "The ATP certification is highly regarded in the aviation industry and opens up numerous career opportunities. Achieving this certification signifies that you have reached the highest standard of piloting proficiency and are capable of handling the most complex flight operations. It requires a deep understanding of advanced aerodynamics, systems management, and operational procedures.",
      },
    ],

    priceCalc: {
      title: "Training Price Estimator",
      subtitle: "How much could pilot training cost?",

      calcHeading: "NextGen Flight Academy Training Estimator",
      calcSubheading: "Make flying your career with NextGen",

      pricePpl: 12000,
      priceInstrument: 14000,
      priceCpl: 20000,
      priceCfi: 5000,
      priceCfii: 5000,
      priceMe: 4000,
      priceMei: 5000,
      priceAtp: 3000,

      zeroTotal: "Please select a training goal to begin.",

      totalTooltip: "Note that pilot training is highly subjective and billed by time spent training. While it may be possible to achieve your certifications in this time frame, please understand that this is an esitmate and could be higher depending on the efficacy of your training.",
      meTooltip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    enrollCTA: {
      heading: "Want a Test Ride?",
      subheading:
        "Book an intro flight to see if flight school is right for you",
      linkText: "Book an Intro Flight",
      linkUrl: "/intro-flight",
      imagePath:
        "/src/assets/on-an-intro-flight-with-nextgen-flight-academy.jpg",
      imageAlt: "nextgen-flight-academy-staff-flying-over-riverside-ca",
    },
  },
};

export default careerTrack;

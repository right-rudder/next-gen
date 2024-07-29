const pilotResources = {
  data: {
    //SEO Header Stuff
    pageTitle: "Pilot Resource Center | NextGen Flight Academy",
    pageDescription:
      "NextGen Flight Academy offers career-track, zero-to-hero pilot training programs at Riverside Municipal Airport (RAL) and Redlands Municipal Airport (REI). With 320 flying days a year and an FAA-approved Gleim syllabus, our academy provides top-tier education and flexible scheduling options to meet the needs of aspiring pilots. Our programs are designed to ensure high-quality instruction and extensive flying lessons, helping students achieve their goals in flight training efficiently and effectively.",
    pageKeywords:
      "NextGen Flight Academy, Flight school Riverside, California; Flight school Redlands, California; Learn to fly Riverside, California; Learn to fly Redlands, California; Pilot training Riverside, California; Pilot training Redlands, California; Flight lessons Riverside, California; Flight lessons Redlands, California; Riverside Redlands flight school; Inland Empire flight school; Flight training; Pilot training; Flight instruction; Flight lessons; Airplane lessons; Private pilot license (PPL) training; Instrument rating training; Commercial pilot license (CPL) training; Certified Flight Instructor (CFI) training",

    //top header
    header: {
      imagePath:
        "/src/assets/pilot-resource-center-at-riverside-airport.jpg",
      imageAlt: "NextGen Flight Academy's Pilot Center at Riverside Airport",
      headerH1: "Pilot Resource Center",
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
    resources: {
      upperHeading: "Explore",
      heading: "FAA Publications",
      description: "Download the latest FAA publications and study materials.",
      publications: [
        {
          name: "Airman Certification Standards (ACS)",
          cards: [
            {
              title: "",
              description: "Standards for earning a private pilot license.",
              imagePath:
                "/src/assets/acs-private-pilot-thumb.jpg",
              imageAlt: "passing-a-checkride-at-nextgen-flight-learn-to-fly",
              link: "/training-programs/private-pilot",
              linkText: "Download",
            },
            {
              title: "ACS Instrument Pilot Airplane",
              description: "Criteria for obtaining an instrument rating.",
              imagePath:
                "/src/assets/Instrument Rating – Airplane Airman Certification Standards.jpg",
              imageAlt: "passing-a-checkride-at-nextgen-flight-learn-to-fly",
              link: "https://drive.google.com/file/d/1_6aYUa7tQ7jSbIi8LX91985HjEu14aaS/view?usp=drive_link",
              linkText: "Download",
            },
            {
              title: "ACS Commercial Pilot Airplane",
              description: "Requirements for commercial pilot certification.",
              imagePath:
                "/src/assets/Commercial Pilot for Airplane Category Airman Certification Standards.jpg",
              imageAlt: "passing-a-checkride-at-nextgen-flight-learn-to-fly",
              link: "https://drive.google.com/file/d/1ob5c0c1U6PnDm4HS3cDl5owVjfF8wtt_/view?usp=drive_link",
              linkText: "Download",
            },
            {
              title: "ACS ATP & Type Ratings Certificate",
              description: "Standards for airline transport pilot certification.",
              imagePath:
                "/src/assets/Airline Transport Pilot and Type Rating for Airplane Category Airman Certification Standards.jpg",
              imageAlt: "passing-a-checkride-at-nextgen-flight-learn-to-fly",
              link: "https://drive.google.com/file/d/1w_n8OOhf-xei68vqYziRrq53a8kJUqMJ/view?usp=drive_link",
              linkText: "Download",
            },
            {
              title: "ACS Remote Pilot Small Unmanned",
              description: "Guidelines for small unmanned aircraft certification.",
              imagePath:
                "/src/assets/Remote Pilot ‒ Small Unmanned Aircraft Systems Airman Certification Standards.jpg",
              imageAlt: "passing-a-checkride-at-nextgen-flight-learn-to-fly",
              link: "https://drive.google.com/file/d/1h104vlc__OmGIT8ToY5qOcVwfrwcMhS0/view?usp=drive_link",
              linkText: "Download",
            },
          ],
        },
        {
          name: "Practical Test Standards (PTS)",
          cards: [
            {
              title: "PTS Flight Instructor Airplane Land and Sea",
              description: "Requirements for airplane flight instructor certification.",
              imagePath:
                "/src/assets/jason-mavrommatis-ap3LXI0fPJY-unsplash.jpg",
              imageAlt: "PTS Flight Instructor Airplane Land and Sea",
              link: "/training-programs/private-pilot",
              linkText: "Download",
            },
            {
              title: "PTS Flight Instructor Instrument Airplane & Helicopter",
              description: "Criteria for instrument flight instructor certification.",
              imagePath:
                "/src/assets/Flight Instructor Instrument Practical Test Standards for Airplane Rating and Helicopter Rating.jpg",
              imageAlt: "PTS Flight Instructor Instrument Airplane & Helicopter",
              link: "/training-programs/private-pilot",
              linkText: "Download",
            },
            {
              title: "PTS Flight Instructor Airplane Multi-Engine Land and Sea",
              description: "Standards for multi-engine flight instructor certification.",
              imagePath:
                "/src/assets/jason-mavrommatis-ap3LXI0fPJY-unsplash.jpg",
              imageAlt: "PTS Flight Instructor Airplane Multi-Engine Land and Sea",
              link: "/training-programs/private-pilot",
              linkText: "Download",
            },
          ],
        },
        {
          name: "Pilot Handbooks",
          cards: [
            {
              title: "Airplane Flying Handbook",
              description: "General guide to flying airplanes.",
              imagePath:
                "/src/assets/Airplane Flying Handbook.jpg",
              imageAlt: "Airplane Flying Handbook",
              link: "/training-programs/private-pilot",
              linkText: "Download",
            },
            {
              title: "Pilot’s Handbook of Aeronautical Knowledge",
              description: "Fundamental aviation knowledge for pilots.",
              imagePath:
                "/src/assets/Pilots-Handbook-of-Aeronautical-Knowledge.jpeg",
              imageAlt: "Pilot’s Handbook of Aeronautical Knowledge",
              link: "/training-programs/private-pilot",
              linkText: "Download",
            },
            {
              title: "Aviation Weather",
              description: "Essential guide to understanding aviation weather.",
              imagePath:
                "/src/assets/Aviation Weather Handbook.jpg",
              imageAlt: "Aviation Weather Handbook",
              link: "/training-programs/private-pilot",
              linkText: "Download",
            },
            {
              title: "Aviation Weather Services",
              description: "Information on weather services for pilots.",
              imagePath:
                "/src/assets/jason-mavrommatis-ap3LXI0fPJY-unsplash.jpg",
              imageAlt: "passing-a-checkride-at-nextgen-flight-learn-to-fly",
              link: "/training-programs/private-pilot",
              linkText: "Download",
            },
            {
              title: "Weight and Balance Handbook",
              description: "Guide to managing aircraft weight and balance.",
              imagePath:
                "/src/assets/Weight & Balance Handbook.jpg",
              imageAlt: "Weight & Balance Handbook",
              link: "/training-programs/private-pilot",
              linkText: "Download",
            },
            {
              title: "Advanced Avionics Handbook",
              description: "Introduction to advanced avionics systems.",
              imagePath:
                "/src/assets/jason-mavrommatis-ap3LXI0fPJY-unsplash.jpg",
              imageAlt: "passing-a-checkride-at-nextgen-flight-learn-to-fly",
              link: "/training-programs/private-pilot",
              linkText: "Download",
            },
            {
              title: "Instrument Flying Handbook",
              description: "Detailed guide to instrument flight techniques.",
              imagePath:
                "/src/assets/jason-mavrommatis-ap3LXI0fPJY-unsplash.jpg",
              imageAlt: "passing-a-checkride-at-nextgen-flight-learn-to-fly",
              link: "/training-programs/private-pilot",
              linkText: "Download",
            },
            {
              title: "Instrument Procedures Handbook",
              description: "Procedures and best practices for instrument flight.",
              imagePath:
                "/src/assets/Instrument Procedures Handbook (IPH).jpg",
              imageAlt: "Instrument Procedures Handbook (IPH)",
              link: "/training-programs/private-pilot",
              linkText: "Download",
            },
            {
              title: "Risk Management Handbook",
              description: "Strategies for managing aviation risks.",
              imagePath:
                "/src/assets/Risk Management Handbook.jpg",
              imageAlt: "Risk Management Handbook",
              link: "/training-programs/private-pilot",
              linkText: "Download",
            },
            {
              title: "Aviation Instructor’s Handbook",
              description: "Resource for flight instructors on teaching methods.",
              imagePath:
                "/src/assets/aviation-instructors-handbook.jpg",
              imageAlt: "Aviation Instructor’s Handbook",
              link: "/training-programs/private-pilot",
              linkText: "Download",
            },
          ],
        },
        {
          name: "GLEIM Syllabus / Miscellaneous",
          cards: [
            {
              title: "FAR/AIM 2021",
              description: "Compilation of Federal Aviation Regulations and Aeronautical Information.",
              imagePath:
                "/src/assets/jason-mavrommatis-ap3LXI0fPJY-unsplash.jpg",
              imageAlt: "passing-a-checkride-at-nextgen-flight-learn-to-fly",
              link: "/training-programs/private-pilot",
              linkText: "Download",
            },
            {
              title: "Aeronautical Chart User Guide",
              description: "Instructions on reading and using aeronautical charts.",
              imagePath:
                "/src/assets/jason-mavrommatis-ap3LXI0fPJY-unsplash.jpg",
              imageAlt: "passing-a-checkride-at-nextgen-flight-learn-to-fly",
              link: "/training-programs/private-pilot",
              linkText: "Download",
            },
            {
              title: "Gleim Private Pilot Syllabus",
              description: "Structured curriculum for private pilot training.",
              imagePath:
                "/src/assets/jason-mavrommatis-ap3LXI0fPJY-unsplash.jpg",
              imageAlt: "passing-a-checkride-at-nextgen-flight-learn-to-fly",
              link: "/training-programs/private-pilot",
              linkText: "Download",
            },
            {
              title: "Gleim Instrument Pilot Syllabus",
              description: "Detailed syllabus for instrument pilot training.",
              imagePath:
                "/src/assets/jason-mavrommatis-ap3LXI0fPJY-unsplash.jpg",
              imageAlt: "passing-a-checkride-at-nextgen-flight-learn-to-fly",
              link: "/training-programs/private-pilot",
              linkText: "Download",
            },
          ],
        },
      ],
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

export default pilotResources;

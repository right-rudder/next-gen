const pilotResources = {
  data: {
    //SEO Header Stuff
    pageTitle: "Pilot Resource Center | NextGen Flight Academy",
    pageDescription:
      "Access essential resources for pilot training at NextGen Flight Academy. Download FAA publications, study materials, and find out about our comprehensive training programs at Riverside and Redlands airports.",
    pageKeywords:
      "NextGen Flight Academy, FAA publications, Pilot training resources, Flight school Riverside, Flight school Redlands, Private pilot training, Instrument rating, Commercial pilot license, Flight instructor certification, Aviation study materials, Pilot handbooks, Aeronautical charts, Aviation weather, Career track pilot training",

    //top header
    header: {
      imagePath: "/src/assets/pilot-resource-center-at-riverside-airport.jpg",
      imageAlt: "NextGen Flight Academy's Pilot Center at Riverside Airport",
      headerH1: "Pilot Resource Center",
      headerH2:
        "Your home for all important FAA publications while pilot training",
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
              imagePath: "/src/assets/acs-private-pilot-thumb.jpg",
              imageAlt: "FAA ACS Private Pilot Cover",
              link: "https://www.faa.gov/training_testing/testing/acs/private_airplane_acs_6.pdf",
              linkText: "Download",
            },
            {
              title: "",
              description: "Criteria for obtaining an instrument rating.",
              imagePath:
                "/src/assets/Instrument Rating – Airplane Airman Certification Standards.jpg",
              imageAlt: "FAA ACS Instrument Rating Cover",
              link: "https://www.faa.gov/sites/faa.gov/files/training_testing/testing/acs/instrument_rating_acs_change_1.pdf",
              linkText: "Download",
            },
            {
              title: "",
              description: "Requirements for commercial pilot certification.",
              imagePath:
                "/src/assets/Commercial Pilot for Airplane Category Airman Certification Standards.jpg",
              imageAlt: "FAA ACS Commercial Pilot Cover",
              link: "https://www.faa.gov/sites/faa.gov/files/training_testing/testing/acs/commercial_airplane_acs_change_1.pdf",
              linkText: "Download",
            },
            {
              title: "",
              description:
                "Standards for airline transport pilot certification.",
              imagePath:
                "/src/assets/Airline Transport Pilot and Type Rating for Airplane Category Airman Certification Standards.jpg",
              imageAlt: "FAA ACS ATP Cover",
              link: "https://www.faa.gov/sites/faa.gov/files/training_testing/testing/acs/atp_acs.pdf",
              linkText: "Download",
            },
            {
              title: "",
              description:
                "Guidelines for small unmanned aircraft certification.",
              imagePath:
                "/src/assets/Remote Pilot ‒ Small Unmanned Aircraft Systems Airman Certification Standards.jpg",
              imageAlt: "FAA ACS Remote Pilot Cover",
              link: "https://www.faa.gov/training_testing/testing/acs/uas_acs.pdf",
              linkText: "Download",
            },
          ],
        },
        {
          name: "Practical Test Standards (PTS)",
          cards: [
            {
              title: "PTS Flight Instructor Airplane Land and Sea",
              description:
                "Requirements for airplane flight instructor certification.",
              imagePath:
                "/src/assets/jason-mavrommatis-ap3LXI0fPJY-unsplash.jpg",
              imageAlt: "PTS Flight Instructor Airplane Land and Sea",
              link: "https://www.faa.gov/sites/faa.gov/files/training_testing/testing/test_standards/FAA-S-8081-6D.pdf",
              linkText: "Download",
            },
            {
              title: "",
              description:
                "Criteria for instrument flight instructor certification.",
              imagePath:
                "/src/assets/Flight Instructor Instrument Practical Test Standards for Airplane Rating and Helicopter Rating.jpg",
              imageAlt:
                "PTS Flight Instructor Instrument Airplane & Helicopter",
              link: "https://www.faa.gov/sites/faa.gov/files/training_testing/testing/test_standards/FAA-S-8081-9D.pdf",
              linkText: "Download",
            },
            {
              title: "PTS Flight Instructor Airplane Multi-Engine Land and Sea",
              description:
                "Standards for multi-engine flight instructor certification.",
              imagePath:
                "/src/assets/jason-mavrommatis-ap3LXI0fPJY-unsplash.jpg",
              imageAlt:
                "PTS Flight Instructor Airplane Multi-Engine Land and Sea",
              link: "https://www.faa.gov/documentLibrary/media/Advisory_Circular/faa-s-8081-6a.pdf",
              linkText: "Download",
            },
          ],
        },
        {
          name: "Pilot Handbooks",
          cards: [
            {
              title: "",
              description: "General guide to flying airplanes.",
              imagePath: "/src/assets/Airplane Flying Handbook.jpg",
              imageAlt: "Airplane Flying Handbook Cover",
              link: "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/00_afh_full.pdf",
              linkText: "Download",
            },
            {
              title: "",
              description: "Fundamental aviation knowledge for pilots.",
              imagePath:
                "/src/assets/Pilots-Handbook-of-Aeronautical-Knowledge.jpeg",
              imageAlt: "Pilot’s Handbook of Aeronautical Knowledge Cover",
              link: "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf",
              linkText: "Download",
            },
            {
              title: "",
              description: "Essential guide to understanding aviation weather.",
              imagePath: "/src/assets/Aviation Weather Handbook.jpg",
              imageAlt: "Aviation Weather Handbook",
              link: "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28_FAA_Web.pdf",
              linkText: "Download",
            },
            {
              title: "Aviation Weather Services",
              description: "Information on weather services for pilots.",
              imagePath:
                "/src/assets/jason-mavrommatis-ap3LXI0fPJY-unsplash.jpg",
              imageAlt: "NOAA FAA Aviation Weather Services Cover",
              link: "https://www.faa.gov/documentlibrary/media/advisory_circular/ac_00-45g_chg_1-2.pdf",
              linkText: "Download",
            },
            {
              title: "",
              description: "Guide to managing aircraft weight and balance.",
              imagePath: "/src/assets/Weight & Balance Handbook.jpg",
              imageAlt: "Weight & Balance Handbook",
              link: "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-1.pdf",
              linkText: "Download",
            },
            {
              title: "",
              description: "Introduction to advanced avionics systems.",
              imagePath: "/src/assets/FAA-Handbook-Advance-Avionics.png",
              imageAlt: "Advanced Avionics Handbook Cover",
              link: "https://www.govinfo.gov/content/pkg/GOVPUB-TD4-PURL-gpo46261/pdf/GOVPUB-TD4-PURL-gpo46261.pdf",
              linkText: "Download",
            },
            {
              title: "",
              description: "Detailed guide to instrument flight techniques.",
              imagePath: "/src/assets/FAA-Handbook-Instrument.png",
              imageAlt: "Instrument Flying Handbook Cover",
              link: "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-15B.pdf",
              linkText: "Download",
            },
            {
              title: "",
              description:
                "Procedures and best practices for instrument flight.",
              imagePath: "/src/assets/Instrument Procedures Handbook (IPH).jpg",
              imageAlt: "Instrument Procedures Handbook (IPH)",
              link: "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/instrument_procedures_handbook/FAA-H-8083-16B.pdf",
              linkText: "Download",
            },
            {
              title: "",
              description: "Strategies for managing aviation risks.",
              imagePath: "/src/assets/Risk Management Handbook.jpg",
              imageAlt: "Risk Management Handbook",
              link: "https://www.faa.gov/sites/faa.gov/files/2022-06/risk_management_handbook_2A.pdf",
              linkText: "Download",
            },
            {
              title: "",
              description:
                "Resource for flight instructors on teaching methods.",
              imagePath: "/src/assets/aviation-instructors-handbook.jpg",
              imageAlt: "Aviation Instructor’s Handbook",
              link: "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/aviation_instructors_handbook/aviation_instructors_handbook.pdf",
              linkText: "Download",
            },
          ],
        },
        {
          name: "GLEIM Syllabus / Miscellaneous",
          cards: [
            {
              title: "FAR/AIM 2021",
              description:
                "Compilation of Federal Aviation Regulations and Aeronautical Information.",
              imagePath:
                "/src/assets/jason-mavrommatis-ap3LXI0fPJY-unsplash.jpg",
              imageAlt: "passing-a-checkride-at-nextgen-flight-learn-to-fly",
              link: "https://www.faa.gov/Air_traffic/publications/media/AIM-Basic-w-Chg1-and-Chg2-dtd-3-21-24.pdf",
              linkText: "Download",
            },
            {
              title: "Aeronautical Chart User Guide",
              description:
                "Instructions on reading and using aeronautical charts.",
              imagePath:
                "/src/assets/jason-mavrommatis-ap3LXI0fPJY-unsplash.jpg",
              imageAlt: "Aeronautical Chart User Guide Cover",
              link: "https://aeronav.faa.gov/user_guide/20240516/cug-complete.pdf",
              linkText: "Download",
            },
            {
              title: "",
              description: "Structured curriculum for private pilot training.",
              imagePath: "/src/assets/GLEIM-Private-Syllabus.png",
              imageAlt: "GLEIM Private Pilot Syllabus Cover",
              link: "https://drive.google.com/file/d/1RMR4QvhXW4rxY1oDL8T5EtVhqT8AN7Y1/view?usp=sharing",
              linkText: "Download",
            },
            {
              title: "",
              description: "Detailed syllabus for instrument pilot training.",
              imagePath: "/src/assets/GLEIM-Instrument-Syllabus.png",
              imageAlt: "GLEIM Instrument Pilot Syllabus Cover",
              link: "https://drive.google.com/file/d/1zieyqDcMipVl-MDzXIasIHbYj6jH5kAL/view?usp=drive_link",
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

const ourFleet = {
  data: {
    //SEO Header Stuff
    pageTitle: "Our Fleet | NextGen Flight Academy",
    pageDescription:
      "Explore the diverse fleet of training aircraft at NextGen Flight Academy, including Cessna 172s, Piper Cherokee Arrow, Beechcraft Duchess, and more. Learn to fly with the best in Riverside and Redlands, CA.",
    pageKeywords:
      "NextGen Flight Academy, Our fleet, Training aircraft, Cessna 172, Piper Cherokee Arrow, Beechcraft Duchess, Redbird Simulator, Flight training, Pilot training fleet, Riverside Municipal Airport, Redlands Municipal Airport, Learn to fly, Aviation training, Flight school aircraft",

    //top header
    header: {
      imagePath:
        "/src/assets/riverside-airplane-fleet-nextgen-learn-to-fly.jpg",
      imageAlt: "Riverside location fleet of Cessna 172s, Beechcraft Duchess, and Piper Cherokee Arrow",
      headerH1: "Our Fleet",
      headerH2:
        "Learn to fly with the best aircraft in San Bernardino",
    },

    fleet: [
      {
        location: "Riverside Municipal Airport (KRAL)",
        locationDescription:
          "The NextGen Flight Academy fleet includes Cessna 172s, Piper Arrow, Cessna 120, Duchess, and a Cessna 152. Thorough VFR and IFR checkout flights are mandatory. An FAA Flight Review can be added with minimal extra time. Renters and students must carry renters insurance.",
        aircraft: [
          {
            title: "Cessna 172",
            normalRate: 154.99,
            blockRate: 149.99,
            imagePath: "/fleet/N7561G-nextgen-flight-academy-riverside-ca.jpg",
            imageAlt: "passing-a-checkride-at-nextgen-flight-learn-to-fly",
            description:
              "The Cessna 172 Skyhawk is a four-seat, single-engine, high-wing aircraft. Known for its reliability and ease of handling.",
            link: "/our-fleet/cessna-172",
            linkText: "Details",
          },
          {
            title: "Cessna 172L",
            normalRate: 154.99,
            blockRate: 149.99,
            imagePath: "/fleet/N7561G-nextgen-flight-academy-riverside-ca.jpg",
            imageAlt: "instrument-rating-training-at-nextgen-flight-academy",
            description:
              "The Cessna 172L is a variant of the Cessna 172, featuring a more streamlined design and minor performance improvements.",
            link: "/our-fleet/cessna-172L",
            linkText: "Explore",
          },
          {
            title: "Cessna 172H",
            normalRate: 154.99,
            blockRate: 149.99,
            imagePath: "/fleet/N7561G-nextgen-flight-academy-riverside-ca.jpg",
            imageAlt: "commercial-pilot-program-nextgen-flight-academy",
            description:
              "The Cessna 172H, another variant in the 172 series, offers slight performance upgrades over earlier models.",
            link: "/our-fleet/cessna-172H",
            linkText: "Details",
          },
          {
            title: "Cessna 152",
            normalRate: 145.99,
            blockRate: 139.99,
            imagePath: "/fleet/N4793O-nextgen-flight-academy-riverside-ca.jpg",
            imageAlt: "multi-engine-plane-at-redlands-airport",
            description:
              "The Cessna 152 is a two-seat, single-engine aircraft specifically designed for flight training.",
            link: "/our-fleet/cessna-152",
            linkText: "Details",
          },
          {
            title: "Piper Cherokee Arrow",
            normalRate: 179.99,
            blockRate: 174.99,
            imagePath: "/fleet/N3848T-nextgen-flight-academy-riverside-ca.jpg",
            imageAlt: "multi-engine-plane-at-redlands-airport",
            description:
              "The Piper (PA-28R-180) Cherokee Arrow is a single-engine, four-seat aircraft with retractable landing gear and a variable-pitch propeller.",
            link: "/our-fleet/cherokee-arrow",
            linkText: "Details",
          },
          {
            title: "BE76 Beechcraft Duchess",
            normalRate: 319.99,
            blockRate: 304.99,
            imagePath: "/fleet/N6716Z-nextgen-flight-academy-riverside-ca.jpg",
            imageAlt:
              "The Beechcraft Duchess multi-engine rating training aircraft at Riverside Airport (KRAL)",
            description:
              "The BE76 Beechcraft Duchess is a twin-engine aircraft designed for multi-engine training.",
            link: "/our-fleet/beechcraft-duchess",
            linkText: "Details",
          },
          {
            title: "Redbird Simulator",
            normalRate: 74.99,
            blockRate: 69.99,
            imagePath:
              "/fleet/redbird-flight-simulator-nextgen-flight-academy-redlands-riverside-ca-pilot-training-school.jpg",
            imageAlt:
              "NextGen Flight Academy's Redbird SEL / MEL Flight Simulator in Riverside, CA",
            description:
              "Our highly realistic flight training device used for both single-engine (SEL) and multi-engine (MEL) aircraft training.",
            link: "/our-fleet/redbird-simulator",
            linkText: "Details",
          },
        ],
      },
      {
        location: "Redlands Municipal Airport (KREI)",
        locationDescription:
          "The Learn to Fly LLC (sister company of NextGen Flight Academy and our nominal “Redlands location”) fleet includes a Cessna 172 and a Piper Warrior. Thorough VFR checkout flights are mandatory. An FAA Flight Review can be added with minimal extra time.",
        aircraft: [
          {
            title: "Cessna 172",
            normalRate: 154.99,
            blockRate: 149.99,
            imagePath:
              "/fleet/N7815C-nextgen-flight-academy-learn-to-fly-redlands-ca.jpg",
            imageAlt: "passing-a-checkride-at-nextgen-flight-learn-to-fly",
            description:
              "The Cessna 172 Skyhawk is a four-seat, single-engine, high-wing aircraft. Known for its reliability and ease of handling.",
            link: "/our-fleet/cessna-172",
            linkText: "Details",
          },
          {
            title: "Piper Warrior",
            normalRate: 179.99,
            blockRate: 174.99,
            imagePath:
              "/fleet/N415MS-nextgen-flight-academy-learn-to-fly-redlands-ca.jpg",
            imageAlt:
              "NextGen Flight Academy's Learn to Fly Piper Warrior aircraft in Redlands, CA",
            description:
              "The Piper Warrior is a single-engine, four-seat aircraft favored for flight training.",
            link: "/our-fleet/piper-warrior",
            linkText: "Details",
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

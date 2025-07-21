const beechcraftDuchess = {
  data: {
    //SEO Header Stuff
    pageTitle: "BE76 Beechcraft Duchess - Our Fleet | NextGen Flight Academy",
    pageDescription:
      "Fly the BE76 Beechcraft Duchess at NextGen Flight Academy today and earn your more advanced ratings.",
    pageKeywords:
      "Beechcraft Duchess BE76, multi-engine training aircraft, twin-engine airplane training, multi-engine rating training, commercial pilot multi-engine, advanced flight training aircraft, twin-engine flight instruction, retractable gear training, complex aircraft training, multi-engine instrument training, professional pilot training aircraft, airline pilot preparation, multi-engine checkride training, twin-engine proficiency, advanced aviation training, NextGen Flight Academy fleet, commercial pilot aircraft, multi-engine endorsement training, complex aircraft checkout",

    //top header
    header: {
      imagePath:
        "/src/assets/in-flight-cfi-and-student-fly-over-los-angeles-ca.jpg",
      imageAlt: "in-flight-cfi-and-student-fly-over-los-angeles-ca",
      headerH1: "BE76 Beechcraft Duchess",
      headerH2:
        "Explore our BE76 Beechcraft Duchess at NextGen Flight Academy and learn to fly with the best",
    },

    aircraft: {
      title: "BE76 Beechcraft Duchess",
      normalRate: 319.99,
      blockRate: 304.99,
      location: ["Riverside Municipal Airport (RAL)"],
      images: [
        {
          imagePath:
            "/src/assets/side-of-beechcraft-duchess-at-riverside-airport-RAL.jpg",
          imageAlt: "cessna-172-landing-at-airport",
        },
        {
          imagePath:
            "/src/assets/front-of-beechcraft-duchess-at-riverside-airport-RAL.jpg",
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
          docUrl:
            "https://drive.google.com/file/d/1N5U3xpCyCJQgZzyeUQJn7I5kKUBNMw7f/view?usp=drive_link",
        },
        {
          docTitle: "Weight & Balance",
          docUrl:
            "https://drive.google.com/file/d/13wdLmRsjFIhFeFf7iF2y6hB_Nld-EmhQ/view?usp=drive_link",
        },
        {
          docTitle: "Renter’s Agreement",
          docUrl:
            "https://docs.google.com/document/d/1c2laMGTFODpA9KyX-Vfyq2UPJ4dwCZQk/edit?usp=sharing&ouid=110319322993279427090&rtpof=true&sd=true",
        },
      ],
      description:
        "The BE76 Beechcraft Duchess is a twin-engine aircraft designed for multi-engine training. It offers redundancy and increased power, essential for advanced pilot certification. Features include a spacious cabin, advanced avionics, and a robust airframe. The Duchess is known for its excellent handling characteristics and performance, making it a preferred choice for multi-engine flight instruction.",
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

export default beechcraftDuchess;

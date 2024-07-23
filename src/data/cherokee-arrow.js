const cherokeeArrow = {
  data: {
    //SEO Header Stuff
    pageTitle: "PA-28R-180 Cherokee Arrow - Our Fleet | NextGen Flight Academy",
    pageDescription:
      "Fly in one of NextGen Flight Academy's Piper Cherokee Arrow and knock out your commercial and complex training.",
    pageKeywords:
      "NextGen Flight Academy, Flight school Riverside, California; Flight school Redlands, California; Learn to fly Riverside, California; Learn to fly Redlands, California; Pilot training Riverside, California; Pilot training Redlands, California; Flight lessons Riverside, California; Flight lessons Redlands, California; Riverside Redlands flight school; Inland Empire flight school; Flight training; Pilot training; Flight instruction; Flight lessons; Airplane lessons; Private pilot license (PPL) training; Instrument rating training; Commercial pilot license (CPL) training; Certified Flight Instructor (CFI) training",

    //top header
    header: {
      imagePath:
        "/src/assets/in-flight-cfi-and-student-fly-over-los-angeles-ca.jpg",
      imageAlt: "in-flight-cfi-and-student-fly-over-los-angeles-ca",
      headerH1: "PA-28R-180 Cherokee Arrow",
      headerH2:
        "Explore our PA-28R-180 Cherokee Arrow at NextGen Flight Academy and learn to fly with the best.",
    },

    aircraft: {
      title: "PA-28R-180 Cherokee Arrow",
      normalRate: 179.99,
      blockRate: 174.99,
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
          docUrl:
            "https://drive.google.com/file/d/1zkwapiOfWLVAwtNrJrO7CZIIO13f4q0_/view?usp=drive_link",
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
        "The PA-28R-180 Cherokee Arrow is a single-engine, four-seat aircraft with retractable landing gear and a variable-pitch propeller. It is commonly used for complex and commercial pilot training due to these advanced features. The Arrow provides a solid platform for learning about complex aircraft systems, including retractable gear operation and constant-speed propeller management. It also features a low-wing design, which offers good stability and handling characteristics.",
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

export default cherokeeArrow;

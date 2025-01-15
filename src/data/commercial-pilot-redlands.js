const commercialPilotRedlands = {
  data: {
    //SEO Header Stuff
    pageTitle:
      "Commercial Pilot Certificate at Redlands, CA | NextGen Flight Academy",
    pageDescription:
      "Turn your passion into a profession with a Commercial Pilot License from NextGen Flight Academy and Learn to Fly in Redlands, CA. Advanced training for a successful aviation career.",
    pageKeywords:
      "Commercial Pilot License, career track flight training, Redlands flight schools, NextGen Flight Academy, flying lessons Redlands CA, flight schools in Redlands CA, pilot training Redlands, Redlands aviation academy, Redlands flight training, intro flight, demonstration flights, Redlands flight academy, NextGen California, learn to fly California, flight training Redlands",

    topImage: {
      imagePath:
        "/src/assets/commercial-pilot-program-nextgen-flight-academy.jpg",
      imageAlt: "in-flight-cfi-and-student-fly-over-los-angeles-ca",
    },
    program: {
      header: "Commercial Pilot Certificate",
      description: [
        "The Commercial Pilot Certificate (CPL) is your ticket to a professional aviation career. This certification allows you to be compensated for your flying services, opening doors to various opportunities such as charter services, agricultural aviation, and corporate aviation. The training focuses on refining your piloting skills to meet high commercial standards. It includes advanced maneuvers, complex flight operations, and emergency procedures. You must hold a Private Pilot Certificate and an Instrument Rating, complete at least 250 flight hours, and pass a written and practical exam.",
      ],
      availability: "Enroll at Redlands",
      related: [
        {
          title: "Multi-Engine Rating",
          link: "/redlands/multi-engine-rating",
        },
        {
          title: "Certified Flight Instructor",
          link: "/redlands/certified-flight-instructor",
        },
        {
          title: "Complex Endorsement",
          link: "/redlands/complex-endorsement",
        },
      ],
      trainingDetails: {
        description:
          "Our pilot training is distinct for each certification and endorsement. Checkout what you need before getting started, which aircraft you can use to train for this certification, and get a pricing estimate.",
        requisites: [
          "Hold a Private Pilot Certificate",
          "Obtain an Instrument Rating",
          "Hold at least a second-class medical certificate",
        ],
        aircraft: [
          `<a href="/our-fleet/cessna-172" class="hover:underline hover:text-accent">Cessna 172</a>`,
          `<a href="/our-fleet/cherokee-arrow" class="hover:underline hover:text-accent">PA-28R-180 Cherokee Arrow</a>`,
          `<a href="/our-fleet/beechcraft-duchess" class="hover:underline hover:text-accent">BE76 Beechcraft Duchess</a>`,
        ],
        startingPrice: 20000,
        buttonLink: "/enrollment",
        buttonText: "Enroll Now",
      },
    },
    CTAcard: {
      title: "Ready to earn your CPL?",
      imagePath:
        "/src/assets/completing-an-endorsement-at-riverside-airport.jpg",
      imageAlt: "commercial-pilot-program-nextgen-flight-academy",
      link: "/enrollment",
      linkText: "Enroll Now",
      description:
        "Eearn your Commercial Pilot Certificate with NextGen and start flying for a career.",
    },
    underHeader: {
      heading: "How to Enroll at Redlands",
      description:
        "Getting started with NextGen Flight Academy is simple. We welcome students from all over the San Bernadino Valley and beyond!",
      cards: [
        {
          title: "Meet The Team",
          body: "Reach out and connect with a member of the NextGen team. We’re eager to understand your aspirations in aviation and explore how we can support you in achieving those goals.",
          linkText: "Contact Us",
          linkHref: "/contact",
        },
        {
          title: "Visit NextGen",
          body: "Come and see our facilities and fleet at either of our locations. Experience a discovery flight with one of our Certified Flight Instructors (CFIs) and get a real feel of what it’s like to train and fly with NextGen Flight Academy.",
          linkText: "Book a Visit",
          linkHref: "/contact",
        },
        {
          title: "Start Flying",
          body: "Whether you aim to fly as a career or just for the sheer joy of it, NextGen Flight Academy is here to equip you with the skills and knowledge needed to be a safe and proficient pilot.",
          linkText: "Enroll Now",
          linkHref: "/enrollment",
        },
      ],
    },
  },
};
export default commercialPilotRedlands;

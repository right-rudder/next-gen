const highAltitudeRiverside = {
  data: {
    //SEO Header Stuff
    pageTitle:
      "High Altitude Endorsement at Riverside, CA | NextGen Flight Academy",
    pageDescription:
      "Expand your flying capabilities with a High-Altitude Endorsement from NextGen Flight Academy in Riverside, CA. Learn to operate pressurized aircraft safely at high altitudes.",
    pageKeywords:
      "High-Altitude Endorsement, career track flight training, Riverside flight schools, NextGen Flight Academy, flying lessons Riverside CA, flight schools in Riverside CA, pilot training Riverside, Riverside aviation academy, Riverside flight training, intro flight, demonstration flights, Riverside flight academy, NextGen California, learn to fly California, flight training Redlands, high-altitude endorsement Riverside, high-altitude aircraft training Riverside",

    topImage: {
      imagePath: "/src/assets/high-altitude-endorsement.jpg",
      imageAlt: "in-flight-cfi-and-student-fly-over-los-angeles-ca",
    },
    program: {
      header: "High Altitude Endorsement",
      description: [
        "A High-Altitude Endorsement is required for pilots to act as pilot-in-command of pressurized aircraft capable of operating above 25,000 feet MSL. This training is crucial for pilots who aim to fly high-altitude aircraft safely and effectively, preparing them for the unique challenges of high-altitude flight. Note: This endorsement is available only if the student supplies the aircraft.",
      ],
      availability: "Enroll at Riverside",
      related: [
        {
          title: "Multi-Engine Rating",
          link: "/riverside/multi-engine-rating",
        },
        {
          title: "Instrument Rating",
          link: "/riverside/instrument-rating",
        },
        {
          title: "Commercial Pilot Certificate",
          link: "/riverside/commercial-pilot",
        },
      ],
      trainingDetails: {
        description:
          "Our pilot training is distinct for each certification and endorsement. Checkout what you need before getting started, which aircraft you can use to train for this certification, and get a pricing estimate.",
        requisites: [
          "Hold a Private Pilot License (PPL)",
          "Be able to read, speak, write, and understand English",
          "Hold at least a third-class medical certificate",
        ],
        aircraft: ["Pressurized aircraft provided by the student"],
        startingPrice: `Please <a href="/contact" class="hover:underline hover:text-accent"> contact us</a> for a price estimate.`,
        buttonLink: "/enrollment",
        buttonText: "Enroll Now",
      },
    },
    CTAcard: {
      title: "Are you ready to fly higher?",
      imagePath: "/src/assets/high-altitude-endorsement-airplane.png",
      imageAlt: "high-altitude-endorsement",
      link: "/enrollment",
      linkText: "Enroll Now",
      description:
        "Take your training to new heights with a High Altitude Endorsement at NextGen Flight Academy.",
    },
    underHeader: {
      upperHeading: "Enrollment Steps",
      heading: "How to Enroll at Riverside",
      description:
        "Getting started with NextGen Flight Academy is simple. Our Riverside location at Riverside Municipal Airport (KRAL). We welcome students from all over the San Bernadino Valley and beyond!",
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
export default highAltitudeRiverside;

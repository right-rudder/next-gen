const commercialPilot = {
  data: {
    //SEO Header Stuff
    pageTitle: "Commercial Pilot Certificate| NextGen Flight Academy",
    pageDescription:
      "NextGen Flight Academy offers career-track, zero-to-hero pilot training programs at Riverside Municipal Airport (RAL) and Redlands Municipal Airport (REI). With 320 flying days a year and an FAA-approved Gleim syllabus, our academy provides top-tier education and flexible scheduling options to meet the needs of aspiring pilots. Our programs are designed to ensure high-quality instruction and extensive flying lessons, helping students achieve their goals in flight training efficiently and effectively.",
    pageKeywords:
      "NextGen Flight Academy, Flight school Riverside, California; Flight school Redlands, California; Learn to fly Riverside, California; Learn to fly Redlands, California; Pilot training Riverside, California; Pilot training Redlands, California; Flight lessons Riverside, California; Flight lessons Redlands, California; Riverside Redlands flight school; Inland Empire flight school; Flight training; Pilot training; Flight instruction; Flight lessons; Airplane lessons; Private pilot license (PPL) training; Instrument rating training; Commercial pilot license (CPL) training; Certified Flight Instructor (CFI) training",

    topImage: {
      imagePath:
        "/src/assets/commercial-pilot-program-nextgen-flight-academy.jpg",
      imageAlt: "in-flight-cfi-and-student-fly-over-los-angeles-ca",
    },
    program: {
      header: "Commercial Pilot Certificate",
      description: [
        "The Instrument Rating (IR) enables you to fly in various weather conditions by using instruments for navigation. This rating is essential for advancing to commercial piloting and providing more consistent flight opportunities regardless of weather.",
      ],
      availability: "Available at Riverside and Redlands",
      related: [
        {
          title: "Multi-Engine Rating",
          link: "/training-programs/multi-engine-rating",
        },
        {
          title: "Certified Flight Instructor",
          link: "/training-programs/certified-flight-instructor",
        },
        {
          title: "Airline Transport Pilot",
          link: "/training-programs/airline-transport-pilot",
        },
      ],
      trainingDetails: {
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie nibh id dui facilisis, eu sollicitudin quam condimentum. Sed interdum metus dui, sit amet hendrerit eros tempor sed. Mauris eget sapien tellus.",
        requisites: [
          "Be at least 17 years old",
          "Be able to read, speak, write, and understand English",
          "Hold at least a third-class medical certificate",
        ],
        aircraft: ["Cessna 172", "Piper Warrior", "Piper Arrow"],
        startingPrice: 9999,
        buttonLink: "/enrollment",
        buttonText: "Enroll Now",
      },
    },
    CTAcard: {
      title: "Ready to start your journey?",
      imagePath:
        "/src/assets/passing-a-checkride-at-nextgen-flight-learn-to-fly.jpg",
      imageAlt: "passing-a-checkride-at-nextgen-flight-learn-to-fly",
      link: "/enrollment",
      linkText: "Enroll Now",
      description:
        "Begin your training with NextGen Flight Academy and earn your Private Pilot Certificate.",
    },
    underHeader: {
      upperHeading: "Enrollment Steps",
      heading: "How to Enroll at NextGen",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
      cards: [
        {
          title: "Meet The Team",
          body: "Reach out and connect with a member of the NextGen team. We’re eager to understand your aspirations in aviation and explore how we can support you in achieving those dreams.",
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
          linkHref: "/contact",
        },
      ],
    },
  },
};
export default commercialPilot;

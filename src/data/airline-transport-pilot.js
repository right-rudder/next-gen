const airlineTransportPilot = {
  data: {
    //SEO Header Stuff
    pageTitle: "Airline Transport Pilot | NextGen Flight Academy",
    pageDescription:
      "Achieve the highest level of pilot certification with an ATP license from NextGen Flight Academy in Riverside and Redlands, CA. Become an airline captain with our expert training.",
    pageKeywords:
      "Airline Transport Pilot, career track flight training, Riverside flight schools, NextGen Flight Academy, flying lessons Riverside CA, flying lessons Redlands CA, flight schools in Riverside CA, flight schools in Redlands CA, pilot training Riverside, Riverside aviation academy, Riverside flight training, intro flight, demonstration flights, Riverside flight academy, NextGen California, learn to fly Redlands, learn to fly California, flight training Redlands, pilot training Redlands",

    topImage: {
      imagePath: "/src/assets/nextgen-atp-training-program.jpg",
      imageAlt: "in-flight-cfi-and-student-fly-over-los-angeles-ca",
    },
    program: {
      header: "Airline Transport Pilot",
      description: [
        "The Airline Transport Pilot (ATP) certification is the pinnacle of aircraft pilot certifications. It allows you to act as the pilot-in-command of an airline aircraft and is required for those aspiring to be airline captains. This certification is essential for those pursuing a career as an airline pilot, as it demonstrates the highest level of aeronautical knowledge, experience, and skill.",
        "The ATP certification is highly regarded in the aviation industry and opens up numerous career opportunities. Achieving this certification signifies that you have reached the highest standard of piloting proficiency and are capable of handling the most complex flight operations. It requires a deep understanding of advanced aerodynamics, systems management, and operational procedures.",
      ],
      availability: "Available at Riverside and Redlands",
      related: [
        {
          title: "High Performance Endorsement",
          link: "/training-programs/high-performance-endorsement",
        },
        {
          title: "High Altitude Endorsement",
          link: "/training-programs/high-altitude-endorsement",
        },
        {
          title: "Complex Endorsement",
          link: "/training-programs/complex-endorsement",
        },
      ],
      trainingDetails: {
        description:
          "Our pilot training is distinct for each certification and endorsement. Checkout what you need before getting started, which aircraft you can use to train for this certification, and get a pricing estimate.",
        requisites: [
          "Hold a Certified Flight Instructor Certificate",
          "Log 1,500 flight hours",
          "Hold a first-class medical certificate",
        ],
        aircraft: [
          `<a href="/our-fleet/beechcraft-duchess" class="hover:underline hover:text-accent">BE76 Beechcraft Duchess</a>`,
        ],
        startingPrice: 3000,
        buttonLink: "/enrollment",
        buttonText: "Enroll Now",
      },
    },
    CTAcard: {
      title: "Want to become an airline pilot?",
      imagePath:
        "/src/assets/atp-training-at-nextgen-flight-academy-riverside-ca.jpg",
      imageAlt: "atp-training-at-nextgen-flight-academy-riverside-ca",
      link: "/enrollment",
      linkText: "Enroll Now",
      description:
        "Get your ATP Certification with NextGen Flight Academy now.",
    },
    underHeader: {
      upperHeading: "Enrollment Steps",
      heading: "How to Enroll at NextGen",
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
export default airlineTransportPilot;

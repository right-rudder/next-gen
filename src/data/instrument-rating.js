const instrumentRating = {
  data: {
    //SEO Header Stuff
    pageTitle: "Instrument Rating | NextGen Flight Academy",
    pageDescription:
      "Enhance your flying skills with an Instrument Rating from NextGen Flight Academy in Riverside and Redlands, CA. Train to fly in any weather with expert guidance and modern simulators.",
    pageKeywords:
      "Instrument Rating, career track flight training, Riverside flight schools, NextGen Flight Academy, flying lessons Riverside CA, flying lessons Redlands CA, flight schools in Riverside CA, flight schools in Redlands CA, pilot training Riverside, Riverside aviation academy, Riverside flight training, intro flight, demonstration flights, Riverside flight academy, NextGen California, learn to fly Redlands, learn to fly California, flight training Redlands, pilot training Redlands",

    topImage: {
      imagePath: "/src/assets/billy-huynh-v9bnfMCyKbg-unsplash.jpg",
      imageAlt: "in-flight-cfi-and-student-fly-over-los-angeles-ca",
    },
    program: {
      header: "Instrument Rating",
      description: [
        "An Instrument Rating (IR) enhances your flying skills by allowing you to fly in various weather conditions using only your aircraft's instruments. This rating is critical for increasing flight safety and expanding your flying opportunities. It prepares you to handle flights in clouds, fog, and low visibility, making you a more versatile and capable pilot. To earn this rating, you must already hold a Private Pilot Certificate and complete additional flight training focused on instrument navigation. The training includes at least 40 hours of instrument flight time and passing both a written and a practical exam.",
      ],
      availability: "Available at Riverside and Redlands",
      related: [
        {
          title: "Commercial Pilot Certificate",
          link: "/training-programs/commercial-pilot",
        },
        {
          title: "Multi-Engine Rating",
          link: "/training-programs/multi-engine-rating",
        },
        {
          title: "High Performance Endorsement",
          link: "/training-programs/high-performance-endorsement",
        },
      ],
      trainingDetails: {
        description:
          "Our pilot training is distinct for each certification and endorsement. Checkout what you need before getting started, which aircraft you can use to train for this certification, and get a pricing estimate.",
        requisites: [
          "Hold a Private Pilot Certificate",
          "Be able to read, speak, write, and understand English",
          "Hold at least a third-class medical certificate",
        ],
        aircraft: ["Cessna 172 series", "PA-28R-180 Cherokee Arrow", "Redbird Simulator (SEL/MEL)"],
        startingPrice: "14,000",
        buttonLink: "/enrollment",
        buttonText: "Enroll Now",
      },
    },
    CTAcard: {
      title: "Let's earn an Instrument Rating?",
      imagePath:
            "/src/assets/instrument-rating-training-at-nextgen-flight-academy.jpg",
          imageAlt: "instrument-rating-training-at-nextgen-flight-academy",
      link: "/enrollment",
      linkText: "Enroll Now",
      description:
        "Reach out to NextGen Flight Academy and work toward your Instrument Rating.",
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

export default instrumentRating;

const certifiedFlightInstructor = {
  data: {
    //SEO Header Stuff
    pageTitle: "Certified Flight Instructor| NextGen Flight Academy",
    pageDescription:
      "Become a Certified Flight Instructor with NextGen Flight Academy in Riverside and Redlands, CA. Train future pilots and build your aviation career with our comprehensive CFI program.",
    pageKeywords:
      "Certified Flight Instructor, career track flight training, Riverside flight schools, NextGen Flight Academy, flying lessons Riverside CA, flying lessons Redlands CA, flight schools in Riverside CA, flight schools in Redlands CA, pilot training Riverside, Riverside aviation academy, Riverside flight training, intro flight, demonstration flights, Riverside flight academy, NextGen California, learn to fly Redlands, learn to fly California, flight training Redlands, pilot training Redlands",

    topImage: {
      imagePath:
        "/src/assets/nextgen-flight-academy-cfi-team-riverside-learn-to-fly-redlands.jpg",
      imageAlt: "in-flight-cfi-and-student-fly-over-los-angeles-ca",
    },
    program: {
      header: "Certified Flight Instructor",
      description: [
        "Becoming a Certified Flight Instructor (CFI) allows you to share your passion for aviation by teaching others to fly. This certification provides an opportunity to build flight hours and gain experience while opening pathways to advanced piloting careers. CFIs play a critical role in the aviation industry by ensuring that new pilots receive high-quality training and develop the necessary skills for safe and effective flying. Many CFIs eventually move on to careers as commercial or airline pilots, making this an excellent step for those pursuing long-term aviation goals.",
        "The Certified Flight Instructor - Instrument (CFII) rating allows you to teach instrument flying, enabling students to fly safely in various weather conditions and low visibility. This certification is essential for those who wish to specialize in instrument training and ensures that new pilots are well-equipped to handle instrument flight rules (IFR).",
        "Becoming a Multi-Engine Instructor (MEI) allows you to teach students how to operate aircraft with multiple engines, preparing them for advanced piloting roles. This certification builds on your existing flight instructor experience and adds the ability to train others in more complex flight operations, enhancing your skills and expanding your teaching opportunities.",
      ],
      availability: "Available at Riverside and Redlands",
      related: [
        {
          title: "Multi-Engine Rating",
          link: "/training-programs/multi-engine-rating",
        },
        {
          title: "Airline Transport Pilot",
          link: "/training-programs/airline-transport-pilot",
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
          "Hold a Commercial Pilot License (CPL)",
          "Hold a valid FAA second-class medical certificate",
          "Suggested to hold an Instrument Rating (IR)",
        ],
        aircraft: [
          `<a href="/our-fleet/cessna-172" class="hover:underline hover:text-accent">Cessna 172</a>`,
          `<a href="/our-fleet/cherokee-arrow" class="hover:underline hover:text-accent">PA-28R-180 Cherokee Arrow</a>`,
          `<a href="/our-fleet/redbird-simulator" class="hover:underline hover:text-accent">Redbird Simulator (SEL/MEL)</a>`,
        ],
        startingPrice: 5000,
        buttonLink: "/enrollment",
        buttonText: "Enroll Now",
      },
    },
    CTAcard: {
      title: "Teach the next class",
      imagePath:
        "/src/assets/nextgen-flight-academy-cfi-team-riverside-learn-to-fly-redlands.jpg",
      imageAlt: "flight-instructor-training-redlands-ca",
      link: "/enrollment",
      linkText: "Enroll Now",
      description: "Become a CFI and start instructing other students!",
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
export default certifiedFlightInstructor;

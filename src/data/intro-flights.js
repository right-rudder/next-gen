const introFlights = {
  data: {
    //SEO Header Stuff
    pageTitle: "Intro Flights | NextGen Flight Academy",
    pageDescription:
      "Experience the thrill of flying with NextGen Flight Academy's intro flights. Choose from local flights, flight lessons, and scenic routes over Disneyland, Dana Point, and Catalina Island.",
    pageKeywords:
      "NextGen Flight Academy, Intro flights, Discovery flights, Local intro flight, Flight lesson, Disneyland intro flight, Dana Point intro flight, Catalina intro flight, Scenic flights, Flight training, Learn to fly, Aviation experience",

    //top header
    header: {
      imagePath:
        "/src/assets/on-an-intro-flight-with-nextgen-flight-academy.jpg",
      imageAlt: "in-flight-cfi-and-student-fly-over-los-angeles-ca",
      headerH1: "Intro Flights",
    },
    flights: {
      upperHeading: "Explore",
      heading: "Choose your path to the skies",
      cards: [
        {
          title: `Local Intro Flight<br><span class="font-bold text-accent">$129.99<span>`,
          description:
            "Take a 30-minute flight in a Cessna 172 over beautiful Riverside and Lake Mathews. Learn how to fly the plane and let our FAA-Certified Flight Instructors show you the ropes of being in the air! Ground and flight portions will last approximately 1 hour. Take flight today!",
          imagePath:
            "/src/assets/student-taking-a-discovery-flight-at-nextgen-flight-academy.jpg",
          imageAlt: "flying the duchess at riverside ca flight school nextgen",
          link: "/local-intro-flight",
          linkText: "Book Now",
        },
        {
          title: `Intro Flight Lesson<br><span class="font-bold text-accent">$129.99<span>`,
          description:
            "A 30-minute flight in one of our Cessna 172’s, 30-minutes of flying in our Redbird Flight Simulator, and 15-minutes of Ground Instruction.",
          imagePath:
            "/src/assets/in-flight-cfi-and-student-fly-over-los-angeles-ca.jpg",
          imageAlt: "flying the duchess at riverside ca flight school nextgen",
          link: "/intro-flight-lesson",
          linkText: "Book Now",
        },
        {
          title: `Disneyland Intro Flight<br><span class="font-bold text-accent">$204.00<span>`,
          description:
            "The Disneyland Intro Flight includes 15 minutes of ground instruction with an FAA-Certified Flight Instructor to review the basics of flight including flight controls and airplane components.",
          imagePath: "/src/assets/barbara-zandoval-V8_isx1T0hM-unsplash.jpg",
          imageAlt: "flying the duchess at riverside ca flight school nextgen",
          link: "/disneyland-intro-flight",
          linkText: "Book Now",
        },
        {
          title: `Hollywood Sign Intro Flight<br><span class="font-bold text-accent">$220<span>`,
          description:
            "The Hollywood Sign Intro Flight includes 15 minutes of ground instruction with an FAA-Certified Flight Instructor to review the basics of flight including flight controls and airplane components.",
          imagePath:
            "/src/assets/nextgen-flight-academy-hollywood-sign-intro-flight.jpg",
          imageAlt: "flying over the hollywood sign in a cessna 172",
          link: "/hollywood-sign-intro-flight",
          linkText: "Book Now",
        },
        {
          title: `Dana Point Intro Flight<br><span class="font-bold text-accent">$320<span>`,
          description:
            "The Dana Point Intro Flight includes 15 minutes of ground instruction with an FAA-Certified Flight Instructor to review the basics of flight including flight controls and airplane components.",
          imagePath: "/src/assets/spencer-bergen-T38QxgsDQOs-unsplash.jpg",
          imageAlt: "flying the duchess at riverside ca flight school nextgen",
          link: "/dana-point-intro-flight",
          linkText: "Book Now",
        },
        {
          title: `Catalina Intro Flight<br><span class="font-bold text-accent">$320<span>`,
          description:
            "The Catalina Intro Flight includes 15 minutes of ground instruction with an FAA-Certified Flight Instructor. The instructor will then take up the prospective student and up to two friends in a Cessna 172 out of the Riverside airport to Catalina for a 90-minute intro flight.",
          imagePath: "/src/assets/benoit-debaix-f1Wl5gYejUM-unsplash.jpg",
          imageAlt: "flying the duchess at riverside ca flight school nextgen",
          link: "/catalina-intro-flight",
          linkText: "Book Now",
        },
      ],
    },
  },
};

export default introFlights;

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
          title: `Local Intro Flight<br><span class="font-bold text-accent">$99.99<span>`,
          imagePath:
            "/src/assets/student-taking-a-discovery-flight-at-nextgen-flight-academy.jpg",
          imageAlt: "flying the duchess at riverside ca flight school nextgen",
          link: "/local-intro-flight",
          linkText: "Book Now",
        },
        {
          title: `Intro Flight Lesson<br><span class="font-bold text-accent">$129.99<span>`,
          imagePath:
            "/src/assets/in-flight-cfi-and-student-fly-over-los-angeles-ca.jpg",
          imageAlt: "flying the duchess at riverside ca flight school nextgen",
          link: "/intro-flight-lesson",
          linkText: "Book Now",
        },
        {
          title: `Disneyland Intro Flight<br><span class="font-bold text-accent">$204.00<span>`,
          imagePath: "/src/assets/barbara-zandoval-V8_isx1T0hM-unsplash.jpg",
          imageAlt: "flying the duchess at riverside ca flight school nextgen",
          link: "/disneyland-intro-flight",
          linkText: "Book Now",
        },
        {
          title: `Dana Point Intro Flight<br><span class="font-bold text-accent">$220.00<span>`,
          imagePath: "/src/assets/spencer-bergen-T38QxgsDQOs-unsplash.jpg",
          imageAlt: "flying the duchess at riverside ca flight school nextgen",
          link: "/dana-point-intro-flight",
          linkText: "Book Now",
        },
        {
          title: `Catalina Intro Flight<br><span class="font-bold text-accent">$295.00<span>`,
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

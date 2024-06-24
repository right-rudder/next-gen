const homePage = {
  data: {
    //SEO Header Stuff
    pageTitle: "Pilot Training in Riverside, CA | NextGen Flight Academy",
    pageDescription: "meta description goes here",
    pageKeywords:
      "add keywords here.  take a look at the consts.ts file for more guidance on keywords",

    //top header
    header: {
      imagePath: "/src/assets/oskar-kadaksoo-f_rLDn5m2XQ-unsplash.jpg",
      imageAlt: "Plane flying overhead XYZ location at ABC Flight School",
      headerH1: "NextGen Flight Academy",
      headerH2: "Riverside's best flight school",
    },

    gridNav: {
      upperHeading: "Explore",
      heading: "NextGen Flight Academy",
      cards: [
        {
          title: "First-Time Pilots",
          imagePath: "/src/assets/billy-huynh-v9bnfMCyKbg-unsplash.jpg",
          imageAlt: "Lorem Ipsum Dolor Sit Amet",
          link: "/new-to-flying",
          description: "Learn to fly with our experienced instructors.",
        },
        {
          title: "Student Reviews",
          imagePath: "/src/assets/dominik-dancs-3Eqc3Ph4oRg-unsplash.jpg",
          imageAlt: "Lorem Ipsum Dolor Sit Amet",
          link: "/",
          description: "Learn to fly with our experienced instructors.",
        },
        {
          title: "Career Track Pilots",
          imagePath: "/src/assets/jason-mavrommatis-ap3LXI0fPJY-unsplash.jpg",
          imageAlt: "Lorem Ipsum Dolor Sit Amet",
          link: "/training-programs",
          description: "Learn to fly with our experienced instructors.",
        },
        {
          title: "Meet Our Fleet",
          imagePath: "/src/assets/tom-barrett-hgGplX3PFBg-unsplash.jpg",
          imageAlt: "Lorem Ipsum Dolor Sit Amet",
          link: "/",
          description: "Learn to fly with our experienced instructors.",
        },
      ],
    },

    discoveryCTA: {
      heading: "Start Now",
      text: "Schedule a discovery flight and see if flying is for you.",
      imagePath: "/src/assets/nextgen-flight-academy-discovery-flight.jpg",
      imageAlt: "NextGen Flight Academy Discovery Flight",
      buttonText: "Schedule a Discovery Flight",
      buttonLink: "/contact",
    },

    quizCTA: {
      heading: "Quiz Time",
      text: "Do you have what it takes to be a pilot? Take our quiz and find out.",
      imagePath: "/src/assets/jason-mavrommatis-ap3LXI0fPJY-unsplash.jpg",
      imageAlt: "NextGen Flight Academy Discovery Flight",
      buttonText: "Take the Quiz",
      buttonLink: "/contact",
    },

    programs: {
      upperHeading: "Explore",
      heading: "Our Programs",
      cards: [
        {
          title: "Private Pilot",
          imagePath: "/src/assets/billy-huynh-v9bnfMCyKbg-unsplash.jpg",
          imageAlt: "Lorem Ipsum Dolor Sit Amet",
          description:
            "Lorem Ipsum Dolor Sit Amet, consectetur adipiscing elit.",
          link: "/training-programs",
        },
        {
          title: "Instrument Rating",
          imagePath: "/src/assets/dominik-dancs-3Eqc3Ph4oRg-unsplash.jpg",
          imageAlt: "Lorem Ipsum Dolor Sit Amet",
          description:
            "Lorem Ipsum Dolor Sit Amet, consectetur adipiscing elit.",
          link: "/training-programs",
        },
        {
          title: "Commercial Pilot",
          imagePath: "/src/assets/jason-mavrommatis-ap3LXI0fPJY-unsplash.jpg",
          imageAlt: "Lorem Ipsum Dolor Sit Amet",
          description:
            "Lorem Ipsum Dolor Sit Amet, consectetur adipiscing elit.",
          link: "/training-programs",
        },
        {
          title: "Multi-Engine Rating",
          imagePath: "/src/assets/tom-barrett-hgGplX3PFBg-unsplash.jpg",
          imageAlt: "Lorem Ipsum Dolor Sit Amet",
          description:
            "Lorem Ipsum Dolor Sit Amet, consectetur adipiscing elit.",
          link: "/training-programs",
        },
        {
          title: "Airline Transport Pilot",
          imagePath: "/src/assets/billy-huynh-v9bnfMCyKbg-unsplash.jpg",
          imageAlt: "Lorem Ipsum Dolor Sit Amet",
          description:
            "Lorem Ipsum Dolor Sit Amet, consectetur adipiscing elit.",
          link: "/training-programs",
        },
        {
          title: "Flight Instructor (CFI, CFII, MEI)",
          imagePath: "/src/assets/dominik-dancs-3Eqc3Ph4oRg-unsplash.jpg",
          imageAlt: "Lorem Ipsum Dolor Sit Amet",
          description:
            "Lorem Ipsum Dolor Sit Amet, consectetur adipiscing elit.",
          link: "/training-programs",
        },
        {
          title: "High Performance Endorsement",
          imagePath: "/src/assets/jason-mavrommatis-ap3LXI0fPJY-unsplash.jpg",
          imageAlt: "Lorem Ipsum Dolor Sit Amet",
          description:
            "Lorem Ipsum Dolor Sit Amet, consectetur adipiscing elit.",
          link: "/training-programs",
        },
        {
          title: "High Altitude Endorsement",
          imagePath: "/src/assets/tom-barrett-hgGplX3PFBg-unsplash.jpg",
          imageAlt: "Lorem Ipsum Dolor Sit Amet",
          description:
            "Lorem Ipsum Dolor Sit Amet, consectetur adipiscing elit.",
          link: "/training-programs",
        },
        {
          title: "Complex​ Endorsement",
          imagePath: "/src/assets/billy-huynh-v9bnfMCyKbg-unsplash.jpg",
          imageAlt: "Lorem Ipsum Dolor Sit Amet",
          description:
            "Lorem Ipsum Dolor Sit Amet, consectetur adipiscing elit.",
          link: "/training-programs",
        },
      ],
    },

    testimonials: {
      upperHeading: "Testimonials",
      heading: "Our Students Love Us",
      headingText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt tincidunt. Nullam nec purus nec nunc tincidunt tincidunt. Nullam nec purus nec nunc tincidunt tincidunt.",
      reviews: [
        {
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt tincidunt. Nullam nec purus nec nunc tincidunt tincidunt. Nullam nec purus nec nunc tincidunt tincidunt.",
          author: "John Doe",
        },
        {
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt tincidunt. Nullam nec purus nec nunc tincidunt tincidunt. Nullam nec purus nec nunc tincidunt tincidunt.",
          author: "Jane Doe",
        },
        {
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt tincidunt. Nullam nec purus nec nunc tincidunt tincidunt. Nullam nec purus nec nunc tincidunt tincidunt.",
          author: "John Foe",
        },
        {
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt tincidunt. Nullam nec purus nec nunc tincidunt tincidunt. Nullam nec purus nec nunc tincidunt tincidunt.",
          author: "Jane Foe",
        },
        {
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt tincidunt. Nullam nec purus nec nunc tincidunt tincidunt. Nullam nec purus nec nunc tincidunt tincidunt.",
          author: "Peter Parker",
        },
        {
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt tincidunt. Nullam nec purus nec nunc tincidunt tincidunt. Nullam nec purus nec nunc tincidunt tincidunt.",
          author: "Tony Stark",
        },
      ],
    },

    //contentOne
    contentOneImage: "../assets/nextgen-flight-academy-discovery-flight.jpg",
    contentOneImageAlt: "",
    contentOneImageCaption: "",
    contentOneH3: "",
    contentOneParagraphs: ["", ""],
    contentOneButtonText: "",
    contentOneButtonLink: "",

    //contentTwo
    contentTwoImage: "",
    contentTwoImageAlt: "",
    contentTwoImageCaption: "",
    contentTwoH3: "",
    contentTwoParagraphs: ["", ""],
    contentTwoButtonText: "",
    contentTwoButtonLink: "",

    //contentThree
    contentThreeImage: "",
    contentThreeImageAlt: "",
    contentThreeImageCaption: "",
    contentThreeH3: "",
    contentThreeParagraphs: ["", ""],
    contentThreeButtonText: "",
    contentThreeButtonLink: "",

    //Bottom CTAOne
    CTAOneH2: "",
    CTAOneH3: "",
    CTAOneButtonText: "",
    CTAOneButtonLink: "",

    //Bottom CTATwo
    CTATwoH2: "",
    CTATwoH3: "",
    CTATwoButtonText: "",
    CTATwoButtonLink: "",
  },
};

export default homePage;

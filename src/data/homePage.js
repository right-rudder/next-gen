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

    gMaps: [
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.627392285859!2d-117.44849982418127!3d33.95071037319536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcb1373a59a741%3A0xad098c31f424e525!2sNextGen%20Flight%20Academy!5e0!3m2!1sen!2sco!4v1718894671435!5m2!1sen!2sco",
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.450303921188!2d-117.14332642417573!3d34.08360297314522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db55373e387eab%3A0xa91f19e63a0daf06!2sNextGen%20Flight%20Academy%20-%20Redlands!5e0!3m2!1sen!2sco!4v1719269983050!5m2!1sen!2sco",
    ],

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

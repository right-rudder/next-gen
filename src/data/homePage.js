const homePage = {
  data: {
    //SEO Header Stuff
    pageTitle: "Pilot Training in Riverside, CA | NextGen Flight Academy",
    pageDescription:
      "NextGen Flight Academy offers career-track, zero-to-hero pilot training programs at Riverside Municipal Airport (RAL) and Redlands Municipal Airport (REI). With 320 flying days a year and an FAA-approved Gleim syllabus, our academy provides top-tier education and flexible scheduling options to meet the needs of aspiring pilots. Our programs are designed to ensure high-quality instruction and extensive flying lessons, helping students achieve their goals in flight training efficiently and effectively.",
    pageKeywords:
      "NextGen Flight Academy, Flight school Riverside, California; Flight school Redlands, California; Learn to fly Riverside, California; Learn to fly Redlands, California; Pilot training Riverside, California; Pilot training Redlands, California; Flight lessons Riverside, California; Flight lessons Redlands, California; Riverside Redlands flight school; Inland Empire flight school; Flight training; Pilot training; Flight instruction; Flight lessons; Airplane lessons; Private pilot license (PPL) training; Instrument rating training; Commercial pilot license (CPL) training; Certified Flight Instructor (CFI) training",

    //top header
    header: {
      imagePath:
        "/src/assets/nextgen-flight-academy-riverside-redlands-california-home.webp",
      imageAlt: "Plane flying overhead XYZ location at ABC Flight School",
      headerH1: "NextGen Flight Academy",
      headerH2: "Premier Pilot Training from Riverside to Redlands",
    },

    gMaps: [
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.627392285859!2d-117.44849982418127!3d33.95071037319536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcb1373a59a741%3A0xad098c31f424e525!2sNextGen%20Flight%20Academy!5e0!3m2!1sen!2sco!4v1718894671435!5m2!1sen!2sco",
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.450303921188!2d-117.14332642417573!3d34.08360297314522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db55373e387eab%3A0xa91f19e63a0daf06!2sNextGen%20Flight%20Academy%20-%20Redlands!5e0!3m2!1sen!2sco!4v1719269983050!5m2!1sen!2sco",
    ],

    gridNav: {
      upperHeading: "Quick Links",
      heading: "Get to Know NextGen",
      cards: [
        {
          title: "First-Time Pilots",
          imagePath: "/src/assets/student-pilot-at-nextgen-flight-academy.jpg",
          imageAlt: "student-pilot-at-nextgen-flight-academy",
          link: "/new-to-flying",
          description: "Learn to fly with our experienced instructors.",
        },
        {
          title: "Student Reviews",
          imagePath:
            "/src/assets/student-and-cfi-at-nextgen-head-office-in-riverside-ca.jpg",
          imageAlt:
            "src/assets/student-and-cfi-at-nextgen-head-office-in-riverside-ca",
          link: "#testimonials",
          description: "Learn to fly with our experienced instructors.",
        },
        {
          title: "Career Track Pilots",
          imagePath:
            "/src/assets/pilots-and-cfi-at-riverside-california-airport-at-nextgen.jpg",
          imageAlt: "pilots-and-cfi-at-riverside-california-airport-at-nextgen",
          link: "/training-programs",
          description: "Learn to fly with our experienced instructors.",
        },
        {
          title: "Book a Discovery Flight",
          imagePath:
            "/src/assets/nextgen-flight-academy-fleet-at-riverside-ca.jpg",
          imageAlt: "nextgen-flight-academy-fleet-at-riverside-ca",
          link: "/",
          description: "Learn to fly with our experienced instructors.",
        },
      ],
    },

    discoveryCTA: {
      heading: "Fly Today",
      text: "Interested in what it’s like to be in the pilot seat? Schedule an introductory flight with us to try it out!",
      imagePath:
        "/src/assets/student-taking-a-discovery-flight-at-nextgen-flight-academy.jpeg",
      imageAlt: "student-taking-a-discovery-flight-at-nextgen-flight-academy",
      buttonText: "Schedule an Intro Flight",
      buttonLink: "/contact",
    },

    quizCTA: {
      heading: "Have What It Takes?",
      text: "Learn what it’s like to fly, and see if you have what it takes to be a pilot!",
      imagePath:
        "/src/assets/completing-a-checkride-at-nextgen-flight-academy.jpg",
      imageAlt: "completing-a-checkride-at-nextgen-flight-academy",
      buttonText: "Take the Quiz",
      buttonLink: "/quiz-form",
    },

    programs: {
      upperHeading: "Explore",
      heading: "Our Programs",
      cards: [
        {
          title: "Private Pilot Certificate",
          imagePath:
            "/src/assets/passing-a-checkride-at-nextgen-flight-learn-to-fly.jpg",
          imageAlt: "passing-a-checkride-at-nextgen-flight-learn-to-fly",
          description:
            "The Private Pilot Certificate (PPL) is your first step in flight training, allowing you to fly solo or with passengers under Visual Flight Rules (VFR). It enables you to rent and pilot aircraft for personal use, recreational flying, and travel.",
          link: "/training-programs",
        },
        {
          title: "Instrument Rating",
          imagePath:
            "/src/assets/instrument-rating-training-at-nextgen-flight-academy.jpg",
          imageAlt: "instrument-rating-training-at-nextgen-flight-academy",
          description:
            "The Instrument Rating (IR) enables you to fly in various weather conditions by using instruments for navigation. This rating is essential for advancing to commercial piloting and providing more consistent flight opportunities regardless of weather.",
          link: "/training-programs",
        },
        {
          title: "Commercial Pilot Certificate",
          imagePath:
            "/src/assets/commercial-pilot-program-nextgen-flight-academy.jpg",
          imageAlt: "commercial-pilot-program-nextgen-flight-academy",
          description:
            "The Commercial Pilot Certificate (CPL) allows you to earn money as a pilot. It opens career paths in commercial aviation, such as flight instruction, banner towing, and aerial photography, laying the foundation for airline transport roles.",
          link: "/training-programs",
        },
        {
          title: "Multi-Engine Rating",
          imagePath:
            "/src/assets/multi-engine-aircraft-at-nextgen-flight-academy.jpg",
          imageAlt: "multi-engine-plane-at-redlands-airport",
          description:
            "The Multi-Engine Rating (ME) qualifies you to fly aircraft with more than one engine. It is crucial for piloting more complex and faster aircraft, which is essential for commercial and airline transport pilots.",
          link: "/training-programs",
        },
        {
          title: "Flight Instructor (CFI, CFII, MEI)",
          imagePath: "/src/assets/flight-instructor-training-redlands-ca.jpg",
          imageAlt: "flight-instructor-training-redlands-ca",
          description:
            "Becoming a Flight Instructor allows you to teach others to fly. This role not only helps build your flight hours but also opens career opportunities in aviation education. You can specialize as a CFI, Certified Flight Instructor-Instrument (CFII), or Multi-Engine Instructor (MEI).",
          link: "/training-programs",
        },
        {
          title: "Airline Transport Pilot",
          imagePath:
            "/src/assets/atp-training-at-nextgen-flight-academy-riverside-ca.jpg",
          imageAlt: "atp-training-at-nextgen-flight-academy-riverside-ca",
          description:
            "The Airline Transport Pilot (ATP) certification is the highest level of pilot certification. It qualifies you to command multi-crew aircraft and pursue top-tier positions with airlines, corporate flight departments, and cargo carriers.",
          link: "/training-programs",
        },
        {
          title: "High Performance Endorsement",
          title: "High Performance Endorsement",
          imagePath: "/src/assets/planes-flying-over-san-bernadino-ca.jpg",
          imageAlt: "planes-flying-over-san-bernadino-ca",
          description: `<small class="uppercase italic font-bold text-accent">Must provide your own aircraft.</small><br>The High Performance Endorsement allows you to fly aircraft with an engine of more than 200 horsepower. It grants access to faster, more powerful aircraft.`,
          link: "/training-programs",
        },
        {
          title: "High Altitude Endorsement",
          imagePath: "/src/assets/high-altitude-endorsement.jpg",
          imageAlt: "high-altitude-endorsement",
          description: `<small class="uppercase italic font-bold text-accent">Must provide your own aircraft.</small><br>The High Altitude Endorsement prepares you to operate pressurized aircraft above 25,000 feet. It allows you to fly higher and more efficient routes, often necessary for certain commercial operations.`,
          link: "/training-programs",
        },
        {
          title: "Complex Endorsement",
          imagePath:
            "/src/assets/completing-an-endorsement-at-riverside-airport.jpg",
          imageAlt: "completing-an-endorsement-at-riverside-airport",
          description:
            "The Complex Endorsement allows you to fly aircraft with retractable landing gear, flaps, and a controllable pitch propeller. It is required for operating more sophisticated aircraft, which is essential for many advanced piloting roles.",
          link: "/training-programs",
        },
      ],
    },

    testimonials: {
      upperHeading: "The NextGen Family",
      heading: "Our Students Love Us",
      headingText: [
        "While our main goal is to train future pilots safely and effectively, it’s important to us at NextGen Flight Academy that our students have a fun and comfortable environment to practice in.",
        "Check out what our students and guests have to say about their experiences at NextGen.",
      ],
      buttonText: "Leave Us a Review",
      buttonLink:
        "https://www.google.com/search?q=nextgen+flight+academy+google&sca_esv=cfcd3706826e13a2&sca_upv=1&ei=M815Zp-MOaPV1sQPxuyZsAM&ved=0ahUKEwjf8ZbbgPWGAxWjqpUCHUZ2BjYQ4dUDCBA&uact=5&oq=nextgen+flight+academy+google&gs_lp=Egxnd3Mtd2l6LXNlcnAiHW5leHRnZW4gZmxpZ2h0IGFjYWRlbXkgZ29vZ2xlMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYogQYiQVIkg9QkAJYsw1wAXgBkAEAmAFvoAGWBaoBAzcuMbgBA8gBAPgBAZgCCaACsAXCAgoQABiwAxjWBBhHwgIKECEYoAEYwwQYCsICBBAhGArCAggQIRigARjDBJgDAIgGAZAGCJIHAzguMaAHuxw&sclient=gws-wiz-serp#lrd=0x80dcb1373a59a741:0xad098c31f424e525,1",
      reviews: [
        {
          body: "It has gotten a little busy (but very workable!) at NextGen, and for good reason. They are professionals, and they go the extra mile to help you. If you want a personable, responsive school that will train you right, address any questions and get you there, you've come to the right place. I've had great experiences with all of the staff and instructors, they always raise the bar and amaze me. The instructors will always level with you, and encourage you, and it's a rare talent to do both consistently. And remember: Anyone named Amanda has got your back. :)",
          author: "Ryan P.",
        },
        {
          body: "Unreal experience! Been wanting to fly planes since I was a kid, and man was this an incredible treat. Got to take off, pull some G's, and land a real plane all in my first lesson! Great price for a great experience, with a great instructor!",
          author: "Matt L.",
        },
        {
          body: "Next Gen Flight Academy is a spot I will always recommend!! My kids and I showed up at the Riverside location this afternoon… It was awesome! The flight lasted a little over an hour round trip. And our instructor let us know that we were flying 120 mph on our way back. It was an overall really great experience. I'm definitely doing another 'intro flight' to Catalina Island next time!!!",
          author: "Roseanna T. ",
        },
        {
          body: "Had the opportunity to fly today with Nextgen Flight Academy and I must say I’m falling short of words to describe the experience I had. It was just so great and exhilarating. I took the intro flight and simulator program. My flight instructor Mr. Devin was so friendly and helped me all the way from the simulator till the actual flight experience. I was actually surprised to know that not many knew about this cool place.",
          author: "Gunjan A.",
        },
        {
          body: "I set up a flight experience for my dad, who back in the day, had his pilot's license. I thought it would be a fun experience to celebrate his retirement. The instructor treated my dad like family, gave him a tour of the facility,  and made sure he was happy during the flight. My dad had the best experience ever and has sent over a ton of beautiful pictures! I’m definitely going to be sending my dad back for Father’s Day or another holiday!",
          author: "Alexandria M.",
        },
        {
          body: "For 4.5 years, I have been actively pursuing my instrument rating license. I have been through many institutions, instructors, and programs. However, one terrible experience after another had left me greatly discouraged and with huge losses of time and money. It wasn’t until I started at NextGen that I found a place with people who would invest in, cultivate, and add to my already hard-earned knowledge and skills. Brandon, Aleksa, Luis, and the rest of the staff genuinely cared for me, treated me with respect, and didn’t take advantage of me as a customer/student.",
          author: "Sam M.",
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

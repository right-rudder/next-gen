const homePage = {
  data: {
    //SEO Header Stuff - Enhanced for 2025
    pageTitle:
      "High Altitude & Mountain Flying Training | NextGen Flight Academy | Riverside & Redlands, CA",
    pageDescription:
      "NextGen Flight Academy offers premier high altitude endorsement, mountain flying training, and comprehensive pilot certification programs at Riverside Municipal Airport (KRAL) and Redlands Municipal Airport (KREI). With 320 flying days per year, FAA Part 141/61 approved training, and specialized high altitude/mountain flying expertise in California's diverse terrain, our academy provides top-tier aviation education. Experience professional flight training from Private Pilot to ATP with expert CFIs, modern aircraft fleet, and proven 95% checkride pass rate.",
    pageKeywords:
      "NextGen Flight Academy, high altitude endorsement, mountain flying training, flight school Riverside CA, flight school Redlands CA, pilot training California, high altitude endorsement California, mountain flying training, density altitude training, high altitude flight training, mountain airport operations, terrain awareness, mountain weather, ridge flying, valley flying, high density altitude operations, mountain wave turbulence, downdrafts mountain flying, canyon flying, backcountry flying, high altitude performance, oxygen systems training, pressurization systems, turbocharger operations, high altitude weather, mountain flying techniques, alpine flying, Sierra Nevada flying, San Bernardino Mountains flying, Big Bear airport training, Lake Arrowhead flying, Mammoth Lakes flying, Truckee flying, mountain flying safety, high country flying, elevated airport operations, field elevation operations, flight school Riverside California, flight school Redlands California, pilot training Riverside Municipal Airport, pilot training Redlands Municipal Airport, learn to fly Riverside CA, learn to fly Redlands CA, aviation school Inland Empire, flight lessons San Bernardino County, pilot training San Bernardino, flight instruction Moreno Valley, aviation training Corona CA, pilot school Fontana CA, flight training Ontario CA, learn to fly Rancho Cucamonga, pilot lessons Highland CA, aviation school Loma Linda, flight training Yucaipa CA, pilot school Apple Valley, aviation training Victorville CA, flight lessons Palm Springs, pilot training Coachella Valley, learn to fly Big Bear, flight school Lake Arrowhead, aviation training Wrightwood, pilot lessons Running Springs, flight training Crestline, KRAL flight training, KREI pilot school, Riverside Municipal Airport flight school, Redlands Municipal Airport pilot training, private pilot license, instrument rating, commercial pilot license, airline transport pilot, certified flight instructor, multi-engine rating, complex endorsement, high performance endorsement, tailwheel endorsement, seaplane rating, flight instructor instrument, CFI training, CFII training, MEI training, ATP training, type rating, recurrent training, biennial flight review, instrument proficiency check, flight review, checkride preparation, ground school, flight training syllabus, accelerated flight training, part 141 training, part 61 training, integrated flight training, modular flight training, zero to hero program, career pilot program, professional pilot training, airline pilot pathway, collegiate flight program, veteran flight training, financing flight training",

    //top header
    header: {
      imagePath:
        "/src/assets/nextgen-flight-academy-riverside-redlands-california-home.jpg",
      imageAlt:
        "Smiling pilot completing a checkride at NextGen Flight Academy.",
      headerH1: "NextGen Flight Academy",
      headerH2: "Premier Pilot Training from Riverside to Redlands",
    },

    gMaps: [
      {
        location: "Riverside, CA",
        inverted: false,
        body: "Founded in February 2016, our Riverside location at KRAL has quickly become a premier flight training institution. Offering FAA Part 141 and Part 61 approved programs, we provide top-quality education with a fleet that includes Cessna 172s, Piper Arrow, Cessna 120, Beechcraft Duchess, and Cessna 152.",
        gMapUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.627392285859!2d-117.44849982418127!3d33.95071037319536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcb1373a59a741%3A0xad098c31f424e525!2sNextGen%20Flight%20Academy!5e0!3m2!1sen!2sco!4v1718894671435!5m2!1sen!2sco",
      },
      {
        location: "Redlands, CA",
        inverted: true,
        body: "In 2018, we expanded to Redlands with our sister school, Learn to Fly LLC, at KREI. Achieving FAA Part 141 certification in May 2022, this location offers high-quality training with a fleet that includes a Cessna 172 and Piper Warrior. Our students benefit from thorough VFR checkout flights and the option for an FAA Flight Review too, continuing our commitment to excellence in flight training.",
        gMapUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.450303921188!2d-117.14332642417573!3d34.08360297314522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db55373e387eab%3A0xa91f19e63a0daf06!2sNextGen%20Flight%20Academy%20-%20Redlands!5e0!3m2!1sen!2sco!4v1719269983050!5m2!1sen!2sco",
      },
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
          description: "Learn why you should become a pilot!",
        },
        {
          title: "Student Reviews",
          imagePath:
            "/src/assets/student-and-cfi-at-nextgen-head-office-in-riverside-ca.jpg",
          imageAlt:
            "src/assets/student-and-cfi-at-nextgen-head-office-in-riverside-ca",
          link: "#testimonials",
          description:
            "Read what other students have to say about NextGen Flight Academy.",
        },
        {
          title: "Career Track Pilots",
          imagePath:
            "/src/assets/pilots-and-cfi-at-riverside-california-airport-at-nextgen.jpg",
          imageAlt: "pilots-and-cfi-at-riverside-california-airport-at-nextgen",
          link: "/training-programs/career",
          description:
            "Explore our career track (zero to hero) training program structure.",
        },
        {
          title: "Book an Intro Flight",
          imagePath:
            "/src/assets/cfi-and-student-training-at-nextgen-flight-academy-redlands-riverside-ca-pilot-training-school.jpeg",
          imageAlt: "CFI and student on an intro flight over Disneyland, CA",
          link: "/intro-flight",
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
      buttonLink: "/intro-flight",
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
          link: "/training-programs/private-pilot",
        },
        {
          title: "Instrument Rating",
          imagePath:
            "/src/assets/instrument-rating-training-at-nextgen-flight-academy.jpg",
          imageAlt: "instrument-rating-training-at-nextgen-flight-academy",
          description:
            "The Instrument Rating (IR) enables you to fly in various weather conditions by using instruments for navigation. This rating is essential for advancing to commercial piloting and providing more consistent flight opportunities regardless of weather.",
          link: "/training-programs/instrument-rating",
        },
        {
          title: "Commercial Pilot Certificate",
          imagePath:
            "/src/assets/commercial-pilot-program-nextgen-flight-academy.jpg",
          imageAlt: "commercial-pilot-program-nextgen-flight-academy",
          description:
            "The Commercial Pilot Certificate (CPL) allows you to earn money as a pilot. It opens career paths in commercial aviation, such as flight instruction, banner towing, and aerial photography, laying the foundation for airline transport roles.",
          link: "/training-programs/commercial-pilot",
        },
        {
          title: "Multi-Engine Rating",
          imagePath:
            "/src/assets/multi-engine-aircraft-at-nextgen-flight-academy.jpg",
          imageAlt: "multi-engine-plane-at-redlands-airport",
          description:
            "The Multi-Engine Rating (ME) qualifies you to fly aircraft with more than one engine. It is crucial for piloting more complex and faster aircraft, which is essential for commercial and airline transport pilots.",
          link: "/training-programs/multi-engine-rating",
        },
        {
          title: "Flight Instructor (CFI, CFII, MEI)",
          imagePath: "/src/assets/flight-instructor-training-redlands-ca.jpg",
          imageAlt: "flight-instructor-training-redlands-ca",
          description:
            "Becoming a Flight Instructor allows you to teach others to fly. This role not only helps build your flight hours but also opens career opportunities in aviation education. You can specialize as a CFI, Certified Flight Instructor-Instrument (CFII), or Multi-Engine Instructor (MEI).",
          link: "/training-programs/certified-flight-instructor",
        },
        {
          title: "Airline Transport Pilot",
          imagePath:
            "/src/assets/atp-training-at-nextgen-flight-academy-riverside-ca.jpg",
          imageAlt: "atp-training-at-nextgen-flight-academy-riverside-ca",
          description:
            "The Airline Transport Pilot (ATP) certification is the highest level of pilot certification. It qualifies you to command multi-crew aircraft and pursue top-tier positions with airlines, corporate flight departments, and cargo carriers.",
          link: "/training-programs/airline-transport-pilot",
        },
        {
          title: "High Performance Endorsement",
          title: "High Performance Endorsement",
          imagePath:
            "/src/assets/piper-cherokee-six-high-performance-endorsement.jpg",
          imageAlt: "planes-flying-over-san-bernadino-ca",
          description: `<small class="uppercase italic font-bold text-accent">Must provide your own aircraft.</small><br>The High Performance Endorsement allows you to fly aircraft with an engine of more than 200 horsepower. It grants access to faster, more powerful aircraft.`,
          link: "/training-programs/high-performance-endorsement",
        },
        {
          title: "High Altitude Endorsement",
          imagePath: "/src/assets/high-altitude-endorsement.jpg",
          imageAlt: "high-altitude-endorsement",
          description: `<small class="uppercase italic font-bold text-accent">Must provide your own aircraft.</small><br>The High Altitude Endorsement prepares you to operate pressurized aircraft above 25,000 feet. It allows you to fly higher and more efficient routes, often necessary for certain commercial operations.`,
          link: "/training-programs/high-altitude-endorsement",
        },
        {
          title: "Complex Endorsement",
          imagePath:
            "/src/assets/nextgen-flight-academy-california-riverside-commercial-checkride .jpg",
          imageAlt: "completing-an-endorsement-at-riverside-airport",
          description: `The Complex Endorsement allows you to fly aircraft with retractable landing gear, flaps, and a controllable pitch propeller. It is required for operating more sophisticated aircraft, which is essential for many advanced piloting roles.`,
          link: "/training-programs/complex-endorsement",
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

    blogFeed: {
      title: "From the Blog",
      subtitle:
        "Stay up to date with the latest news and insights from NextGen Flight Academy.",
    },
  },
};

export default homePage;

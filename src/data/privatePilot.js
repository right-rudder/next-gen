const privatePilot = {
  data: {
    //SEO Header Stuff
    pageTitle: "Private Pilot Certificate | NextGen Flight Academy",
    pageDescription:
      "Start your aviation journey with NextGen Flight Academy's Private Pilot Certificate in Riverside and Redlands, CA. Full-scale career training, expert instructors, and modern aircraft for aspiring pilots.",
    pageKeywords:
      "private pilot license, private pilot certificate, learn to fly California, flight training Riverside CA, flight training Redlands CA, private pilot training, student pilot certificate, flight lessons Riverside, flight lessons Redlands, ground school California, checkride preparation, private pilot requirements, FAA part 61 training, FAA part 141 training, solo flight training, cross country flight training, night flying training, instrument training, medical certificate requirements, student pilot certificate process, flight training timeline private pilot, private pilot license requirements California, flight school Riverside CA, flight school Redlands CA, NextGen Flight Academy, Riverside flight schools, flying lessons Riverside CA, flying lessons Redlands CA, flight schools in Riverside CA, flight schools in Redlands CA, pilot training Riverside, Riverside aviation academy, Riverside flight training, intro flight, demonstration flights, Riverside flight academy, NextGen California, learn to fly Redlands, learn to fly California, flight training Redlands, pilot training Redlands, aviation school California, first flying lesson what to expect, discovery flight California, intro flight lesson Riverside, how to become a pilot in California, affordable pilot training near me, pilot training admission requirements",

    topImage: {
      imagePath:
        "/src/assets/passing-checkride-in-cessna-172-nextgen-flight-academy-redlands-riverside-ca-pilot-training-school.jpg",
      imageAlt: "Student passes private pilot checkride in Riverside, CA",
    },
    program: {
      header: "Private Pilot Certificate",
      description: [
        "The Private Pilot Certificate allows you to fly single-engine aircraft for personal use, travel, and recreation. This certification provides essential skills and knowledge for safe and competent flying. To earn this license, you must complete a minimum of 40 flight hours, which includes 20 hours of flight training with an instructor and 10 hours of solo flight. The training covers cross-country flight, night flight, instrument training, and preparation for the practical test. You must also pass a medical exam to obtain a third-class medical certificate. With this certificate, you can fly solo, carry passengers, and enjoy the freedom of personal aviation. It also prepares you for advanced ratings and certifications if you wish to pursue a career in aviation.",
      ],
      availability: "Available at Riverside and Redlands",
      related: [
        {
          title: "Instrument Rating",
          link: "/training-programs/instrument-rating",
        },
        {
          title: "Commercial Pilot Certificate",
          link: "/training-programs/multi-engine-rating",
        },
        {
          title: "High Altitude Endorsement",
          link: "/training-programs/high-altitude-endorsement",
        },
      ],
      trainingDetails: {
        description:
          "Our pilot training is distinct for each certification and endorsement. Checkout what you need before getting started, which aircraft you can use to train for this certification, and get a pricing estimate.",
        requisites: [
          "Be at least 17 years old",
          "Be able to read, speak, write, and understand English",
          "Hold at least a third-class medical certificate",
        ],
        aircraft: [
          `<a href="/our-fleet/cessna-172" class="hover:underline hover:text-accent">Cessna 172</a>`,
          `<a href="/our-fleet/cessna-152" class="hover:underline hover:text-accent">Cessna 152</a>`,
          `<a href="/our-fleet/piper-warrior" class="hover:underline hover:text-accent">Piper Warrior</a>`,
          `<a href="/our-fleet/cherokee-arrow" class="hover:underline hover:text-accent">PA-28R-180 Cherokee Arrow</a>`,
          `<a href="/our-fleet/beechcraft-duchess" class="hover:underline hover:text-accent">BE76 Beechcraft Duchess</a>`,
          `<a href="/our-fleet/redbird-simulator" class="hover:underline hover:text-accent">Redbird Simulator (SEL/MEL)</a>`,
        ],
        startingPrice: 12000,
        buttonLink: "/enrollment",
        buttonText: "Enroll Now",
      },
    },

    CTAcard: {
      title: "Ready to start?",
      imagePath:
        "/src/assets/checkride-successful-at-nextgen-flight-academy-redlands-riverside-ca-pilot-training-school.jpg",
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

export default privatePilot;

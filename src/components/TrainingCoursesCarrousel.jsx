import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TrainingCourseCard from "./TrainingCourseCard";

const TrainingCoursesCarrousel = () => {
  const courses = [
    {
      name: "Private Pilot",
      duration: "6 months to 1 year",
      description:
        "The private pilot certificate is the first certification you will receive as a pilot.  You will be granted the privileges of flying an aircraft as the pilot in command and can fly passengers.",
      button: "Become a private pilot",
      href: "/flight-training/private-pilot",
    },
    {
      name: "Instrument Rating",
      duration: "6 months to 1 year",
      description:
        "Being an instrument rated pilot means that you've received training to fly an airplane with sole reference to the flight instruments.  This allows you to safely navigate more challenging weather and makes you a sharper pilot.",
      button: "Become instrument rated",
      href: "/flight-training/instrument-rating",
    },
    {
      name: "Commercial Pilot",
      duration: "3 to 6 months",
      description:
        "Obtaining a commercial pilot certificate allows you to fly for compensation or hire. Start your pilot career and gain flight experience while getting paid to fly.",
      button: "Start your pilot career",
      href: "/flight-training/commercial-pilot",
    },
    {
      name: "Flight Instructor",
      duration: "3 to 6 months",
      description:
        "Many pilots choose to flight instruct to gain experience and teach their art of flying to new student pilots.  Flight instructors train the next generation of future aviators.",
      button: "Become a CFI",
      href: "/flight-training/flight-instructor",
    },
    {
      name: "Multi-Engine Rating",
      duration: "1 to 3 months",
      description:
        "Become a multi-engine rated pilot and learn to fly an aircraft with the highest level of safety and professionalism.  Pilot larger and more complex aircraft with multiple engines.",
      button: "Complete your ME addon",
      href: "/flight-training/multi-engine-rating",
    },
    {
      name: "Airline Transport Pilot",
      duration: "6 months to 1 year",
      description:
        "Become an airline transport pilot and learn to fly an aircraft with the highest level of safety and professionalism.  Become an airline transport pilot and start working for the airlines, corporate aviation, and other high paying career opportunities.",
      button: "Finish your ATP",
      href: "/flight-training/airline-transport-pilot",
    },
  ];
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index} className="">
            <TrainingCourseCard {...course} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TrainingCoursesCarrousel;

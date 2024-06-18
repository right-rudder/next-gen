import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const AircraftCarousel = ({ imagesArray }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="inline aspect-video lg:flex-[2_2_0] w-full"
      >
        {imagesArray.map((image) => (
          <SwiperSlide key={image.src}>
            <img
              src={image.src}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default AircraftCarousel;

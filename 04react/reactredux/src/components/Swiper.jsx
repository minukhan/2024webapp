import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

function Swiper() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
<<<<<<< HEAD
        <SwiperSlide>Slide 1</SwiperSlide>
=======
        <SwiperSlide>
          <img src="./vite.svg"></img>
          Slide 1</SwiperSlide>
>>>>>>> 80a304dc839f4f3b527fb021905f8f0409e113a6
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </>
  );
}

<<<<<<< HEAD
export default Swiper;
=======
export default Swiper;
>>>>>>> 80a304dc839f4f3b527fb021905f8f0409e113a6

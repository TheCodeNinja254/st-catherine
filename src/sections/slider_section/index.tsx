import React from "react";
import AppSwipeableCarousel from "@/components/common/app_swipeable_carousel";
import { SwiperSlide } from "swiper/react";
import { OurMission, OurValues, OurVision } from "@/components/about_us_page";

const SliderSection: React.FC = () => {
  return (
    <AppSwipeableCarousel showNavButtons={false} slidesPerPage={1} loop>
      <SwiperSlide>
        <OurMission />
      </SwiperSlide>
      <SwiperSlide>
        <OurVision />
      </SwiperSlide>
      <SwiperSlide>
        <OurValues />
      </SwiperSlide>
    </AppSwipeableCarousel>
  );
};

export default SliderSection;

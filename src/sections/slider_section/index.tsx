"use client";

import React from "react";
import AppSwipeableCarousel from "@/components/common/app_swipeable_carousel";
import { SwiperSlide } from "swiper/react";
import { OurMission, OurValues, OurVision } from "@/components/about_us_page";
import { useTheme } from "@mui/material";

const SliderSection: React.FC = () => {
  const theme = useTheme();

  return (
    <AppSwipeableCarousel showNavButtons={false} slidesPerPage={1} loop>
      <SwiperSlide>
        <OurMission backgroundColor={theme.palette.common.white} />
      </SwiperSlide>
      <SwiperSlide>
        <OurVision backgroundColor={theme.palette.common.white} />
      </SwiperSlide>
      <SwiperSlide>
        <OurValues backgroundColor={theme.palette.common.white} />
      </SwiperSlide>
    </AppSwipeableCarousel>
  );
};

export default SliderSection;

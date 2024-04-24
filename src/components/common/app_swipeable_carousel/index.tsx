import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Autoplay, Navigation } from "swiper";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { SwiperNavButton } from "@/styled_components/common";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import AppSwipeableCarouselProps from "@/interfaces/AppSwipeableCarouselProps";

const AppSwipeableCarousel: React.FC<AppSwipeableCarouselProps> = ({
  slidesPerPage,
  loop,
  spaceBetween,
  children,
  showNavButtons,
}) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  let defaultSlidesCount: number;

  if (isMobile) {
    defaultSlidesCount = 1;
  } else if (isTablet) {
    defaultSlidesCount = 2;
  } else {
    defaultSlidesCount = 3;
  }

  return (
    <Box
      sx={{
        marginTop: theme.spacing(15),
        [theme.breakpoints.down("sm")]: {
          marginTop: theme.spacing(10),
        },
      }}
    >
      <Swiper
        className="swiper-common"
        modules={[Navigation, Autoplay]}
        slidesPerView={slidesPerPage || defaultSlidesCount}
        spaceBetween={spaceBetween || 20}
        navigation={{
          nextEl: ".swiper-common-next-button",
          prevEl: ".swiper-common-prev-button",
        }}
        loop={loop}
        speed={2000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        grabCursor
      >
        {children}
      </Swiper>
      {showNavButtons && (
        <Box
          sx={{
            textAlign: "center",
            display: { xs: "block", md: "block" },
          }}
        >
          <Box>
            <SwiperNavButton className="swiper-common-prev-button">
              <ArrowBack />
            </SwiperNavButton>

            <SwiperNavButton
              className="swiper-common-next-button"
              sx={{ ml: "16px" }}
            >
              <ArrowForward />
            </SwiperNavButton>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default AppSwipeableCarousel;

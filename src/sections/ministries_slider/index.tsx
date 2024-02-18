import React from "react";
import {
  AppSwipeableCarousel,
  SectionTitle,
  TopMediaActionableCard,
} from "@/components";
import { useRouter } from "next/navigation";
import WrapperContainer from "@/containers";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import ministries from "@/static/ministries";
import SliderContainerSwitcherProps from "@/interfaces/SliderContainerSwitcherProps";

const MinistriesSlider: React.FC<SliderContainerSwitcherProps> = ({
  contentTypeID,
  setContentTypeID,
}) => {
  const theme = useTheme();

  const router = useRouter();

  const handleContentChange = (id: number, name: string): void => {
    setContentTypeID(id);
    const lowerCaseName: string = name.toLowerCase();
    const nameArray: string[] = lowerCaseName.split(" ");
    const urlAppendix: string = nameArray.join("-");
    router.push(`/ministries/${id}/${urlAppendix}`, { scroll: false });
  };

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  let slidesCount: number;
  if (isMobile) {
    slidesCount = 2;
  } else if (isTablet) {
    slidesCount = 3;
  } else {
    slidesCount = 4;
  }

  return (
    <WrapperContainer variant="light">
      <SectionTitle title="Our Ministries" />
      <Typography
        sx={{ marginTop: theme.spacing(4), marginBottom: theme.spacing(4) }}
      >
        Read about or ministries, keep up with what the ministries are doing and
        see their impact.
      </Typography>
      <Box sx={{ marginTop: theme.spacing(4) }}>
        <AppSwipeableCarousel showNavButtons loop slidesPerPage={slidesCount}>
          {ministries.map((ministry) => (
            <SwiperSlide
              key={ministry.id}
              style={{
                // height: "100%",
                display: "flex",
                alignItems: "stretch",
              }}
            >
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <TopMediaActionableCard
                  onClick={() =>
                    handleContentChange(ministry.id, ministry.name)
                  }
                  description={ministry.description}
                  id={ministry.id}
                  action="see more"
                  image={ministry.imageURL}
                  title={ministry.name}
                  active={contentTypeID === ministry.id}
                />
              </Grid>
            </SwiperSlide>
          ))}
        </AppSwipeableCarousel>
      </Box>
    </WrapperContainer>
  );
};

export default MinistriesSlider;

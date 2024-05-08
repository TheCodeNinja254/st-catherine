import React from "react";
import {
  AppSwipeableCarousel,
  SectionTitle,
  TopMediaActionableCard,
} from "@/components";
import { useRouter } from "next/navigation";
import WrapperContainer from "@/containers";
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { SwiperSlide } from "swiper/react";
import SliderContainerSwitcherProps from "@/interfaces/SliderContainerSwitcherProps";
import sccInfo from "@/static/scc";

const SccSlider: React.FC<SliderContainerSwitcherProps> = ({
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
    router.push(`/scc/${id}/${urlAppendix}`, { scroll: false });
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
    <WrapperContainer variant="default" fullWidth>
      <Container>
        <SectionTitle title="Small Christian Communities (SCC) and more" />
        <Typography
          sx={{ marginTop: theme.spacing(1), marginBottom: theme.spacing(0) }}
        >
          Connect with small Christian communities. Stay upto date. Beware of
          your communities farewell.
        </Typography>
        <Box sx={{ marginTop: theme.spacing(0) }}>
          <AppSwipeableCarousel
            showNavButtons
            loop={false}
            slidesPerPage={slidesCount}
          >
            {sccInfo
              .filter((sccContent) => sccContent.showOnSlider)
              .map((content) => (
                <SwiperSlide
                  key={content.id}
                  style={{
                    // height: "100%",
                    display: "flex",
                    alignItems: "stretch",
                  }}
                >
                  <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                    <TopMediaActionableCard
                      variant="paper"
                      onClick={() =>
                        handleContentChange(content.id, content.name)
                      }
                      description={content.description}
                      id={content.id}
                      action="see more"
                      image={content.imageURL}
                      title={content.name}
                      active={contentTypeID === content.id}
                    />
                  </Grid>
                </SwiperSlide>
              ))}
          </AppSwipeableCarousel>
        </Box>
      </Container>
    </WrapperContainer>
  );
};

export default SccSlider;

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

const NavigationSlider: React.FC<SliderContainerSwitcherProps> = ({
  contentTypeID,
  setContentTypeID,
  title,
  description,
  baseURL,
  content,
}) => {
  const theme = useTheme();

  const router = useRouter();

  const handleContentChange = (id: number, name: string): void => {
    setContentTypeID(id);
    const lowerCaseName: string = name.toLowerCase();
    const nameArray: string[] = lowerCaseName.split(" ");
    const urlAppendix: string = nameArray.join("-");
    router.push(`/${baseURL}/${id}/${urlAppendix}`, { scroll: false });
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
    <WrapperContainer variant="paper" fullWidth>
      <Container>
        <SectionTitle title={title || "Our Ministries"} />
        <Typography
          sx={{ marginTop: theme.spacing(4), marginBottom: theme.spacing(4) }}
        >
          {description}
        </Typography>
        <Box sx={{ marginTop: theme.spacing(4) }}>
          <AppSwipeableCarousel showNavButtons loop slidesPerPage={slidesCount}>
            {content.map((item) => (
              <SwiperSlide
                key={item.id}
                style={{
                  // height: "100%",
                  display: "flex",
                  alignItems: "stretch",
                }}
              >
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <TopMediaActionableCard
                    onClick={() => handleContentChange(item.id, item.name)}
                    description={item.description}
                    id={item.id}
                    action="see more"
                    image={item.imageURL}
                    title={item.name}
                    active={contentTypeID === item.id}
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

export default NavigationSlider;

import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import HeroSectionProps from "@/interfaces/HeroSectionProps";

const HeroSection: React.FC<HeroSectionProps> = ({
  children,
  height,
  imageHeight,
}) => {
  // const bg = `rgba(19, 20, 102, 0.5)`;
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const calculatedHeight = isMobile ? "90vh" : "85vh";

  return (
    <Box
      sx={[
        {
          position: "block",
          backgroundPosition: "center",
          height: height || calculatedHeight,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: theme.palette.common.white,
        },
      ]}
    >
      <Box
        sx={[
          {
            position: "block",
            backgroundPosition: "center",
            backgroundImage: isMobile
              ? "url(/st-catherine/images/hero_background_new.JPG)"
              : "url(/st-catherine/images/bg2.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            // backgroundColor: `rgba(255, 255, 255, .9)`,
            height: imageHeight || "90vh",
          },
          {
            "&:before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: imageHeight || "90vh",
              // backgroundColor: bg,
              backgroundColor: `rgba(255, 255, 255, .1)`,
              pointerEvents: "none",
            },
          },
        ]}
      >
        <Box
          sx={{
            position: "relative",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: height || "125vh",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;

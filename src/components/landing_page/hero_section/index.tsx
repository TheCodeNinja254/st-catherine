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

  // const calculatedHeight = isMobile ? "90vh" : "95vh";

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: height || "95vh",
        overflow: "hidden", // Ensures no overflow
        backgroundColor: theme.palette.common.white,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: imageHeight || "100%",
          backgroundImage: `url(${
            isMobile
              ? "/st-catherine/images/hero_background_new.JPG"
              : "/st-catherine/images/img.png"
          })`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: imageHeight ? "" : "100% 100%",
          zIndex: 0, // Places the background behind the content
        }}
      />
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          zIndex: 1, // Ensures the children are above the background image
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default HeroSection;

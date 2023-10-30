import { Box } from "@mui/material";
import React from "react";
import HeroSectionProps from "@/interfaces/HeroSectionProps";

const HeroSection: React.FC<HeroSectionProps> = ({
  children,
  height,
  imageHeight,
}) => {
  const bg = `rgba(19, 20, 102, 0.5)`;

  return (
    <Box
      sx={[
        {
          position: "block",
          backgroundPosition: "center",
          height: height || "125vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        },
      ]}
    >
      <Box
        sx={[
          {
            position: "block",
            backgroundPosition: "center",
            backgroundImage: "url(/images/hero_bacground.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
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
              backgroundColor: bg,
              pointerEvents: "none",
            },
          },
        ]}
      >
        <Box
          sx={[
            {
              position: "relative",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: height || "125vh",
            },
          ]}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;

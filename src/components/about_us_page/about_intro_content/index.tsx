import { Container, Typography, useTheme } from "@mui/material";
import { HeroSection } from "@/components";
import React from "react";

const AboutIntroContent = () => {
  const theme = useTheme();

  return (
    <HeroSection height="50vh" imageHeight="50vh">
      <Container sx={{ paddingTop: "20vh" }}>
        <Typography
          variant="h4"
          textAlign="left"
          sx={{
            color: theme.palette.secondary.main,
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(3),
          }}
        >
          This week’s bible verse
        </Typography>
        <Typography textAlign="left" sx={{ color: theme.palette.common.white }}>
          “Jesus looked at them and said, With man, its impossible But not with
          God “
        </Typography>
      </Container>
    </HeroSection>
  );
};

export default AboutIntroContent;

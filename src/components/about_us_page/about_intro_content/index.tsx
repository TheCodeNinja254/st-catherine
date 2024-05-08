import { Box, Container, Typography, useTheme } from "@mui/material";
import { HeroSection } from "@/components";
import React from "react";

const AboutIntroContent = () => {
  const theme = useTheme();

  return (
    <HeroSection height="50vh" imageHeight="50vh">
      <Container sx={{ paddingTop: "20vh" }}>
        <Box
          sx={{
            backgroundColor: `rgba(0, 0, 0, .3)`,
            padding: theme.spacing(2),
          }}
        >
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
          <Typography
            textAlign="left"
            sx={{ color: theme.palette.common.white }}
          >
            “Jesus looked at them and said, With man, its impossible But not
            with God “
          </Typography>
        </Box>
      </Container>
    </HeroSection>
  );
};

export default AboutIntroContent;

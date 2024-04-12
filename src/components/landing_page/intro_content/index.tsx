import { Box, Container, Typography, useTheme } from "@mui/material";
import { HeroSection, PopularLinks } from "@/components";
import Image from "next/image";
import React from "react";
import { MyButton } from "@/styled_components";
import logo_icon from "@/assets/images/st-catherine.png";

const IntroContent = () => {
  const theme = useTheme();

  return (
    <HeroSection>
      <Container sx={{ paddingTop: "20vh" }}>
        <Box display="flex" justifyContent="center" sx={{ padding: 6 }}>
          <Image src={logo_icon} alt="St. Catherine" height={100} />
        </Box>
        <Typography
          variant="h1"
          textAlign="center"
          sx={{ color: theme.palette.common.white }}
        >
          St. Catherine of
          <br />
          Siena -{" "}
          <span style={{ color: theme.palette.secondary.main }}>Parish</span>
        </Typography>
        <Typography
          variant="h4"
          textAlign="center"
          sx={{
            color: theme.palette.common.white,
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(3),
          }}
        >
          Archdiocese of Nairobi, Kenya
        </Typography>
        <Box display="flex" justifyContent="center" sx={{ padding: 4 }}>
          <MyButton
            variant="contained"
            disableElevation
            sx={{ px: 6, py: 1.5 }}
          >
            Welcome
          </MyButton>
        </Box>
        <PopularLinks />
      </Container>
    </HeroSection>
  );
};

export default IntroContent;

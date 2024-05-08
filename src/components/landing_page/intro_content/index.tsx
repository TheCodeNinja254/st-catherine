import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { HeroSection } from "@/components";
import Image from "next/image";
import React from "react";
import { MyButton } from "@/styled_components";
import logo_icon from "@/assets/images/st-catherine2.png";

const IntroContent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <HeroSection>
      <Container sx={{ paddingTop: "20vh" }}>
        <Box display="flex" justifyContent="center" sx={{ padding: 2 }}>
          <Image
            src={logo_icon}
            alt="St. Catherine"
            height={isMobile ? 200 : 230}
          />
        </Box>
        <Typography
          variant="h4"
          textAlign="center"
          sx={{
            color: theme.palette.secondary.main,
            marginTop: theme.spacing(0),
            marginBottom: theme.spacing(1),
          }}
        >
          Archdiocese of Nairobi
        </Typography>
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
        <Box display="flex" justifyContent="center" sx={{ padding: 4 }}>
          <MyButton
            variant="contained"
            disableElevation
            sx={{ px: 6, py: 1.5 }}
          >
            Welcome
          </MyButton>
        </Box>
        {/* <PopularLinks /> */}
      </Container>
    </HeroSection>
  );
};

export default IntroContent;

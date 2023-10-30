import { Container, Typography, useTheme } from "@mui/material";
import { HeroSection } from "@/components";
import React from "react";

const GenericPagesIntro = ({ pageTitle }: { pageTitle?: string }) => {
  const theme = useTheme();

  return (
    <HeroSection height="50vh" imageHeight="50vh">
      <Container sx={{ paddingTop: "20vh" }}>
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
          {pageTitle || "The Church Choir"}
        </Typography>
      </Container>
    </HeroSection>
  );
};

export default GenericPagesIntro;

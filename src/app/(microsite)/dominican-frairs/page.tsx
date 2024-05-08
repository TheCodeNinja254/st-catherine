"use client";

import React from "react";
import ContentDisplay from "@/components/content_display";
import WrapperContainer from "@/containers";
import { Container, useTheme } from "@mui/material";
import { AboutIntroContent } from "@/components/about_us_page";

const DominicanFrairs = () => {
  const theme = useTheme();

  return (
    <>
      <AboutIntroContent />
      <Container>
        <WrapperContainer
          variant="paper"
          sx={{
            borderRadius: 3,
            paddingBottom: theme.spacing(4),
            marginTop: theme.spacing(3),
          }}
        >
          <ContentDisplay
            content={[{ id: 1, type: "title", text: "Dominican Frairs" }]}
          />
        </WrapperContainer>
      </Container>
    </>
  );
};

export default DominicanFrairs;

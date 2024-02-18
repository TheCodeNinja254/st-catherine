import { Container, Typography, useTheme } from "@mui/material";
import { HeroSection } from "@/components";
import React from "react";

const MinistriesIntro = () => {
  const theme = useTheme();

  return (
    <HeroSection height="40vh" imageHeight="40vh">
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
          Matthew 28: 19-20
        </Typography>
        <Typography
          variant="body1"
          textAlign="left"
          sx={{
            color: theme.palette.common.white,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          &quot; Go, therefore, and make disciples of all nations, baptizing
          them in the name of the Father, and of the Son, and of the Holy
          Spirit, teaching them to observe all that I have commanded you. And
          behold, I am with you always, until the end of the age.&quot;
        </Typography>
      </Container>
    </HeroSection>
  );
};

export default MinistriesIntro;

import { Container, Typography, useTheme } from "@mui/material";
import { HeroSection } from "@/components";

const ContactUsIntro = () => {
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
          We love to hear from{" "}
          <span style={{ color: theme.palette.secondary.main }}>you</span>
        </Typography>
      </Container>
    </HeroSection>
  );
};

export default ContactUsIntro;

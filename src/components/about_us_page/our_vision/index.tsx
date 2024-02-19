import Image from "next/image";
import {
  Box,
  Card,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import background from "@/assets/images/our_vision.jpg";
import { SectionTitle } from "@/components";
import React from "react";
import SliderComponentsProps from "@/interfaces/SliderComponentsProps";

const OurVision: React.FC<SliderComponentsProps> = ({ backgroundColor }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        backgroundColor: backgroundColor || theme.palette.common.white,
        [theme.breakpoints.down("sm")]: {
          marginTop: theme.spacing(19),
        },
      }}
      elevation={0}
    >
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box
              sx={{
                marginTop: theme.spacing(10),
                [theme.breakpoints.down("sm")]: {
                  marginTop: theme.spacing(0),
                },
              }}
            >
              <SectionTitle title="Our Vision" />
            </Box>
            <Typography variant="body1" sx={{ marginTop: theme.spacing(4) }}>
              To be the preferred choice of a community that lives and learns
              the catholic faith: a fountain for those who seek spiritual
              nourishment in a peaceful atmosphere, inspiring all to the love of
              God’s Grace in a culture cordially centered in Christ.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box sx={{ paddingTop: theme.spacing(4) }}>
              <Image src={background} alt="our mission" height={300} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Card>
  );
};

export default OurVision;

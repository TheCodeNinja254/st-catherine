import React from "react";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { SectionTitle } from "@/components";
import SliderComponentsProps from "@/interfaces/SliderComponentsProps";

const OurMission: React.FC<SliderComponentsProps> = ({ backgroundColor }) => {
  const theme = useTheme();

  return (
    <Box
      id="mission"
      sx={{
        backgroundColor: backgroundColor || theme.palette.background.default,
        [theme.breakpoints.down("sm")]: {
          marginTop: theme.spacing(0),
        },
      }}
    >
      <Container>
        <Grid container spacing={5}>
          {/* <Grid item xs={12} sm={12} md={6} lg={6} xl={6}> */}
          {/*  <Stack direction="row" spacing={1}> */}
          {/*    <Image */}
          {/*      src={ourMissionOne} */}
          {/*      alt="our mission" */}
          {/*      height={isMobile ? 354 : 510} */}
          {/*    /> */}
          {/*    <Box> */}
          {/*      <Stack direction="column" spacing={1}> */}
          {/*        <Image */}
          {/*          src={ourMissionTwo} */}
          {/*          alt="our mission" */}
          {/*          height={isMobile ? 173 : 250} */}
          {/*        /> */}
          {/*        <Image */}
          {/*          src={ourMissionThree} */}
          {/*          alt="our mission" */}
          {/*          height={isMobile ? 173 : 250} */}
          {/*        /> */}
          {/*      </Stack> */}
          {/*    </Box> */}
          {/*  </Stack> */}
          {/* </Grid> */}
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box
              sx={{
                marginTop: theme.spacing(10),
                [theme.breakpoints.down("sm")]: {
                  marginTop: theme.spacing(3),
                },
              }}
            >
              <SectionTitle title="Our Mission" />
            </Box>
            <Typography
              variant="body1"
              sx={{
                marginTop: theme.spacing(4),
                marginBottom: theme.spacing(10),
              }}
            >
              We, the community of St. Catherine of Siena Parish- Kitisuru, in
              the Archdiocese of Nairobi, guided by our patroness Saint
              Catherine of Siena and amidst our multicultural diversity, are
              called to celebrate God’s presence in our lives, by being
              prayerful and proclaiming the good news of Jesus Christ in the
              spirit of faith and service to all who seek shelter in our paris
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurMission;

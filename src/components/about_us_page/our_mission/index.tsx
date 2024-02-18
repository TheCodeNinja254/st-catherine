import Image from "next/image";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ourMissionOne from "@/assets/images/vicar.jpg";
import ourMissionTwo from "@/assets/images/mission2.jpg";
import ourMissionThree from "@/assets/images/mission3.jpg";
import { SectionTitle } from "@/components";

const OurMission = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id="mission"
      sx={{
        // paddingBottom: theme.spacing(8),
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.down("sm")]: {
          marginTop: theme.spacing(55),
        },
      }}
    >
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Stack direction="row" spacing={1}>
              <Image
                src={ourMissionOne}
                alt="our mission"
                height={isMobile ? 354 : 510}
              />
              <Box>
                <Stack direction="column" spacing={1}>
                  <Image
                    src={ourMissionTwo}
                    alt="our mission"
                    height={isMobile ? 173 : 250}
                  />
                  <Image
                    src={ourMissionThree}
                    alt="our mission"
                    height={isMobile ? 173 : 250}
                  />
                </Stack>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box sx={{ marginTop: theme.spacing(10) }}>
              <SectionTitle title="Our Mission" />
            </Box>
            <Typography variant="body1" sx={{ marginTop: theme.spacing(4) }}>
              We, the community of St. Catherine of Siena Parish- Kitisuru, in
              the Archdiocese of Nairobi, guided by our patroness Saint
              Catherine of Siena and amidst our multicultural diversity, are
              called to celebrate God’s presence in our lives, by being
              prayerful and proclaiming the good news of Jesus Christ in the
              spirit of faith and service to all who seek shelter in our paris
            </Typography>
            {/* <Link href="/"> */}
            {/*  <Stack direction="row"> */}
            {/*    <Typography */}
            {/*      sx={{ */}
            {/*        marginTop: theme.spacing(6), */}
            {/*        color: theme.palette.primary.main, */}
            {/*      }} */}
            {/*    > */}
            {/*      More */}
            {/*    </Typography> */}
            {/*    <ArrowForward */}
            {/*      sx={{ */}
            {/*        marginTop: theme.spacing(6), */}
            {/*        marginLeft: theme.spacing(2), */}
            {/*        color: theme.palette.primary.main, */}
            {/*        fontSize: 20, */}
            {/*      }} */}
            {/*    /> */}
            {/*  </Stack> */}
            {/* </Link> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurMission;

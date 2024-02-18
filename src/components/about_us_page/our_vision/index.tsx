import Image from "next/image";
import {
  Box,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import background from "@/assets/images/our_vision.jpg";
import { SectionTitle } from "@/components";
import { ArrowForward } from "@mui/icons-material";

const OurVision = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        backgroundColor: theme.palette.common.white,
      }}
      elevation={0}
    >
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box sx={{ marginTop: theme.spacing(10) }}>
              <SectionTitle title="Our Vision" />
            </Box>
            <Typography variant="body1" sx={{ marginTop: theme.spacing(4) }}>
              To be the preferred choice of a community that lives and learns
              the catholic faith: a fountain for those who seek spiritual
              nourishment in a peaceful atmosphere, inspiring all to the love of
              God’s Grace in a culture cordially centered in Christ.
            </Typography>
            <Link href="/">
              <Stack direction="row">
                <Typography
                  sx={{
                    marginTop: theme.spacing(6),
                    color: theme.palette.primary.main,
                  }}
                >
                  More
                </Typography>
                <ArrowForward
                  sx={{
                    marginTop: theme.spacing(6),
                    marginLeft: theme.spacing(2),
                    color: theme.palette.primary.main,
                    fontSize: 20,
                  }}
                />
              </Stack>
            </Link>
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

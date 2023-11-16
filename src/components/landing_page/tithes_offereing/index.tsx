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
import tithesOfferings from "@/assets/images/tithesOfferings.png";

import { SectionTitle } from "@/components/common";

const TithesOfferings = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{ paddingBottom: theme.spacing(8), paddingTop: theme.spacing(5) }}
      elevation={0}
    >
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Stack direction="row" spacing={1}>
              <Image src={tithesOfferings} alt="tithes_offerings" width={510} />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box sx={{ marginTop: theme.spacing(10) }}>
              <SectionTitle title="Tithes & Offerings" />
            </Box>
            <Typography variant="body1" sx={{ marginTop: theme.spacing(4) }}>
              Through our ministries, liturgies, and outreach, we touch the
              lives of hundreds of people. How can you play a special and
              enduring role in our work? Regardless of your situation in life,
              there are multiple ways to support us — first through your prayers
              but also through the gifts of your time, talents, and treasures.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Card>
  );
};

export default TithesOfferings;

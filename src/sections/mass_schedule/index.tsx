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
import massSchedule from "@/assets/images/massSchedule.png";

import { SectionTitle } from "@/components/common";
import { MassScheduleCard } from "@/components";

const MassSchedule = () => {
  const theme = useTheme();

  const showImage: boolean = false;

  return (
    <Card
      sx={{
        paddingBottom: theme.spacing(8),
        paddingTop: theme.spacing(5),
      }}
      elevation={0}
    >
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box sx={{ marginTop: theme.spacing(5) }}>
              <SectionTitle title="Mass Schedule" />
            </Box>
            <Typography variant="body1" sx={{ marginTop: theme.spacing(4) }}>
              St Catherine of Siena Parish Kitisuru welcomes members to join our
              daily masses. Our masses happen during weekdays and also on
              weekends with the schedule provided.
              <br />
              <br />
              “The sluggard does not plow in the autumn; he will seek at harvest
              and have nothing.”~Proverbs 20:4
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            {showImage ? (
              <Stack direction="row" spacing={1}>
                <Image src={massSchedule} alt="our mission" width={510} />
              </Stack>
            ) : (
              <MassScheduleCard />
            )}
          </Grid>
        </Grid>
      </Container>
    </Card>
  );
};

export default MassSchedule;

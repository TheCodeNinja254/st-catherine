import React from "react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import massSchedule, { MassScheduleInteface } from "@/static/mass_schedule";

const MassScheduleCard: React.FC = () => {
  const theme = useTheme();

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 3,
        backgroundColor: theme.palette.common.white,
        border: `1px solid ${theme.palette.secondary.main}`,
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          sx={{ fontSize: 12, marginTop: theme.spacing(3) }}
          color={theme.palette.text.disabled}
        >
          DOMINICAN FRAIRS
        </Typography>
        <Typography
          gutterBottom
          sx={{ fontSize: 20, marginTop: theme.spacing(1) }}
          color="primary"
        >
          St. Catherine Of Siena Parish Kitisuru
        </Typography>
        <Divider textAlign="left">
          <Typography gutterBottom sx={{ fontSize: 12 }}>
            Mass Schedule
          </Typography>
        </Divider>

        <Grid container spacing={1}>
          {massSchedule
            .filter((ms: MassScheduleInteface) => ms.day === "sunday")
            .map((ms) => (
              <Grid item xs={5} key={ms.id}>
                <Typography
                  variant="h5"
                  sx={{
                    marginTop: theme.spacing(3),
                    fontFamily: "Futura Std Bold",
                  }}
                >
                  Sunday Masses
                </Typography>
                <Box sx={{ marginTop: theme.spacing(2) }}>
                  {ms.services.map((s) => (
                    <Stack
                      key={s.id}
                      spacing={1}
                      direction="row"
                      justifyContent="space-between"
                      sx={{
                        paddingRight: theme.spacing(4),
                      }}
                    >
                      <Typography
                        variant="body2"
                        color={theme.palette.text.disabled}
                      >
                        {s.hour}
                      </Typography>
                      <Typography variant="body2">{s.serviceDesc}</Typography>
                    </Stack>
                  ))}
                </Box>
              </Grid>
            ))}

          <Divider
            orientation="vertical"
            sx={{ marginTop: theme.spacing(8) }}
            flexItem
          />

          {massSchedule
            .filter((ms: MassScheduleInteface) => ms.day === "weekday")
            .map((ms) => (
              <Grid item xs={6} key={ms.id}>
                <Typography
                  variant="h5"
                  sx={{
                    marginTop: theme.spacing(3),
                    fontFamily: "Futura Std Bold",
                  }}
                >
                  Other Services
                </Typography>
                <Box sx={{ marginTop: theme.spacing(2) }}>
                  {ms.services.map((s) => (
                    <Stack
                      key={s.id}
                      spacing={1}
                      direction="row"
                      justifyContent="space-between"
                      sx={{
                        paddingRight: theme.spacing(0),
                      }}
                    >
                      <Typography
                        variant="body2"
                        color={theme.palette.text.disabled}
                      >
                        {s.hour}
                      </Typography>
                      <Typography variant="body2" align="right">
                        {s.serviceDesc}
                      </Typography>
                    </Stack>
                  ))}
                </Box>
              </Grid>
            ))}

          {massSchedule
            .filter((ms: MassScheduleInteface) => ms.day === "special")
            .map((ms) => (
              <Grid item xs={10} key={ms.id}>
                <Typography
                  variant="h5"
                  sx={{
                    marginTop: theme.spacing(3),
                    fontFamily: "Futura Std Bold",
                    [theme.breakpoints.down("sm")]: {
                      marginTop: theme.spacing(1),
                    },
                  }}
                >
                  Special Services
                </Typography>
                <Box sx={{ marginTop: theme.spacing(2) }}>
                  {ms.services.map((s) => (
                    <Stack
                      key={s.id}
                      spacing={3}
                      direction="row"
                      justifyContent="space-between"
                      sx={{
                        paddingRight: theme.spacing(0),
                      }}
                    >
                      <Typography color={theme.palette.text.disabled}>
                        {s.hour}
                      </Typography>
                      <Typography>{s.serviceDesc}</Typography>
                    </Stack>
                  ))}
                </Box>
              </Grid>
            ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MassScheduleCard;

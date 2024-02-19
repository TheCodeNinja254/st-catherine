import Image from "next/image";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ourMissionOne from "@/assets/images/ourValues1.jpg";
import ourMissionTwo from "@/assets/images/ourValues2.jpg";
import ourMissionThree from "@/assets/images/ourValues3.jpg";
import { SectionTitle } from "@/components";
import ourValues from "@/static/our_values";
import React from "react";
import SliderComponentsProps from "@/interfaces/SliderComponentsProps";

const OurValues: React.FC<SliderComponentsProps> = ({ backgroundColor }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        backgroundColor: backgroundColor || theme.palette.background.default,
        [theme.breakpoints.down("sm")]: {
          marginTop: theme.spacing(19),
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
            <Box
              sx={{
                marginTop: theme.spacing(10),
                [theme.breakpoints.down("sm")]: {
                  marginTop: theme.spacing(3),
                },
              }}
            >
              <SectionTitle title="Our Values" />
            </Box>
            <Typography variant="body1" sx={{ marginTop: theme.spacing(4) }}>
              Being a church in Nairobi endowed with a diverse range of
              international cultures, we
            </Typography>
            <List dense>
              {ourValues?.map((val: string) => (
                <ListItem key={val}>
                  <ListItemText primary={val} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurValues;

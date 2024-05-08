import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
// import ourMissionOne from "@/assets/images/values1.jpg";
// import ourMissionTwo from "@/assets/images/values2.jpg";
// import ourMissionThree from "@/assets/images/values3.jpg";
import { SectionTitle } from "@/components";
import ourValues from "@/static/our_values";
import React from "react";
import SliderComponentsProps from "@/interfaces/SliderComponentsProps";

const OurValues: React.FC<SliderComponentsProps> = ({ backgroundColor }) => {
  const theme = useTheme();

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

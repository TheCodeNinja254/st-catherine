import {
  Box,
  Card,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import ourMissionOne from "@/assets/images/churchPhoto.jpg";
import { SectionTitle } from "@/components";
import ourMissionTwo from "@/assets/images/values2.jpg";
import prst from "@/assets/images/fr2.jpeg";
import React from "react";
import ParapgrapSectionText from "../../common/parapgraph_section";

const introContent: string[] = [
  "Welcome to St. Catherine of Siena Parish, a vibrant community nestled in the serene Kitisuru Area of Nairobi. As one of the 115 parishes under the esteemed Metropolitan Archdiocese of Nairobi, we are proud to be entrusted to the care of the Dominican Friars of the Eastern Africa Provincial Vicariate whose core apostolate is centered on teaching and preaching, fervently pursuing the truth that leads to the salvation of souls. ",
  "We believe in the transformative power of faith and education, and our efforts are directed towards fostering spiritual growth and understanding within our parish. We invite you to explore the rich tapestry of St. Catherine of Siena Parish, where the ancient traditions of the Dominican Order intersect with the contemporary journey of faith. Join us as we continue to build a community grounded in love, truth, and the pursuit of salvation.",
];

const Introduction = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Card
      sx={{
        backgroundColor: theme.palette.background.default,
        paddingBottom: theme.spacing(8),
        [theme.breakpoints.down("sm")]: {
          marginTop: theme.spacing(0),
        },
      }}
      elevation={0}
    >
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <Box
              display={isMobile ? "none" : "flex"}
              justifyContent="center"
              sx={{ marginTop: isMobile ? theme.spacing(4) : theme.spacing(8) }}
            >
              <Image
                src={ourMissionOne}
                alt="our mission"
                height={isMobile ? 354 : 500}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box
              sx={{
                marginTop: isMobile ? theme.spacing(5) : theme.spacing(10),
              }}
            >
              <SectionTitle title="A Welcome Message" />
            </Box>
            <Box sx={{ marginTop: theme.spacing(3) }}>
              <ParapgrapSectionText content={introContent} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <Grid container spacing={1}>
              <Grid item xs={6} sm={6} md={12} lg={12} xl={12}>
                <Box
                  display="flex"
                  justifyContent="center"
                  sx={{
                    marginTop: isMobile ? theme.spacing(2) : theme.spacing(8),
                  }}
                >
                  <Box>
                    <Image
                      src={ourMissionTwo}
                      alt="our mission"
                      height={isMobile ? 200 : 250}
                    />
                    <Typography
                      sx={{ fontSize: 12, marginTop: theme.spacing(2) }}
                    >
                      Father Cleophas Tesha - Parish Priest
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={12} lg={12} xl={12}>
                <Box
                  display="flex"
                  justifyContent="center"
                  sx={{
                    marginTop: isMobile ? theme.spacing(2) : theme.spacing(2),
                  }}
                >
                  <Box>
                    <Image
                      src={prst}
                      alt="our mission"
                      height={isMobile ? 200 : 250}
                    />
                    <Typography
                      sx={{ fontSize: 12, marginTop: theme.spacing(2) }}
                    >
                      Father Cleophas Tesha - Parish Priest
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Card>
  );
};

export default Introduction;

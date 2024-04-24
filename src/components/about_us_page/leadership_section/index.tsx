import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import leadership from "@/assets/images/leadership.jpg";
import leadership2 from "@/assets/images/leadership2.jpg";
import { SectionTitle } from "@/components";
import ContentDisplay from "@/components/content_display";
import React from "react";
import massDescription from "@/static/mass_description";
import leadershipDesc from "@/static/leadership";

const LeadershipSection = () => {
  const theme = useTheme();

  return (
    <Card
      elevation={0}
      sx={{ paddingBottom: theme.spacing(6) }}
      id="leadership"
    >
      <CardContent>
        <Container>
          <Box sx={{ marginTop: theme.spacing(10) }}>
            <SectionTitle title="Leadership" />
          </Box>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box sx={{ paddingRight: theme.spacing(4) }}>
                <ContentDisplay content={leadershipDesc} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box sx={{ paddingTop: theme.spacing(4) }}>
                <Image src={leadership} alt="our mission" height={300} />
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={8} sx={{ marginTop: theme.spacing(3) }}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box sx={{ paddingTop: theme.spacing(4) }}>
                <Image src={leadership2} alt="our mission" height={380} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box sx={{ paddingRight: theme.spacing(4) }}>
                <ContentDisplay content={massDescription} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </CardContent>
    </Card>
  );
};

export default LeadershipSection;

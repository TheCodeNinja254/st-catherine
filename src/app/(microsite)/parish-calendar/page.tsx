"use client";

import { EventCalendar, SectionTitle } from "@/components";
import { Box, Grid, useTheme } from "@mui/material";
import React from "react";
import WrapperContainer from "@/containers";
import MinistriesIntro from "@/components/ministries_page";
import EventsSection from "@/sections/events_section";

const Page = () => {
  const theme = useTheme();

  return (
    <Box>
      <MinistriesIntro />
      <WrapperContainer
        variant="paper"
        sx={{
          borderRadius: 3,
          paddingBottom: theme.spacing(4),
          marginTop: theme.spacing(5),
        }}
      >
        <Box>
          <SectionTitle title="Parish Calendar" />
        </Box>
      </WrapperContainer>
      <WrapperContainer
        variant="light"
        sx={{
          borderRadius: 3,
          paddingBottom: theme.spacing(4),
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={5} sm={12} lg={5} xl={5}>
            <WrapperContainer
              variant="default"
              sx={{
                borderRadius: 3,
                paddingBottom: theme.spacing(4),
                marginTop: theme.spacing(5),
              }}
            >
              <Box sx={{ marginBottom: theme.spacing(2) }}>
                <SectionTitle title="Events Calendar" variant="small" />
              </Box>
              <EventCalendar />
            </WrapperContainer>
          </Grid>
          <Grid item xs={12} md={7} sm={12} lg={7} xl={7}>
            <WrapperContainer
              variant="default"
              sx={{
                borderRadius: 3,
                paddingBottom: theme.spacing(4),
                marginTop: theme.spacing(5),
              }}
            >
              <Box sx={{ marginBottom: theme.spacing(2) }}>
                <SectionTitle title="Events Summary" />
              </Box>
              <EventsSection />
            </WrapperContainer>
          </Grid>
        </Grid>
      </WrapperContainer>
    </Box>
  );
};

export default Page;

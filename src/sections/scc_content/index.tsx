import React from "react";
import { Box, Chip, Container, Divider, Grid, useTheme } from "@mui/material";
import WrapperContainer from "@/containers";
import ContentDisplay from "@/components/content_display";
import SliderContainerSwitcherProps from "@/interfaces/SliderContainerSwitcherProps";
import sccInfo, { sccContent } from "@/static/scc";
import { EventCalendar, SectionSubTitle } from "@/components";
import { EventsSection } from "@/sections";

type OmittableProperties =
  | "setContentTypeID"
  | "title"
  | "description"
  | "baseURL"
  | "content";

const SccContent: React.FC<
  Omit<SliderContainerSwitcherProps, OmittableProperties>
> = ({ contentTypeID }) => {
  const theme = useTheme();

  const renderedContent = sccContent.filter(
    (min) => min.relationId === contentTypeID
  );

  return (
    <>
      <Container>
        <Divider
          sx={{ marginTop: theme.spacing(3), marginBottom: theme.spacing(3) }}
        >
          <Chip
            label={
              sccInfo.find((min) => min.id === contentTypeID)?.name || "Unknown"
            }
            size="small"
          />
        </Divider>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <WrapperContainer
              variant="paper"
              sx={{ borderRadius: 3, paddingBottom: theme.spacing(4) }}
            >
              <ContentDisplay content={renderedContent[0]?.content} />
            </WrapperContainer>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <WrapperContainer
              variant="default"
              sx={{ borderRadius: 3, paddingBottom: theme.spacing(4) }}
            >
              <SectionSubTitle
                text={`${
                  sccInfo.find((min) => min.id === contentTypeID)?.name ||
                  "Unknown"
                }'s Calendar`}
              />
              <EventCalendar />
            </WrapperContainer>
            <WrapperContainer
              variant="paper"
              sx={{ borderRadius: 3, paddingBottom: theme.spacing(4) }}
            >
              <Box sx={{ marginBottom: theme.spacing(2) }}>
                <SectionSubTitle
                  text={`${
                    sccInfo.find((min) => min.id === contentTypeID)?.name
                  }'s Events Summary`}
                />
              </Box>
              <EventsSection />
            </WrapperContainer>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SccContent;

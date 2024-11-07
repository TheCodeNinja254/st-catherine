import React from "react";
import { Chip, Container, Divider, useTheme } from "@mui/material";
import WrapperContainer from "@/containers";
import ContentDisplay from "@/components/content_display";
import SliderContainerSwitcherProps from "@/interfaces/SliderContainerSwitcherProps";
import ecclesialGroups, { ecclesialContent } from "@/static/ecclesial_groups";

type OmittableProperties =
  | "setContentTypeID"
  | "title"
  | "description"
  | "baseURL"
  | "content";

const EcclesialContent: React.FC<
  Omit<SliderContainerSwitcherProps, OmittableProperties>
> = ({ contentTypeID }) => {
  const theme = useTheme();

  const renderedContent = ecclesialContent.filter(
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
              ecclesialGroups.find((min) => min.id === contentTypeID)?.name ||
              "Unknown"
            }
            size="small"
          />
        </Divider>
      </Container>
      <WrapperContainer
        variant="default"
        sx={{ borderRadius: 3, paddingBottom: theme.spacing(4) }}
      >
        <ContentDisplay content={renderedContent[0]?.content} />
      </WrapperContainer>
    </>
  );
};

export default EcclesialContent;

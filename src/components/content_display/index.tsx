import {
  ListSectionText,
  ParapgrapSectionText,
  SectionSubTitle,
  SectionTitle,
} from "@/components/common";
import { Box, useTheme } from "@mui/material";
import React from "react";
import ContentDisplayProps from "@/interfaces/ContentDisplayProps";
import { ContentWriteUpInterface } from "@/static/ministries";
import Image from "next/image";

const ContentDisplay: React.FC<ContentDisplayProps> = ({ title, content }) => {
  const theme = useTheme();

  return (
    <Box>
      {title && <SectionTitle title={title} />}
      {content && (
        <Box sx={{ marginTop: theme.spacing(4) }}>
          {content.map((item: ContentWriteUpInterface) => (
            <React.Fragment key={item.id}>
              {item.type === "image" && (
                <Box sx={{ marginBottom: theme.spacing(2) }}>
                  <Image
                    src={item.link || "/st-catherine/images/st-martin.png"}
                    alt={item.link || "placeholder"}
                    width={(598 * 50) / 100}
                    height={(496 * 50) / 100}
                  />
                </Box>
              )}

              {item.type === "title" && (
                <Box sx={{ marginBottom: theme.spacing(2) }}>
                  <SectionTitle title={item.text as string} />
                </Box>
              )}

              {item.type === "paragraph" && (
                <ParapgrapSectionText
                  key={item.id}
                  content={item.text as string[]}
                />
              )}

              {item.type === "list" && (
                <ListSectionText
                  key={item.id}
                  content={item.text as string[]}
                />
              )}

              {item.type === "subTitle" && (
                <SectionSubTitle variant="h3" text={item.text as string} />
              )}

              {item.type === "subTitle2" && (
                <SectionSubTitle variant="h4" text={item.text as string} />
              )}
            </React.Fragment>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ContentDisplay;

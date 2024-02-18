import {
  ListSectionText,
  ParapgrapSectionText,
  SectionTitle,
} from "@/components/common";
import { Box, useTheme } from "@mui/material";
import React from "react";
import ContentDisplayProps from "@/interfaces/ContentDisplayProps";
import { ContentWriteUpInterface } from "@/static/ministries";

const ContentDisplay: React.FC<ContentDisplayProps> = ({ title, content }) => {
  const theme = useTheme();

  return (
    <Box>
      {title && <SectionTitle title={title} />}
      {content && (
        <Box sx={{ marginTop: theme.spacing(4) }}>
          {content.map((item: ContentWriteUpInterface) => (
            <React.Fragment key={item.id}>
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
            </React.Fragment>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ContentDisplay;

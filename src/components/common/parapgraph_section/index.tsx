import { Box, Typography } from "@mui/material";

const ParapgrapSectionText = ({ content }: { content: string[] }) => {
  return (
    <Box>
      {content?.map((contentText: string) => (
        <Typography key={contentText} paragraph>
          {contentText}
        </Typography>
      ))}
    </Box>
  );
};

export default ParapgrapSectionText;

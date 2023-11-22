import { Box, Typography } from "@mui/material";

const ParapgrapSectionText = ({ content }: { content: string[] }) => {
  return (
    <Box>
      {content?.map((contentText: string) => (
        <Typography paragraph>{contentText}</Typography>
      ))}
    </Box>
  );
};

export default ParapgrapSectionText;

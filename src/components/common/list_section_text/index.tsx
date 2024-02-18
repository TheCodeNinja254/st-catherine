import { Box, Stack, Typography, useTheme } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const ListSectionText = ({ content }: { content: string[] }) => {
  const theme = useTheme();

  return (
    <Box>
      {content?.map((contentText: string) => (
        <Stack direction="row" key={contentText}>
          <CircleIcon
            fontSize="inherit"
            sx={{
              marginRight: theme.spacing(2),
              marginTop: theme.spacing(0.5),
            }}
          />
          <Typography paragraph>{contentText}</Typography>
        </Stack>
      ))}
    </Box>
  );
};

export default ListSectionText;

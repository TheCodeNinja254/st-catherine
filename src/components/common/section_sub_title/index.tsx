import { Box, Typography, useTheme } from "@mui/material";

const SectionSubTitle = ({
  text,
  variant,
}: {
  text: string;
  variant?: "h3" | "h4";
}) => {
  const theme = useTheme();

  return (
    <Box sx={{ marginLeft: theme.spacing(0) }}>
      <Typography
        variant={variant || "h3"}
        sx={{
          color: theme.palette.primary.main,
          marginBottom: theme.spacing(1),
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default SectionSubTitle;

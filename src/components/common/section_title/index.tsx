import { Box, Divider, Typography, useTheme } from "@mui/material";

const SectionTitle = ({ title }: { title: string }) => {
  const theme = useTheme();

  return (
    <Box sx={{ marginLeft: theme.spacing(2) }}>
      <Typography variant="h1" sx={{ color: theme.palette.primary.main }}>
        {title}
      </Typography>
      <Divider
        sx={{
          width: 200,
          height: 5,
          backgroundColor: theme.palette.secondary.main,
          marginLeft: theme.spacing(-2),
        }}
      />
    </Box>
  );
};

export default SectionTitle;

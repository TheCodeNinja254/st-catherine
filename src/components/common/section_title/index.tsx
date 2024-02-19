import { Box, Divider, Typography, useTheme } from "@mui/material";

const SectionTitle = ({ title }: { title: string }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        marginLeft: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
          marginLeft: theme.spacing(0),
        },
      }}
    >
      <Typography
        sx={{
          fontFamily: "Futura Std Bold",
          color: theme.palette.primary.main,
          marginBottom: theme.spacing(1),
          fontSize: 35,
          [theme.breakpoints.down("sm")]: {
            fontSize: 18,
          },
        }}
      >
        {title}
      </Typography>
      <Divider
        sx={{
          width: 200,
          height: 2,
          backgroundColor: theme.palette.secondary.main,
          marginLeft: theme.spacing(-2),
          [theme.breakpoints.down("sm")]: {
            marginLeft: theme.spacing(0),
          },
        }}
      />
    </Box>
  );
};

export default SectionTitle;

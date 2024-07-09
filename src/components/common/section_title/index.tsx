import { Box, Divider, Typography, useTheme } from "@mui/material";

const SectionTitle = ({
  title,
  variant,
}: {
  title: string;
  variant?: "small" | "large";
}) => {
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
          fontSize: variant === "small" ? 18 : 35,
          [theme.breakpoints.down("sm")]: {
            fontSize: variant === "small" ? 14 : 18,
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

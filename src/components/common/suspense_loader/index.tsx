import { CircularProgress, useTheme } from "@mui/material";

const SuspenseLoader = () => {
  const theme = useTheme();

  return (
    <div
      style={{
        marginTop: theme.spacing(20),
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress
        sx={{ margin: theme.spacing(2), color: theme.palette.primary.main }}
      />
    </div>
  );
};

export default SuspenseLoader;

import { Box, Typography } from "@mui/material";

const Home = () => {
  const bg = `rgba(19, 20, 102, 0.5)`;

  return (
    <>
      <Box
        sx={[
          {
            position: "relative",
            backgroundImage: "url(/images/hero_bacground.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
          },
          {
            "&:before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: bg,
              pointerEvents: "none",
            },
          },
        ]}
      >
        <Box
          sx={{
            top: 0,
            left: 0,
            width: "100%",
            minHeight: "70vh",
          }}
        >
          <Typography>Test</Typography>
        </Box>{" "}
        <Box
          sx={{
            top: 0,
            left: 0,
            width: "100%",
            minHeight: "70vh",
          }}
        >
          <Typography>Test</Typography>
        </Box>{" "}
        <Box
          sx={{
            top: 0,
            left: 0,
            width: "100%",
            minHeight: "70vh",
          }}
        >
          <Typography>Test</Typography>
        </Box>{" "}
        <Box
          sx={{
            top: 0,
            left: 0,
            width: "100%",
            minHeight: "70vh",
          }}
        >
          <Typography>Test</Typography>
        </Box>{" "}
        <Box
          sx={{
            top: 0,
            left: 0,
            width: "100%",
            minHeight: "70vh",
          }}
        >
          <Typography>Test</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Home;

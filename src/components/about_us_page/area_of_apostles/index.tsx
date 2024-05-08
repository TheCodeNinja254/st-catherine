import { Box, Container, Grid, useTheme } from "@mui/material";
import { SectionTitle } from "@/components";

const AreasOfApostles = () => {
  const theme = useTheme();

  return (
    <Box
      id="dominican-order"
      sx={{
        paddingBottom: theme.spacing(8),
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box sx={{ marginTop: theme.spacing(10) }}>
              <SectionTitle title="Areas of Apostles" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AreasOfApostles;

import {
  Box,
  Container,
  Divider,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  useTheme,
} from "@mui/material";
import { linkItems } from "@/static/links";
import Link from "next/link";
import popular_links, {
  PopularLink,
  PopularLinkCategory,
} from "@/static/popular_links";
import React from "react";
import { MyButton } from "@/styled_components";
import currentYear from "@/utils/currentYear";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main,
        paddingTop: theme.spacing(7),
        paddingBottom: theme.spacing(4),
        [theme.breakpoints.down("sm")]: {
          paddingTop: theme.spacing(4),
        },
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Bulletin
            </Typography>
            <Divider
              sx={{
                width: 40,
                height: 3,
                backgroundColor: theme.palette.secondary.light,
              }}
            />
            <Typography variant="body2" sx={{ marginTop: theme.spacing(3) }}>
              Always get the latest weekly bulletin and stay upto date before
              the sabbath day
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Box display="flex" justifyContent="right">
              <FormControl
                sx={{
                  m: 1,
                  borderRadius: 20,
                  backgroundColor: theme.palette.common.white,
                }}
                variant="outlined"
                fullWidth
              >
                <InputLabel
                  htmlFor="outlined-adornment-password"
                  sx={{ color: theme.palette.primary.main }}
                >
                  Enter your e-mail address here
                </InputLabel>
                <OutlinedInput
                  fullWidth
                  id="outlined-adornment-password"
                  type="text"
                  sx={{
                    borderRadius: 20,
                    borderColor: theme.palette.common.white,
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <MyButton variant="contained" disableElevation>
                        Subscribe
                      </MyButton>
                    </InputAdornment>
                  }
                  label="Enter your e-mail address here"
                />
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Divider
        sx={{
          width: "100%",
          height: 1,
          marginTop: theme.spacing(4),
          backgroundColor: theme.palette.secondary.light,
        }}
      />
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, marginTop: theme.spacing(4) }}
            >
              Menu
            </Typography>
            {linkItems.map((link) => (
              <Link href={link.uri} key={link.id}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 200,
                    marginTop: theme.spacing(1),
                    color: theme.palette.common.white,
                    "&:hover": {
                      color: theme.palette.secondary.main,
                    },
                  }}
                >
                  {link.name}
                </Typography>
              </Link>
            ))}
          </Grid>
          {popular_links.map((linkCat: PopularLinkCategory) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={linkCat.id}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, marginTop: theme.spacing(4) }}
              >
                {linkCat.category}
              </Typography>
              {linkCat.links.map((link: PopularLink) => (
                <Link href={link.url} key={link.id}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 200,
                      marginTop: theme.spacing(1),
                      color: theme.palette.common.white,
                      "&:hover": {
                        color: theme.palette.secondary.main,
                      },
                    }}
                  >
                    {link.title}
                  </Typography>
                </Link>
              ))}
            </Grid>
          ))}
        </Grid>
      </Container>
      <Divider
        sx={{
          width: "100%",
          height: 1,
          marginTop: theme.spacing(4),
          backgroundColor: theme.palette.secondary.light,
        }}
      />
      <Container>
        <Typography
          sx={{
            fontSize: 12,
            marginTop: theme.spacing(3),
            color: theme.palette.secondary.light,
          }}
        >
          Copyright @ {currentYear()} Designed by Brian Wabai.| St Catherine of
          Siena - Parish
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

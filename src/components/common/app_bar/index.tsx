"use client";

import {
  Box,
  Button,
  Grid,
  IconButton,
  Theme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { MyAppBar, MyToolbar } from "@/styled_components";
import Link from "next/link";
import Image from "next/image";
import name_logo from "@/assets/svgs/name_logo.svg";
import { LinkItem, linkItems } from "@/static/links";
import AppbarProps from "@/interfaces/AppbarProps";

const Appbar: React.FC<AppbarProps> = ({
  showMenuIcon,
  handleDrawerToggle,
}) => {
  const theme: Theme = useTheme();
  const router = useRouter();
  const [, setActive] = useState(1);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [scrollYPosition, setScrollYPosition] = useState(0);

  const pathName = usePathname();

  const onScroll = useCallback(() => {
    const scrollYPos = typeof window === "undefined" ? 0 : window.scrollY;
    setScrollYPosition(scrollYPos);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll, { capture: true });
    };
  }, []);

  useEffect(() => {
    linkItems.forEach((item: LinkItem) => {
      if (item.uri === pathName) {
        setActive(item.id);
      }
    });
  }, [router, pathName]);

  const handleRouteChange = (linkId: number): void => {
    setActive(linkId);
  };

  return (
    <MyAppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor:
          scrollYPosition > 100 ? theme.palette.primary.main : "transparent",
      }}
    >
      <MyToolbar>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: isMobile ? "space-between" : "space-evenly",
            alignItems: "center",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              [theme.breakpoints.between("sm", "md")]: {
                marginBottom: theme.spacing(2),
              },
            }}
          >
            <Link href="/">
              <Image src={name_logo} alt="St. Catherine" height={25} />
            </Link>
          </Grid>
          {!isMobile ? (
            <Grid>
              <Box
                sx={{
                  display: { xs: "none", sm: "block", marginRight: 0 },
                  justifyContent: "space-evenly",
                }}
              >
                {linkItems.map((item: LinkItem) => (
                  <Link href={item.uri} key={item.id}>
                    <Button
                      onClick={() => handleRouteChange(item.id)}
                      sx={{
                        color:
                          pathName === item.uri
                            ? theme.palette.secondary.main
                            : theme.palette.common.white,
                        marginLeft: theme.spacing(2),
                        fontSize: "14px",
                        padding: "3px 30px",
                        px: theme.spacing(1.5),
                        fontFamily: "Futura",
                        lineHeight: "24px",
                        letterSpacing: "-2%",
                        borderRadius: 20,
                        "&: hover": {
                          borderRadius: 20,
                          backgroundColor:
                            scrollYPosition > 200
                              ? theme.palette.common.white
                              : theme.palette.primary.main,
                          color:
                            scrollYPosition > 200
                              ? theme.palette.primary.main
                              : theme.palette.common.white,
                        },
                      }}
                    >
                      {item.name}
                    </Button>
                  </Link>
                ))}

                {/* <Link href="/register"> */}
                {/*  <MyButton */}
                {/*    size="small" */}
                {/*    variant="contained" */}
                {/*    disableElevation */}
                {/*    sx={{ */}
                {/*      color: */}
                {/*        scrollYPosition > 100 */}
                {/*          ? theme.palette.primary.main */}
                {/*          : theme.palette.common.white, */}
                {/*      backgroundColor: */}
                {/*        scrollYPosition > 100 */}
                {/*          ? theme.palette.common.white */}
                {/*          : theme.palette.primary.main, */}
                {/*      fontFamily: "Futura", */}
                {/*      px: theme.spacing(1.5), */}
                {/*      fontSize: "14px", */}
                {/*      marginLeft: theme.spacing(6), */}
                {/*      padding: "3px 30px", */}
                {/*      lineHeight: "24px", */}
                {/*      letterSpacing: "-2%", */}
                {/*      "&:hover": { */}
                {/*        backgroundColor: theme.palette.primary.main, */}
                {/*        color: theme.palette.common.white, */}
                {/*      }, */}
                {/*    }} */}
                {/*  > */}
                {/*    Register Now */}
                {/*  </MyButton> */}
                {/* </Link> */}
              </Box>
            </Grid>
          ) : (
            <Grid item sm={1} xs={1}>
              {showMenuIcon && (
                <Box display="flex" justifyContent="right" alignItems="center">
                  <IconButton
                    size="large"
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleDrawerToggle}
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
              )}
            </Grid>
          )}
        </Grid>
      </MyToolbar>
    </MyAppBar>
  );
};

export default Appbar;

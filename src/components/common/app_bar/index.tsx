"use client";

import {
  Box,
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
import Image from "next/image";
import name_logo from "@/assets/svgs/name_logo.svg";
import { LinkItem, linkItems } from "@/static/links";
import AppbarProps from "@/interfaces/AppbarProps";
import Link from "next/link";
import AppBarMenuItem from "@/components/common/app_bar_menu_item";

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
                  <AppBarMenuItem
                    key={item.id}
                    item={item}
                    scrollYPosition={scrollYPosition}
                    setActive={setActive}
                    pathName={pathName}
                  />
                ))}
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

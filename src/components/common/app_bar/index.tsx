"use client";

import {
  Box,
  Collapse,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { MyAppBar, MyToolbar } from "@/styled_components";
import Image from "next/image";
import name_logo from "@/assets/svgs/name_logo.svg";
import { LinkItem, linkItems, SubMenuLinkItem } from "@/static/links";
import AppbarProps from "@/interfaces/AppbarProps";
import Link from "next/link";
import AppBarMenuItem from "@/components/common/app_bar_menu_item";
import { Cancel, KeyboardArrowUp } from "@mui/icons-material";

type Anchor = "top" | "left" | "bottom" | "right";

const Appbar: React.FC<AppbarProps> = ({ showMenuIcon }) => {
  const theme: Theme = useTheme();
  const router = useRouter();
  const [, setActive] = useState(1);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [scrollYPosition, setScrollYPosition] = useState(0);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [mobileSubMenuCollapse, setMobileSubMenuCollapse] = useState({
    menuId: 0,
    openState: false,
  });

  const { menuId, openState } = mobileSubMenuCollapse;

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const handleRouteChange = (newURI: string, passedAnchor: Anchor) => {
    setState({ ...state, [passedAnchor]: false });
    router.push(newURI);
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        backgroundColor: theme.palette.primary.main,
      }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ paddingTop: theme.spacing(3), paddingX: theme.spacing(2) }}
      >
        <Typography
          sx={{
            color: theme.palette.common.white,
            marginTop: theme.spacing(1),
          }}
        >
          Menu
        </Typography>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ color: theme.palette.common.white }}
          onClick={toggleDrawer(anchor, false)}
        >
          <Cancel />
        </IconButton>
      </Stack>
      <Divider
        sx={{
          width: "100%",
          height: 1,
          backgroundColor: theme.palette.secondary.light,
        }}
      />
      <List>
        {linkItems.map((linkItem: LinkItem) => (
          <>
            {linkItem?.subMenus && linkItem?.subMenus.length > 0 ? (
              <>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() =>
                      setMobileSubMenuCollapse({
                        menuId: linkItem.id,
                        openState: !openState,
                      })
                    }
                  >
                    <ListItemText
                      primary={
                        <Stack direction="row" justifyContent="center">
                          <Typography>{linkItem.name}</Typography>
                          {menuId === linkItem.id && openState ? (
                            <KeyboardArrowUp />
                          ) : (
                            <KeyboardArrowDownIcon />
                          )}
                        </Stack>
                      }
                      sx={{
                        color: theme.palette.common.white,
                        textAlign: "center",
                      }}
                      color={theme.palette.common.white}
                    />
                  </ListItemButton>
                </ListItem>
                <Collapse in={menuId === linkItem.id && openState}>
                  <Divider />
                  <List>
                    {linkItem.subMenus.map((subItem: SubMenuLinkItem) => (
                      <ListItem disablePadding key={subItem.id}>
                        <ListItemButton
                          onClick={() => handleRouteChange(subItem.uri, "top")}
                        >
                          <ListItemText
                            primary={subItem.name}
                            sx={{
                              color: theme.palette.common.white,
                              textAlign: "center",
                            }}
                            color={theme.palette.common.white}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                  <Divider />
                </Collapse>
              </>
            ) : (
              <ListItem key={linkItem.id} disablePadding>
                <ListItemButton
                  onClick={() => handleRouteChange(linkItem.uri, "top")}
                >
                  <ListItemText
                    primary={linkItem.name}
                    sx={{
                      color: theme.palette.common.white,
                      textAlign: "center",
                    }}
                    color={theme.palette.common.white}
                  />
                </ListItemButton>
              </ListItem>
            )}
          </>
        ))}
      </List>
    </Box>
  );

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
    <>
      <Drawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer("top", false)}
      >
        {list("top")}
      </Drawer>
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
                  <Box
                    display="flex"
                    justifyContent="right"
                    alignItems="center"
                  >
                    <IconButton
                      size="large"
                      edge="end"
                      color="inherit"
                      aria-label="menu"
                      onClick={toggleDrawer("top", true)}
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
    </>
  );
};

export default Appbar;

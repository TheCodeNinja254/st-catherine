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
  ListItemIcon,
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
import {
  CascadingMenuItem,
  LinkItem,
  linkItems,
  SubMenuLinkItem,
} from "@/static/links";
import AppbarProps from "@/interfaces/AppbarProps";
import Link from "next/link";
import AppBarMenuItem from "@/components/common/app_bar_menu_item";
import { Cancel, KeyboardArrowUp, Notifications } from "@mui/icons-material";

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

  const handleOpenSubMenu = (_menuId: number) => {
    if (_menuId === menuId) {
      setMobileSubMenuCollapse({ menuId: _menuId, openState: !openState });
    } else {
      setMobileSubMenuCollapse({ menuId: _menuId, openState: true });
    }
  };

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
        paddingX: theme.spacing(4),
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        // backgroundColor: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.main,
        backgroundImage: `radial-gradient(circle at 50% 50%, #700D3D 10%, transparent 15%),
    radial-gradient(circle at 50% 50%, #D33D86 20%, transparent 25%);`,
        backgroundSize: `10px 10px`,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
      role="presentation"
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
            marginTop: theme.spacing(0),
          }}
        >
          Menu
        </Typography>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{
            color: theme.palette.common.white,
            marginBottom: theme.spacing(0.5),
            marginTop: theme.spacing(-2),
          }}
          onClick={toggleDrawer(anchor, false)}
        >
          <Cancel />
        </IconButton>
      </Stack>
      <Divider
        flexItem
        sx={{
          height: 1,
          backgroundColor: theme.palette.secondary.light,
        }}
      />
      <List>
        {linkItems.map((linkItem: LinkItem) => (
          <React.Fragment key={linkItem.id}>
            {linkItem?.cascadingMenu && linkItem?.cascadingMenu?.length > 0 && (
              <>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => handleOpenSubMenu(linkItem.id)}
                  >
                    <ListItemIcon>{linkItem.icon}</ListItemIcon>
                    <ListItemText
                      primary={
                        <Stack direction="row" justifyContent="space-between">
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
                        textAlign: "left",
                      }}
                      color={theme.palette.common.white}
                    />
                  </ListItemButton>
                </ListItem>
                <Collapse in={menuId === linkItem.id && openState}>
                  <Divider />
                  {linkItem.cascadingMenu.map((cascItem: CascadingMenuItem) => (
                    <Box
                      sx={{ marginBottom: theme.spacing(2) }}
                      key={cascItem.id}
                    >
                      <Typography
                        align="left"
                        color="secondary"
                        sx={{
                          marginTop: theme.spacing(2),
                          fontWeight: 700,
                          textTransform: "uppercase",
                          marginLeft: theme.spacing(6),
                        }}
                      >
                        {cascItem.label}
                      </Typography>
                      <List>
                        {cascItem.subMenus.map(
                          (cascSubItem: SubMenuLinkItem) => (
                            <ListItem disablePadding key={cascItem.id}>
                              <ListItemButton
                                onClick={() =>
                                  handleRouteChange(cascSubItem.uri, "bottom")
                                }
                              >
                                <ListItemText
                                  primary={cascSubItem.name}
                                  sx={{
                                    color: theme.palette.common.white,
                                    textAlign: "left",
                                    marginLeft: theme.spacing(6),
                                  }}
                                  color={theme.palette.common.white}
                                />
                              </ListItemButton>
                            </ListItem>
                          )
                        )}
                      </List>
                    </Box>
                  ))}
                  <Divider />
                </Collapse>
              </>
            )}
            {linkItem?.subMenus && linkItem?.subMenus.length > 0 && (
              <>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => handleOpenSubMenu(linkItem.id)}
                  >
                    <ListItemIcon>{linkItem.icon}</ListItemIcon>
                    <ListItemText
                      primary={
                        <Stack direction="row" justifyContent="space-between">
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
                        textAlign: "left",
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
                          onClick={() =>
                            handleRouteChange(subItem.uri, "bottom")
                          }
                        >
                          <ListItemText
                            primary={subItem.name}
                            sx={{
                              color: theme.palette.common.white,
                              textAlign: "left",
                              marginLeft: theme.spacing(6),
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
            )}
            {!linkItem?.subMenus && !linkItem?.cascadingMenu && (
              <ListItem key={linkItem.id} disablePadding>
                <ListItemButton
                  onClick={() => handleRouteChange(linkItem.uri, "bottom")}
                >
                  <ListItemIcon>{linkItem.icon}</ListItemIcon>
                  <ListItemText
                    primary={linkItem.name}
                    sx={{
                      color: theme.palette.common.white,
                      textAlign: "left",
                    }}
                    color={theme.palette.common.white}
                  />
                </ListItemButton>
              </ListItem>
            )}
          </React.Fragment>
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
        PaperProps={{
          sx: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}
        anchor="bottom"
        open={state.bottom}
        onClose={toggleDrawer("bottom", false)}
      >
        {list("bottom")}
      </Drawer>
      <MyAppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor:
            scrollYPosition > 100
              ? theme.palette.primary.main
              : `rgba(0, 0, 0, .3)`,
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
              item
              sx={{
                display: "flex",
                justifyContent: "space-between",
                [theme.breakpoints.between("sm", "md")]: {
                  marginBottom: theme.spacing(2),
                },
              }}
            >
              <Link href="/">
                <Image
                  src={name_logo}
                  alt="St. Catherine"
                  height={isMobile ? 15 : 25}
                />
              </Link>
            </Grid>
            {!isMobile ? (
              <Grid item>
                <Box
                  sx={{
                    display: { xs: "none", sm: "block", marginRight: 0 },
                    justifyContent: "space-between",
                  }}
                >
                  {linkItems.map((item: LinkItem) => (
                    <React.Fragment key={item.id}>
                      <AppBarMenuItem
                        uniqueId={item.id}
                        item={item}
                        scrollYPosition={scrollYPosition}
                        setActive={setActive}
                        pathName={pathName}
                      />
                    </React.Fragment>
                  ))}
                  <Link href="/announcements">
                    <IconButton
                      size="large"
                      edge="end"
                      color="inherit"
                      aria-label="menu"
                      sx={{
                        marginRight: theme.spacing(1),
                        color: theme.palette.common.white,
                      }}
                    >
                      <Notifications />
                    </IconButton>
                  </Link>
                </Box>
              </Grid>
            ) : (
              <Grid item sm={1} xs={1}>
                {showMenuIcon && (
                  <Box display="flex" justifyContent="right" alignItems="right">
                    <Link href="/announcements">
                      <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{
                          marginRight: theme.spacing(1),
                          color: theme.palette.common.white,
                        }}
                      >
                        <Notifications />
                      </IconButton>
                    </Link>
                    <IconButton
                      size="large"
                      edge="end"
                      color="inherit"
                      aria-label="menu"
                      onClick={toggleDrawer("bottom", true)}
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

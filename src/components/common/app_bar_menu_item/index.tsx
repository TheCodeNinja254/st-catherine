import React from "react";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import { CascadingMenuItem, LinkItem, SubMenuLinkItem } from "@/static/links";
import Link from "next/link";

const AppBarMenuItem = ({
  uniqueId,
  item,
  scrollYPosition,
  setActive,
  pathName,
}: {
  uniqueId: number;
  item: LinkItem;
  setActive: (linkId: number) => void;
  scrollYPosition: number;
  pathName: string;
}) => {
  const theme: Theme = useTheme();

  const buttonStyling = {
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
  };

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleRouteChange = (e: any, linkId: number): void => {
    handleCloseUserMenu();
    handleOpenUserMenu(e);
    setActive(linkId);
  };

  return (
    <React.Fragment key={uniqueId}>
      {/* @ts-ignore */}
      {item?.subMenus?.length || item?.cascadingMenu?.length > 0 ? (
        <Button
          key={item.id}
          onMouseEnter={(e) => handleRouteChange(e, item.id)}
          sx={buttonStyling}
        >
          {item.name}
        </Button>
      ) : (
        <Link href={item.uri}>
          <Button key={item.id} sx={buttonStyling}>
            {item.name}
          </Button>
        </Link>
      )}
      {item?.subMenus && item?.subMenus?.length > 0 && (
        <Menu
          autoFocus
          sx={{
            mt: "45px",
          }}
          keepMounted
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
          onClick={handleCloseUserMenu}
          onBackdropClick={handleCloseUserMenu}
        >
          <Box
            p={1}
            width={230}
            sx={{
              backgroundColor: theme.palette.primary.main,
              margin: theme.spacing(-1),
              elevation: 0,
            }}
          >
            {item.subMenus.map((subMenuItem: SubMenuLinkItem) => (
              <Link href={subMenuItem.uri} key={subMenuItem.id}>
                <MenuItem
                  onClick={() => {}}
                  sx={{
                    "&:hover": {
                      borderRadius: "20px",
                      color: theme.palette.common.white,
                      "&::after": {
                        content: "''",
                        position: "absolute",
                        left: 15,
                        right: 140,
                        bottom: 0,
                        height: "4px",
                        backgroundColor: theme.palette.secondary.main,
                        borderRadius: "20px",
                      },
                    },
                    color: theme.palette.common.white,
                    borderRadius: "20px",
                  }}
                >
                  {subMenuItem.name}
                </MenuItem>
              </Link>
            ))}
          </Box>
        </Menu>
      )}
      {item?.cascadingMenu && item?.cascadingMenu?.length > 0 && (
        <Menu
          autoFocus
          sx={{
            mt: "45px",
          }}
          keepMounted
          id="menu-appbar-casc"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
          onClick={handleCloseUserMenu}
          onBackdropClick={handleCloseUserMenu}
        >
          <Box
            p={1}
            width={230}
            sx={{
              backgroundColor: theme.palette.primary.main,
              margin: theme.spacing(-1),
              elevation: 0,
            }}
          >
            {item.cascadingMenu?.map((cascItem: CascadingMenuItem) => (
              <Box sx={{ marginBottom: theme.spacing(2) }}>
                <Typography
                  color="secondary"
                  sx={{ marginLeft: theme.spacing(2) }}
                >
                  {cascItem.label}
                </Typography>
                {cascItem?.subMenus.map((cascSubItem: SubMenuLinkItem) => (
                  <Link href={cascSubItem.uri} key={cascSubItem.id}>
                    <MenuItem
                      onClick={() => {}}
                      sx={{
                        "&:hover": {
                          borderRadius: "20px",
                          color: theme.palette.common.white,
                          "&::after": {
                            content: "''",
                            position: "absolute",
                            left: 15,
                            right: 140,
                            bottom: 0,
                            height: "4px",
                            backgroundColor: theme.palette.secondary.main,
                            borderRadius: "20px",
                          },
                        },
                        color: theme.palette.common.white,
                        borderRadius: "20px",
                      }}
                    >
                      {cascSubItem.name}
                    </MenuItem>
                  </Link>
                ))}
              </Box>
            ))}
          </Box>
        </Menu>
      )}
    </React.Fragment>
  );
};

export default AppBarMenuItem;

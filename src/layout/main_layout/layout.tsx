"use client";

import { Box, ThemeProvider } from "@mui/material";
import theme from "@/theme";
import React, { Suspense, useState } from "react";
import { Appbar, NavigationEvents, SuspenseLoader } from "@/components";
import LayoutProps from "@/interfaces/LayoutProps";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<SuspenseLoader />}>
        <NavigationEvents />
        <Box>
          <Appbar handleDrawerToggle={handleDrawerToggle} showMenuIcon />
          <main>{children}</main>
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default Layout;

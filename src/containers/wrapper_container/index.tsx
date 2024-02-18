import React from "react";
import { Box, Card, CardContent, Container, useTheme } from "@mui/material";
import WrapperContainerProps from "@/interfaces/WrapperContainerProps";

const WrapperContainer: React.FC<WrapperContainerProps> = ({
  children,
  variant,
  fullWidth,
  sx,
}) => {
  const theme = useTheme();

  const backgroundColorMap: Record<WrapperContainerProps["variant"], string> = {
    light: theme.palette.common.white,
    paper: theme.palette.background.paper,
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    default: theme.palette.background.default,
  };

  const backgroundColor =
    backgroundColorMap[variant] ?? theme.palette.background.default;

  const style = {
    backgroundColor,
    paddingTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
    ...sx,
  };

  return (
    <Box>
      {fullWidth ? (
        <Card elevation={0} sx={style}>
          <CardContent>{children}</CardContent>
        </Card>
      ) : (
        <Container sx={style}>{children}</Container>
      )}
    </Box>
  );
};

export default WrapperContainer;

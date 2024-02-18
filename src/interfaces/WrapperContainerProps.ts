import React from "react";

type WrapperContainerProps = {
  children: React.ReactNode;
  variant: "light" | "default" | "paper" | "primary" | "secondary";
  fullWidth?: boolean;
  sx?: Record<string, any>;
};

export default WrapperContainerProps;

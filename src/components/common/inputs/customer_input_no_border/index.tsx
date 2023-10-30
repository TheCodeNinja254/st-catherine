import React from "react";
import { styled, TextField, TextFieldProps, useTheme } from "@mui/material";

const Input = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    fontFamily: "Futura Std Book",
    borderRadius: "8px",
    background: "#EFEFEF",
    color: "#424242",
    "&.Mui-focused": {
      background: "#FFFFFF",
    },
    "& fieldset": {
      border: "1px solid transparent",
    },
    "& .MuiSelect-iconOutlined": {
      color: "#424242",
    },
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "rgba(145, 158, 171, 0.818)",
    },
    "&.Mui-focused fieldset": {
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
}));

const CustomInputNoBorder = ({ ...props }: TextFieldProps) => {
  const theme = useTheme();

  return (
    <>
      <Input
        fullWidth
        InputProps={{
          style: { fontFamily: "Futura Book BT", fontSize: "16px" },
        }}
        sx={{
          "& .MuiInputBase-root": {
            background: props.value ? "#FFFFFF" : "#EFEFEF",
            "& fieldset": {
              borderColor: props.value
                ? theme.palette.primary.main
                : "transparent",
            },
          },
        }}
        InputLabelProps={{
          style: {
            fontFamily: "Futura Book BT",
            fontSize: "16px",
            color: "#424242",
          },
        }}
        FormHelperTextProps={{
          style: { fontFamily: "Futura Book BT", fontSize: "16px" },
        }}
        {...props}
      />
    </>
  );
};

export default CustomInputNoBorder;

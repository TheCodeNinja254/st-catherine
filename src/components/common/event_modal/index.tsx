import * as React from "react";
import Dialog from "@mui/material/Dialog";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import { FiberManualRecordRounded } from "@mui/icons-material";

const EventModal = ({
  open,
  handleClose,
}: // date,
{
  open: boolean;
  handleClose: () => any;
  // date: Dayjs | undefined;
}) => {
  // console.log(date?.date());
  const theme = useTheme();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle
        id="alert-dialog-title"
        sx={{
          fontWeight: 700,
          fontSize: 18,
          color: theme.palette.primary.main,
        }}
      >
        Event Title Here
      </DialogTitle>
      <DialogContent>
        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 200,
            marginBottom: theme.spacing(1),
            color: theme.palette.text.secondary,
          }}
        >
          Organized by:{" "}
          <span
            style={{
              fontWeight: 700,
            }}
          >
            The Choir
          </span>
        </Typography>
        <Divider />
        <DialogContentText
          id="alert-dialog-description"
          sx={{ marginTop: theme.spacing(2) }}
        >
          Lorem ipsum. istamet ipsumLorem ipsum. istamet ipsumLorem ipsum.
          istamet ipsumLorem ipsum. istamet ipsumLorem ipsum. istamet ipsum
          Lorem ipsum. istamet ipsumLorem ipsum. istamet ipsumLorem ipsum.
          istamet ipsumLorem ipsum. istamet ipsumLorem ipsum. istamet ipsum
        </DialogContentText>
        <Divider sx={{ marginTop: theme.spacing(1) }} />
        <Box display="flex">
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 200,
              marginTop: theme.spacing(1),
              color: theme.palette.text.secondary,
            }}
          >
            Where:{" "}
            <span
              style={{
                fontWeight: 700,
              }}
            >
              Karura Forest
            </span>
          </Typography>
          <FiberManualRecordRounded
            sx={{
              margin: theme.spacing(2),
              fontSize: 6,
              color: theme.palette.text.secondary,
            }}
          />
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 200,
              marginTop: theme.spacing(1),
              color: theme.palette.text.secondary,
            }}
          >
            When:{" "}
            <span
              style={{
                fontWeight: 700,
              }}
            >
              24th Aug 2024
            </span>
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose} autoFocus>
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EventModal;

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { CardContent, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { PhotoGalleryContentType } from "@/static/photo_gallery_content";

type GalleryViewModalProps = {
  open: boolean;
  setOpen: any;
  image: PhotoGalleryContentType | undefined;
};

const placeholderBlurImage: string = "LAIz|-~VIvRM^v%0R:s:00R*t6og";

const GalleryViewModal = ({ open, setOpen, image }: GalleryViewModalProps) => {
  const theme = useTheme();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogContent dividers>
        <CardContent sx={{ paddingTop: theme.spacing(5) }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: 500,
              height: 500,
              marginTop: theme.spacing(5),
            }}
          >
            <Image
              src={image!.img}
              alt={image!.title}
              objectFit="contain"
              fill
              placeholder={`data:image/${placeholderBlurImage}`}
              blurDataURL={placeholderBlurImage}
            />
          </Box>
        </CardContent>
      </DialogContent>
      <DialogActions
        sx={{
          backgroundColor: theme.palette.primary.main,
          zIndex: 1,
          opacity: 0.8,
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ padding: theme.spacing(3) }} display="flex">
          <Typography
            sx={{ color: theme.palette.common.white }}
            variant="caption"
          >
            {image!.img} No description to show
          </Typography>
        </Box>
        <Button
          variant="outlined"
          onClick={handleClose}
          sx={{
            color: theme.palette.common.white,
            borderColor: theme.palette.common.white,
            borderRadius: 10,
            "&:hover": { borderColor: theme.palette.common.black },
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GalleryViewModal;

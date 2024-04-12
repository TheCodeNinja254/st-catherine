import { useState } from "react";
import {
  Box,
  Button,
  Container,
  ImageList,
  ImageListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { SectionTitle } from "@/components";
import photoGalleryContent, {
  PhotoGalleryContentType,
} from "@/static/photo_gallery_content";
import GalleryViewModal from "@/components/common/gallery_view_modal";

interface PhotoGalleryProps {
  height?: number | string;
}

const PhotoGallery = ({ height }: PhotoGalleryProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<PhotoGalleryContentType>();
  const [imageCategory] = useState("general");

  const handleOpenSingleImage = (photoItem: PhotoGalleryContentType | any) => {
    setOpen(true);
    setSelectedImage(photoItem);
  };

  // const handleImageCategoryChange = (newCat: string) => {
  //   setImageCategory(newCat);
  // };

  return (
    <Box sx={{ paddingBottom: theme.spacing(8), paddingTop: theme.spacing(8) }}>
      <Container>
        <Box display="flex" justifyContent="right">
          <SectionTitle title="Photo Gallery" />
        </Box>
        {/* <Stack */}
        {/*  sx={{ */}
        {/*    marginBottom: theme.spacing(1), */}
        {/*    marginTop: theme.spacing(3), */}
        {/*    display: "flex", */}
        {/*    flexDirection: "row", */}
        {/*    overflowX: "auto", */}
        {/*    scrollbarWidth: "none", */}
        {/*    "-ms-overflow-style": "none", */}
        {/*    "&::-webkit-scrollbar": { */}
        {/*      display: "none", */}
        {/*    }, */}
        {/*  }} */}
        {/*  direction="row" */}
        {/* > */}
        {/*  {galleryCategories.map((galleryCategory: GalleryCategoryType) => ( */}
        {/*    <Chip */}
        {/*      color={ */}
        {/*        imageCategory === galleryCategory.catName */}
        {/*          ? "primary" */}
        {/*          : "default" */}
        {/*      } */}
        {/*      clickable */}
        {/*      onClick={() => handleImageCategoryChange(galleryCategory.catName)} */}
        {/*      label={galleryCategory.name} */}
        {/*      key={galleryCategory.id} */}
        {/*      style={{ marginRight: theme.spacing(1) }} */}
        {/*    /> */}
        {/*  ))} */}
        {/* </Stack> */}
        <Box
          sx={{
            width: "100%",
            height: height || 600,
            overflowY: "scroll",
            marginTop: theme.spacing(4),
          }}
        >
          <ImageList variant="masonry" cols={isMobile ? 2 : 5} gap={8}>
            {photoGalleryContent
              .filter(
                (i: PhotoGalleryContentType) => i.category === imageCategory
              )
              .map((item: PhotoGalleryContentType) => (
                <ImageListItem
                  key={item.id}
                  component={Button}
                  onClick={() => handleOpenSingleImage(item)}
                >
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
          </ImageList>
        </Box>
      </Container>
      {selectedImage && (
        <GalleryViewModal image={selectedImage} open={open} setOpen={setOpen} />
      )}
    </Box>
  );
};

export default PhotoGallery;

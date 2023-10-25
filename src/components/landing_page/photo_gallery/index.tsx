import {
  Box,
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

const PhotoGallery = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ paddingBottom: theme.spacing(8), paddingTop: theme.spacing(8) }}>
      <Container>
        <Box display="flex" justifyContent="right">
          <SectionTitle title="Photo Gallery" />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: 600,
            overflowY: "scroll",
            marginTop: theme.spacing(4),
          }}
        >
          <ImageList variant="masonry" cols={isMobile ? 2 : 5} gap={8}>
            {photoGalleryContent.map((item: PhotoGalleryContentType) => (
              <ImageListItem key={item.img}>
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
    </Box>
  );
};

export default PhotoGallery;

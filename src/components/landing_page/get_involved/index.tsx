import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { AppSwipeableCarousel, SectionTitle } from "@/components";
import { ChevronRight } from "@mui/icons-material";
import getInvolvedContent, {
  GetInvolvedContentType,
} from "@/static/get_involved_content";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";

const GetInvolved = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        paddingTop: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
      }}
    >
      <CardContent>
        <Container>
          <SectionTitle title="Get Involved" />
          <Box sx={{ marginTop: theme.spacing(4) }}>
            <AppSwipeableCarousel showNavButtons loop>
              {getInvolvedContent?.map((content: GetInvolvedContentType) => (
                <SwiperSlide
                  key={content.id}
                  style={{
                    height: "100%",
                    display: "flex",
                    alignItems: "stretch",
                  }}
                >
                  <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <Card
                      elevation={0}
                      sx={{
                        backgroundColor: theme.palette.common.white,
                        borderRadius: 3,
                      }}
                    >
                      <CardMedia
                        sx={{ height: 290, borderRadius: 2 }}
                        image={content.imageLink}
                        title="get involved"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                          sx={{ fontWeight: 700 }}
                        >
                          {content.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {content.content}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        {content.learnMoreLink && (
                          <Link href={content.learnMoreLink}>
                            <Button size="small">
                              Learn More <ChevronRight />
                            </Button>
                          </Link>
                        )}
                      </CardActions>
                    </Card>
                  </Grid>
                </SwiperSlide>
              ))}
            </AppSwipeableCarousel>
          </Box>
        </Container>
      </CardContent>
    </Box>
  );
};

export default GetInvolved;

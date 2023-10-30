"use client";

import PhotoGallery from "@/components/landing_page/photo_gallery";
import GalleryIntroContent from "@/components/gallery_page";

const Home = () => {
  return (
    <>
      <GalleryIntroContent />
      <PhotoGallery height="100%" />
    </>
  );
};

export default Home;

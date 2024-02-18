"use client";

import MinistriesPage from "@/shared/ministries_page";
import ministries from "@/static/ministries";

const Page = () => {
  return (
    <>
      <MinistriesPage defaultContentId={ministries[0].id} />
    </>
  );
};

export default Page;

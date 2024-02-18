"use client";

import SccPage from "@/shared/scc_page";
import ministries from "@/static/ministries";

const Page = () => {
  return (
    <>
      <SccPage defaultContentId={ministries[0].id} />
    </>
  );
};

export default Page;

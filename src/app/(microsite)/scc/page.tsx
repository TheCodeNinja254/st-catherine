"use client";

import SccPage from "@/shared/scc_page";
import sccInfo from "@/static/scc";

const Page = () => {
  return (
    <>
      <SccPage defaultContentId={sccInfo[0].id} />
    </>
  );
};

export default Page;

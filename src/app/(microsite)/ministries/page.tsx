"use client";

import MinistriesIntro from "@/components/ministries_page";

const Page = (props: any) => {
  const {
    params: { contentType },
  } = props;

  const contentTypeName = contentType?.[0].toLowerCase();

  return (
    <>
      <MinistriesIntro />
    </>
  );
};

export default Page;

"use client";

import {
  ContentSwitchSection,
  SacramentsIntro,
} from "@/components/sacraments_page";

const Page = (props: any) => {
  const {
    params: { contentType },
  } = props;

  const contentTypeName = contentType?.[0].toLowerCase();

  return (
    <>
      <SacramentsIntro />
      <ContentSwitchSection contentTypeName={contentTypeName} />
    </>
  );
};

export default Page;

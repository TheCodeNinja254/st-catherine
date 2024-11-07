"use client";

import EcclesialGroupsPage from "@/shared/ecclessial_groups_page";

const Page = (props: any) => {
  const groupId = props?.params?.groupId;

  return (
    <>
      <EcclesialGroupsPage defaultContentId={Number(groupId?.[0]) || 0} />
    </>
  );
};

export default Page;

import MinistriesPage from "@/shared/ministries_page";

const Page = (props: any) => {
  const {
    params: { contentId },
  } = props;

  return (
    <>
      <MinistriesPage defaultContentId={Number(contentId[0]) || 0} />
    </>
  );
};

export default Page;

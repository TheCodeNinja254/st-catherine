import SccPage from "@/shared/scc_page";

const Page = (props: any) => {
  const {
    params: { contentId },
  } = props;

  return (
    <>
      <SccPage defaultContentId={Number(contentId[0]) || 0} />
    </>
  );
};

export default Page;

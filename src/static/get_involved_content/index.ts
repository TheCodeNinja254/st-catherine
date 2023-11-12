export type GetInvolvedContentType = {
  id: number;
  title: string;
  content: string;
  learnMoreLink: string;
  imageLink: string;
};

const getInvolvedContent: GetInvolvedContentType[] = [
  {
    id: 1,
    title: "Funding Appeal",
    content:
      "St Catherine of Siena Kitisuru Diocese of Nairobi stands on\n" +
      "                    a 5 acre parcel of land in Kitisuru. It is led by the Parish\n" +
      "                    Priest, Fr. Gideon Kizito. The Parish has a membership that\n" +
      "                    now...",
    learnMoreLink: "/",
    imageLink: "/st-catherine/images/fundingAppeal.png",
  },
  {
    id: 2,
    title: "Small Christian Communities",
    content:
      "The small Christian communities (SCC) such as St. Rose, St.\n" +
      "                    Elizabeth and St. Teresa communities, offer important\n" +
      "                    avenues for genuine and supportive Church-community....",
    learnMoreLink: "/",
    imageLink: "/st-catherine/images/getInvolvedOne.png",
  },
  {
    id: 3,
    title: "Ecclesial Groups",
    content:
      "The small Christian comThe PMC group was founded in 1843 by\n" +
      "                    Bishop Charles de Forbin Hanson in France. These are\n" +
      "                    children within the age bracket of 0-14 years.....",
    learnMoreLink: "/",
    imageLink: "/st-catherine/images/getInvolvedThree.jpg",
  },
];

export default getInvolvedContent;

export type GetInvolvedContentType = {
  id: number;
  title: string;
  content: string;
  learnMoreLink?: string;
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
    learnMoreLink: undefined,
    imageLink: "/st-catherine/images/fundraising.jpg",
  },
  {
    id: 2,
    title: "Small Christian Communities",
    content:
      "The small Christian communities (SCC) such as St. Rose, St.\n" +
      "                    Elizabeth and St. Teresa communities, offer important\n" +
      "                    avenues for genuine and supportive Church-community....",
    learnMoreLink: "/scc/2/st.-clare",
    imageLink: "/st-catherine/images/scc.png",
  },
  {
    id: 3,
    title: "Ecclesial Groups",
    content:
      "The ecclesial groups encompass a variety of associations within the Church, including lay movements like Opus Dei and the Neocatechumenal Way, religious orders such as the Jesuits and Franciscans, and third orders for laypeople inspired by these religious traditions. Additionally, parish-based groups, like prayer and Bible study groups, and charitable organizations, as well as youth and family ministries, play significant roles. These groups foster spiritual growth, community engagement, and service, contributing to the vitality and mission of the Catholic Church.",
    learnMoreLink: "/about-us/our-youth",
    imageLink: "/st-catherine/images/ecc.png",
  },
  {
    id: 4,
    title: "Ministries",
    content:
      "The ministries cover a broad range of services and activities aimed at addressing the spiritual, educational, social, and physical needs of individuals and communities. They include parish ministries, such as religious education, youth and young adult programs, and liturgical ministries, which support worship and sacraments. Social justice and outreach ministries address issues like poverty, homelessness, and social inequality through initiatives like food pantries and advocacy. Health care ministries run hospitals and clinics, while educational ministries operate schools and universities. These ministries reflect the Church's commitment to holistic care and service, embodying its mission to serve others in faith and love.",
    learnMoreLink: "/ministries",
    imageLink: "/st-catherine/images/ministries.png",
  },
];

export default getInvolvedContent;

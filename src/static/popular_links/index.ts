export type PopularLink = {
  id: number;
  title: string;
  url: string;
};

export type PopularLinkCategory = {
  id: number;
  category: string;
  links: PopularLink[];
};

const popularLinks: PopularLinkCategory[] = [
  {
    id: 1,
    category: "Announcements",
    links: [
      {
        id: 1,
        title: "This Week’s Bulletin",
        url: "/announcements",
      },
      {
        id: 2,
        title: "Next Week’s Bulletin",
        url: "/",
      },
      {
        id: 3,
        title: "Special Thanks",
        url: "/",
      },
    ],
  },
  {
    id: 2,
    category: "About Us",
    links: [
      {
        id: 1,
        title: "Our History",
        url: "/",
      },
      {
        id: 2,
        title: "Church Choir",
        url: "/about-us/church-choir",
      },
      {
        id: 3,
        title: "Youth",
        url: "/about-us/our-youth",
      },
      {
        id: 4,
        title: "Parish Pastoral Council",
        url: "/",
      },
    ],
  },
  {
    id: 3,
    category: "Downloads",
    links: [
      {
        id: 1,
        title: "Funding Appeal",
        url: "/",
      },
      {
        id: 2,
        title: "Small Christian Communities (S.C.C)",
        url: "/",
      },
      {
        id: 3,
        title: "Pontifical Missionary Childhood",
        url: "/",
      },
      {
        id: 4,
        title: "Notice",
        url: "/",
      },
    ],
  },
];

export default popularLinks;

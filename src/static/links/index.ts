export type SubMenuLinkItem = {
  id: number;
  name: string;
  uri: string;
};

export type LinkItem = {
  id: number;
  name: string;
  uri: string;
  row?: number;
  subMenus?: SubMenuLinkItem[];
};

export const linkItems: LinkItem[] = [
  {
    id: 1,
    name: "Home",
    uri: "/",
    row: 1,
    subMenus: [
      { id: 1, uri: "/", name: "New Parishoners" },
      { id: 2, uri: "/", name: "Directory Update" },
      { id: 3, uri: "/about-us/from-fathers-desk", name: "From Fr. Tesha" },
    ],
  },
  {
    id: 2,
    name: "About Us",
    uri: "/about-us",
    row: 1,
    subMenus: [
      { id: 1, uri: "/", name: "Our Mission" },
      { id: 2, uri: "/", name: "Key Facts" },
      { id: 3, uri: "/", name: "Our Leadership" },
      { id: 4, uri: "/", name: "Dominican Order" },
    ],
  },
  {
    id: 3,
    name: "Sacraments",
    uri: "/sacraments",
    row: 1,
    subMenus: [
      { id: 1, uri: "/sacraments/baptism", name: "Baptism" },
      { id: 2, uri: "/sacraments/confirmation", name: "Confirmation" },
      { id: 3, uri: "/sacraments/eucharist", name: "Eucharist" },
      { id: 4, uri: "/sacraments/reconciliation", name: "Reconciliation" },
      {
        id: 5,
        uri: "/sacraments/anointing-of-the-sick",
        name: "Anointing of the sick",
      },
      { id: 6, uri: "/sacraments/marriage", name: "Marriage" },
      { id: 7, uri: "/sacraments/holy-orders", name: "Holy Orders" },
    ],
  },
  { id: 3, name: "Ministries", uri: "/", row: 1 },
  { id: 3, name: "Giving", uri: "/", row: 1 },
  { id: 5, name: "Contact Us", uri: "/contact-us", row: 1 },
];

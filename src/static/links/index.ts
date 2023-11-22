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
      { id: 3, uri: "/", name: "From Fr. Tesha" },
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
      { id: 1, uri: "/", name: "Baptism" },
      { id: 2, uri: "/", name: "Confirmation" },
      { id: 3, uri: "/", name: "Eucharist" },
      { id: 4, uri: "/", name: "Reconciliation" },
      { id: 5, uri: "/", name: "Anointing of the sick" },
      { id: 6, uri: "/", name: "Marriage" },
      { id: 7, uri: "/", name: "Holy Orders" },
    ],
  },
  { id: 3, name: "Ministries", uri: "/ministries", row: 1 },
  { id: 3, name: "Giving", uri: "/giving", row: 1 },
  { id: 5, name: "Contact Us", uri: "/contact-us", row: 1 },
];

import { v4 as uuidv4 } from "uuid";

export type SubMenuLinkItem = {
  id: string;
  name: string;
  uri: string;
};

export type CascadingMenuItem = {
  id: string;
  label: string;
  subMenus: SubMenuLinkItem[];
};

export type LinkItem = {
  id: string;
  name: string;
  uri: string;
  row?: number;
  subMenus?: SubMenuLinkItem[];
  cascadingMenu?: CascadingMenuItem[];
};

export const linkItems: LinkItem[] = [
  {
    id: uuidv4(),
    name: "Home",
    uri: "/",
    row: 1,
  },
  {
    id: uuidv4(),
    name: "About Us",
    uri: "/about-us",
    row: 1,
    subMenus: [
      {
        id: uuidv4(),
        name: "About St. Catherine",
        uri: "/about-us",
      },
      { id: uuidv4(), uri: "/about-us#mission", name: "Parish History" },
      { id: uuidv4(), uri: "/", name: "Clergy & Staff" },
      { id: uuidv4(), uri: "/", name: "Parish Registration" },
      { id: uuidv4(), uri: "/about-us#dominican-order", name: "Online Giving" },
      { id: uuidv4(), uri: "/contact-us", name: "Contact Us" },
    ],
  },
  {
    id: uuidv4(),
    name: "Liturgy & Sacraments",
    uri: "/sacraments",
    row: 1,
    cascadingMenu: [
      {
        id: uuidv4(),
        label: "Sacraments",
        subMenus: [
          { id: uuidv4(), uri: "/sacraments/baptism", name: "Baptism" },
          {
            id: uuidv4(),
            uri: "/sacraments/confirmation",
            name: "Confirmation",
          },
          { id: uuidv4(), uri: "/sacraments/eucharist", name: "Eucharist" },
          {
            id: uuidv4(),
            uri: "/sacraments/reconciliation",
            name: "Reconciliation",
          },
          {
            id: 5,
            uri: "/sacraments/anointing-of-the-sick",
            name: "Anointing of the sick",
          },
          { id: 6, uri: "/sacraments/marriage", name: "Marriage" },
          { id: 7, uri: "/sacraments/holy-orders", name: "Holy Orders" },
        ],
      },
      {
        id: 1,
        label: "Liturgy",
        subMenus: [
          { id: 8, uri: "/sacraments/holy-orders", name: "Becoming Catholic" },
          {
            id: 9,
            uri: "/sacraments/holy-orders",
            name: "Eucharist Adoration",
          },
          { id: 10, uri: "/sacraments/holy-orders", name: "Funerals" },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "News & Events",
    uri: "/news",
    row: 1,
    cascadingMenu: [
      {
        id: 1,
        label: "News",
        subMenus: [
          { id: 1, uri: "/announcements", name: "Bulletins" },
          { id: 2, uri: "/gallery", name: "Photo Gallery" },
          { id: 3, uri: "/", name: "Parish Registration" },
        ],
      },
      {
        id: 1,
        label: "Events",
        subMenus: [
          { id: 8, uri: "/", name: "Parish Calendar" },
          {
            id: 9,
            uri: "/",
            name: "Main Harambee",
          },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Parish Life",
    uri: "/parish",
    row: 1,
    cascadingMenu: [
      {
        id: uuidv4(),
        label: "Parish Ministries",
        subMenus: [
          { id: uuidv4(), uri: "/", name: "Liturgy Committee" },
          { id: uuidv4(), uri: "/", name: "The Choir" },
          { id: uuidv4(), uri: "/", name: "The Lectors" },
          { id: uuidv4(), uri: "/", name: "The Ushers" },
          { id: uuidv4(), uri: "/", name: "The Altar Servers" },
        ],
      },
      {
        id: uuidv4(),
        label: "Consultative Groups",
        subMenus: [
          { id: uuidv4(), uri: "/", name: "Parish Pastoral Council" },
          {
            id: uuidv4(),
            uri: "/",
            name: "Parish Finance Council",
          },

          {
            id: uuidv4(),
            uri: "/scc/4/development-committee",
            name: "Development Committee",
          },
        ],
      },
      {
        id: uuidv4(),
        label: "Small Christian Communities",
        subMenus: [
          {
            id: uuidv4(),
            uri: "/scc/1/st.-martin-de-porres-kibarange-catholic-church:-outstation",
            name: "St. Martin De Porres",
          },
          {
            id: uuidv4(),
            uri: "/scc/2/st.-clare",
            name: "St. Claire",
          },
          {
            id: uuidv4(),
            uri: "/scc/3/st.-elizabeth",
            name: "St. Elizabeth",
          },
          {
            id: uuidv4(),
            uri: "/scc/5/st.-rose",
            name: "St. Rose",
          },
          {
            id: uuidv4(),
            uri: "/scc/6/st.-teresa",
            name: "St. Teresa",
          },
          {
            id: uuidv4(),
            uri: "/scc/7/st.-jude",
            name: "St. Jude",
          },
        ],
      },
    ],
  },
];

import React from "react";
import {
  Church,
  LocationCity,
  NaturePeople,
  Newspaper,
  Public,
  VerifiedUser,
  Water,
} from "@mui/icons-material";

export type SubMenuLinkItem = {
  id: number;
  name: string;
  uri: string;
};

export type CascadingMenuItem = {
  id: number;
  label: string;
  subMenus: SubMenuLinkItem[];
};

export type LinkItem = {
  id: number;
  name: string;
  uri: string;
  row?: number;
  subMenus?: SubMenuLinkItem[];
  cascadingMenu?: CascadingMenuItem[];
  icon?: React.ReactNode;
};

export const linkItems: LinkItem[] = [
  {
    id: 1,
    name: "Home",
    uri: "/",
    row: 1,
    icon: <Church sx={{ color: "#FFFFFF" }} />,
  },
  {
    id: 2,
    name: "About Us",
    uri: "/about-us",
    row: 1,
    icon: <Public sx={{ color: "#FFFFFF" }} />,
    subMenus: [
      {
        id: 0,
        name: "About St. Catherine",
        uri: "/about-us",
      },
      { id: 1, uri: "/about-us#mission", name: "Parish History" },
      { id: 2, uri: "/", name: "Clergy & Staff" },
      { id: 3, uri: "/", name: "Parish Registration" },
      { id: 4, uri: "/about-us#dominican-order", name: "Online Giving" },
      { id: 5, uri: "/contact-us", name: "Contact Us" },
    ],
  },
  {
    id: 6,
    name: "St. Martin De Porres",
    uri: "/scc/1/st.-martin-de-porres-kibagare-catholic-church:-outstation",
    row: 1,
    icon: <LocationCity sx={{ color: "#FFFFFF" }} />,
  },
  {
    id: 7,
    name: "Dominican Frairs",
    uri: "/dominican-frairs",
    row: 1,
    icon: <VerifiedUser sx={{ color: "#FFFFFF" }} />,
  },
  {
    id: 3,
    name: "Liturgy & Sacraments",
    uri: "/sacraments",
    row: 1,
    icon: <Water sx={{ color: "#FFFFFF" }} />,
    cascadingMenu: [
      {
        id: 1,
        label: "Sacraments",
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
    icon: <Newspaper sx={{ color: "#FFFFFF" }} />,
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
    id: 5,
    name: "Parish Life",
    uri: "/parish",
    row: 1,
    icon: <NaturePeople sx={{ color: "#FFFFFF" }} />,
    cascadingMenu: [
      {
        id: 1,
        label: "Parish Ministries",
        subMenus: [
          { id: 1, uri: "/", name: "Liturgy Committee" },
          { id: 2, uri: "/about-us/church-choir", name: "The Choir" },
          {
            id: 3,
            uri: "/ministries/2/the-lectors-and-cantors-ministry",
            name: "The Lectors",
          },
          { id: 4, uri: "/", name: "The Ushers" },
          { id: 5, uri: "/", name: "The Altar Servers" },
          { id: 6, uri: "/", name: "PMC" },
          { id: 7, uri: "/", name: "YCA" },
          { id: 8, uri: "/", name: "MYM" },
          { id: 9, uri: "/about-us/our-youth", name: "Youth" },
        ],
      },
      {
        id: 2,
        label: "Consultative Groups",
        subMenus: [
          { id: 1, uri: "/", name: "Parish Pastoral Council" },
          {
            id: 2,
            uri: "/",
            name: "Parish Finance Council",
          },

          {
            id: 3,
            uri: "/scc/4/development-committee",
            name: "Development Committee",
          },
        ],
      },
      {
        id: 3,
        label: "Small Christian Communities",
        subMenus: [
          {
            id: 2,
            uri: "/scc/2/st.-clare",
            name: "St. Claire",
          },
          {
            id: 3,
            uri: "/scc/9/st.-dominic",
            name: "St. Elizabeth",
          },
          {
            id: 4,
            uri: "/scc/3/st.-elizabeth",
            name: "St. Elizabeth",
          },
          {
            id: 5,
            uri: "/scc/5/st.-rose",
            name: "St. Rose",
          },
          {
            id: 6,
            uri: "/scc/6/st.-teresa",
            name: "St. Teresa",
          },
          {
            id: 7,
            uri: "/scc/7/st.-jude",
            name: "St. Jude",
          },
          {
            id: 8,
            uri: "/scc/8/st.-vincent-de-paul",
            name: "St. Vincent de Paul",
          },
          {
            id: 9,
            uri: "/scc/9/st.-dominic",
            name: "St. Dominic",
          },
          {
            id: 10,
            uri: "/scc/10/st.-bakhita",
            name: "St. Bakhita",
          },
        ],
      },
    ],
  },
];

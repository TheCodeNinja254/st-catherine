export type LinkItem = {
  id: number;
  name: string;
  uri: string;
  row?: number;
};

export const linkItems: LinkItem[] = [
  { id: 1, name: "Home", uri: "/", row: 1 },
  { id: 2, name: "About Us", uri: "/about-us", row: 1 },
  { id: 3, name: "Sacraments", uri: "/sacraments", row: 1 },
  { id: 3, name: "Ministries", uri: "/ministries", row: 1 },
  { id: 3, name: "Giving", uri: "/giving", row: 1 },
  { id: 5, name: "Contact Us", uri: "/contact-us", row: 1 },
];

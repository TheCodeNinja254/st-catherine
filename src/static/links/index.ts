export type LinkItem = {
  id: number;
  name: string;
  uri: string;
  row?: number;
};

export const linkItems: LinkItem[] = [
  { id: 1, name: "Home", uri: "/", row: 1 },
  { id: 2, name: "About Us", uri: "/about-us", row: 1 },
  { id: 3, name: "Our Gallery", uri: "/gallery", row: 1 },
  { id: 4, name: "Downloads", uri: "/downloads", row: 1 },
  { id: 5, name: "Contact Us", uri: "/contact-us", row: 1 },
];

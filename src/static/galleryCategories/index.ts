export type GalleryCategoryType = {
  id: number;
  name: string;
  catName: string;
};

const galleryCategories: GalleryCategoryType[] = [
  {
    id: 1,
    name: "General",
    catName: "general",
  },
  {
    id: 2,
    name: "Mass",
    catName: "service",
  },
  {
    id: 3,
    name: "Leadership",
    catName: "leadership",
  },
  {
    id: 4,
    name: "Small Christian Communities",
    catName: "scc",
  },
  {
    id: 5,
    name: "The Parish",
    catName: "parish",
  },
];

export default galleryCategories;

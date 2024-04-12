export type PhotoGalleryContentType = {
  id: number;
  img: string;
  title: string;
  category: string;
};

const loadMore = (): PhotoGalleryContentType[] => {
  let i = 17;
  let imageObj: PhotoGalleryContentType[] = [];
  // eslint-disable-next-line no-plusplus
  for (i; i <= 118; i++) {
    imageObj = [
      ...imageObj,
      {
        id: 47 + i,
        img: `/st-catherine/images/gallery/img_${i}.jpg`,
        title: `${47 + i}`,
        category: "general",
      },
    ];
  }

  return imageObj;
};

const images = loadMore();

const photoGalleryContent: PhotoGalleryContentType[] = [
  // {
  //   id: 7,
  //   img: "/st-catherine/images/gallery/seven.jpg",
  //   title: "seven",
  //   category: "service",
  // },
  // {
  //   id: 8,
  //   img: "/st-catherine/images/gallery/eight.jpg",
  //   title: "eight",
  //   category: "service",
  // },
  // {
  //   id: 12,
  //   img: "/st-catherine/images/gallery/12.jpg",
  //   title: "12",
  //   category: "general",
  // },
  // {
  //   id: 14,
  //   img: "/st-catherine/images/gallery/14.jpg",
  //   title: "14",
  //   category: "general",
  // },
  // {
  //   id: 15,
  //   img: "/st-catherine/images/gallery/15.jpg",
  //   title: "15",
  //   category: "scc",
  // },
  // {
  //   id: 16,
  //   img: "/st-catherine/images/gallery/16.jpg",
  //   title: "16",
  //   category: "general",
  // },
  // {
  //   id: 17,
  //   img: "/st-catherine/images/gallery/father-thomas.png",
  //   title: "Father Thomas, Assistant Parish Priest",
  //   category: "general",
  // },
  // {
  //   id: 18,
  //   img: "/st-catherine/images/gallery/18.jpg",
  //   title: "18",
  //   category: "parish",
  // },
  // {
  //   id: 19,
  //   img: "/st-catherine/images/gallery/19.jpg",
  //   title: "19",
  //   category: "parish",
  // },
  // {
  //   id: 20,
  //   img: "/st-catherine/images/gallery/20.jpg",
  //   title: "20",
  //   category: "parish",
  // },
  // {
  //   id: 21,
  //   img: "/st-catherine/images/gallery/21.jpg",
  //   title: "21",
  //   category: "parish",
  // },
  // {
  //   id: 22,
  //   img: "/st-catherine/images/gallery/22.jpg",
  //   title: "22",
  //   category: "parish",
  // },
  // {
  //   id: 23,
  //   img: "/st-catherine/images/gallery/23.jpg",
  //   title: "23",
  //   category: "general",
  // },
  // {
  //   id: 24,
  //   img: "/st-catherine/images/gallery/24.jpg",
  //   title: "24",
  //   category: "general",
  // },
  // {
  //   id: 25,
  //   img: "/st-catherine/images/gallery/25.jpg",
  //   title: "25",
  //   category: "general",
  // },
  // {
  //   id: 26,
  //   img: "/st-catherine/images/gallery/26.jpg",
  //   title: "26",
  //   category: "general",
  // },
  // {
  //   id: 27,
  //   img: "/st-catherine/images/gallery/27.jpg",
  //   title: "27",
  //   category: "general",
  // },
  // {
  //   id: 28,
  //   img: "/st-catherine/images/gallery/28.jpg",
  //   title: "28",
  //   category: "leadership",
  // },
  // {
  //   id: 29,
  //   img: "/st-catherine/images/gallery/img_1.jpg",
  //   title: "29",
  //   category: "general",
  // },
  // {
  //   id: 30,
  //   img: "/st-catherine/images/gallery/img_2.jpg",
  //   title: "30",
  //   category: "general",
  // },
  //
  // {
  //   id: 31,
  //   img: "/st-catherine/images/gallery/img_3.jpg",
  //   title: "31",
  //   category: "general",
  // },
  //
  // {
  //   id: 32,
  //   img: "/st-catherine/images/gallery/img_4.jpg",
  //   title: "32",
  //   category: "general",
  // },
  // {
  //   id: 33,
  //   img: "/st-catherine/images/gallery/img_5.jpg",
  //   title: "33",
  //   category: "general",
  // },
  // {
  //   id: 34,
  //   img: "/st-catherine/images/gallery/img_6.jpg",
  //   title: "34",
  //   category: "general",
  // },
  // {
  //   id: 35,
  //   img: "/st-catherine/images/gallery/img_7.jpg",
  //   title: "35",
  //   category: "general",
  // },
  // {
  //   id: 36,
  //   img: "/st-catherine/images/gallery/img_8.jpg",
  //   title: "36",
  //   category: "general",
  // },
  //
  // {
  //   id: 37,
  //   img: "/st-catherine/images/gallery/img_9.jpg",
  //   title: "37",
  //   category: "general",
  // },
  //
  // {
  //   id: 38,
  //   img: "/st-catherine/images/gallery/img_10.jpg",
  //   title: "38",
  //   category: "general",
  // },
  // {
  //   id: 39,
  //   img: "/st-catherine/images/gallery/img_11.jpg",
  //   title: "39",
  //   category: "general",
  // },
  // {
  //   id: 40,
  //   img: "/st-catherine/images/gallery/img_12.jpg",
  //   title: "40",
  //   category: "general",
  // },
  //
  // {
  //   id: 41,
  //   img: "/st-catherine/images/gallery/img_13.jpg",
  //   title: "41",
  //   category: "general",
  // },
  //
  // {
  //   id: 42,
  //   img: "/st-catherine/images/gallery/img_13.jpg",
  //   title: "42",
  //   category: "general",
  // },
  // {
  //   id: 43,
  //   img: "/st-catherine/images/gallery/img_13.jpg",
  //   title: "43",
  //   category: "general",
  // },
  //
  // {
  //   id: 44,
  //   img: "/st-catherine/images/gallery/img_13.jpg",
  //   title: "44",
  //   category: "general",
  // },
  //
  // {
  //   id: 45,
  //   img: "/st-catherine/images/gallery/img_14.jpg",
  //   title: "45",
  //   category: "general",
  // },
  //
  // {
  //   id: 46,
  //   img: "/st-catherine/images/gallery/img_15.jpg",
  //   title: "46",
  //   category: "general",
  // },
  // {
  //   id: 47,
  //   img: "/st-catherine/images/gallery/img_16.jpg",
  //   title: "47",
  //   category: "general",
  // },
  ...images,
];

export default photoGalleryContent;

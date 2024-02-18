export type ContentWriteUpInterface = {
  id: number;
  type: "title" | "paragraph" | "list";
  text: string | string[];
};

export type MinistriesContentInterface = {
  id: number;
  ministryId: number;
  content: ContentWriteUpInterface[];
};

const ministries = [
  {
    id: 1,
    name: "Ministry Of Charity",
    imageURL: "/images/getInvolvedThree.jpg",
    description:
      "Read about or ministries, keep up with what the ministries are doing and see their impact. Read about or ministries, keep up with what the ministries are doing and see their impact.",
  },
  {
    id: 2,
    name: "The Lectors and Cantors Ministry",
    imageURL: "/images/getInvolvedThree.jpg",
    description:
      "Read about or ministries, keep up with what the ministries are doing and see their impact. Read about or ministries, keep up with what the ministries are doing and see their impact.",
  },
];

export default ministries;

export const ministriesContent: MinistriesContentInterface[] = [
  {
    id: 1,
    ministryId: 2,
    content: [
      {
        id: 1,
        type: "title",
        text: ["The Lectors and Cantors Ministry"],
      },
      {
        id: 2,
        type: "paragraph",
        text: [
          "This is a ministry in the church constituting of a group of individuals who have been trained and entrusted to proclaim of the Word of God in the liturgical assembly, and especially during the Sunday Mass. Members of this ministry are called to make room for the Word of God in their life in order to be able to announce it to others. The main purpose is for the faithful to hear the Word of life, adhere to it and grow in faith. This ministry was started in the first quarter of 2018 and adopted the name Siena Lectors and later with the inclusion of the Cantors in 2021 changed its name to The Siena Lectors and Cantors. Our Patron saint is Christ The King celebrated on the last Sunday in Ordinary Time. ",
          "The group meets at the church compound every third Saturday of the month from 8am to 10.30am for mass, rosary prayers as well as training workshops for continuous improvement. New members must undergo training and be commissioned on the Third Sunday in Ordinary Time; The Sunday of The Word of God. We welcome anyone wishing to join us and you can register at the parish office.",
          "For more information, please feel free to contact the parish office. Thank you and God bless",
        ],
      },
    ],
  },
  {
    id: 2,
    ministryId: 1,
    content: [
      {
        id: 1,
        type: "title",
        text: ["Ministry Of Charity"],
      },
      {
        id: 2,
        type: "list",
        text: [
          "This is a ministry in the church constituting of a group of individuals who have been trained and entrusted to proclaim of the Word of God in the liturgical assembly, and especially during the Sunday Mass. Members of this ministry are called to make room for the Word of God in their life in order to be able to announce it to others. The main purpose is for the faithful to hear the Word of life, adhere to it and grow in faith. This ministry was started in the first quarter of 2018 and adopted the name Siena Lectors and later with the inclusion of the Cantors in 2021 changed its name to The Siena Lectors and Cantors. Our Patron saint is Christ The King celebrated on the last Sunday in Ordinary Time. ",
          "The group meets at the church compound every third Saturday of the month from 8am to 10.30am for mass, rosary prayers as well as training workshops for continuous improvement. New members must undergo training and be commissioned on the Third Sunday in Ordinary Time; The Sunday of The Word of God. We welcome anyone wishing to join us and you can register at the parish office.",
          "For more information, please feel free to contact the parish office. Thank you and God bless",
        ],
      },
    ],
  },
];

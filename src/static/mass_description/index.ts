import { ContentWriteUpInterface } from "@/static/ministries";

const massDescription: ContentWriteUpInterface[] = [
  {
    id: 1,
    type: "paragraph",
    text: [
      " There are two masses a week at Lower Kabete.",
      "On Sunday mass is at 11.00 am, while on Tuesday mass is at 8.00 pm.",
      "Both Masses are in English.",
      "The priests also serve in a parish outstation: St. Martin’s Kibagare located in an informal settlement area. The christians at St. Martin’s Kibagare worship in a school chapel located in an education center.",
      "The education center is home for a girl’s high school and a primary school both run by the Assumption Sisters of Nairobi to help the children from the slum to acquire education.",
      "Mass at St. Martin’s Kibagare is as follows: ",
    ],
  },
  {
    id: 2,
    type: "subTitle2",
    text: "Sunday",
  },
  {
    id: 3,
    type: "list",
    text: ["7.30 am Students - English", "9.00 am Christians – Swahili"],
  },
  {
    id: 4,
    type: "subTitle2",
    text: "Monday and Wednesday",
  },
  {
    id: 5,
    type: "list",
    text: ["7:00 am for the sisters’ community in the center"],
  },
  {
    id: 6,
    type: "subTitle2",
    text: "Friday",
  },
  {
    id: 7,
    type: "list",
    text: ["5.00 pm Students – English"],
  },
];

export default massDescription;

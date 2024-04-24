export type ServiceCatInterface = {
  id: number;
  hour: string;
  serviceDesc: string;
};

export type MassScheduleInteface = {
  id: number;
  day: string;
  services: ServiceCatInterface[];
};

const massSchedule: MassScheduleInteface[] = [
  {
    id: 1,
    day: "sunday",
    services: [
      {
        id: 1,
        hour: "8:00 AM",
        serviceDesc: "English",
      },
      {
        id: 2,
        hour: "11:00 AM",
        serviceDesc: "English",
      },
      {
        id: 3,
        hour: "12:00 PM",
        serviceDesc: "Swahili",
      },
    ],
  },
  {
    id: 2,
    day: "weekday",
    services: [
      {
        id: 1,
        hour: "6:00 PM",
        serviceDesc: "Mon - Fri",
      },
      {
        id: 2,
        hour: "8:00 AM",
        serviceDesc: "Saturday Mass",
      },
      {
        id: 3,
        hour: "10:00 AM",
        serviceDesc: "Public Holidays",
      },
    ],
  },
  {
    id: 3,
    day: "special",
    services: [
      {
        id: 1,
        hour: "Thursdays 5:00 PM",
        serviceDesc: "Adoration",
      },
      {
        id: 2,
        hour: "Sundays at 10.00am",
        serviceDesc: "Sunday School",
      },
      {
        id: 3,
        hour: "Sundays at 12.00pm",
        serviceDesc: "PMC",
      },
    ],
  },
];

export default massSchedule;

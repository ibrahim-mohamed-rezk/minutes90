import { positions } from "./positions";

export const PlayerFilters: any[] = [
  {
    label: "position: ",
    name: "position",
    options: positions,
  },
  // {
  //   label: "Nationality: ",
  //   name: "country_id",
  //   options: [],
  // },
  // {
  //   label: "min height: ",
  //   name: "height_min",
  //   options: [],
  // },
  // {
  //   label: "max height: ",
  //   name: "height_max",
  //   options: [],
  // },
  // {
  //   label: "min weight: ",
  //   name: "weight_min",
  //   options: [],
  // },
  // {
  //   label: "max weight: ",
  //   name: "weight_max",
  //   options: [],
  // },
  {
    label: "min age: ",
    name: "age_min",
    options: [],
  },
  {
    label: "max age: ",
    name: "age_max",
    options: [],
  },
];

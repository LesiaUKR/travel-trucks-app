import { capitalizedFirstLetter } from "./capitalizedFirstLetter";

export const getCategories = ({ transmission, engine }) => {
  return [
    { icon: "transmission", text: `${capitalizedFirstLetter(transmission)}` },
    { icon: "engine", text: `${capitalizedFirstLetter(engine)}` },
    { icon: "kitchen", text: `Kitchen` },
    { icon: "ac", text: `AC` },
  ];
};
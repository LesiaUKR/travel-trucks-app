import { capitalizedFirstLetter } from "./capitalizedFirstLetter";

export const getCategories = (camper) => {
  const possibleCategories = [
    { key: "transmission", icon: "transmission", text: capitalizedFirstLetter(`${camper.transmission}`) },
    { key: "engine", icon: "engine", text: capitalizedFirstLetter(`${camper.engine}`)},
    { key: "AC", icon: "ac", text: "AC" },
    { key: "bathroom", icon: "bathroom", text: "Bathroom" },
    { key: "kitchen", icon: "kitchen", text: "Kitchen" },
    { key: "TV", icon: "tv", text: "TV" },
    { key: "radio", icon: "radio", text: "Radio" },
    { key: "refrigerator", icon: "freezer", text: "Refrigerator" },
    { key: "microwave", icon: "microwave", text: "Microwave" },
    { key: "gas", icon: "gas", text: "Gas" },
    { key: "water", icon: "water", text: "Water" },
  ];

  return possibleCategories.filter(
    (category) =>
      Object.prototype.hasOwnProperty.call(camper, category.key) &&
    camper[category.key]
  );
};
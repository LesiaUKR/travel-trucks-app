import { capitalizedFirstLetter } from "./capitalizedFirstLetter";

export const getVehicleDeatils = (camper) => {
  const possibleVehicleDeatils = [
      { key: "form", label:"Form", text: capitalizedFirstLetter(`${camper.form}`) },
      { key: "length", label:"Length", text: `${camper.length}`.replace(/([0-9.]+)([a-zA-Z]+)/, "$1 $2") },
      { key: "width", label:"Width", text: `${camper.width}`.replace(/([0-9.]+)([a-zA-Z]+)/, "$1 $2") },
      { key: "height", label:"Height", text: `${camper.height}`.replace(/([0-9.]+)([a-zA-Z]+)/, "$1 $2") },
      { key: "tank", label:"Tank", text: `${camper.tank}`.replace(/([0-9.]+)([a-zA-Z]+)/, "$1 $2") },
      { key: "consumption", label:"Consumption", text: `${camper.consumption}`},
 
  ];

  return possibleVehicleDeatils.filter(
    (detail) =>
      Object.prototype.hasOwnProperty.call(camper, detail.key) &&
      camper[detail.key]
  );
};
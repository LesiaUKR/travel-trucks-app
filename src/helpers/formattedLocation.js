export const formattedLocation = (location) => {
  let formattedLocation = "";
  if (location) {
    let [country, city] = location.split(", ");
    if (country && city) {
      formattedLocation = `${city}, ${country}`;
    }
    return formattedLocation;
  }
};

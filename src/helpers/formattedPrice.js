export const formattedPrice = (price) => {
  let formattedPrice = "";
  if (price && !isNaN(price)) {
    formattedPrice = `€${parseFloat(price).toFixed(2)}`;
  }
  return formattedPrice;
};

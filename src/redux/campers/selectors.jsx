export const selectCampers = (state) => state.campers.campers.items;

export const selectFilterCampers = (state) => state.campers.filter;

export const selectFavoriteCampers = (state) => state.campers.campers.favorites;

export const selectIsLoading = (state) => state.campers.campers.isLoading;

export const selectError = (state) => state.campers.error;
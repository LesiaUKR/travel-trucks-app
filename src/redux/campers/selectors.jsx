export const selectCampers = (state) => state.campers.campers.items || [];

export const selectSelectedCamper = (state) => state.campers.campers.selectedCamper; 

export const selectFilterCampers = (state) => state.campers.filter;

export const selectTotalCampers = (state) => state.campers.campers.total;

export const selectFavoriteCampers = (state) => state.campers.campers.favorites;

export const selectIsLoading = (state) => state.campers.campers.isLoading;

export const selectError = (state) => state.campers.error;

export const selectCurrentPage = (state) => state.campers.campers.currentPage;
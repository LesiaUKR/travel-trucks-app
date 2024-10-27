import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchAllCampers, fetchCamperById } from "./operations";

const initialState = {
  campers: {
    totalItems: 0,
    currentPage: 1,
    items: [],
    selectedCamper: null,
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    isLoading: false,
    error: null,
  },
  filter: {
    location: "",
    equipment: "",
    form: "",
  },
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    setPage(state, action) {
      state.campers.currentPage = action.payload;
    },
    setLocation(state, action) {
      state.filter.location = action.payload;
    },
    setEquipment(state, action) {
      state.filter.equipment = action.payload;
    },
    setType(state, action) {
      state.filter.type = action.payload;
    },
    setFilters(state, action) {
      state.filter = action.payload;
    },
    toggleFavorite: (state, action) => {
      const camperId = action.payload;
      if (state.campers.favorites.includes(camperId)) {
        state.campers.favorites = state.campers.favorites.filter(
          (id) => id !== camperId
        );
      } else {
        state.campers.favorites.push(camperId);
      }
      localStorage.setItem(
        "favorites",
        JSON.stringify(state.campers.favorites)
      );
    },
    clearItems(state) {
      state.campers.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.campers.isLoading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.campers.isLoading = false;
        state.campers.error = null;
        const page = action.meta.arg.page || 1;
        if (page === 1) {
          state.campers.items = action.payload.items;
        } else {
          state.campers.items = [
            ...state.campers.items,
            ...action.payload.items,
          ];
        }
        state.campers.total = action.payload.total;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.campers.isLoading = false;
        state.campers.error = action.payload;
      })
      .addCase(fetchAllCampers.pending, (state) => {
        state.campers.isLoading = true;
      })
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        state.campers.isLoading = false;
        state.campers.error = null;
        state.campers.items = action.payload.items;
        state.campers.total = action.payload.total;
      })
      .addCase(fetchAllCampers.rejected, (state, action) => {
        state.campers.isLoading = false;
        state.campers.error = action.payload;
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.campers.isLoading = true;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.campers.isLoading = false;
        state.campers.error = null;
        state.campers.selectedCamper = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.campers.isLoading = false;
        state.campers.error = action.payload;
      });
  },
});

export const campersReducer = campersSlice.reducer;
export const {
  setLocation,
  setEquipment,
  setType,
  toggleFavorite,
  setPage,
  clearItems,
  setFilters,
} = campersSlice.actions;

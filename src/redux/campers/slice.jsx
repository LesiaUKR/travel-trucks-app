import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchAllCampers, fetchCamperById } from "./operations";

const initialState = {
   campers: {
     totalItems: 0,
     currentPage: 1,
     items: [],
     selectedCamper: null,
     favorites:  JSON.parse(localStorage.getItem("favorites")) || [], // Отримуємо збережені обрані або пустий масив,
     isLoading: false,
     error: null,
   },
   filter: {
     location: "",
     equipment: "",
     type: "",
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
    toggleFavorite: (state, action) => {
      const camperId = action.payload;
      if (state.campers.favorites.includes(camperId)) {
        state.campers.favorites = state.campers.favorites.filter(id => id !== camperId);
      } else {
        state.campers.favorites.push(camperId);
      }
      localStorage.setItem("favorites", JSON.stringify(state.campers.favorites)); // Зберігаємо в localStorage
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
        console.log('action.payload', action.payload);
        if (action.meta.arg.page === 1) {
          state.campers.items = action.payload.items;
        } else {
          state.campers.items = [...state.campers.items, ...action.payload.items];
          console.log('Campers fetched successfully:', state.campers.items);
        }
        
        state.campers.total = action.payload.total;
        console.log('Total campers:', state.campers.total);
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
        state.campers.items = action.payload.items; // Зберігаємо тільки масив items
        state.campers.total = action.payload.total; // Зберігаємо загальну кількість
        console.log('fetchAllCampers successfully:', state.campers.items);
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
        state.campers.selectedCamper = action.payload; // Зберігаємо знайденого кемпера
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.campers.isLoading = false;
        state.campers.error = action.payload;
      });
  },
});

export const campersReducer = campersSlice.reducer;
export const { setLocation, setEquipment, setType, toggleFavorite, setPage  } = campersSlice.actions;
import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchAllCampers } from "./operations";

const initialState = {
   campers: {
     items: [],
     favorites: [],
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
    setLocation(state, action) {
      state.filter.location = action.payload;
    },
    setEquipment(state, action) {
      state.filter.equipment = action.payload;
    },
    setType(state, action) {
      state.filter.type = action.payload;
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
        const newItems = action.payload.map((item) => ({
          ...item,
        }));
        state.campers.items = [...state.campers.items, ...newItems];
        console.log('Campers fetched successfully:', state.campers.items);
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
        state.campers.items = action.payload;
        console.log('Fetched campers:', action.payload);
      })
      .addCase(fetchAllCampers.rejected, (state, action) => {
        state.campers.isLoading = false;
        state.campers.error = action.payload;
      });
  },
});

export const campersReducer = campersSlice.reducer;
export const { setLocation, setEquipment, setType } = campersSlice.actions;
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from "../../services/apiService";

export const fetchAllCampers = createAsyncThunk(
   "campers/fetchAllCampers",
   async (_, thunkAPI) => {
     try {
       const res = await axios.get(`${URL}/campers`);
       return res.data;
     } catch (error) {
      console.log("Error while fetching data:", error);
       return thunkAPI.rejectWithValue(error.message);
     }
   }
 );

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (page = 1, thunkAPI) => {
    try {
      const res = await axios.get(`${URL}/campers?page=${page}&limit=4`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
   "campers/fetchCamperById",
   async (id, thunkAPI) => {
     try {
       const res = await axios.get(`${URL}/campers/${id}`);
       return res.data;
     } catch (error) {
       return thunkAPI.rejectWithValue(error.message);
     }
   }
 );
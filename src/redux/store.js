import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campers/slice";

export const store = configureStore({
  reducer: { campers: campersReducer },
});


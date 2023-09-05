import { configureStore } from "@reduxjs/toolkit";
import slice from "./slice.js";

export const store = configureStore({
  reducer: {
    counter: slice,
  },
});

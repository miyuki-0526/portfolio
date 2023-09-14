import { configureStore } from "@reduxjs/toolkit";
import scrollReducer from "./slices/scrollSlise.js";

export const store = configureStore({
  reducer: {
    scroll: scrollReducer,
  },
});

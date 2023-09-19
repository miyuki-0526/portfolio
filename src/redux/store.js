import { configureStore } from "@reduxjs/toolkit";
import scrollReducer from "./slices/scrollSlise.js";
import headerHeghtReducer from "./slices/headerHeghtSlise.js";

export const store = configureStore({
  reducer: {
    scroll: scrollReducer,
    headerHeght: headerHeghtReducer,
  },
});

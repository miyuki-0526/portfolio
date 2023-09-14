import { createSlice } from "@reduxjs/toolkit";
const scrollSlice = createSlice({
  name: "scroll",
  initialState: { targetElement: null },
  reducers: {
    setTargetElement: (state, action) => {
      state.targetElement = action.payload;
    },
  },
});

export const { setTargetElement } = scrollSlice.actions;
export default scrollSlice.reducer;

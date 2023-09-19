import { createSlice } from "@reduxjs/toolkit";
const headerHeghtSlice = createSlice({
  name: "headerHeght",
  initialState: { headerHeght: null },
  reducers: {
    setHeaderHeght: (state, action) => {
      state.headerHeght = action.payload;
    },
  },
});

export const { setHeaderHeght } = headerHeghtSlice.actions;
export default headerHeghtSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  playersData: [],
};

export const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    setPlayersData: (state, action) => {
      state.playersData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPlayersData } = playersSlice.actions;
export default playersSlice.reducer;
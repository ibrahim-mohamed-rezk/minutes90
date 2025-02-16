import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  agentData: [],
};

export const agentSlice = createSlice({
  name: "agent",
  initialState,
  reducers: {
    setAgentData: (state, action) => {
      state.agentData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAgentData } = agentSlice.actions;
export default agentSlice.reducer;
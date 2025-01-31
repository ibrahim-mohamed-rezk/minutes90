import { configureStore } from "@reduxjs/toolkit";
import playersSlice from "./slices/PlayersSlice";

export const store = configureStore({
  reducer: {
    players: playersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import playersSlice from "./slices/PlayersSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    players: playersSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

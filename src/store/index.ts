import { configureStore } from "@reduxjs/toolkit";
import { pageSlice } from "./slices/PageSlice";
import { userSlice } from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    pageState: pageSlice.reducer,
    userState: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

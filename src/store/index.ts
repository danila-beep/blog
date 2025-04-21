import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice";
import { pageSlice } from "./slices/PageSlice";
import { postsSlice } from "./slices/postsSlice";

export const store = configureStore({
  reducer: {
    pageState: pageSlice.reducer,
    userState: userSlice.reducer,
    postsState: postsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostsListType } from "../../constants/types";

const initialState: PostsListType = [];

export const postsSlice = createSlice({
  name: "postsState",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<PostsListType>) => {
      state.length = 0;
      state.push(...action.payload);
    },
  },
});

export const { setPosts } = postsSlice.actions;
export default postsSlice.reducer;

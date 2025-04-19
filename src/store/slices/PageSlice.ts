import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PageState {
  isLoading: boolean;
}

const initialState: PageState = {
  isLoading: false,
};

export const pageSlice = createSlice({
  name: "pageState",
  initialState,
  reducers: {
    setPageLoadingStatus: (
      state: PageState,
      action: PayloadAction<boolean>
    ) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setPageLoadingStatus } = pageSlice.actions;
export default pageSlice.reducer;

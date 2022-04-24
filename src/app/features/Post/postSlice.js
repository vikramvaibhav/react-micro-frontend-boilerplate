import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./postActions";

const postsSlice = createSlice({
  name: "posts",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPosts.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.posts = payload;
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export default postsSlice;

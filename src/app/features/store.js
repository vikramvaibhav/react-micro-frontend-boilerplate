import { configureStore } from "@reduxjs/toolkit";
import postsSlice from './Post/postSlice';

const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
  }
});

export default store;

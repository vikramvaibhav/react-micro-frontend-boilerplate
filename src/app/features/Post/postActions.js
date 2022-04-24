import { createAsyncThunk } from '@reduxjs/toolkit';

import request from 'modules/Request/request';

export const getPosts = createAsyncThunk(
  'getPosts',
  async (object, { getState, rejectWithValue }) => {
    const response = await request('/posts', { method: 'GET' });
    if (response.success) {
      return response.data;
    } else {
      const error = response.error && response.error.message
        ? response.error.message
        : response.error;
      throw rejectWithValue(error || "Something went wrong");
    }
  }
);

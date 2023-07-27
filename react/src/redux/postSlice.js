import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getPost = createAsyncThunk('/getpost', async ({ id }) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error('Error fetching post');
  }
});

export const getAllPost = createAsyncThunk('/getallpost', async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error('Error fetching all posts');
  }
});

export const delPost = createAsyncThunk('/delpost', async ({ id }) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error('Error deleting post');
  }
});

const postSlice = createSlice({
  name: 'post',
  initialState: {
    post: [],
    loading: false,
    error: null,
    edit: false,
  },
  extraReducers: {
    // get All Post
    [getAllPost.pending]: (state) => {
      state.loading = true;
    },
    [getAllPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.post = action.payload;
    },
    [getAllPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    // Get 1 Search Post
    [getPost.pending]: (state) => {
      state.loading = true;
    },
    [getPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.post = [action.payload];
    },
    [getPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    // Delte Post
    [delPost.pending]: (state) => {
      state.loading = true;
    },
    [delPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.post = action.payload;
    },
    [delPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default postSlice.reducer;

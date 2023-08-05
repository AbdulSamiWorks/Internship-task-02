import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllPosts, fetchAllPostsById } from "./PostsAPI";

const initialState = {
  allPosts: [],
  status: "idle",
  selectPost:null
};

export const fetchAllPostsAsync = createAsyncThunk(
  "posts/fetchAllPosts",
  async () => {
    const response = await fetchAllPosts();
    return response.data;
  }
);

export const fetchAllPostsByIdAsync = createAsyncThunk(
  'posts/fetchAllPostsById',
  async (id) => {
    const response = await fetchAllPostsById(id);
    return response.data;
  }
);


export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPostsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllPostsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.allPosts = action.payload;
      })
      .addCase(fetchAllPostsByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllPostsByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectPost = action.payload;
      });
  },
});

export const { increment } = postsSlice.actions;

export const selectAllPosts = (state) => state.posts.allPosts;
export const selectPostsById = (state) => state.posts.selectPost;


export default postsSlice.reducer;

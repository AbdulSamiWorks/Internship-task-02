import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/ProductSlice';
import postReducer from '../features/posts/PostsSlice'

export const store = configureStore({
  reducer: {
    product:productReducer,
    posts:postReducer,
  },
});

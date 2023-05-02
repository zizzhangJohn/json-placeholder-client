import { configureStore } from "@reduxjs/toolkit";

import { postsApiSlice } from "../features/posts/posts-api-slice";

const apiSliceList = [postsApiSlice.middleware];

export const store = configureStore({
  reducer: {
    [postsApiSlice.reducerPath]: postsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSliceList);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

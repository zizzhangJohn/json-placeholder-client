import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export const postsApiSlice = createApi({
  reducerPath: "postsApi",
  keepUnusedDataFor: process.env.NODE_ENV === 'test' ? 0 : 60,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.VITE_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    // <returnType, agrumentType>
    getPosts: builder.query<
      { posts: Post[]; totalCount: number },
      { start: number; limit: number }
    >({
      query: ({ start = 0, limit = 10 }) => ({
        url: `/posts?_start=${start}&_limit=${limit}`,
        method: "Get",
      }),
      transformResponse(
        posts: Post[],
        meta: { request: Request; response: Response } //response can't be null here
      ) {
        // console.log(meta.response.headers.get("Link"))
        return {
          posts,
          // headers.get("X-Total-Count") wouldn't return anything when
          // page or limit isn't specify
          totalCount: Number(meta.response.headers.get("X-Total-Count")),
        };
      },
    }),
    getPostsById: builder.query<Post, number>({
      query: (postId) => ({
        url: `/posts/${postId}`,
        method: "Get",
      }),
    }),
  }),
});

export const { useGetPostsQuery, useGetPostsByIdQuery } = postsApiSlice;

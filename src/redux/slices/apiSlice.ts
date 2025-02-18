import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../../config/config";
import { PostData } from "../../types/postTypes";
// import { getCookie } from "cookies-next";

const { baseUrl } = config;
console.log(baseUrl);
const baseQuery = fetchBaseQuery({
  baseUrl,
  // prepareHeaders: (headers) => {
  //   const token = getCookie("USER");
  //   headers.set("Authorization", `Bearer ${token}`);
  // headers.set("accept", "application/json");
  // if(!headers.has("Content-Type")){
  //   headers.set("Content-Type","");
  // }
});

export const apiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({
    registerLagosAttendee: builder.mutation({
      query: (body) => ({
        url: `user/create-attendee-lagos`,
        method: "POST",
        body: body,
      }),
    }),
    registerUser: builder.mutation({
      query: (body) => ({
        url: `user/user-create`,
        method: "POST",
        body: body,
      }),
    }),
    registerPartner: builder.mutation({
      query: (body) => ({
        url: `partner/create-partner`,
        method: "POST",
        body: body,
      }),
    }),
    registerLagosVendor: builder.mutation({
      query: (body) => ({
        url: `user/vendor-create-lagos`,
        method: "POST",
        body: body,
      }),
    }),
    verifyDonation: builder.mutation({
      query: (body) => ({
        url: `order/verify`,
        method: "POST",
        body: body,
      }),
    }),
    postBlog: builder.mutation({
      query: (body) => ({
        url: `post/create-post`,
        method: "POST",
        body: body,
      }),
    }),
    getAllPosts: builder.query<PostData, void>({
      query: () => ({
        url: `post/get/all-posts`,
        method: "GET",
      }),
    }),
    getSomePosts: builder.query<PostData, void>({
      query: () => ({
        url: `post/get/all-posts?limit=3&skip=2`,
        method: "GET",
      }),
    }),
    getRecommendedPosts: builder.query<PostData, void>({
      query: () => ({
        url: `post/get/all-posts?limit=2&skip=4`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useRegisterLagosAttendeeMutation,
  useRegisterLagosVendorMutation,
  useVerifyDonationMutation,
  useRegisterUserMutation,
  useRegisterPartnerMutation,
  useGetAllPostsQuery,
  usePostBlogMutation,
  useGetSomePostsQuery,
  useGetRecommendedPostsQuery,
} = apiSlice;

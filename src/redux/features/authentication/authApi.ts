import { baseApi } from "@/redux/api/baseApi";

const authorization = baseApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                body: data
            }),
        })
    }),
})

export const { useLoginMutation } = authorization
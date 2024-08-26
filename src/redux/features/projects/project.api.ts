import { baseApi } from "@/redux/api/baseApi";

const projectApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        getProjects: builder.query({
            query: (query) => ({
                url: `/projects?projectType=${query}`,
                method: "GET",
            }),
        }),

        createProjects : builder.mutation({
            query: (data) => ({
                url: "/projects",
                method: "POST",
                body: data
            })
        }),
        updateProject: builder.mutation({
            query: (data) => ({
                url: `/projects/${data._id}`,
                method: "PATCH",
                body: data
            })
        }),
        deleteProjects: builder.mutation({
            query: (id) => ({
                url: `/projects/${id}`,
                method: "DELETE",
            }),
        }),
    })
})

export const {
    useGetProjectsQuery,
    useCreateProjectsMutation,
    useUpdateProjectMutation,
    useDeleteProjectsMutation
} = projectApi
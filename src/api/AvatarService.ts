import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Woof} from "../types/Woof";


export const avatarApi = createApi({
   reducerPath: "avatarApi",
   baseQuery: fetchBaseQuery({baseUrl: "https://random.dog"}),
    endpoints : (build) => ({
        fetchAvatars: build.query<Woof,string>({
           query: () => ({
               url: "/woof.json"
           }),
        }),
    })
});
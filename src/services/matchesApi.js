import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const matchesApiHeaders={
    'X-RapidAPI-Key': '5a7b8ecd30msh0144d3609019dc9p1277dbjsnad0fa89c6297',
    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
}

const baseUrl='https://cricbuzz-cricket.p.rapidapi.com/matches/v1';

const createRequest =(url)=>({url , headers:matchesApiHeaders});

export const matchesApi = createApi({
    reducerPath: 'matchesApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getMatches : builder.query({
            query: () => createRequest(`/recent`)
        }),
        
    })
})

export const {
    useGetMatchesQuery,
} = matchesApi;
import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders={
    'X-RapidAPI-Key': '5a7b8ecd30msh0144d3609019dc9p1277dbjsnad0fa89c6297',
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'

}


const baseUrl='https://cryptocurrency-news2.p.rapidapi.com/v1';

const createRequest =(url)=>({url , headers:cryptoNewsHeaders});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews: builder.query({
            query: ({newsCategory,count}) =>  createRequest(`/coindesk?count=${count}`),
        })
    })
})

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;
import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";
import { matchesApi } from "../services/matchesApi";

export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]:cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]:cryptoNewsApi.reducer,
        [matchesApi.reducerPath]:matchesApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>
      getDefaultMiddleware().concat(cryptoNewsApi.middleware,cryptoApi.middleware,matchesApi.middleware),
    
});
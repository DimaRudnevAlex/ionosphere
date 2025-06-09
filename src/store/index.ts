import { configureStore } from '@reduxjs/toolkit'
import { dataForChartApi } from './services'

export const store = configureStore({
    reducer: {
        [dataForChartApi.reducerPath]: dataForChartApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dataForChartApi.middleware),
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

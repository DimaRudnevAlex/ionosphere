import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IDataForChart } from '../../@types/data'

export const dataForChartApi = createApi({
    reducerPath: 'Api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://674c0d1154e1fca9290b8674.mockapi.io/photo/todos',
        headers: { accept: 'application/json' },
    }),
    endpoints: (builder) => ({
        getDataForChartById: builder.query<IDataForChart, string>({
            query: (id) => `?day=${id}`,
        }),
    }),
})

export const { useGetDataForChartByIdQuery } = dataForChartApi

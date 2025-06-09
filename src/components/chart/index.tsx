import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js'
import type { FC } from 'react'
import type { IDataForChart } from '../../@types/data'
import { Line } from 'react-chartjs-2'
import { timeOfDay } from '../../utils/constants'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
)

const Chart: FC<{ data: IDataForChart }> = ({ data }) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
        },
    }

    const values = {
        labels: timeOfDay,
        datasets: [
            {
                label: 'Вертикальное зондирование',
                data: data[0].vz,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgb(53, 162, 235)',
            },
            {
                label: 'Регрессионная модель',
                data: data[0].reg,
                borderColor: 'rgb(201,25,25)',
                backgroundColor: 'rgb(201,25,25)',
            },
            {
                label: 'Random forest модель',
                data: data[0].random,
                borderColor: 'rgb(50,145,29)',
                backgroundColor: 'rgb(50,145,29)',
            },
        ],
    }
    return <Line data={values} options={options} />
}

export default Chart

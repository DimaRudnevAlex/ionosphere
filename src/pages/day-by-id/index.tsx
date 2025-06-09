import { useGetDataForChartByIdQuery } from '../../store/services'
import { Link, useParams } from 'react-router'
import Chart from '../../components/chart'
import { Box, Typography } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

const DayById = () => {
    const { dayId } = useParams()
    const { data, isLoading, isError } = useGetDataForChartByIdQuery(dayId!)
    return (
        <Box mt={2}>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                <Link to={'/home'}>
                    <Box display="flex" alignItems="center" gap={2}>
                        <ArrowBackIosNewIcon />
                        <Typography variant={'h3'}>Вернуться назад</Typography>
                    </Box>
                </Link>
                <Typography
                    variant="h3"
                    textAlign="center"
                >{`Суточные ходы критической частоты ${dayId} октября`}</Typography>
            </Box>
            {isError && (
                <Typography mt={5} variant="h3" textAlign="center">
                    Не удалось построить график(
                </Typography>
            )}
            {!isLoading && !isError && <Chart data={data!} />}
        </Box>
    )
}

export default DayById

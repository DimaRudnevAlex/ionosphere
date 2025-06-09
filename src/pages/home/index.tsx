import { Box, Typography } from '@mui/material'
import Calendar from '../../components/calendar'

const Home = () => {
    return (
        <Box paddingBlock={2}>
            <Typography variant="h5" textAlign="center">
                Выберите день, октябрь 2018 года
            </Typography>
            <Calendar />
        </Box>
    )
}

export default Home

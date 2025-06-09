import { Box, Grid, Typography, useTheme } from '@mui/material'
import { daysOfMonth } from '../../../utils/constants'
import { tokens } from '../../../theme'
import { Link } from 'react-router'

const CalendarBody = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <Grid
            mt={{ xs: 3, sm: 4, md: 5 }}
            container
            columns={7}
            rowSpacing={{ xs: 3, sm: 4, md: 5 }}
            columnSpacing={2}
        >
            {daysOfMonth.map((day) => (
                <Grid size={1} key={day}>
                    <Link to={`/home/${day}`}>
                        <Box
                            sx={{
                                ':hover': {
                                    background: `${colors.accentColor}`,
                                    transform: 'scale(1.1)',
                                },
                                transition: 'all 0.5s',
                            }}
                            bgcolor={colors.gray.DEFAULT}
                            borderRadius={2}
                            paddingBlock={{ xs: 1, sm: 2, md: 3 }}
                            paddingInline={1}
                        >
                            <Typography
                                fontSize={{ xs: 16, sm: 20, md: 25 }}
                                textAlign="center"
                            >
                                {day}
                            </Typography>
                        </Box>
                    </Link>
                </Grid>
            ))}
        </Grid>
    )
}

export default CalendarBody

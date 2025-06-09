import { Grid, Typography, useTheme } from '@mui/material'
import { daysOfWeek } from '../../../utils/constants'
import { tokens } from '../../../theme'

const CalendarHeader = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <Grid
            mt={2}
            container
            columns={7}
            sx={{
                borderBottom: `1px solid ${colors.borderColor}`,
                paddingBottom: '10px !important',
            }}
        >
            {daysOfWeek.map((day) => (
                <Grid size={1} key={day}>
                    <Typography
                        fontSize={{ xs: 10, sm: 14, md: 20 }}
                        textAlign="center"
                        variant="body1"
                    >
                        {day}
                    </Typography>
                </Grid>
            ))}
        </Grid>
    )
}

export default CalendarHeader

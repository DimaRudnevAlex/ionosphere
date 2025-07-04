import { Box, Container, useTheme } from '@mui/material'
import { Outlet } from 'react-router'
import { tokens } from '../theme'
import Header from '../components/header'

const MainLayout = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <Box
            sx={{
                backgroundColor: `${colors.primary.DEFAULT}`,
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    backgroundColor: `${colors.primary.DEFAULT}`,
                }}
            >
                <Header />
                <Outlet />
            </Container>
        </Box>
    )
}

export default MainLayout

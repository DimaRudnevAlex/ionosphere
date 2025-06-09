import { Box, Typography } from '@mui/material'
import LogoImg from '../../../assets/logo-m.png'

const Logo = () => {
    return (
        <Box display={'flex'} alignItems={'center'} gap={2}>
            <img src={LogoImg} alt="logo" height={50} />
            <Typography variant="h1">Ионосфера</Typography>
        </Box>
    )
}

export default Logo

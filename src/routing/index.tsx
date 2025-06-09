import { Navigate, Route, Routes } from 'react-router'
import MainLayout from '../layouts'
import Home from '../pages/home'
import DayById from '../pages/day-by-id'

const AppRouting = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path={'/home'} element={<Home />} />
                <Route path={'/home/:dayId'} element={<DayById />} />
                <Route path={'/*'} element={<Navigate to={'/home'} />} />
            </Route>
        </Routes>
    )
}

export default AppRouting

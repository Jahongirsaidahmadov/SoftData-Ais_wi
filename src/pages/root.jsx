import { Routes, Route } from 'react-router-dom'

import DashboarFirstRoute from '../components/dashboard/dashboarFirstRoute'
import FaceControlSearch from '../components/faceControl/faceControlSearch/FaceControlSearch'
import FaceControlAnalysis from '../components/faceControl/faceControlAnalysis/FaceControlAnalysis'
import AcsessControlSearch from '../components/accessControl/accessControlSearch/AccessControlSearch'

import NotFound from '../components/notFound/NotFound'

const RootPage = () => {
    return (
        <Routes>
            <Route index path = '/' element = {<DashboarFirstRoute />}/>
            <Route path = '/face-control-search' element = {<FaceControlSearch />}/>
            <Route path = '/face-control-analysis' element = {<FaceControlAnalysis />}/>
            <Route path = '/access-control-search' element = {<AcsessControlSearch />}/>
            <Route path = '*' element = {<NotFound />}/>
        </Routes>
    )
}

export default RootPage

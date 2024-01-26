import { Routes, Route } from "react-router-dom"

import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'

export function CustomerRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>

            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}
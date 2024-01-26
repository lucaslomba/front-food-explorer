import { useAuth } from '../hooks/auth'
import { BrowserRouter } from 'react-router-dom'

import { AdminRoutes } from './admin.routes'
import { AuthRoutes } from './auth.routes'

export function Routes(){
    const { user } = useAuth()
    
    function AccessRoute(){
        switch (user.role) {
            case 'admin':
                return <AdminRoutes/>
            default:
                return <AuthRoutes/>          
        }
    }

    return (
        <BrowserRouter>
            {AccessRoute()}
        </BrowserRouter>
    )
}
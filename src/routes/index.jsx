import { useAuth } from '../hooks/auth'
import { BrowserRouter } from 'react-router-dom'

import { AuthRoutes } from './auth.routes'
import { AdminRoutes } from './admin.routes'
import { CustomerRoutes } from './customer.routes'

export function Routes(){
    const { user } = useAuth()

    console.log(user)
    
    function AccessRoute(){
        if(user){
            switch (user.role) {
                case 'admin':
                    return <AdminRoutes/>
                case 'customer':
                    return <CustomerRoutes />
                default:
                    return <AuthRoutes/>          
            }
        }else{
            return <AuthRoutes/>        
        }
    }

    return (
        <BrowserRouter>
            {AccessRoute()}
        </BrowserRouter>
    )
}
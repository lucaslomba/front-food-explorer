import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [data, setData] = useState({})

    function signIn({email, password}){
        const user = {
            email,
            password,
            role: 'customer'
        }

        localStorage.setItem("@foodexplorer:user", JSON.stringify(user))
        setData(user)
    }

    function signOut(){
        localStorage.removeItem("@foodexplorer:user")
        setData({})
    }

    function createAccount({name, email, password}){
        return true
    }

    useEffect(() => {
        const user = localStorage.getItem("@foodexplorer:user")

        if(user){
            setData(JSON.parse(user))
        }
    }, [])

    return (
        <AuthContext.Provider value={{ signIn, signOut, createAccount, user: data }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }
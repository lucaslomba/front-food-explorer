import { createContext, useContext, useEffect, useState } from "react";
import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [search, setSearch] = useState("")

    const [data, setData] = useState({})

    async function signIn({email, password}){
        try {
            const response = await api.post("/sessions", { email, password })
            const { user, token } = response.data
    
            localStorage.setItem("@foodexplorer:user", JSON.stringify(user))
            localStorage.setItem("@foodexplorer:token", token)

            api.defaults.headers.authorization = `Bearer ${token}`

            setData({user, token})
        } catch (error) {
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possível entrar!")
            }
        }

    }

    function signOut(){
        localStorage.removeItem("@foodexplorer:user")
        localStorage.removeItem("@foodexplorer:token")
        setData({})
    }

    function createAccount({name, email, password}){
        if(!name || !email || !password){
            alert("Preencha todos os campos!")
            return
        }

        api.post("/users", { name, email, password })
        .then(() => {
            alert("Usuário cadastrado com sucesso!")
            return true
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message)
                return false
            }else{
                alert("Não foi possivel cadastrar!")
                return false
            }
        })
    }

    useEffect(() => {
        const user = localStorage.getItem("@foodexplorer:user")
        const token = localStorage.getItem("@foodexplorer:token")

        if(token && user){
            api.defaults.headers.authorization = `Bearer ${token}`
            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ signIn, signOut, createAccount, setSearch, search, user: data.user }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from '../services/api';

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
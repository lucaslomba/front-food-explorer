import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import FoodExplorerImg from "../../assets/logo.svg"
import { Container, Form } from "./styles";

import { Link, useNavigate } from 'react-router-dom'
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"


export function SignUp(){
    const navigate = useNavigate()
    const { createAccount } = useAuth()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSignUp(){
        const accountIsCreated = createAccount({name, email, password})

        if(accountIsCreated){
            navigate("/")
        }
    }

    return (
        <Container>
            <div>
                <img 
                    src={FoodExplorerImg} 
                    alt="Logo do Food Explorer, uma caixa hexagonal azul com a escrita food explorer ao lado"
                />
            </div>

            <main>
                <Form>
                    <h1>Crie sua conta</h1>

                    <Input 
                        type="text"
                        label="Seu nome"
                        placeholder="Exemplo: Maria da Silva"
                        onChange={(e) => setName(e.target.value)}
                    />
                    
                    <Input 
                        type="text"
                        label="Email"
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input 
                        type="password"
                        label="Senha"
                        placeholder="No mínimo 6 caracteres"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button title="Criar conta" onClick={handleSignUp}/>
                    <Link to="/">Já tenho uma conta</Link>
                </Form>
            </main>
        </Container>
    )
}
import { useAuth } from '../../hooks/auth';

import FoodExplorerImg from "../../assets/logo.svg"
import { Container, Form } from "./styles";

import { Link } from 'react-router-dom'
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { useState } from 'react';

export function SignIn(){
    const { signIn } = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSignIn(){
        signIn({email, password})
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
                    <h1>Faça login</h1>

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

                    <Button title="Entrar" onClick={handleSignIn}/>
                    <Link to="/register">Criar uma conta</Link>
                </Form>
            </main>
        </Container>
    )    
}
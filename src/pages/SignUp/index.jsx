import FoodExplorerImg from "../../assets/logo.svg"
import { Container, Form } from "./styles";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"


export function SignUp(){
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
                    />
                    
                    <Input 
                        type="text"
                        label="Email"
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                    />

                    <Input 
                        type="password"
                        label="Senha"
                        placeholder="No mínimo 6 caracteres"
                    />

                    <Button title="Criar conta"/>
                    <a href="">Já tenho uma conta</a>
                </Form>
            </main>
        </Container>
    )
}
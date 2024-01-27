import { Container } from "./styles";

import logoFooter from "../../assets/logoFooter.svg"

export function Footer(){
    return(
        <Container>
            <img src={logoFooter}/>

            <span>© 2024 - Todos os direitos reservados.</span>
        </Container>
    )
}
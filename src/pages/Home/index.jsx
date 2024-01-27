import { useState } from "react";

import { Container, Content } from "./styles"

import { Header } from "../../components/Header"
import { SideMenu } from "../../components/SideMenu"
import { Footer } from "../../components/Footer";

export function Home(){
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return(
        <Container>
            <Header onOpenMenu={() => setMenuIsOpen(true)}/>
            <SideMenu 
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
            />

            <Content>
                Conteudo
            </Content>

            <Footer />
        </Container>
    )
}
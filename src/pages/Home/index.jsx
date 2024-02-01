import { useState } from "react";

import { Container, Content, Highlight } from "./styles"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { SideMenu } from "../../components/SideMenu"

import Background from "../../assets/background.png"

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
                <Highlight>
                    <img src={Background} alt="" />
                    <div>
                        <h1>Sabores inigualáveis</h1>
                        <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                    </div>
                </Highlight>

                <Section title="Refeições">

                </Section>

                <Section title="Sobremesas">

                </Section>

                <Section title="Bebidas">

                </Section>
            </Content>

            <Footer />
        </Container>
    )
}
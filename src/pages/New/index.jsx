import { useState } from "react";
import { Link } from "react-router-dom";

import { PiCaretLeft } from "react-icons/pi";
import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { SideMenu } from "../../components/SideMenu";

export function New(){
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <Container>
            <Header onOpenMenu={() => setMenuIsOpen(true)}/>
            <SideMenu 
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
            />

            <Content>
                <Link to={-1}><PiCaretLeft /> voltar</Link>

                <Section title="Adicionar prato">
                    
                </Section>
            </Content>

            <Footer />
        </Container>
    )
}
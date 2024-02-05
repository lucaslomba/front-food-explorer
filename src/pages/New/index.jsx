import { useState } from "react";
import { Link } from "react-router-dom";

import { PiCaretLeft } from "react-icons/pi";
import { Container, Content, Form } from "./styles";

import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { SideMenu } from "../../components/SideMenu";
import { Textarea } from "../../components/Textarea";
import { InputFile } from "../../components/InputFile";

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
                    <Form>
                        <InputFile label="Imagem do prato" id="dish"/>
                        <Input label="Nome" type="text" placeholder="Ex.: Salada Ceasar"/>
                        <Input label="Preço" type="text" placeholder="R$ 00,00"/>

                        <Input label="Nome" type="text" placeholder="Ex.: Salada Ceasar"/>
                        <Input label="Preço" type="text" placeholder="R$ 00,00"/>
                        
                        <Textarea label="Descrição" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"/>
                    </Form>
                </Section>
            </Content>

            <Footer />
        </Container>
    )
}
import { useState } from "react";

import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function Details(){
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <Container>
            <Header onOpenMenu={() => setMenuIsOpen(true)}/>

            <Content>

            </Content>

            <Footer />
        </Container>
    )
}
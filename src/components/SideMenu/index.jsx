import { useAuth } from "../../hooks/auth";
import { Footer } from "../Footer";

import { Container, Nav, Header, Button, InputSearch } from "./styles";

import { FiX, FiSearch } from 'react-icons/fi'

export function SideMenu({ menuIsOpen, onCloseMenu }) {
    const { signOut, user } = useAuth()

    return (
        <Container data-menu-is-open={menuIsOpen}>
            <Header>
                <Button onClick={onCloseMenu}>
                    <FiX />
                </Button>

                <h1>
                    Menu
                </h1>
            </Header>

            <Nav>
                <InputSearch>
                    <FiSearch />
                    <input type="text" placeholder="Busque por pratos ou ingredientes"/>
                </InputSearch>

                {
                user.role === "admin" && 
                    <button type="button" onClick={signOut}>
                        Novo prato
                    </button >    
                }
                <button type="button" onClick={signOut}>
                    Sair
                </button >
            </Nav>

            <Footer />
        </Container>
    );
}

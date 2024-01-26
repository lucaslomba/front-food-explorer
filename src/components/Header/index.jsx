import { useAuth } from "../../hooks/auth";

import { FiLogOut, FiSearch } from 'react-icons/fi'
import { PiReceipt } from "react-icons/pi";
import { ButtonCart, Container, ButtonLogOut, InputSearch } from "./styles";

import FoodExplorerImg from "../../assets/logo.svg"
import FoodExplorerAdminImg from "../../assets/logoAdmin.svg"

export function Header(){
    const { signOut, user } = useAuth()

    return(
        <Container>
            <img 
                src={user.role === "admin" ? FoodExplorerAdminImg : FoodExplorerImg}
                alt="Logo do Food Explorer, uma caixa hexagonal azul com a escrita food explorer ao lado"
                data-is-admin={user.role === "admin"}
            />

            <InputSearch>
                <FiSearch />
                <input type="text" placeholder="Busque por pratos ou ingredientes"/>
            </InputSearch>

            {
                user.role === "admin" ?
                <ButtonCart>Novo prato</ButtonCart>
                :
                <ButtonCart type="button"><PiReceipt /> Pedidos (0)</ButtonCart>
            }

            <ButtonLogOut type="button" onClick={signOut}><FiLogOut /></ButtonLogOut>
        </Container>
    )
}
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import Image from "../../assets/camarao.png"
import { PiCaretLeft } from "react-icons/pi";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Container, Content, Dish, DashDetails, DashIngredients, DashFooter } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SideMenu } from "../../components/SideMenu";

export function Details(){
    const { user } = useAuth()
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const [amount, setAmount] = useState(1)

    function handleAddItem(){
        if(amount < 9){
            setAmount((state) => state + 1)
        }
    }

    function handleRemoveItem(){
        if(amount > 1){
            setAmount((state) => state - 1)
        }
    }

    return (
        <Container>
            <Header onOpenMenu={() => setMenuIsOpen(true)}/>
            <SideMenu 
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
            />

            <Content>
                <Link to={-1}><PiCaretLeft /> voltar</Link>

                <Dish>
                    <img src={Image} alt="" />
                    
                    <DashDetails>
                        <h2>Spaguetti Gambe</h2>
                        <span>Massa fresca com camarões e pesto.</span>

                        <DashIngredients>
                            <span>Camarão</span>
                            <span>Macarrão</span>
                            <span>Molho pesto</span>
                            <span>Manjericão</span>
                        </DashIngredients>

                        <DashFooter>
                        {
                            user.role === "customer" ? (
                                <>
                                    <div>
                                        <FiMinus onClick={handleRemoveItem}/>
                                        <span>0{amount}</span>
                                        <FiPlus onClick={handleAddItem}/>
                                    </div>
                                    <button type="button">incluir ∙ R$ 25,00</button> 
                                </>
                            )
                            : (
                                <button type="button">Editar prato</button> 
                            )
                        }
                        </DashFooter>
                    </DashDetails>
                </Dish>
            </Content>

            <Footer />
        </Container>
    )
}
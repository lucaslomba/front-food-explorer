import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { PiCaretLeft } from "react-icons/pi";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Container, Content, Dish, DishDetails, DishIngredients, DishFooter } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SideMenu } from "../../components/SideMenu";

export function Details(){
    const params = useParams()

    const { user } = useAuth()
    const [data, setData] = useState(null)
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

    useEffect(() => {
        async function fetchDetails(){
            const response = await api.get(`/dishs/${params.id}`)
            setData(response.data)
        }

        fetchDetails()
    }, [])

    return (
        <Container>
            <Header onOpenMenu={() => setMenuIsOpen(true)}/>
            <SideMenu 
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
            />

            {
                data &&
                    <Content>
                        <Link to={-1}><PiCaretLeft /> voltar</Link>

                        <Dish>
                            <img src={`${api.defaults.baseURL}/files/${data.filename}`} alt="" />
                            
                            <DishDetails>
                                <h2>{data.name}</h2>
                                <span>{data.description}</span>

                                <DishIngredients>
                                    {data.ingredients.map((ingredient, index) => (
                                        <span key={String(index)}>{ingredient.name}</span>
                                    ))}
                                </DishIngredients>

                                <DishFooter>
                                {
                                    user.role === "customer" ? (
                                        <>
                                            <div>
                                                <FiMinus onClick={handleRemoveItem}/>
                                                <span>0{amount}</span>
                                                <FiPlus onClick={handleAddItem}/>
                                            </div>
                                            <button type="button">incluir ∙ R$ {data.price}</button> 
                                        </>
                                    )
                                    : (
                                        <button type="button">Editar prato</button> 
                                    )
                                }
                                </DishFooter>
                            </DishDetails>
                        </Dish>
                    </Content>
            }
            <Footer />
        </Container>
    )
}
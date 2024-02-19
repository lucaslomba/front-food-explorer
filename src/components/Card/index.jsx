import { useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

import { Container, Footer, LinkTitle } from "./styles";
import { FiMinus, FiPlus, FiHeart } from "react-icons/fi";
import { PiPencilSimple } from "react-icons/pi";

import {Button } from "../Button"

export function Card({details, ...rest}){
    const { user } = useAuth()
    const navigate = useNavigate()

    const [amount, setAmount] = useState(1)
    const avatarUrl = details.filename ? `${api.defaults.baseURL}/files/${details.filename}` : ''

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

    function handleToDetails(){
        navigate("/details/" + details.id)
    }

    return (
        <Container {...rest}>
            {
                details &&
                    user.role === "admin" ?
                    <PiPencilSimple />
                    :
                    <FiHeart />
            }
                <img src={avatarUrl} alt="" />

                <LinkTitle onClick={handleToDetails}>{details.name} &nbsp;&nbsp;&gt;</LinkTitle>
                <span>{details.description}</span>

                <h2>{details.price}</h2>

                {
                    user.role === "customer" ? (
                        <Footer>
                            <div>
                                <FiMinus onClick={handleRemoveItem}/>
                                <span>0{amount}</span>
                                <FiPlus onClick={handleAddItem}/>
                            </div>
                            <Button title="incluir"/>
                        </Footer>
                    ) : null
                }
            
        </Container>
    )
}
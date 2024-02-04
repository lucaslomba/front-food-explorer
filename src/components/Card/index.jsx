import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import { Container, Footer, LinkTitle } from "./styles";
import { FiMinus, FiPlus, FiHeart } from "react-icons/fi";
import { PiPencilSimple } from "react-icons/pi";

import {Button } from "../Button"

import Image from "../../assets/camarao.png"

export function Card({...rest}){
    const { user } = useAuth()
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
        <Container {...rest}>
            {
                user.role === "admin" ?
                <PiPencilSimple />
                :
                <FiHeart />
            }
            <img src={Image} alt="" />

            <LinkTitle to="/details">Spaguetti Gambe&nbsp;&nbsp;&gt;</LinkTitle>
            <span>Massa fresca com camarões e pesto.</span>

            <h2>R$ 79,97</h2>

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
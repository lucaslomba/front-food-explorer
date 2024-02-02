import { Container, Footer } from "./styles";
import { FiMinus, FiPlus, FiHeart } from "react-icons/fi";

import {Button } from "../Button"

import Image from "../../assets/camarao.png"
import { useState } from "react";

export function Card({...rest}){
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
            <FiHeart />
            <img src={Image} alt="" />

            <h1>Spaguetti Gambe&nbsp;&nbsp;></h1>
            <span>Massa fresca com camarões e pesto.</span>

            <h2>R$ 79,97</h2>

            <Footer>
                <div>
                    <FiMinus onClick={handleRemoveItem}/>
                    <span>0{amount}</span>
                    <FiPlus onClick={handleAddItem}/>
                </div>
                <Button title="incluir"/>
            </Footer>
        </Container>
    )
}
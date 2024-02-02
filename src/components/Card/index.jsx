import { Container, Footer } from "./styles";
import { FiMinus, FiPlus, FiArrowRight } from "react-icons/fi";

import {Button } from "../Button"

import Image from "../../assets/camarao.png"

export function Card({...rest}){
    return (
        <Container {...rest}>
            <img src={Image} alt="" />

            <h1>Spaguetti Gambe&nbsp;&nbsp;></h1>
            <span>Massa fresca com camarões e pesto.</span>

            <h2>R$ 79,97</h2>

            <Footer>
                <div>
                    <FiMinus />
                    <span>01</span>
                    <FiPlus />
                </div>
                <Button title="incluir"/>
            </Footer>
        </Container>
    )
}
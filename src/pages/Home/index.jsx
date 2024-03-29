import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";
import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'
import { Container, Content, Highlight } from "./styles"

import { Card } from "../../components/Card"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { SideMenu } from "../../components/SideMenu"

import Background from "../../assets/background.png"

export function Home(){
    const { search } = useAuth()

    const [meals, setMeals] = useState([])
    const [desserts, setDesserts] = useState([])
    const [drinks, setDrinks] = useState([])

    useEffect(() => {
        async function fetchMeal(){
            const response = await api.get(`/dishs?type=meal&search=${search}`)
            setMeals(response.data)
        }

        async function fetchDessert(){
            const response = await api.get(`/dishs?type=dessert&search=${search}`)
            setDesserts(response.data)
        }

        async function fetchDrink(){
            const response = await api.get(`/dishs?type=drink&search=${search}`)
            setDrinks(response.data)
        }

        fetchMeal()
        fetchDessert()
        fetchDrink()
    }, [search])

    const [sliderRef] = useKeenSlider({
        breakpoints: {
            "(min-width: 400px)": {
            slides: { perView: 1.6, spacing: 16 },
            },
            "(min-width: 1000px)": {
            slides: { perView: 3.5, spacing: 27 },
            },
        },
        slides: { perView: 1 },
    })

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return(
        <Container>
            <Header onOpenMenu={() => setMenuIsOpen(true)} />
            <SideMenu 
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
            />

            <Content>
                <Highlight>
                    <img src={Background} alt="" />
                    <div>
                        <h1>Sabores inigualáveis</h1>
                        <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                    </div>
                </Highlight>

                <Section title="Refeições">
                    <div ref={sliderRef} className="keen-slider">
                        {
                            meals.map((meal, index) => (
                                <Card 
                                    key={String(index)} 
                                    className="keen-slider__slide" 
                                    details={meal}
                                />
                            ))
                        }
                    </div>
                </Section>

                <Section title="Sobremesas">
                    <div ref={sliderRef} className="keen-slider">
                        {
                            desserts.map((dessert, index) => (
                                <Card 
                                    key={String(index)} 
                                    className="keen-slider__slide" 
                                    details={dessert}
                                />
                            ))
                        }
                    </div>
                </Section>

                <Section title="Bebidas">
                    <div ref={sliderRef} className="keen-slider">
                        {
                            drinks.map((drink, index) => (
                                <Card 
                                    key={String(index)} 
                                    className="keen-slider__slide" 
                                    details={drink}
                                />
                            ))
                        }
                    </div>
                </Section>
            </Content>

            <Footer />
        </Container>
    )
}
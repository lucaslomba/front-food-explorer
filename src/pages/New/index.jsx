import { useState } from "react";
import { Link } from "react-router-dom";

import { PiCaretLeft } from "react-icons/pi";
import { Container, Content, Form, SelectContainer, IngredientsList } from "./styles";

import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { SideMenu } from "../../components/SideMenu";
import { Textarea } from "../../components/Textarea";
import { InputFile } from "../../components/InputFile";
import { IngredientsTag } from "../../components/IngredientsTag";

export function New(){
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState("")

    function handleAddIngredient(){
        setIngredients(prevState => [...prevState, newIngredient])
        setNewIngredient("")
    }

    function handleRemoveIngredient(deleted){
        setIngredients(prevState => prevState.filter(tag => tag !== deleted))
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

                <Section title="Adicionar prato">
                    <Form>
                        <InputFile label="Imagem do prato" id="dish"/>
                        <Input label="Nome" type="text" placeholder="Ex.: Salada Ceasar"/>

                        <SelectContainer>
                            <label htmlFor="">Categoria</label>
                            <select>
                                <option value="">Refeições</option>
                                <option value="">Sobremesas</option>
                                <option value="">Bebidas</option>
                            </select>
                        </SelectContainer>

                        <IngredientsList>
                            <label htmlFor="">Ingredientes</label>

                            <div className="tags">
                                {
                                    ingredients.map((ingredient, index) => (
                                        <IngredientsTag 
                                            key={String(index)}
                                            value={ingredient}  
                                            onClick={() => handleRemoveIngredient(ingredient)}
                                        />
                                    ))
                                }
                                <IngredientsTag 
                                    placeholder="Adicionar" 
                                    isNew 
                                    value={newIngredient} 
                                    onChange={(e) => setNewIngredient(e.target.value)}
                                    onClick={handleAddIngredient}
                                />
                            </div>
                        </IngredientsList>
                        <Input label="Preço" type="text" placeholder="R$ 00,00"/>
                        
                        <Textarea label="Descrição" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"/>
                        
                        <div>
                            <Button title="Salvar alterações" disabled/>
                        </div>
                    </Form>
                </Section>
            </Content>

            <Footer />
        </Container>
    )
}
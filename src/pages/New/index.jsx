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
import { api } from "../../services/api";

export function New(){
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [dishFile, setDishFile] = useState(null)

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

    function handleSelectFile(event){
        const file = event.target.files[0]
        setDishFile(file)
    }

    async function handleCreateDish(){
        if(!dishFile){
            return alert("Selecione uma foto!")
        }

        if(!name){
            return alert("Digite o nome do prato!")
        }

        if(!category){
            return alert("Selecione uma categoria!")
        }

        if(!price){
            return alert("Digite o valor do prato!")
        }

        if(!description){
            return alert("Digite a descrição do prato!")
        }

        await api.post("/dishs", {
            name,
            category,
            price,
            description,
            ingredients,
            dishFile
        })
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
                        <InputFile label="Imagem do prato" id="dish" onChange={handleSelectFile}/>
                        <Input 
                            label="Nome" 
                            type="text" 
                            placeholder="Ex.: Salada Ceasar"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />

                        <SelectContainer>
                            <label htmlFor="">Categoria</label>
                            <select onChange={e => setCategory(e.target.value)}>
                                <option value="">Selecione...</option>
                                <option value="meal">Refeições</option>
                                <option value="dessert">Sobremesas</option>
                                <option value="drink">Bebidas</option>
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
                        <Input 
                            label="Preço" 
                            value={price}
                            type="text" 
                            placeholder="R$ 00,00" 
                            onChange={e => setPrice(e.target.value)}
                        />
                        
                        <Textarea 
                            label="Descrição" 
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                            onChange={e => setDescription(e.target.value)}
                        />
                        
                        <div>
                            <Button title="Salvar alterações" onClick={handleCreateDish}/>
                        </div>
                    </Form>
                </Section>
            </Content>

            <Footer />
        </Container>
    )
}
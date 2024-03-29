import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Link, useNavigate, useParams } from "react-router-dom";

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

export function Edit(){
    const params = useParams()
    const [data, setData] = useState(null)
    
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [dishFile, setDishFile] = useState(null)
    
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState("")

    useEffect(() => {

        async function fetchDetails(){
            const response = await api.get(`/dishs/${params.id}`)
            setData(response.data)
            setName(response.data.name)
            setPrice(response.data.price)
            setCategory(response.data.category)
            setDescription(response.data.description)

            let ingredients = response.data.ingredients.map((ingredient) => {
                return ingredient.name
            })


            setIngredients(ingredients)
        }

        fetchDetails()
    }, [])


    const navigate = useNavigate()

    function handleAddIngredient(){
        if(!newIngredient){
            return alert("Campo deve estar preenchido")
        }
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

    async function handleDeleteDish(){
        await api.delete("/dishs/" + params.id)

        alert("Prato deletado com sucesso!")
        navigate(-1)
    }

    async function handleUpdateDish(){
        if(newIngredient){
            return alert("Você tem um ingrediente nao adicionado, deixe o campo vazio ou clique no +!")
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

        const fileUploadForm = new FormData()
        fileUploadForm.append("dishFile", dishFile)
        fileUploadForm.append("name", name)
        fileUploadForm.append("category", category)
        fileUploadForm.append("price", price)
        fileUploadForm.append("description", description)
        fileUploadForm.append("ingredients", ingredients)

        await api.patch("/dishs/" + params.id, fileUploadForm)

        alert("Prato editado com sucesso!")
        navigate(-1)
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
                            <select value={category} onChange={e => setCategory(e.target.value)}>
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
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                        
                        <div>
                            <button className="delete" onClick={handleDeleteDish}>Excluir prato</button>
                            <Button title="Salvar alterações" onClick={handleUpdateDish}/>
                        </div>
                    </Form>
                </Section>
            </Content>

            <Footer />
        </Container>
    )
}
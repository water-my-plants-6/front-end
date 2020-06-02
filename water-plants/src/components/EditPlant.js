import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {useParams, useHistory} from "react-router-dom";
import axiosWithAuth from "./utils/axiosWithAuth";


const FormContainer = styled.div `
    box-shadow: 0 5px 10px rgba(104, 113, 88, 0.12), 0 5px 2px rgba(104, 113, 88, 0.24);
    border-radius: 8px;
    width: 50%;
    padding: 5%;
    margin: 3% auto;
    background-color: white;
`
const Title = styled.h1 `
    font-size: 5rem;
    padding-bottom: 10%;
`
const Form = styled.form `
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin: 1%;
`
const Label = styled.label `
    margin-bottom: -34px;
    text-align: left;
    width: 75rem;
    font-family: 'Jaldi', sans-serif;
    font-size: 2rem;
`

const Input = styled.input `
    width: 230px;
    padding: 8px 26px;
    margin: 8.5px;
    border: 1px solid #81814D;
    border-radius: 4px;
    font-size: 1.3rem;
`
const Select = styled.select `
    width: 230px;
    padding: 8px 26px;
    margin: 11.5px;
    border: 1px solid #81814D;
    border-radius: 4px;
    font-size: 1.3rem;
`

const Button = styled.button `
    width: 150px;
    padding: 8px;
    background-color: #312C1C; 
    border: 1px solid #81814D;
    border-radius: 4px;
    margin-top: 1.6%;
    font-family: 'Jaldi', sans-serif;
    font-size: 1.8rem;
    color: white;
    &:hover {
       filter:brightness(2.00); 
    }
`

const EditPlant = props => {
    const [plant, setPlant] = useState ({})

    const params= useParams();

    const history = useHistory();
    const [editPlant, setEditPlant] = useState ({
        user_Id: "",
        nickname: "",
        species: "",
        h2oFrequency:""
    })

    useEffect(() => {
        axiosWithAuth()
        .get(`/plants/${params.id}`)
        .then(
            res => setPlant(res.data)
        )
        .catch(
            err => console.log(err)
        )
    }, [params.id]);
    
    useEffect(()=> {
        const ids= params.id;
        
        setEditPlant({
            ...editPlant,
            user_Id : ids
        })
    },[params.id]);
    
    const updatePlant = (event) => {
        event.preventDefault()
        const update = {
            user_Id: editPlant.user_Id || params.id,
            nickname: editPlant.nickname || plant.nickname,
            species: editPlant.species || plant.species,
            h2oFrequency: editPlant.h2oFrequency || plant.h2oFrequency
        }
        console.log(update)
        axiosWithAuth()
        .put(`/plants/${params.id}`, update)
        .then(
            res => props.fetchPlant()
        )
        .catch(
            err => console.log(err)
        )
    }
    const changeHandler = (event) => {
        setEditPlant({
            ...editPlant,
            [event.target.name] : event.target.value
        })
    }

    return(
        <FormContainer>
            <Form onSubmit={event =>{
                event.preventDefault()
                props.addEdit(editPlant)
                updatePlant(event)
                history.push("/plantlist")

                setEditPlant({user_Id:"", nickname:"", species: "", h2oFrequency: ""})
            }} >
                <div>
                    <Title>View or edit your plant</Title>
                </div>
                <Label htmlFor="nickname">Edit your plant's nickname: </Label>
                <Input
                    id="nickname"
                    type="text"
                    name="nickname"
                    placeholder="Edit your plant's nickname"
                    value={editPlant.nickname}
                    onChange={changeHandler}
                    />
                <Label htmlFor="species">Edit your plant's species: </Label>
                <Input
                    id="species"
                    type="text"
                    name="species"
                    placeholder="Edit your plant's species"
                    value={editPlant.species}
                    onChange={changeHandler}
                    />
                <Label htmlFor="h2o">Edit your plant's water schedule:</Label>
                <Select
                    id="h2o"
                    name="h2oFrequency"
                    value={editPlant.h2oFrequency}
                    onChange={changeHandler}
                    >
                    <option value="" disabled={true}>Edit your water schedule</option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Bi-Weekly">Bi-Weekly</option>
                    <option value="Monthly">Monthly</option>
                </Select>
                 
                <Button type="submit">Edit</Button>
            </Form>
           </FormContainer> 
    )
}

export default EditPlant;

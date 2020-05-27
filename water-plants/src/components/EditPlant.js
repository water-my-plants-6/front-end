import React, {useState} from "react";
import styled from "styled-components";

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
    width: 750px;
    font-family: 'Jaldi', sans-serif;
    font-size: 2rem;
`

const Input = styled.input `
    width: 230px;
    padding: 8px 26px;
    margin: 11.5px;
    border: 1px solid #81814D;
    border-radius: 4px;
`
const Select = styled.select `
    width: 230px;
    padding: 8px 26px;
    margin: 11.5px;
    border: 1px solid #81814D;
    border-radius: 4px;
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
    const [editPlant, setEditPlant] = useState ({
        id: "",
        nickname: "",
        species: "",
        h2oFrequency:""
    })
    const changeHandler = (event) => {
        setEditPlant({
            ...editPlant,
            [event.target.name] : event.target.value
        })
    }

    return(
        <Form onSubmit={event =>{
            event.preventDefault()
            props.addEdit(editPlant)

            setEditPlant({id: Date.now(), nickname:"", species: "", h2oFrequency: ""})
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
                id="h20"
                name="h20"
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
    )
}

export default EditPlant;

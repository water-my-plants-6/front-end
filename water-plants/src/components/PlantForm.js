import React, {useState} from "react";
import {Modal, ModalHeader,ModalBody} from "reactstrap";
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
    border: 1px solid #C7BEAE;
    background: white;
    padding: 20px;
`
const Label = styled.label `
    margin-bottom: -34px;
    text-align: left;
    width: 700px;
    font-family: 'Jaldi', sans-serif;
    font-size: 2rem;
`

const Input = styled.input `
    width: 240px;
    padding: 8px 26px;
    margin: 11.5px;
    border: 1px solid #81814D;
    border-radius: 4px;
`
const Select = styled.select `
    width: 240px;
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


const PlantForm = props => {
    
    const [plant, setPlant] = useState({
        user_Id: props.number,
        nickname:"",
        species: "",
        h2oFrequency: ""
    })

  
    const changeHandler = (event) => {
        setPlant({
            ...plant,
            [event.target.name] : event.target.value
        })
    }

  
    return(
        
            <Modal isOpen={props.modalProp} toggle={props.modalToggle}>
                <ModalHeader toggle={props.modalToggle} style={{background: "linear-gradient(to right, #81814D, #687158)", textAlign:"center"}}>Add Plant</ModalHeader>
                <ModalBody style={{padding: "15px", border:"1px solid #C7BEAE", background: "linear-gradient(to right, #81814D, #687158)"}}>
                    <Form onSubmit={event =>{
                        event.preventDefault()
                        props.addPlant(plant)

                        setPlant({id: "", nickname:"", species: "", h2oFrequency: ""})
                        props.setNumber(props.number+1)
                        props.modalToggle()
                    }} >
                        <div className="addPlant">
                            <Title>Add a New Plant</Title>
                        </div>
                        <Label htmlFor="nickname">Nickname your Plant: </Label>
                        <Input
                            id="nickname"
                            type="text"
                            name="nickname"
                            placeholder="Enter your plant's nickname"
                            value={plant.nickname}
                            onChange={changeHandler}
                            />
                        <Label htmlFor="species">Enter your Plant's Species: </Label>
                        <Input
                            id="species"
                            type="text"
                            name="species"
                            placeholder="Enter your plant's nickname"
                            value={plant.species}
                            onChange={changeHandler}
                            />
                        <Label htmlFor="h2o">Select your Water Schedule:</Label>
                        <Select
                            id="h2o"
                            name="h2oFrequency"
                            value={plant.h2oFrequency}
                            onChange={changeHandler}
                            >
                            <option value="" disabled={true}>Select Your Water Schedule</option>
                            <option value="Daily">Daily</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Bi-Weekly">Bi-Weekly</option>
                            <option value="Monthly">Monthly</option>
                        </Select> 
                        <Button type="submit">Add Plant</Button>
                    </Form>
                </ModalBody>
            </Modal> 
    )
}

export default PlantForm;        
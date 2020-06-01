import React, {useState} from "react";
import {Modal, ModalBody, ModalFooter} from "reactstrap"
import{Link} from "react-router-dom";
import styled from "styled-components";


const PlantDiv = styled.div `
    display: flex;
    flex-wrap: wrap;
`
const Title = styled.h1 `
    font-size: 5rem;
    padding-bottom: 5%;
    color: white;
    margin-left: 1%;
`

const Card = styled.div `
    margin: 30px;
    background-color: rgba(199, 190, 174, 0.7);
    box-shadow: 0 5px 10px rgba(104, 113, 88, 0.12), 0 5px 2px rgba(104, 113, 88, 0.24);
    border-radius: 8px;
    width: 100%;
    padding: 30px;
    max-width: 450px;
`
const Para = styled.p `
    font-family: 'Jalid', sans-serif;
    font-size: 2.5rem;
`
const ModalPara = styled.p `
    font-family: 'Jalid', sans-serif;
    font-size: 2.5rem;
    background: white;
    padding: 20px;
    text-align: center;
    `
const Button = styled.button `
    width: 150px;
    padding: 8px;
    background-color: #312C1C; 
    border: 1px solid #81814D;
    border-radius: 4px;
    margin-top: 5.5%;
    font-family: 'Jaldi', sans-serif;
    font-size: 1.8rem;
    margin-left: 2%;
    color: white;

    &:hover {
       filter:brightness(2.00); 
    }
`
const ModalButton = styled.button `
    width: 150px;
    padding: 8px;
    background-color: #312C1C; 
    border: 1px solid #81814D;
    border-radius: 4px;
    margin-top: 5%;
    font-family: 'Jaldi', sans-serif;
    font-size: 1.8rem;
    
    color: white;

    &:hover {
       filter:brightness(2.00); 
    }
`

const PlantList = props => {

    const [modal, setModal]= useState(false);
    const toggle = () => setModal(!modal);

    const [plants] = useState([])
    
    
    const [plantId, setPlantId] = useState("");
    const openDeleteModal = (id)=> {
        setPlantId(id)
        toggle()
    }
    const deletePlant=() => {
        props.setPlants(props.plants.filter(plant=> plant.id!==plantId))
        setPlantId("")
        toggle()
    }
   console.log(plants)
    return(
        <div>
            <div>
                <Title>List of Plants</Title>
            </div>
            <PlantDiv>
                <Modal isOpen={modal} toggle={toggle}>
                        <ModalBody style={{padding: "15px", border:"1px solid #C7BEAE", background: "linear-gradient(to right, #81814D, #687158)"}}>
                            <ModalPara>Would you like to delete? </ModalPara>
                        </ModalBody>
                        <ModalFooter style={{border:"1px solid #C7BEAE", background: "linear-gradient(to right, #81814D, #687158)"}}>
                            <ModalButton onClick={deletePlant}>Yes</ModalButton>
                            <ModalButton onClick={toggle}>No</ModalButton>
                        </ModalFooter>
                    </Modal>
            {props.plants.map(plant =>
                <Card key={plant.id}>
                    <Para>Plant Nickname: {plant.nickname}</Para>
                    <Para>Plant Species: {plant.species}</Para>
                    <Para>Water Frequency: {plant.h2oFrequency}</Para>
                    <Link to={`/editplant/${plant.id}`}>
                    <Button>View</Button>
                    </Link>
                    <Button onClick={()=>openDeleteModal(plant.id)}>Delete</Button>
                    
                </Card>
                )}
                </PlantDiv>
                <Button onClick={props.plantToggle}>Add Plant</Button>
                
        </div>
    )
}

export default PlantList;
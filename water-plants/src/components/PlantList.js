import React, {useState} from "react";
import {Modal, ModalBody, ModalFooter} from "reactstrap"
// import PlantForm from "./PlantForm"
import styled from "styled-components";

const PlantDiv = styled.div `
    display: flex;
    flex-wrap: wrap;
`
const Title = styled.h1 `
    font-size: 5rem;
    padding-bottom: 10%;
`

const Card = styled.div `
    margin: 30px;
    background-color: rgba(199, 190, 174, 0.3);
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


const PlantList = props => {

    const [modal, setModal]= useState(false);
    const toggle = () => setModal(!modal);
    return(
        <div className="PlantDiv">
            <div>
                <Title>List of Plants</Title>
            </div>
            <PlantDiv>
            {props.plants.map(plant =>
                <Card key={plant.id}>
                    <Para>Plant Nickname: {plant.nickname}</Para>
                    <Para>Plant Species: {plant.species}</Para>
                    <Para>Water Frequency: {plant.h2oFrequency}</Para>
                    <Button>View</Button>
                    <Button onClick={toggle}>Delete</Button>
                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalBody>
                            <Para>Would you like to delete? </Para>
                        </ModalBody>
                        <ModalFooter>
                            <Button>Yes</Button>
                            <Button>No</Button>
                        </ModalFooter>
                    </Modal>
                </Card>
                
                )}
                </PlantDiv>
                <Button onClick={toggle}>Add Plant</Button>
                {/* <PlantForm/> */}
        </div>
    )
}

export default PlantList;
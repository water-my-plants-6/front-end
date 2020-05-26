import React, {useState} from "react";
import {Modal, ModalBody} from "reactstrap"
import PlantForm from "./PlantForm"

const PlantList = props => {

    const [modal, setModal]= useState(false);
    const toggle = () => setModal(!modal);
    return(
        <div className="PlantDiv">
            <div>
                <h1>List of Plants</h1>
            </div>
            {props.plants.map(plant =>
                <div key={plant.id}>
                    <p>Nickname of Plant: {plant.nickname}</p>
                    <p>Species of Plant: {plant.species}</p>
                    <p>Water Frequency: {plant.h2oFrequency}</p>
                    <button>View</button>
                    <button onClick={toggle}>Delete</button>
                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalBody>
                            <p>Would you like to delete? </p>
                        </ModalBody>
                    </Modal>
                </div>
                )}
                <button onClick={toggle}>Add Plant</button>
                <PlantForm/>
        </div>
    )
}

export default PlantList;
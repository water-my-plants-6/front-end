import React from "react";

const PlantList = props => {
    return(
        <div className="PlantDiv">
            <div>
                <h1>List of Plants</h1>
            </div>
            {props.plants.map(plant =>
                <div key={plant.id}>
                    <p>Nickname of Plant: {plant.nickname}</p>
                    <button>View</button>
                    <button>Delete</button>
                    <p>Species of Plant: {plant.species}</p>
                    <button>View</button>
                    <button>Delete</button>
                    <p>Water Frequency: {plant.h2oFrequency}</p>
                    <button>View</button>
                    <button>Delete</button>
                </div>
                )}
        </div>
    )
}

export default PlantList;
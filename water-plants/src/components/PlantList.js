import React from "react";

const PlantList = props => {
    return(
        <div className="PlantDiv">
            {props.plants.map(plant =>
                <div key={plant.id}>
                    <p>Nickname of Plant: {plant.nickname}</p>
                    <p>Species of Plant: {plant.species}</p>
                    <p>Water Frequency: {plant.h2oFrequency}</p>
                </div>
                )}
        </div>
    )
}

export default PlantList;
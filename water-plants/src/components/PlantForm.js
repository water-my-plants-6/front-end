import React, {useState} from "react";

const PlantForm = props => {
    const [plant, setPlant] = useState({
        id: "",
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
        <form onSubmit = {event => {
            event.preventDefault()
            props.addPlant(plant)

            setPlant({id: "", nickname:"", species: "", h2oFrequency: ""})
        }} >
            <label htmlFor="nickname">Nickname your Plant: </label>
            <input
                id="nickname"
                type="text"
                name="nickname"
                placeholder="Enter your plant's nickname"
                value={plant.nickname}
                onChange={changeHandler}
                />
            <label htmlFor="species">Enter your Plant's Species: </label>
            <input
                id="species"
                type="text"
                name="species"
                placeholder="Enter your plant's nickname"
                value={plant.species}
                onChange={changeHandler}
                />
            <label htmlFor="h2o">Select your Water Schedule</label>
            <select
                id="h20"
                name="h20"
                value={plant.h2oFrequency}
                onChange={changeHandler}
                >
                <option value="" disabled={true}>Select Your Water Schedule</option>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
            </select> 
            <button type="submit">Add Plant</button>
        </form>
    )
}

export default PlantForm;
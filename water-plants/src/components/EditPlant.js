import React, {useState} from "react";

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
        <form onSubmit={event =>{
            event.preventDefault()
            props.addEdit(editPlant)

            setEditPlant({id: Date.now(), nickname:"", species: "", h2oFrequency: ""})
        }} >
            <div>
                <h1>Edit your plant</h1>
            </div>
            <label htmlFor="nickname">Edit your plant's nickname: </label>
            <input
                id="nickname"
                type="text"
                name="nickname"
                placeholder="Enter your plant's nickname"
                value={editPlant.nickname}
                onChange={changeHandler}
                />
            <label htmlFor="species">Edit your plant's species: </label>
            <input
                id="species"
                type="text"
                name="species"
                placeholder="Enter your plant's nickname"
                value={editPlant.species}
                onChange={changeHandler}
                />
            <label htmlFor="h2o">Edit your plant's water schedule</label>
            <select
                id="h20"
                name="h20"
                value={editPlant.h2oFrequency}
                onChange={changeHandler}
                >
                <option value="" disabled={true}>Change water schedule</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Bi-Weekly">Bi-Weekly</option>
                <option value="Monthly">Monthly</option>
            </select> 
            <button type="submit">Edit</button>
        </form>
    )
}

export default EditPlant;

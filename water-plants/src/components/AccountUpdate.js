import React, {useState} from "react";
import * as yup from "yup";
import axios from "axios";


const formSchema = yup.object().shape({
    mobileNumber: yup
        .number()
        .min(10, "Phone number must be 10 digits.")
        .typeError("Must enter a Valid Phone Number"),
    password: yup
        .string() 
        .min(6, "Password must be 6 characters long.")
})
export default function AccountUpdate () {
    const [formState, setFormState] = useState({
        mobileNumber: "",
        password: ""
    })
    const [post, setPost] = useState()

    const [errorState, setErrorState] = useState({
        mobileNumber: "", 
        password: ""
    })
    
    const validate = e => {
        let value = e.target.value;
        yup
            .reach(formSchema, e.target.name)
            .validate(value)
            .then(valid => {
                setErrorState({
                    ...errorState,
                    [e.target.name] : ""
                });
            })
            .catch(err => {
                console.log(err.errors)
                setErrorState({
                    ...errorState,
                    [e.target.name] : err.errors[0]
                });
            });
    };
    const inputChange = e => {
        e.persist();
        let value = e.target.value
        validate(e)
        setFormState({...formState, [e.target.name]: value});
    };

    const formSubmit = e => {
        e.preventDefault();
        console.log("form submitted!")
        setFormState({userName: "", mobileNumber:"", password:""})
        axios
            .post()
            .then(response => {
                setPost(response.data);
                console.log("Success", response)
            })
            .catch(err => console.log(err));
    };
    return(
        <form onSubmit={formSubmit}>
            <div>
                <h1>Edit your account information</h1>
            </div>
            <label htmlFor="mobileNumber">Update your Mobile Phone Number</label>
            <input
                type="text"
                name="mobileNumber"
                id="mobileNumber"
                value={formState.mobileNumber}
                onChange={inputChange}
                placeholder="Update Phone Number"
                />
            {errorState.mobileNumber.length > 0 ? (<p>{errorState.mobileNumber}</p>) : null}
            <button>Update</button>
            <label htmlFor="password">Update your Password</label>
            <input
                type="text"
                name="password"
                id="password"
                value={formState.password}
                onChange={inputChange}
                placeholder="Update password"
                />
            {errorState.password.length > 0 ? (<p>{errorState.password}</p>) : null}
            <button>Update</button>
        </form>
    )
}

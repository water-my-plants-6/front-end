import React, {useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";


const formSchema = yup.object().shape({
    userName: yup
        .string()
        .required("Username Required"),
    password: yup
        .string()
        .required("Password is Required")
})

export default function LoginForm () {
    const [formState, setFormState] = useState({
        userName: "",
        password: ""
    });
    
    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(()=> {
        formSchema.isValid(formState).then(valid => {
            setButtonDisabled();
        })
    }, [formState]);

    const [post, setPost] = useState()

    const [errorState, setErrorState] = useState({
        userName: "",
        password: ""
    })

    const validate = e => {
        let value= e.target.value;
        yup
            .reach(formSchema, e.target.name)
            .validate(value)
            .then(valid => {
                setErrorState({
                    ...errorState,
                    [e.target.name]: ""
                });
            })
            .catch(err => {
                console.log(err.errors)
                setErrorState({
                    ...errorState,
                    [e.target.name] :err.errors[0]
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
        setFormState({userName: "", password: ""})
        axios 
            .post()
            .then(response => {
                setPost(response.data);
                console.log("Success", response)
            })
            .catch(err => console.log(err));
    };

    return (
        <form onSubmit={formSubmit}>
            <label html="userName">Username</label>
            <input
                type="text"
                name="userName"
                id="userName"
                value={formState.userName}
                onChange={inputChange}
                placeholder="Enter Username"
                />
                {errorState.userName.length > 0 ? (<p>{errorState.userName}</p>) : null}
            <label html="password">Password</label>
            <input
                type="text"
                name="password"
                id="password"
                value={formState.password}
                onChange={inputChange}
                placeholder="Enter Username"
                />
                {errorState.password.length > 0 ? (<p>{errorState.password}</p>) : null}
            <button disabled={buttonDisabled}>Sign In</button>
        </form>
    )
}

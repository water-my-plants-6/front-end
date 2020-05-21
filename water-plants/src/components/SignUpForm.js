import React, {useState, useEffect} from "react";
import * as yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
    userName: yup
        .string()
        .min(3, "Username must be at least 3 characters long")
        .required("Please create a Username"),
    mobilePhone: yup
        .string()
        .required("Must enter valid Mobile Phone Number"),
    password: yup
        .string()
        .min(6, "Password must be 6 characters long.")
        .required("Password is Required")
})
export default function SignUpForm () {
    const [formState, setFormState] = useState({
        userName: "",
        mobilePhone: "",
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
        mobilePhone: "",
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
        setFormState({userName: "", mobilePhone:"", password:""})
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
            <label htmlFor="userName">
                Username:
            </label>
            <input
                type="text"
                name="userName"
                id="userName"
                value={formState.userName}
                onChange={inputChange}
                placeholer="Please create your Username"
                />
                {errorState.userName.length > 0 ? (<p>{errorState.userName}</p>) : null}
            <label htmlFor="mobileNumber">
                Mobile Phone Number:
            </label>
            <input
                type="text"
                name="mobilePhone"
                id="mobilePhone"
                value={formState.mobilePhone}
                onChange={inputChange}
                placeholer="(xxx)xxx-xxxx"
                />
                {errorState.mobilePhone.length > 0 ? (<p>{errorState.mobilePhone}</p>) : null}
            <label htmlFor="password">
                Password:
            </label>
            <input
                type="text"
                name="password"
                id="password"
                value={formState.password}
                onChange={inputChange}
                placeholer="Please create your Username"
                />
                {errorState.password.length > 0 ? (<p>{errorState.password}</p>) : null} 
            <button disabled={buttonDisabled}>Create your Account Now</button>
        </form>
    )
}
import React, {useState, useEffect} from "react";
import * as yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
    userName: yup
        .string()
        .min(4, "Username must be at least 4 characters long")
        .required("Please create a Username"),
    mobilePhone: yup
        .number()
        .min(10, "Must be a 10 digit number")
        .typeError("Must enter a valid phone number")
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
            setButtonDisabled(!valid);
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
               Create a Username:
            </label>
            <input
                type="text"
                name="userName"
                id="userName"
                value={formState.userName}
                onChange={inputChange}
                placeholder="Please create your Username"
                />
                {errorState.userName.length > 0 ? (<p>{errorState.userName}</p>) : null}
            <label htmlFor="mobileNumber">
                Enter your Mobile Phone Number:
            </label>
            <input
                type="text"
                name="mobilePhone"
                id="mobilePhone"
                value={formState.mobilePhone}
                onChange={inputChange}
                placeholder="(xxx)xxx-xxxx"
                />
                {errorState.mobilePhone.length > 0 ? (<p>{errorState.mobilePhone}</p>) : null}
            <label htmlFor="password">
               Create a Password:
            </label>
            <input
                type="text"
                name="password"
                id="password"
                value={formState.password}
                onChange={inputChange}
                placeholder="Please create your Password"
                />
                {errorState.password.length > 0 ? (<p>{errorState.password}</p>) : null} 
            <button disabled={buttonDisabled}>Create Account</button>
        </form>
    )
}
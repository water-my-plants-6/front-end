import React, {useState, useEffect} from "react";
import * as yup from "yup";
import axiosWithAuth from "./utils/axiosWithAuth";
import styled from "styled-components";
import {Link} from "react-router-dom";


const FormContainer = styled.div `
    box-shadow: 0 5px 10px rgba(104, 113, 88, 0.12), 0 5px 2px rgba(104, 113, 88, 0.24);
    border-radius: 8px;
    width: 45%;
    padding: 5%;
    margin: 3% auto;
    background-color: white;
`

const Title = styled.h1 `
    font-size: 5rem;
    padding-bottom: 10%;
`
const Form = styled.form `
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin: 1%;
`
const Label = styled.label `
    margin-bottom: -34px;
    text-align: left;
    width: 70rem;
    font-family: 'Jaldi', sans-serif;
    font-size: 2rem;
`

const Input = styled.input `
    width: 230px;
    padding: 8px 26px;
    margin: 11.5px;
    border: 1px solid #81814D;
    border-radius: 4px;
`
const Error = styled.p `
    font-family: 'Jaldi', sans-serif;
    font-size: 1.5rem;
    padding-bottom: 0.5%;
    color: red;
`
const Button = styled.button `
    width: 150px;
    padding: 8px;
    background-color: #312C1C; 
    border: 1px solid #81814D;
    border-radius: 4px;
    margin-top: 1.6%;
    font-family: 'Jaldi', sans-serif;
    font-size: 1.8rem;
    color: white;
    &:hover {
       filter:brightness(2.00); 
    }
`

const formSchema = yup.object().shape({
    userName: yup
        .string()
        .min(4, "Username must be at least 4 characters long")
        .required("Please create a Username"),
    phoneNumber: yup
        .number()
        .min(10, "Phone number should be 10 digits")
        .typeError("Must enter a valid phone number")
        .required("Must enter valid Mobile Phone Number"),
    password: yup
        .string()
        .min(6, "Password must be 6 characters long.")
        .required("Password is Required")
})
export default function SignUpForm () {
    const [formState, setFormState] = useState({
        username: "",
        phoneNumber: "",
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
        username: "",
        phoneNumber: "",
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
        // validate(e)
        setFormState({...formState, [e.target.name]: value});
    };

    const formSubmit = e => {
        e.preventDefault();
        console.log("form submitted!", formState)
        
        axiosWithAuth()
            .post("/auth/register", formState)
            .then(response => {
                setPost(response.data);
                console.log("Success", response)
            })
            .catch(err => console.log(err));

            setFormState({username: "", phoneNumber:"", password:""})
    };

    return(
        <FormContainer>
            <Form onSubmit={formSubmit}>
                <div className="signup">
                    <Title>Create a New Account</Title>
                </div>
                <Label htmlFor="username">
                Create a Username:
                </Label>
                <Input
                    type="text"
                    name="username"
                    id="username"
                    value={formState.username}
                    onChange={inputChange}
                    placeholder="Please create your Username"
                    />
                    {errorState.username.length > 0 ? (<Error>{errorState.username}</Error>) : null}
                <Label htmlFor="phoneNumber">
                    Enter your Phone Number:
                </Label>
                <Input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={formState.phoneNumber}
                    onChange={inputChange}
                    placeholder="xxx-xxx-xxxx"
                    />
                    {errorState.phoneNumber.length > 0 ? (<Error>{errorState.phoneNumber}</Error>) : null}
                <Label htmlFor="password">
                Create a Password:
                </Label>
                <Input
                    type="text"
                    name="password"
                    id="password"
                    value={formState.password}
                    onChange={inputChange}
                    placeholder="Please create your Password"
                    />
                    {errorState.password.length > 0 ? (<Error>{errorState.password}</Error>) : null} 
                    <Button disabled={buttonDisabled}>Create Account</Button>
            </Form>
        </FormContainer>
    )
}
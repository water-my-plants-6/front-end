import React, {useState, useEffect } from "react";
import * as yup from "yup";
import styled from "styled-components";
import {Link} from "react-router-dom";

import axiosWithAuth from "./utils/axiosWithAuth";

const FormContainer = styled.div `
        box-shadow: 0 5px 10px rgba(104, 113, 88, 0.12), 0 5px 2px rgba(104, 113, 88, 0.24);
        border-radius: 8px;
        width: 30%;
        padding: 5%;
        margin: 3% auto;
        background-color: white;
   
`
const Title = styled.h1 `
    font-size: 5rem;
   
`
const SubText = styled.h2 `
    font-size: 3rem;
    padding-top: 8%;
    padding-bottom: 10%;
    font-family: 'Jaldi', sans-serif;
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
    width: 38rem;
    font-family: 'Jaldi', sans-serif;
    font-size: 2rem;
    
`
const Input = styled.input `
    width: 200px;
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
    username: yup
        .string()
        .required("Username Required"),
    password: yup
        .string()
        .required("Password is Required")
})

export default function LoginForm (props) {
   
    const [formState, setFormState] = useState({
        username: "",
        password: ""
    });
    
    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(()=> {
        formSchema.isValid(formState).then(valid => {
            setButtonDisabled(!valid);
        })
    }, [formState]);

    // const [post, setPost] = useState()

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
        
        axiosWithAuth()
        .post("/auth/login", formState)
        .then(res => {
            console.log(res);
            localStorage.setItem("token", res.data.token);
            props.history.push("/plants");
        })
        .catch(err => {
            console.log(err);
        });
    };


    return (
        <FormContainer>
            <Form onSubmit={formSubmit}>
                <div className="signIn">
                    <Title>Welcome Back!</Title>
                    <SubText>Log into your account</SubText>
                </div>
                <Label html="userName">Username:</Label>
                <Input
                    type="text"
                    name="username"
                    id="userName"
                    value={formState.username}
                    onChange={inputChange}
                    placeholder="Enter Username"
                    />
                    {errorState.userName.length > 0 ? (<Error>{errorState.userName}</Error>) : null}
                <Label html="password">Password:</Label>
                <Input
                    type="text"
                    name="password"
                    id="password"
                    value={formState.password}
                    onChange={inputChange}
                    placeholder="Enter Password"
                    />
                    {errorState.password.length > 0 ? (<Error>{errorState.password}</Error>) : null}
                <Link to={"/plantlist"}>
                    <Button disabled={buttonDisabled}>Sign In</Button>
                </Link>
            </Form>
        </FormContainer>
    )
};

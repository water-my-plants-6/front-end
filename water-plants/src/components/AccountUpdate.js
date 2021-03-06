import React, {useState} from "react";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";

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
const Error = styled.p `
    font-family: 'Jaldi', sans-serif;
    font-size: 1.5rem;
    padding-bottom: 0.5%;
    color: red;
`

const Input = styled.input `
    width: 230px;
    padding: 8px 26px;
    margin: 8.5px;
    border: 1px solid #81814D;
    border-radius: 4px;
    font-size: 1.3rem;
`

const Button = styled.button `
    width: 200px;
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
    phoneNumber: yup
        .number()
        .min(10, "Phone number must be 10 digits.")
        .typeError("Must enter a Valid Phone Number"),
    password: yup
        .string() 
        .min(6, "Password must be 6 characters long.")
})
export default function AccountUpdate () {
    const [formState, setFormState] = useState({
        phoneNumber: "",
        password: ""
    })
    const [setPost] = useState()

    const [errorState, setErrorState] = useState({
        phoneNumber: "", 
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
        setFormState({phoneNumber:"", password:""})

        axios
            .post("/auth/register")
            .then(response => {
                setPost(response.data);
                console.log("Success", response)
            })
            .catch(err => console.log(err));
    };
    return(
    <FormContainer>
        <Form onSubmit={formSubmit}>
            <div>
                <Title>Edit your account information</Title>
                </div>
            <Label htmlFor="phoneNumber">Update your Phone Number:</Label>
            <Input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                value={formState.phoneNumber}
                onChange={inputChange}
                 placeholder="Update Phone Number"
                />
                {errorState.phoneNumber.length > 0 ? (<Error>{errorState.phoneNumber}</Error>) : null}
            <Label htmlFor="password">Update your Password:</Label>
            <Input
                type="password"
                name="password"
                id="password"
                value={formState.password}
                onChange={inputChange}
                placeholder="Update password"
                />
                {errorState.password.length > 0 ? (<Error>{errorState.password}</Error>) : null}
            <Button>Update Your Information</Button>
        </Form>
    </FormContainer>
    )
}
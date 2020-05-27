import React from 'react';
import styled from 'styled-components'

const NavBar = styled.section `
   
    @media(min-width: 400px) {
        display: flex;
        flex-direction: row
    }
    @media(min-width: 700px) {
        display: flex;
        flex-direction: row;
    }

    @media(min-width: 800px) {
        display: flex;
        flex-direction: row;
    }
`
const Title = styled.div `
    @media(min-width: 400px) {
        margin-top: 1%;
        font-size: 3rem;
        padding-left: 1%;
    }
    @media(min-width: 700px) {
        margin-top: 1%;
        font-size: 4rem;
        padding-left: 1%;
    }
    @media(min-width: 800px) {
        margin-top: 1%;
        font-size: 5rem;
        padding-left: 1%;
    }
`
const Nav = styled.nav `
    @media(min-width: 400px) {
        margin-top: 2%;
        padding-left: 26%;
    }
    @media(min-width: 700px) {
        maring-top: 2%;
        padding-left: 42%;
    }
    @media(min-width: 800px) {
        margin-top: 1%;
        padding-left: 63%;
    }
`
const Anchor = styled.a `
    &:hover {
        background-color:#687158; 
    }
    @media(min-width: 400px) {
        text-decoration: none;
        text-align: center;
        padding: 14px 16px;
        background-color: #81814D;
        color: black;
        font-size: 1.5rem;
        font-family: 'Satisfy', cursive;
    }
    @media(min-width: 700px) {
        text-decoration: none;
        text-align: center;
        padding: 14px 16px;
        background-color:#81814D;
        color: black;
        font-size: 1.9rem;
        font-family: 'Satisfy', cursive;
    }
    @media(min-width: 800px) {
        text-decoration: none;
        text-align: center;
        padding: 14px 16px;
        background-color:#81814D;
        color: black;
        font-size: 2.9rem;
        font-family: 'Satisfy', cursive;
    }
`
export default function Navigation () {
    return(
        <NavBar>
            <Title>
                <h1>Water My Plants</h1>
            </Title>
            <Nav>
                <Anchor href="about.html">About Us</Anchor>
                <Anchor href="/">Log Out</Anchor>
            </Nav>
        </NavBar>
    )
}
import React from 'react';
import styled from 'styled-components';


const Header = styled.header `
    width: 100%;
    height: 100%;
`
const NavContainer = styled.div `
    display: flex;
    algin-items: center;
    margin-bottom: 5%;
    margin-left: 2%;
`
const Title = styled.a `
    font-size: 5rem;
    margin-top: 1%;
    font-family: 'Satisfy',cursive;
    text-decoration: none;
    color: black;

    &:hover {
        text-decoration: none;
        color: black;
    }
`
const Navs = styled.nav `
    width: 22rem;
    margin-left: 70%;
    font-size: 2.9rem;
    display: flex;
    justify-content: space-evenly;
    line-height: 7.2rem;
    
`
const Anchor = styled.a `
    text-decoration: none;
    color: black;
    background-image: linear-gradient(to right, #687158, #81814D);
    font-family: 'Satisfy',cursive;
    padding: 0.6rem;
   

    &:hover {
        text-decoration: none;
        color: black;
        background-image: linear-gradient(to right, #81814D, #687158);
        }
    }
`

export default function NavigationLogin () {
    return(
        <Header>
            <NavContainer>
                <Title href="https://jolly-hoover-40259b.netlify.app/index.html">Water My Plants</Title>
                <Navs>
                    <Anchor href="https://wizardly-darwin-0302c1.netlify.app/about.html">About Us</Anchor>
                    <Anchor href="/">Log In</Anchor>
                </Navs>
            </NavContainer>
       </Header> 
    )
}
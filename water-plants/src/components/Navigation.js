import React from 'react';
import styled from 'styled-components';

const Header = styled.header `
    width: 100%;
    height: 100%;
`
const NavContainer = styled.div `
    display: flex;
    algin-items: center;
    flex-wrap: wrap;
    margin-bottom: 5%;
`
const Title = styled.h1 `
     font-size: 5rem;
     margin-top: 1%;
     padding-left: 1%;
   
`
const Navs = styled.nav `
    width: 43rem;
    margin-left: 59.5%;
    font-size: 2.9rem;
    display: flex;
    justify-content: space-evenly;
    line-height: 7.2rem;
    
`
const Anchor = styled.a `
    text-decoration: none;
    color: black;
    background-color: #81814D;
    font-family: 'Satisfy',cursive;
    padding: 0.6rem;
   

    &:hover {
        text-decoration: none;
        color: black;
        background-color: #687158;
        }
    }
`

export default function Navigation () {
    return(
        <Header>
            <NavContainer> 
                <Title>Water My Plants</Title>
                <Navs>
                    <Anchor href="#">About Us</Anchor>
                    <Anchor href="/">Log Out</Anchor>
                    <Anchor href="/accountupdate">Account Update</Anchor>
                </Navs>
            </NavContainer>
       </Header> 
    )
}
import React from 'react';
import styled from "styled-components";
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../App.css'
import './betterline.png'

const Landing = () => {

    
    return (
        <>

        <Wrapper className="trim">
        <StripeSmall>
                <img src="https://cdn.discordapp.com/attachments/245032785872551937/724439050676863076/clipart-5-21-21-21-44_1.png" alt="Red Stripe"/>
        </StripeSmall>
        <Form>
            <Header2>二 タップ</Header2>
            <Header className="font">2TAP<span>.</span>GG</Header>
            <Disclaimer className="font">
                     © 2020 2tap.gg. 2tap.gg isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing VALORANT. VALORANT and Riot Games are trademarks or registered trademarks of Riot Games, Inc. VALORANT © Riot Games, Inc.
            </Disclaimer>
            <InputBoxes className="font">
                <Input placeholder="hello"/> {'>'} <LilInput placeholder="#"/> <Button>TAP</Button>
            </InputBoxes>
        </Form>
            <Jett>
                <img src="https://vignette.wikia.nocookie.net/valorant/images/7/79/Jett_artwork.png/revision/latest?cb=20200602020209" alt="Valorant Jett"/>
            </Jett>
            <Reyna>
                <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6577b1f58530e6b2/5eb7cdc121a5027d77420208/V_AGENTS_587x900_Reyna.png" alt="Valorant Reyna"/>
            </Reyna>
        </Wrapper>
        </>
    )
}

const StripeSmall = styled.div`
    height 73.9vh;
    margin-left: -42.2%;
    margin-top: 13.7%;
    z-index: -2;
    position: absolute;
    overflow: hidden;
    @media only screen and (max-width: 1919px) {
        display: none;
    }
    
`
const InputBoxes = styled.div`
    display: flex;
    width: 100%;
    font-size: 20px;
    align-items: center;
    margin-bottom: 5px;
    justify-content: center;
`

const Form = styled.form`
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    `;


const Header = styled.div`
    font-size: 110px;
    span {
        color: rgb(255, 217, 94);
    }

    width: 100%;
    text-align: center;
    margin-top: 171px;
    font-weight: 800;
    margin-bottom: -20px;
    
`
const Header2 = styled.div`
    font-size: 110px;
    color: #00cc99;
    position: absolute;
    margin-top: 2.5%;
    width: 100%;
    text-align: center;
    padding-left: 1%;
    font-weight: 800;
    
`

const Input = styled.input`
    font-family: Calibri;
    font-size: 15px;
    width: 310px;
    height: 40px;
    background-color: rgb(242, 249, 255);
    border: 1px solid black;
    padding-left: 7px;
    padding-bottom: 2px;
    color: black;
    margin-right: 7px;

    ::placeholder{
        font-size: 12px;
        font-family: Calibri;
    }
    

    :focus {
        outline: none;
        border: 1px solid black;
    }
    `
const LilInput = styled.input`
    font-size: 20px;
    width: 80px;
    height: 40px;
    margin-left: 7px;
    background-color: rgb(242, 249, 255);
    border: 1px solid black;
    padding: 7px;
    padding-bottom: 11.5px;


    ::placeholder{
        font-size: 12px;
    }
    @media only screen and (max-width: 600px) {
        width: 30%;
        
    }
    :focus {
        outline: none;
        border: 1px solid black;
    }
    `

const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: #6699ff;
    color: white;
    height: 40px;
    width: 60px;
    margin-left: 0.5%;
  
    font-size: 10px;
    padding: 0.25em 1em;
    border: 2px solid #6699ff;
    border-radius: 3px;
  `;


const Jett = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    margin-left: 5%;
    top: 9%;
    z-index: -1;
        @media only screen and (max-width: 1919px) {
            display: none;
        }
    `

const Reyna = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    margin-left: 60%;
    top: 4%;
    z-index: -1;
    @media only screen and (max-width: 1919px) {
        display: none;
    }
`

const Wrapper = styled.div`

    font-size: 50px;
    display: flex;
    flex-direction: column;
    width: 10px solid blue;
`


const Disclaimer = styled.p`
    font-size: 8px;
    width: 300px;
    text-align: justify;
    margin-left: 180px;
    margin-bottom: 3px;
`

export default Landing
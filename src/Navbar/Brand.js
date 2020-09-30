import React from 'react'
import styled from "styled-components";
import '../App.css'


const Brand = () => {
    return (
        <Logo className="font">2TAP</Logo>
    )
}
export default Brand

const Logo = styled.div`
    color: white;
    font-size: 40px;
    margin-left: 50px;
    margin-top: 5px;
    width: 5%;

    
     @media only screen and (max-width: 600px) {
        width: 100%;
        text-align: center;
        margin-left: 0;
    }

     :hover {
         color: red;
         cursor: pointer;
     }
    `;


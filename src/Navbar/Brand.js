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
     margin: auto 0;
     color: white;
     font-family: VALORANT Regular;
     font-size: 40px;
     margin-left: -8.4%;
     @media only screen and (max-width: 600px) {
        margin-left: 25%;
    }

     :hover {
         color: red;
         cursor: pointer;
     }
    `;


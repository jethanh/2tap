import React from 'react'
import styled from "styled-components";

const Brand = () => {
    return (
        <Logo>2TAP</Logo>
    )
}
export default Brand

const Logo = styled.div`
     margin: auto 0;
     color: white;
     font-family: VALORANT Regular;
     font-size: 40px;
     margin-left: -16%;

     :hover {
         color: red;
         cursor: pointer;
     }
    `;


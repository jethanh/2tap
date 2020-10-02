import React from 'react';
import styled from "styled-components";
import '../App.css'
import './betterline.png'
import {useHistory} from 'react-router-dom'

const Landing = ({user, setUser, tag, setTag}) => {

    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        console.log(user);
        console.log(tag);
    }

    
    return (
        <>

        <Wrapper className="trim">
        <StripeSmall>
                <img src="https://cdn.discordapp.com/attachments/245032785872551937/724439050676863076/clipart-5-21-21-21-44_1.png" alt="Red Stripe"/>
        </StripeSmall>
        <Form onSubmit={handleSubmit}>
            <Header2>二 タップ</Header2>
            <Header className="font">2TAP<span>.</span>GG</Header>
            <Disclaimer className="font">
                     © 2020 2tap.gg. 2tap.gg isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing VALORANT. VALORANT and Riot Games are trademarks or registered trademarks of Riot Games, Inc. VALORANT © Riot Games, Inc.
            </Disclaimer>
            <InputBoxes className="font">
                <Input name="username" type="text" value={user} onChange={(e) => setUser(e.target.value)} placeholder="RIOT ID"/> {'>'} <LilInput type="text" value={tag} onChange={e => setTag(e.target.value.replace(/[^\w\s]/gi, ""))}placeholder="#"/>
                <Button onClick={() => history.push(`/stats/${user}/${tag}`)}> TAP </Button>
            </InputBoxes>
        </Form>
        <Champs>
            <Jett>
                <img src="https://vignette.wikia.nocookie.net/valorant/images/7/79/Jett_artwork.png/revision/latest?cb=20200602020209" alt="Valorant Jett"/>
            </Jett>
            <Reyna>
                <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6577b1f58530e6b2/5eb7cdc121a5027d77420208/V_AGENTS_587x900_Reyna.png" alt="Valorant Reyna"/>
            </Reyna>
        </Champs>
        </Wrapper>
        </>
    )
}

const StripeSmall = styled.div`
    height 73vh;
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
    @media only screen and (max-width: 600px) {
        padding: 5px;
        
    }
`

const Form = styled.form`
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
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
    @media only screen and (max-width: 450px) {
        font-size: 75px;
        
    }
    
`
const Header2 = styled.div`
    font-size: 110px;
    color: #00cc99;
    position: absolute;
    margin-top: 45px;
    width: 100%;
    text-align: center;
    padding-left: 1%;
    font-weight: 800;
    @media only screen and (max-width: 482px) {
        display: none;
        
    }
    
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
    font-family: Calibri;
    font-size: 15px;
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
    cursor: pointer;
    font-size: 10px;
    padding: 0.25em 1em;
    border: 2px solid #6699ff;
    border-radius: 3px;
  `;


const Jett = styled.div`
margin-top: 60px;
max-height: 89vh;
`

const Reyna = styled.div`
margin-top: 30px;

`
const Champs = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
position: absolute;
overflow: hidden;
@media only screen and (max-width: 1406px) {
    display: none;
    
}
`

const Wrapper = styled.div`
    font-size: 50px;
    display: flex;
    flex-direction: column;

`


const Disclaimer = styled.p`
    font-size: 8px;
    width: 350px;
    text-align: justify;
    margin-left: 125px;
    margin-bottom: 3px;
    @media only screen and (max-width: 482px) {
        width: 100%;
        margin-left: 0px;
        padding: 5px;
        
    }
`

export default Landing
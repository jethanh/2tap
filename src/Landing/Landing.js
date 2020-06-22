import React from 'react';
import styled from "styled-components";
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../App.css'
import './betterline.png'

const Landing = () => {
    const [news, setNews] = useState([]);

    const fetchNews = async () => {
        const url = 'https://newsapi.org/v2/everything?' +
        'q=valorant&' +
        'from=2020-05-21&' +
        'sortBy=popularity&language=en&' +
        'apiKey=8ca129a4cb8845a2b1b5792d79b02f6b';
    
            await axios.get(url)
            .then(ress => {
                setNews(ress.data.articles)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchNews();

    }, []);


console.log(news)


    
    return (
        <>

        <Wrapper className="trim">
        <StripeSmall>
                <img src="https://cdn.discordapp.com/attachments/245032785872551937/724439050676863076/clipart-5-21-21-21-44_1.png" alt="Red Stripe"/>
        </StripeSmall>
            <Form>
                <HeadWrap>
                    <Header className="font">2TAP<span>.</span>GG</Header>
                    <Header2 className="font">二 タップ</Header2>
                </HeadWrap>
                <Wrap className="font">
                    <Input placeholder="暴動   |   RIOT   |   दंगा   |   شورش" type="text" id="riotid" name="riotid"/>
                    {'>'}
                    <LilInput type="text" id="tag" name="tag" placeholder="#"/>
                    <Button>TAP</Button>
                </Wrap>
                <HeadWrap>
                    
                </HeadWrap>
            </Form>
        <Disclaimer className="font">
                     © 2020 2tap.gg. 2tap.gg isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing VALORANT. VALORANT and Riot Games are trademarks or registered trademarks of Riot Games, Inc. VALORANT © Riot Games, Inc.
        </Disclaimer>
            <Jett>
                <img src="https://vignette.wikia.nocookie.net/valorant/images/7/79/Jett_artwork.png/revision/latest?cb=20200602020209" alt="Valorant Jett"/>
            </Jett>
            <Reyna>
                <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6577b1f58530e6b2/5eb7cdc121a5027d77420208/V_AGENTS_587x900_Reyna.png" alt="Valorant Reyna"/>
            </Reyna>
        </Wrapper>
        {/* <Wrapper2>
            <NewsHeader className="font">
                VAlorant //         NEWS //
            </NewsHeader>
            <NewsBorder>
                <NewsWrapper>
                {
             news.map(item => (
                 <>
                <div className="nList">
                    <h3 className="font"><a href={item.url}>{item.title}</a></h3>
                    <p>{item.author} {'//'} Published: {item.publishedAt}</p>
                    <p className="desc">{item.description}</p>
                </div>
                </>
            ))
            }
                </NewsWrapper>
            </NewsBorder>
        </Wrapper2> */}
        </>
    )
}

const StripeSmall = styled.div`
    height 73.9vh;
    margin-left: -37%;
    margin-top: 13.7%;
    z-index: -2;
    position: absolute;
    overflow: hidden;
    
`

// const NewsWrapper = styled.div`
//     width: 77%;
//     height: 90vh;
//     margin-left: 20%;
//     font-family: Calibri;
//     display: flex;
//     flex-direction: column;
//     text-align: right;
//     margin-top: 1%;
//     padding-top: 1%;
//     overflow-y: scroll;
//     padding-right: 5%;

//     /* width */
// ::-webkit-scrollbar {
//   width: 1px;
// }

// /* Track */
// ::-webkit-scrollbar-track {
//   box-shadow: inset 0 0 5px grey; 
//   border-radius: 10px;
// }
 
// /* Handle */
// ::-webkit-scrollbar-thumb {
//   background: red; 
// }

// /* Handle on hover */
// ::-webkit-scrollbar-thumb:hover {
//   background: #2d3436; 
// }

//         h3 {
//             font-size: 20px;
//             color: white;
//             width: 130%;
//             text-align: justify;
//             @font-face {
//                 font-family: 'VALORANT'; 
//                 src: url('./src/Landing/VALORANT.eot') format('embedded-opentype'), 
//                 url('./src/Landing/VALORANT.woff') format ('opentype');
//                 font-weight: normal;
//                 font-style: normal;
//               }
//               font-family: Valorant;
//                 a {
//                     text-decoration: none;
//                     color: white;
//                 }
//                 a:hover {
//                     color: #fa143e;
//                 }
//         }
//         p {
//             width: 130%;
//             font-size: 12px;
//             text-align: left;
//         }
//         .desc{
//             width: 130%;
//             color: white;
//             margin-bottom: 20px;
//             font-size: 15px;
//             text-align: left;
//             border-bottom: 1px solid red;
//             padding-bottom: 2%;
//         }
// `

const Form = styled.form`
    margin-top: 15%;
    margin-left: 40%;
    width: 60%;
    @media only screen and (max-width: 600px) {
        margin-left: 10%;
    }
    `;
const Header = styled.h1`
    font-size: 120px;
    width: 100%;
    margin-top: -5.5%;
    margin-bottom: 5.5%;
    span {
        color: rgb(255, 217, 94);
    }
    
`
const Header2 = styled.h1`
    font-size: 120px;
    padding-top: 1.5%;
    width: 100%;
    margin-top: -51%;
    margin-bottom: -5%;
    color: #00cc99;
    
`

const HeadWrap = styled.div`
width: 50%;
`

const Input = styled.input`
    font-size: 20px;
    width: 30%;
    height: 40px;
    margin-right: 7px;
    background-color: rgb(242, 249, 255);
    border: 1px solid black;
    padding: 7px;
    @media only screen and (max-width: 600px) {
        width: 100%;
    }

    ::placeholder{
        font-size: 12px;
    }
    

    :focus {
        outline: none;
        border: 1px solid black;
    }
    `
const LilInput = styled.input`
    font-size: 20px;
    width: 6%;
    height: 40px;
    margin-left: 7px;
    background-color: rgb(242, 249, 255);
    border: 1px solid black;
    padding: 7px;


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
const Wrap = styled.div`
    font-size: 20px;
    display: flex;
    align-items: center;
    margin-top: 11%;
    @media only screen and (max-width: 600px) {
        width: 140%;
        
    }
    
    @font-face { 
        font-family: 'VALORANT'; 
        src: url('./src/Landing/VALORANT.eot') format('embedded-opentype'); 
        font-weight: normal; 
        font-style: normal; 
    }

    @font-face { 
    font-family: 'VALORANT'; 
    src: url('./src/Landing/VALORANT.woff') format('woff');
    url('./src/Landing/VALORANT.ttf') format('truetype'), 
    url('./src/Landing/VALORANT.svg#VALORANT') format('svg');
    font-weight: normal; 
    font-style: normal; 
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
    margin-left: 11%;
    top: 9%;
    z-index: -1;
        @media only screen and (max-width: 600px) {
            display: none;
        }
    `

const Reyna = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    margin-left: 65%;
    top: 4%;
    z-index: -1;
    @media only screen and (max-width: 600px) {
        display: none;
    }
`

const Wrapper = styled.div`
    margin-left: -5%;
    font-size: 50px;
`

// const Wrapper2 = styled.div`
//     margin-top: 1%;
//     @font-face { 
//         font-family: 'VALORANT'; 
//         src: url('./src/Landing/VALORANT.eot') format('embedded-opentype'); 
//         font-weight: normal; 
//         font-style: normal; 
//     }
//     @media only screen and (max-width: 600px) {
//         display: none;
//     }

//     @font-face { 
//     font-family: 'VALORANT'; 
//     src: url('./src/Landing/VALORANT.woff') format('woff');
//     url('./src/Landing/VALORANT.ttf') format('truetype'), 
//     url('./src/Landing/VALORANT.svg#VALORANT') format('svg');
//     font-weight: normal; 
//     font-style: normal; 
// }
    
//     width: 100%;
//     background-color: #2d3436;
//     z-index: -2;
//     position: absolute;
//     color: #fa143e;
//     height: 140vh;
//     padding-top: 0.5%;
// `

// const NewsHeader = styled.div`
// font-size: 72px;
// @font-face { 
//     font-family: 'VALORANT'; 
//     src: url('./src/Landing/VALORANT.eot') format('embedded-opentype'); 
//     font-weight: normal; 
//     font-style: normal; 
// }

// @font-face { 
// font-family: 'VALORANT'; 
// src: url('./src/Landing/VALORANT.woff') format('woff');
// url('./src/Landing/VALORANT.ttf') format('truetype'), 
// url('./src/Landing/VALORANT.svg#VALORANT') format('svg');
// font-weight: normal; 
// font-style: normal; 
// }

// color: white;
// margin-left: 10.5%;
// letter-spacing: -7.7px;
// border-bottom: 1px solid #fa143e;
// width: 21%;
// height: 4.9vh;
// line-height: 70%;
// display: flex;
// `

// const NewsBorder = styled.div`
//     height: 110vh;
//     width: 35%;
//     border-right: 1px solid white;
//     padding-top: 2.5%;
// `

const Disclaimer = styled.p`
    font-size: 8px;
    color: black;
    width: 1%;
    margin-left: 0.4%;
    text-align: justify;
    height: 14vh;
    margin-left: 46.8%;
    margin-top: -4.5%;
    width: 19%;
`

export default Landing
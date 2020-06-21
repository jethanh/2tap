import React from 'react';
import styled from "styled-components";
import axios from 'axios';
import { useState, useEffect } from 'react';

const Landing = () => {
    const [news, setNews] = useState([]);

    const fetchNews = () => {
            axios.get('http://newsapi.org/v2/everything?q=valorant&language=en&pageSize=9&from=2020-05-21&sortBy=publishedAt&apiKey=f36ea9dacbad4172adfd0362de6ce7bf')
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
        <Wrapper>
            <Form>
                <HeadWrap>
                    <Header>2TAP.GG</Header>
                </HeadWrap>
                <Label htmlFor="riotid">Enter a Riot ID:</Label><br/>
                <Wrap>
                    <Input type="text" id="riotid" name="riotid"/>
                    {'>'}
                    <LilInput type="text" id="tag" name="tag"/>
                    <Button>TAP</Button>
                </Wrap>
            </Form>
            <Jett>
                <img src="https://vignette.wikia.nocookie.net/valorant/images/7/79/Jett_artwork.png/revision/latest?cb=20200602020209" alt="Valorant Jett"/>
            </Jett>
            <Reyna>
                <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6577b1f58530e6b2/5eb7cdc121a5027d77420208/V_AGENTS_587x900_Reyna.png" alt="Valorant Reyna"/>
            </Reyna>
        </Wrapper>
        <Wrapper2>
            <Disclaimer>
                © 2020 2tap.gg. 2tap.gg isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing VALORANT. VALORANT and Riot Games are trademarks or registered trademarks of Riot Games, Inc. VALORANT © Riot Games, Inc.
            </Disclaimer>
            <NewsHeader>
                VALORaNT //         NEWS //
            </NewsHeader>
            <NewsBorder>
                <NewsWrapper>
                {
             news.map(item => (
                 <>
                <div className="nList">
                    <h3><a href={item.url}>{item.title}</a></h3>
                    <p>{item.author} {'//'} Published: {item.publishedAt}</p>
                    <p className="desc">{item.description}</p>
                </div>
                </>
            ))
            }
                </NewsWrapper>
            </NewsBorder>
        </Wrapper2>
        </>
    )
}

const NewsWrapper = styled.div`
    width: 97%;
    height: 90vh;
    border-left: 1px solid white;
    border-top: 1px solid white;
    margin-left: 10%;
    margin-top: -1%;
    font-family: Calibri;
    padding: 2%;
    display: flex;
    flex-direction: column;
    padding-left: 7%;
    padding-top: 4%;
        h3 {
            font-size: 24px;
            color: white;
            font-family: VALORANT Regular;
            width: 100%;
                a {
                    text-decoration: none;
                    color: white;
                }
                a:hover {
                    color: #fa143e;
                }
        }
        p {
            font-size: 12px;
            padding-left: 2%;
        }
        .desc{
            color: white;
            margin-bottom: 20px;
            font-size: 15px;
        }
`

const Form = styled.form`
    margin-top: 15%;
    margin-left: 40%;
    width: 60%;
    `;
const Header = styled.h1`
    font-size: 120px;
    font-family: VALORANT Regular;
    padding-top: 1.5%;
    width: 100%;
    margin-top: 15%;
    margin-bottom: -5%;
`
const HeadWrap = styled.div`
width: 50%;
`

const Input = styled.input`
    font-size: 20px;
    width: 30%;
    height: 40px;
    margin-right: 1%;
    background-color: rgb(242, 249, 255);
    border: 1px solid black;
    padding: 7px;
    

    :focus {
        outline: none;
        border: 1px solid black;
    }
    `
const LilInput = styled.input`
    font-size: 20px;
    width: 6%;
    height: 40px;
    margin-left: 10px;
    background-color: rgb(242, 249, 255);
    border: 1px solid black;
    padding: 7px;
    :focus {
        outline: none;
        border: 1px solid black;
    }
    `
const Wrap = styled.div`
    font-size: 20px;
    display: flex;
    align-items: center;
    font-family: VALORANT Regular;
    `

const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: rgb(156, 219, 255);
    color: white;
    height: 40px;
    width: 60px;
    margin-left: 1%;
  
    font-size: 10px;
    padding: 0.25em 1em;
    border: 2px solid rgb(156, 219, 255);
    border-radius: 3px;
  `;

const Label = styled.label`
  font-size: 15px;
  font-family: VALORANT Regular;
  font-weight: bold;
  
  `

const Jett = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    margin-left: 7%;
    top: 7%;
    z-index: -1;
    `

const Reyna = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    margin-left: 70%;
    top: 4%;
    z-index: -1;
    `

const Wrapper = styled.div`
    margin-left: -5%;
    font-size: 50px;
    margin-bottom: 25%;  
`

const Wrapper2 = styled.div`
    margin-top: 1%;
    font-family: VALORANT Regular;
    width: 100%;
    background-color: #2d3436;
    z-index: -2;
    position: absolute;
    color: #fa143e;
    height: 130vh;
    padding-top: 0.5%;
`

const NewsHeader = styled.div`
font-size: 72px;
font-family: VALORANT Regular;
color: white;
margin-left: 47%;
letter-spacing: -7.7px;
border-bottom: 1px solid #fa143e;
width: 21%;
height: 4.9vh;
line-height: 70%;
display: flex;
margin-top: -6.9%;
`

const NewsBorder = styled.div`
    height: 110vh;
    width: 70%;
    margin-left: 20%;
    margin-top: 2%;
    border-right 1px solid #fa143e;
    padding-top: 3%;
`

const Disclaimer = styled.div`
    font-size: 10px;
    color: white;
    width: 12.5%;
    display: flex;
    margin-left: 31.7%;
    line-height: 16px;
    text-align: justify;
    height: 14vh;
`

export default Landing
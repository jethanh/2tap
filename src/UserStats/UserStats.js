import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';
const UserStats = ({user, tag}) => {
    let { slug } = useParams();
    let { slug2 } = useParams();

    axios.get(`https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${slug}/${slug2}`, {
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36",
            "Accept-Language": "en-US,en;q=0.9",
            "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
            "Origin": "https://developer.riotgames.com",
            "X-Riot-Token": "RGAPI-365e0a67-013b-46af-bdf4-8257374449b5"
        }
    })
        .then((res) => {
            console.log(res.data)
        })
        .catch((error) => {
            console.error(error)
        })


  return (
    <>
        <div>slug test: {slug} #{slug2}</div>

        <p>Next, pass the user and tag into a GET request to the Riot API proxy I set up on AWS Lambda</p>
        <p>This will return the user's puuid</p>
        <p>run a GET request on the puuid for the user's match history</p>
    </>
  )
}

export default UserStats
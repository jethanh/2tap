import React from 'react'
import {useParams} from 'react-router-dom';

const UserStats = () => {
    let { slug, slug2 } = useParams();

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
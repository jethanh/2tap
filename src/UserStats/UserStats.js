import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom';
import * as valdata from '../data/valdata.json';

const UserStats = ({user, tag}) => {
    let { slug, slug2 } = useParams();

    
    const userData = valdata.players.map(player => {
        if (player.puuid === "fpco9wmv9xvNlZsB16ChQyNkuASzzUJFSITHYzC5mDctuVls_7tGecmkfDk53G3mgVPWvnFUUy95_Q") {
            return player
        } 
        
        return null
    })

    const arr = []
    console.log(userData[0].stats)
    arr.push(userData[0])
    console.log(arr)

     useEffect(() => {
        if (userData[0].teamId === "Red") {
            if(valdata.teams[0].teamId === "Red") {
                return arr[0].won = valdata.teams[0].won
            }
        } else if (userData[0].teamId === "Blue") {
            if(valdata.teams[1].teamId === "Blue"){
                return arr[0].won = valdata.teams[1].won
            }
        } else {
            return null
            }
        })

  return (
    <>
        <div>input passed via URL 'slugs': {slug} #{slug2}</div>
        <div>input passed via Props: {user} #{tag}</div>
        <div>
        {arr.map(player => (
            <div className="user-stats-card">
                <div className="score">
                    <p className="score-header">SCORE</p>
                    <p className="score-stats">{player.stats.score}</p>
                </div>
                <div className="kda">
                    <p className="kda-header">KDA</p>
                    <p className="kda-stats">{player.stats.kills}/{player.stats.deaths}/{player.stats.assists}</p>
                    <p className="kda-ratio">{((player.stats.kills + player.stats.assists) / player.stats.deaths).toFixed(2)}</p>  
                </div>
            </div>
        ))}
        </div>
    </>
  )
}

export default UserStats
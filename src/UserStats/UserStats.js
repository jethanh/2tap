import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom';
import * as valdata from '../data/valdata.json';

const UserStats = ({user, tag}) => {
    let { slug, slug2 } = useParams();

    
    const userData = valdata.players.map(player => { //grab the stats of the specified player, this returns an array with of all players - but only the specified player will have data available.
        if (player.puuid === "fpco9wmv9xvNlZsB16ChQyNkuASzzUJFSITHYzC5mDctuVls_7tGecmkfDk53G3mgVPWvnFUUy95_Q") {
            return player
        } 
        
        return null
    })

    const playerMatchHistory = [] //initialize an empty array to hold player matches
    console.log(userData[0].stats)
    playerMatchHistory.push(userData[0]) //i need to be able to identify the index that contains data (because it will not always be the 0th index), and push that instead. [if index !null]
    console.log(playerMatchHistory, "Player's match history") //sample JSON only provides 1 match, I need to test with multiple matches in history

     useEffect(() => { 
         //this function can be improved. It will need to be able to loop through a players match history, and attach a "won" boolenan to each of them based on match outcome.
         // *this is a first pass, just to give myself something to work with*
        if (userData[0].teamId === "Red") {
            if(valdata.teams[0].teamId === "Red") {
                return playerMatchHistory[0].won = valdata.teams[0].won
            }
        } else if (userData[0].teamId === "Blue") {
            if(valdata.teams[1].teamId === "Blue"){
                return playerMatchHistory[0].won = valdata.teams[1].won
            }
        } else {
            return playerMatchHistory[0].won = null;
        }
        })

  return (
    <>
        <div>input passed via URL 'slugs': {slug} #{slug2}</div>
        <div>input passed via Props: {user} #{tag}</div>
        <div>
        {playerMatchHistory.map(player => (
            <div className="user-stats-card">
                <div className="match-info">
                    <div className="match-header">
                        <span className="match-type">COMPETITIVE</span>
                        <span className="match-map">ASCENT</span>
                    </div>
                </div>
                <div className="stats-container">
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
            </div>
        ))}
        </div>
    </>
  )
}

export default UserStats
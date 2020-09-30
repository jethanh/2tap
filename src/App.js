import React, {useState} from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Landing from './Landing/Landing'
import GlobalStyle from './styles/Global';
import {Route, useRouteMatch} from 'react-router-dom'
import UserStats from './UserStats/UserStats'

function App () {

  const [user, setUser] = useState('');
  const [tag, setTag] = useState('');

  let match = useRouteMatch({
    path: '/stats/:slug/',
    strict: true,
    sensitive: true
  })

    return (
      <>
        <Route exact path="/">
          <div className="column">
            <Navbar/>
            <Landing user={user} setUser={setUser} tag={tag} setTag={setTag}/>
            <GlobalStyle />
          </div>
        </Route>
        <Route path="/stats/:slug">
          <UserStats match={match} user={user} tag={tag}/>
        </Route>
      </>
    )
  }


export default App;

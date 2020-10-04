import React, {useState} from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Landing from './Landing/Landing'
import GlobalStyle from './styles/Global';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import UserStats from './UserStats/UserStats'

function App () {

  const [user, setUser] = useState('');
  const [tag, setTag] = useState('');


    return (
      <Router>
          <Route exact path="/">
            <div className="column">
              <Navbar/>
              <Landing user={user} setUser={setUser} tag={tag} setTag={setTag}/>
              <GlobalStyle />
            </div>
          </Route>
          <Switch>
            <Route path="/stats/:slug/:slug2">
              <UserStats/>
            </Route>
          </Switch>
      </Router>
    )
  }


export default App;

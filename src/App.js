import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Landing from './Landing/Landing'
import GlobalStyle from './styles/Global';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import UserStats from './UserStats/UserStats'

function App () {

    return (
      <>
        <Route exact path="/">
          <div className="column">
            <Navbar/>
            <Landing/>
            <GlobalStyle />
          </div>
        </Route>
        <Route path="/profile">
          <UserStats/>
        </Route>
      </>
    )
  }


export default App;

import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Landing from './Landing/Landing'
import GlobalStyle from './styles/Global';

function App () {

    return (
      <div className="column">
        <Navbar/>
        <Landing/>
        <GlobalStyle />
      </div>
    )
  }


export default App;

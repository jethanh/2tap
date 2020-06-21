import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Landing from './Landing/Landing'
import GlobalStyle from './styles/Global';

function App () {

    return (
      <>
        <Navbar/>
        <Landing/>
        <GlobalStyle />
      </>
    )
  }


export default App;

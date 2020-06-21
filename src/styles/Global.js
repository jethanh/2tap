import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');;

  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    /* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: red; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #2d3436; 
}
  }

  body {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  .nList {
    width: 75%;
    display: flex;
    flex-direction: column;
  }



  
  

`;

export default GlobalStyles;
import React from 'react'
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

import Brand from "./Brand";

const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });


  return (
    <>
      <NavBar style={barAnimation}>
          <Brand  />
      </NavBar>
   </>
  )
}

export default Navbar

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #2d3436;
  z-index: 1;
  font-size: 1.4rem;
`;

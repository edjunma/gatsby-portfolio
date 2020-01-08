import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { animated } from "react-spring"

const StyledHeader = styled(animated.header)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  background: var(--navbar);
  box-shadow: 0 0.5rem 2rem #333;
  transition: background 0.2s ease-out;
  z-index: 100;
`

const Navbar = () => {
  return <StyledHeader></StyledHeader>
}

export default Navbar

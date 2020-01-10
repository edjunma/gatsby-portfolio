import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { animated, useSpring, config } from "react-spring"

import { Contained } from "../layout/elements"

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

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease-out;
  overflow-x: hidden;
`

const Navbar = () => {
  // Navbar Wobbly Animation
  const NavBarSpring = useSpring({
    config: config.wobbly,
    opacity: 1,
    height: isMobile ? "6rem" : "7rem",
    from: {
      opacity: 0,
      height: "0rem",
    },
  })

  return (
    <StyledHeader style={NavBarSpring}>
      <Contained>
        <Wrapper>
          <NavbarLogo />
        </Wrapper>
      </Contained>
    </StyledHeader>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar

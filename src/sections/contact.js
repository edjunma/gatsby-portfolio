import React from "react"
import styled from "styled-components"

const CopyRight = styled.p`
  font-size: 1rem;
  margin: 0;
  font-weight: bold;
  color: #var(--text-highlight);
  text-transform: uppercase;
`

const Contact = () => {}

return (
  <StyledSection id="contact">
    <Wrapper>
      <Heading />
      <Socials />
      <CopyRight>
        Copyright © {new Date().getFullYear()}, Developed with ♥ by EJM
      </CopyRight>
    </Wrapper>
  </StyledSection>
)

export default Contact

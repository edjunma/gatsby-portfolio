import React from "react"
import styled from "styled-components"

import {
  Contained,
  StyledSection,
  Wrapper,
} from "../components/layout/elements"

const SmallWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`

const Title = styled(animated.h1)`
  font-size: 6rem;
  font-weight: 300;
  margin-bottom: 2rem;
  margin: 0;
  line-height: 1.3;
  color: var(--text-highlight);
  transition: color 0.2s ease-out;
`


const Home = () => {
  return (
    <StyledSection>
      <Contained>
        <Wrapper>
          <SmallWrapper>
            <Title></Title>
          </SmallWrapper>
        </Wrapper>
      </Contained>
    </StyledSection>
  )
}

export default Home

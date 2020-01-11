import React from "react"
import styled from "styled-components"
import { useSpring, animated, config } from "react-spring"

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

const SubTitle = styled(animated.h2)`
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  margin-bottom: 7rem;
  color: var(--text);
  transition: color 0.2s ease-out;
`

const Home = () => {
  // Title Animation
  const TitleSpring = useSpring({
    config: config.wobbly,
    delay: 200,
    opacity: 1,
    transform: "translateX(0px)",
    from: { opacity: 0, transform: "translateX(40px)" },
  })

  // Subtitle Animation
  const SubTitleSpring = useSpring({
    config: config.stiff,
    delay: 300,
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(40px)" },
  })

  // Button Animation
  const ButtonSpring = useSpring({
    config: config.stiff,
    delay: 600,
    opacity: 1,
    from: { opacity: 0 },
  })

  return (
    <StyledSection>
      <Contained>
        <Wrapper>
          <SmallWrapper>
            <Title style={TitleSpring}>
              Hello{" "}
              <span role="img" aria-label="Peace sign">
                ✌🏼
              </span>
              ,
              <br />
              I'm <span>Edmond</span>
            </Title>
            <SubTitle style={SubTitleSpring}>A Front-End Developer</SubTitle>
            <Link to="about-me">
              <Button style={ButtonSpring}>About Me</Button>
            </Link>
          </SmallWrapper>
        </Wrapper>
      </Contained>
    </StyledSection>
  )
}

export default Home

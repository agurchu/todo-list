import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Container>
      <Heading>About</Heading>
      <Description>
        My first Todo List App using React Js. Third parties involved:
        style-components, react-router(-dom)
      </Description>
    </Container>
  );
}

export default About;

const Container = styled.div`
  text-align: center;
  width: calc(100% - 50px);
  max-width: 800px;
`;
const Heading = styled.h1``;
const Description = styled.p`
  text-align: center;
`;

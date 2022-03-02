import React from "react";
import styled from "styled-components";

import Intro from "./intro/Intro";
import Presentation from "./presentation/Presentation";

const Home = () => {
  return (
    <Container>
      <Intro />
      <Presentation />
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.abyss};
`;

export default Home;

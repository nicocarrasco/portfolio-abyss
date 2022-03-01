import React from "react";
import styled from "styled-components";

import Intro from "./intro/Intro";

const Home = () => {
  return (
    <Container>
      <Intro />
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.abyss};
`;

export default Home;

import React from "react";
import styled from "styled-components";

const Home = () => {
  return <Container></Container>;
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.sky};
`;

export default Home;

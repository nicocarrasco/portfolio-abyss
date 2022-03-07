import React from "react";
import styled from "styled-components";

import Intro from "./intro/Intro";
import Presentation from "./presentation/Presentation";
import Competencies from "./competencies/Competencies";

import secondFloor from "../../assets/abyss_second_floor.svg";

const Home = () => {
  return (
    <>
      <FirstFloor>
        <Intro />
        <Presentation />
        <SecondFloorSeparation />
      </FirstFloor>
      <SecondFloor>
        <Competencies />
      </SecondFloor>
    </>
  );
};

const FirstFloor = styled.div`
  background-color: ${({ theme }) => theme.colors.abyss1stFloor};
  overflow-x: hidden;
`;

const SecondFloorSeparation = styled.div`
  aspect-ratio: 900 / 250;
  width: 101%;
  background-repeat: repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${secondFloor});
`;

const SecondFloor = styled.div`
  background-color: ${({ theme }) => theme.colors.abyss2ndFloor};
`;

export default Home;

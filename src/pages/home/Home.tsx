import React from "react";
import styled from "styled-components";

import Intro from "./intro/Intro";
import Presentation from "./presentation/Presentation";
import Competencies from "./competencies/Competencies";
import Projects from "./projects/Projects";

import secondFloor from "../../assets/abyss_second_floor.svg";
import thirdFloor from "../../assets/abyss_third_floor.svg";
import Footer from "./footer/Footer";

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
        <ThirdFloorSeparation />
      </SecondFloor>
      <ThirdFloor>
        <Projects />
      </ThirdFloor>
      <Separator />
      <Footer />
    </>
  );
};

const FirstFloor = styled.div`
  background-color: ${({ theme }) => theme.colors.abyss1stFloor};
  overflow-x: hidden;
`;

const SecondFloorSeparation = styled.div`
  aspect-ratio: 900 / 180;
  width: 101%;
  background-repeat: repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${secondFloor});
`;

const SecondFloor = styled.div`
  background-color: ${({ theme }) => theme.colors.abyss2ndFloor};
  overflow-x: hidden;
`;

const ThirdFloorSeparation = styled.div`
  aspect-ratio: 900 / 180;
  width: 101%;
  background-repeat: repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${thirdFloor});
`;

const ThirdFloor = styled.div`
  background-color: ${({ theme }) => theme.colors.abyss3rdFloor};
  overflow-x: hidden;
`;

const Separator = styled.div`
  filter: ${({ theme }) => `drop-shadow(0 0 8px ${theme.colors.violet})`};
  height: 5px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.violet};
`;

export default Home;

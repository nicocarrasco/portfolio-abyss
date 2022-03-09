import React, { useState } from "react";
import styled from "styled-components";

import Intro from "./intro/Intro";
import Presentation from "./presentation/Presentation";
import Competencies from "./competencies/Competencies";
import Projects from "./projects/Projects";

import secondFloor from "../../assets/abyss_second_floor.svg";
import thirdFloor from "../../assets/abyss_third_floor.svg";
import Footer from "./footer/Footer";
import Loader from "../../components/Loader";

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <LoaderContainer>
          <Loader size={15} />
        </LoaderContainer>
      )}
      <HomeContainer loaded={loaded}>
        <FirstFloor>
          <Intro setLoaded={setLoaded} />
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
      </HomeContainer>
    </>
  );
};

const HomeContainer = styled.div<{ loaded: boolean }>`
  visibility: ${({ loaded }) => (loaded ? "visible" : "hidden")};
`;

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

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

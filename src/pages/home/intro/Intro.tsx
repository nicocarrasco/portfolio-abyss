import React from "react";
import styled from "styled-components";

import waves from "../../../assets/waves.svg";

type Props = {
  setLoaded: (loaded: boolean) => void;
};

const Intro = ({ setLoaded }: Props) => {
  // Show page only when Waves Svg is loaded
  const image = document.createElement("img");
  image.src = waves;
  image.onload = () => {
    setLoaded(true);
  };

  return (
    <Container>
      <Wrapper>
        <Text>
          Bienvenue ! Prenez une grande inspiration et venez explorez les
          profondeurs. Peut-être atteindrez-vous le fond de l’abysse...
        </Text>
        <Waves />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.sky};
`;

const Text = styled.h2`
  margin-top: 90px;
  max-width: 48ch;
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media only screen and (max-device-width: 850px) {
    max-width: 35ch;
  }

  @media only screen and (max-device-width: 650px) {
    margin-top: 70px;
    font-size: 20px;
    max-width: 30ch;
  }

  @media only screen and (max-device-width: 450px) {
    margin-top: 40px;
    font-size: 18px;
    max-width: 20ch;
  }
`;

const Waves = styled.div`
  aspect-ratio: 960 / 300;
  width: 101%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${waves});
`;

export default Intro;

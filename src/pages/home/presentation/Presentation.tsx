import React from "react";
import styled from "styled-components";

import { ReactComponent as Blob } from "../../../assets/blob-pres.svg";
import photo from "../../../assets/NicolasCarrasco.png";
import cv from "../../../assets/CV.pdf";

const Presentation = () => {
  return (
    <Container>
      <InfoWrapper>
        <PhotoItemWrapper>
          <PhotoWrapper>
            <Photo src={photo} />
          </PhotoWrapper>
          <BubbleWrapper>
            <Bubble width={20} marginLeft={6} animationDelay={0} />
            <Bubble width={15} marginLeft={32} animationDelay={0.5} />
            <Bubble width={24} marginLeft={0} animationDelay={1.3} />
          </BubbleWrapper>
        </PhotoItemWrapper>
        <PresWrapper>
          <Blob />
          <PresText>
            Développeur front-end en 4ème année de l’école d’informatique
            Epitech
          </PresText>
        </PresWrapper>
      </InfoWrapper>
      <CvWrapper>
        <CvFish href={cv} target="_blank">
          <CvText>Mon Cv</CvText>
        </CvFish>
      </CvWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 200px;
  padding: 0 13vw;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 80px;

  @media only screen and (max-device-width: 950px) {
    flex-direction: column;
  }
`;

const PhotoItemWrapper = styled.div`
  display: flex;
  margin-right: 170px;
  width: 200px;
  height: 200px;
  position: relative;

  @media only screen and (max-device-width: 950px) {
    margin-right: 0;
    margin-bottom: 80px;
  }
`;

const PhotoWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, #0000, #0000),
    linear-gradient(
      90deg,
      rgba(4, 129, 177, 1) 0%,
      rgba(0, 181, 217, 1) 62%,
      rgba(59, 234, 245, 1) 100%
    );
  border-radius: 0 0 50% 50%;
  overflow: hidden;
  border-radius: 50%;
  position: relative;
`;

const Photo = styled.img`
  position: absolute;
  width: 210px;
  bottom: 0;
`;

const BubbleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -10px;
  right: -50px;
  height: 100%;
`;

const Bubble = styled.div<{
  width: number;
  marginLeft: number;
  animationDelay: number;
}>`
  width: ${({ width }) => `${width}px`};
  height: ${({ width }) => `${width}px`};
  margin-left: ${({ marginLeft }) => `${marginLeft}px`};
  border-radius: 50%;
  border: ${({ theme }) => `${theme.colors.textPrimary} 1px solid`};
  animation: bounceBubble 3.5s infinite;
  animation-delay: ${({ animationDelay }) => `${animationDelay}s`};

  @keyframes bounceBubble {
    0%,
    50%,
    100% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-5px);
    }
    75% {
      transform: translateY(-5px);
    }
  }
`;

const PresWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

const PresText = styled.p`
  position: absolute;
  right: 30px;
  top: 73px;
  font-size: 18px;
  font-weight: 500;
  width: 250px;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media only screen and (max-device-width: 390px) {
    right: 0;
    top: 78px;
    font-size: 16px;
    width: 220px;
  }
`;

const CvWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 57px;
`;

const CvFish = styled.a`
  cursor: pointer;
  position: relative;
  border: none;
  width: 188px;
  height: 62px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: bounce 2s infinite;
  text-decoration: none;

  background-color: ${({ theme }) => theme.colors.coral};

  &:hover {
    background-color: ${({ theme }) => theme.colors.coralDarken};

    &:before,
    &:after {
      background-color: ${({ theme }) => theme.colors.coralDarken};
    }
  }

  &:before,
  &:after {
    content: "";
    width: 67px;
    height: 28px;
    background-color: ${({ theme }) => theme.colors.coral};
    position: absolute;
    border-radius: 50%;
    left: -57px;
  }

  &:before {
    top: 5px;
    transform: rotate(14deg);
  }

  &:after {
    bottom: 5px;
    transform: rotate(-14deg);
  }

  @keyframes bounce {
    0%,
    50%,
    100% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-2px);
    }
    75% {
      transform: translateY(-4px);
    }
  }
`;

const CvText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export default Presentation;

import React from "react";
import styled from "styled-components";

import { ReactComponent as Blob } from "../../../assets/blob-pres.svg";

const Presentation = () => {
  return (
    <Container>
      <PhotoWrapper>
        <PhotoBase>
          <BubbleWrapper>
            <Bubble width={20} marginLeft={6} animationDelay={0} />
            <Bubble width={15} marginLeft={32} animationDelay={0.5} />
            <Bubble width={24} marginLeft={0} animationDelay={1} />
          </BubbleWrapper>
        </PhotoBase>
      </PhotoWrapper>
      <PresWrapper>
        <Blob />
        <PresText>
          Développeur front-end en 4ème année de l’école d’informatique Epitech
        </PresText>
      </PresWrapper>
      <CvWrapper>
        <CvFish>
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

const PhotoWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const PhotoBase = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    rgba(4, 129, 177, 1) 0%,
    rgba(0, 181, 217, 1) 62%,
    rgba(59, 234, 245, 1) 100%
  );
  position: relative;
`;

const BubbleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: -60px;
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
  animation: bounceBubble 3s infinite;
  animation-delay: ${({ animationDelay }) => `${animationDelay}s`};

  @keyframes bounceBubble {
    0%,
    50%,
    100% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-2px);
    }
    75% {
      transform: translateY(-2px);
    }
  }
`;

const PresWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  margin-bottom: 40px;
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

import React from "react";
import styled from "styled-components";

type Props = {
  size?: number;
};

const Loader = ({ size = 6 }: Props): React.ReactElement => {
  const convertPxToRem = 0.0625;

  return (
    <Container>
      <Dots size={size * convertPxToRem} position={0} />
      <Dots size={size * convertPxToRem} position={1} />
      <Dots size={size * convertPxToRem} position={2} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Dots = styled.span<{
  size: number;
  position: 0 | 1 | 2;
}>`
  font-size: ${({ size }) => size}rem;
  height: 1em;
  width: 1em;
  border-radius: 1em;
  background-color: ${({ theme }) => theme.colors.coral};
  margin-right: ${({ position, size }) => (position !== 2 ? size / 1.3 : 0)}rem;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-name: loading;
  animation-timing-function: ease-in-out;
  animation-delay: ${({ position }) => position * 0.16}s;

  @keyframes loading {
    0%,
    100% {
      opacity: 0.4;
    }

    50% {
      transform: translateY(0.4em);
      opacity: 1;
    }
  }
`;

export default Loader;

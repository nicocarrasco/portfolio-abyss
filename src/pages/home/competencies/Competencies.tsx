import React from "react";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";

import react from "../../../assets/react.png";
import angular from "../../../assets/angular.png";
import python from "../../../assets/python.png";
import c from "../../../assets/c.png";
import ionic from "../../../assets/ionic.png";
import wordpress from "../../../assets/wordpress.png";
import node from "../../../assets/node.png";
import cpp from "../../../assets/cpp.png";

type Competencie = {
  name: string;
  url: string;
};

const competencies: Competencie[] = [
  { name: "React JS/Native", url: react },
  { name: "Angular 5", url: angular },
  { name: "Python", url: python },
  { name: "C", url: c },
  { name: "Ionic", url: ionic },
  { name: "Wordpress", url: wordpress },
  { name: "Node Js", url: node },
  { name: "C++", url: cpp },
];

const Competencies = () => {
  return (
    <Container>
      <CompetenciesWrapper>
        {competencies.map((lineCompetencie) => (
          <CompetencieWrapper key={lineCompetencie.name + lineCompetencie.url}>
            <StyledCompetencie
              src={lineCompetencie.url}
              alt={lineCompetencie.url}
              key={lineCompetencie.url}
              data-tip={lineCompetencie.name}
              data-for={lineCompetencie.name}
            />
            <StyledTooltip id={lineCompetencie.name} effect="solid" />
          </CompetencieWrapper>
        ))}
      </CompetenciesWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CompetenciesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 700px;
`;

const CompetencieWrapper = styled.div`
  display: flex;
  height: 80px;
  width: 80px;
  margin: 40px 40px;
`;

const StyledCompetencie = styled.img`
  max-height: 100%;
  transition: filter 0.15s ease-in-out;
  filter: opacity(0.7) grayscale(1)
    drop-shadow(5px 5px 5px rgba(255, 255, 255, 0.2));

  &:hover {
    filter: opacity(1) grayscale(0)
      drop-shadow(5px 5px 5px rgba(255, 255, 255, 0.2));
  }
`;

const StyledTooltip = styled(ReactTooltip)`
  background-color: ${({ theme }) =>
    `${theme.colors.abyss1stFloor} !important`};

  transition: opacity 0.5s ease-in-out !important;

  &:after {
    border-top-color: ${({ theme }) =>
      `${theme.colors.abyss1stFloor} !important`};
  }
`;

export default Competencies;

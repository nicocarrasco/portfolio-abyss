import React from "react";
import { Trans } from "react-i18next";
import styled from "styled-components";

import { ReactComponent as BlobLeft } from "../../../assets/blob-project1.svg";
import { ReactComponent as BlobRight } from "../../../assets/blob-project2.svg";
import i18n from "../../../i18n";

type Project = {
  title: string;
  date: string;
  description: string;
  links?: string[];
};

const projects: Project[] = i18n.t("projects", {
  returnObjects: true,
  ns: "projects",
});

const Projects = () => {
  const returnLinks = (
    links: string[] | undefined,
    position: "left" | "right"
  ) => {
    if (links === undefined) {
      return {};
    }

    const transComponents: { [key: string]: any } = {};

    for (let idx = 0; idx < links.length; idx += 1) {
      transComponents[`link${idx}`] = (
        <Link
          position={position}
          href={links[idx]}
          target="_blank"
          rel="noopener noreferrer"
        />
      );
    }

    return transComponents;
  };

  return (
    <Container>
      {projects.map((project, idx) => {
        const position = idx % 2 === 0 ? "left" : "right";
        return (
          <ProjectWrapper
            position={position}
            key={project.title + project.date}
          >
            <ImageWrapper>
              {position === "left" ? (
                <StyledBlobLeft
                  width={350}
                  height={350}
                  preserveAspectRatio="none"
                />
              ) : (
                <StyledBlobRight
                  width={350}
                  height={350}
                  preserveAspectRatio="none"
                />
              )}
            </ImageWrapper>
            <DescriptionWrapper>
              <Title position={position}>{project.title}</Title>
              <ProjectDate>{project.date}</ProjectDate>
              <Description>
                <Trans
                  i18nKey={`projects.${idx}.description`}
                  ns="projects"
                  components={returnLinks(project.links, position)}
                />
              </Description>
              {/* {project.link && (
                <Link
                  position={position}
                  href={project.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.link.name}
                </Link>
              )} */}
            </DescriptionWrapper>
          </ProjectWrapper>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 50px;
`;

const ProjectWrapper = styled.div<{ position: "left" | "right" }>`
  display: flex;
  width: 100%;
  flex-direction: ${({ position }) =>
    position === "left" ? "row" : "row-reverse"};
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 50px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  max-width: 450px;
`;

const StyledBlobLeft = styled(BlobLeft)`
  animation: neonBlobBlue 3s infinite;
  animation-timing-function: ease-in-out;

  @keyframes neonBlobBlue {
    0% {
      filter: ${({ theme }) => `drop-shadow(0 0 8px ${theme.colors.wave})`};
    }

    50% {
      filter: ${({ theme }) => `drop-shadow(0 0 13px ${theme.colors.wave})`};
    }

    100% {
      filter: ${({ theme }) => `drop-shadow(0 0 8px ${theme.colors.wave})`};
    }
  }
`;

const StyledBlobRight = styled(BlobRight)`
  animation: neonBlobViolet 3s infinite;
  animation-timing-function: ease-in-out;
  transform: rotateY(-180deg);

  @keyframes neonBlobViolet {
    0% {
      filter: ${({ theme }) => `drop-shadow(0 0 8px ${theme.colors.violet})`};
    }

    50% {
      filter: ${({ theme }) => `drop-shadow(0 0 13px ${theme.colors.violet})`};
    }

    100% {
      filter: ${({ theme }) => `drop-shadow(0 0 8px ${theme.colors.violet})`};
    }
  }
`;

const DescriptionWrapper = styled.div`
  margin: 0 30px;
  max-width: 55ch;
  line-height: 1.5;
`;

const Title = styled.h2<{ position: "left" | "right" }>`
  margin-bottom: 3px;
  font-size: 32px;
  color: ${({ position, theme }) =>
    position === "left" ? theme.colors.wave : theme.colors.violet};
  animation: ${({ position }) =>
    position === "left"
      ? "neonTextBlue 3s infinite"
      : "neonTextViolet 3s infinite"};
  animation-timing-function: ease-in-out;

  @keyframes neonTextBlue {
    0% {
      text-shadow: ${({ theme }) =>
        `0 0 2px hsl(0 0% 100% / 0.3), 0 0 7px ${theme.colors.wave}`};
    }

    50% {
      text-shadow: ${({ theme }) =>
        `0 0 4px hsl(0 0% 100% / 0.3), 0 0 18px ${theme.colors.wave}`};
    }

    100% {
      text-shadow: ${({ theme }) =>
        `0 0 2px hsl(0 0% 100% / 0.3), 0 0 7px ${theme.colors.wave}`};
    }
  }

  @keyframes neonTextViolet {
    0% {
      text-shadow: ${({ theme }) =>
        `0 0 2px hsl(0 0% 100% / 0.3), 0 0 7px ${theme.colors.violet}`};
    }

    50% {
      text-shadow: ${({ theme }) =>
        `0 0 4px hsl(0 0% 100% / 0.3), 0 0 15px ${theme.colors.violet}`};
    }

    100% {
      text-shadow: ${({ theme }) =>
        `0 0 2px hsl(0 0% 100% / 0.3), 0 0 7px ${theme.colors.violet}`};
    }
  }
`;

const ProjectDate = styled.p`
  margin-top: 0;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  white-space: pre-line;
`;

const Link = styled.a<{ position: "left" | "right" }>`
  color: ${({ position, theme }) =>
    position === "left" ? theme.colors.wave : theme.colors.violet};
  text-decoration: none;
`;

export default Projects;

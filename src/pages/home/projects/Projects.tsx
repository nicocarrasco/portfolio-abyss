import React from "react";
import styled from "styled-components";

import { ReactComponent as BlobLeft } from "../../../assets/blob-project1.svg";
import { ReactComponent as BlobRight } from "../../../assets/blob-project2.svg";

type Project = {
  title: string;
  date: string;
  description: string;
};

const projects: Project[] = [
  {
    title: "Imparato",
    date: "Novembre 2020 - Juillet 2021",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.\n\nFacere sit eligendi amet mollitia fuga nulla nam? Iure, sed. Qui maxime labore mollitia molestiae porro nemo minima impedit reiciendis incidunt consequuntur, recusandae, obcaecati, quasi modi facilis facere tempora. Alias doloremque dolore commodi neque totam in officiis ad nostrum sed blanditiis laborum quae, autem dolorem praesentium quas necessitatibus assumenda corporis? Eaque corrupti recusandae eligendi, illum totam rem laudantium minima laboriosam maiores, quaerat nam, nemo explicabo incidunt. Omnis cumque maxime perferendis dolorum inventore illo temporibus molestias totam? Incidunt quam voluptatibus rem architecto enim.",
  },

  {
    title: "Imparato",
    date: "Novembre 2020z - Juillet 2021",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.\n\nFacere sit eligendi amet mollitia fuga nulla nam? Iure, sed. Qui maxime labore mollitia molestiae porro nemo minima impedit reiciendis incidunt consequuntur, recusandae, obcaecati, quasi modi facilis facere tempora. Alias doloremque dolore commodi neque totam in officiis ad nostrum sed blanditiis laborum quae, autem dolorem praesentium quas necessitatibus assumenda corporis? Eaque corrupti recusandae eligendi, illum totam rem laudantium minima laboriosam maiores, quaerat nam, nemo explicabo incidunt. Omnis cumque maxime perferendis dolorum inventore illo temporibus molestias totam? Incidunt quam voluptatibus rem architecto enim.",
  },

  {
    title: "Futbak",
    date: "Novembre 2020 - Juillet 2021",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.\n\nFacere sit eligendi amet mollitia fuga nulla nam? Iure, sed. Qui maxime labore mollitia molestiae porro nemo minima impedit reiciendis incidunt consequuntur, recusandae, obcaecati, quasi modi facilis facere tempora. Alias doloremque dolore commodi neque totam in officiis ad nostrum sed blanditiis laborum quae, autem dolorem praesentium quas necessitatibus assumenda corporis? Eaque corrupti recusandae eligendi, illum totam rem laudantium minima laboriosam maiores, quaerat nam, nemo explicabo incidunt. Omnis cumque maxime perferendis dolorum inventore illo temporibus molestias totam? Incidunt quam voluptatibus rem architecto enim.",
  },

  {
    title: "Imparato",
    date: "Novembre 2020s - Juillet 2021",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.\n\nFacere sit eligendi amet mollitia fuga nulla nam? Iure, sed. Qui maxime labore mollitia molestiae porro nemo minima impedit reiciendis incidunt consequuntur, recusandae, obcaecati, quasi modi facilis facere tempora. Alias doloremque dolore commodi neque totam in officiis ad nostrum sed blanditiis laborum quae, autem dolorem praesentium quas necessitatibus assumenda corporis? Eaque corrupti recusandae eligendi, illum totam rem laudantium minima laboriosam maiores, quaerat nam, nemo explicabo incidunt. Omnis cumque maxime perferendis dolorum inventore illo temporibus molestias totam? Incidunt quam voluptatibus rem architecto enim.",
  },
];

const Projects = () => {
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
              <Description>{project.description}</Description>
            </DescriptionWrapper>
          </ProjectWrapper>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 100px;
`;

const ProjectWrapper = styled.div<{ position: "left" | "right" }>`
  display: flex;
  width: 100%;
  flex-direction: ${({ position }) =>
    position === "left" ? "row" : "row-reverse"};
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
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

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  white-space: pre-line;
`;

export default Projects;

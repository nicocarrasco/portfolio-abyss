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
    title: "Machine learning (apprentissage)",
    date: "Janvier 2022 - Mars 2022",
    description:
      "Apprentissage et création d'algorithmes de ML en Python uniquement avec les libraires standards ainsi que pandas et numpy.\n\nLes algorithmes que j'ai reproduit sont : Naives Bayes Classifier, Decision Tree Classifier et un Neural Network. Ces algorithmes ont été réalisé en tant que projet d'apprentissage lors de ma 4ème année à Epitech.",
  },

  {
    title: "Imparato (stage)",
    date: "Novembre 2020 - Juillet 2021",
    description:
      "Stage de 5 mois en alternance puis de 3 mois en temps plein réalisé chez Imparato, application visant à aider les comédiens à répéter leurs textes.\n\nOutre la correction de bug et l'amélioration de l'UI/UX, j'ai participé à la création de nouvelles fonctionnalités sur l'app web et mobile comme par exemple l'ajout de notes et de marque-pages sur les textes ou encore l'implémentation des bruitages sur l'application.\n\nLes technos utilisées étaient React Js et React Native.",
  },

  {
    title: "Area (apprentissage)",
    date: "Janvier 2021 - Mars 2021",
    description:
      "Projet réalisé à 6 étudiants pour reproduire le fonctionnement d'un site comme Zapier: permettre à un utilisateur de connecter différents services afin d'automatiser des actions entre elles (par exemple, lorsque l'utilisateur crée une nouvelle PR sur Github, cela crée une nouvelle tâche au nom de la PR sur son Trello).\n\n J'ai travaillé sur l'interface web ainsi que sur le serveur (authentification et webhooks).\n\nLes technos que j'ai utilisé étaient React Js et Node Js.",
  },

  {
    title: "Arcade (apprentissage)",
    date: "Mars 2020 - Avril 2020",
    description:
      'J\'ai développé avec 2 autres étudiants une plateforme de jeu qui peut changer de style graphique en cours de jeu. Les jeux disponibles sont "Pacman" et "Snake". Les libraries graphiques utilisées sont la SFML, la SDL et la Ncurses.\n\nCe projet a été réalisé en Cpp au cours de la 2ème année à Epitech.',
  },

  {
    title: "Sportbak (stage)",
    date: "Septembre 2019 - Décembre 2019",
    description:
      "Stage à temps plein réalisé chez Sportbak, application permettant aux joueurs de footsalle de récolter et visualiser leurs stats individuelles et collectives sur un match.\n\nAu cours de mon stage chez Sportbak j'ai travaillé sur la création de ligues et des tournois de footsalle sur l'application ainsi que la visualisation des statistiques des joueurs lors de ces ligues et tournois.\n\nLes technos utilisées étaient Ionic et Angular5.",
  },

  {
    title: "Hexacoffre (stage)",
    date: "Juillet 2019",
    description:
      "Stage à temps plein réalisé chez Hexacoffre, entreprise de coffre-fort.\n\nLors de ce stage j'ai réalisé un site vitrine pour Hexacoffre spécialement conçu pour présenter ses services à la région Parisienne.\n\nLa technologie utilisée était Wordpress.",
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
              <ProjectDate>{project.date}</ProjectDate>
              <Description>{project.description}</Description>
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

export default Projects;

import React from "react";
import styled from "styled-components";

import linkedin from "../../../assets/linkedin.png";
import github from "../../../assets/github.png";
import gmail from "../../../assets/gmail.png";

const Footer = () => {
  return (
    <Container>
      <ContactWrapper>
        <ContactLink
          href="https://fr.linkedin.com/in/nicolas-carrasco-348ab718a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactImg src={linkedin} alt="linkedin" />
        </ContactLink>
        <ContactLink
          href="https://github.com/nicocarrasco"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactImg src={github} alt="github" />
        </ContactLink>
        <ContactLink
          href="mailto:nicolas.carrasco@epitech.eu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactImg src={gmail} alt="gmail" />
        </ContactLink>
      </ContactWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.void};
  flex-direction: column;
`;

const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 25px 0 25px;
`;

const ContactLink = styled.a`
  display: flex;
  margin: 0 7px;
`;

const ContactImg = styled.img`
  height: 35px;
  width: 35px;
  transition: all 0.15s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export default Footer;

import React from "react";
import styled from "styled-components";

import frenchFlag from "../assets/france.png";
import englandFlag from "../assets/england.png";
import i18n from "../i18n";

const TranslateSelector = () => {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Container>
      <FlagButton>
        <FlagImg
          src={frenchFlag}
          alt="French flag"
          onClick={() => changeLanguage("fr")}
        />
      </FlagButton>
      <Separator />
      <FlagButton>
        <FlagImg
          src={englandFlag}
          alt="England flag"
          onClick={() => changeLanguage("en")}
        />
      </FlagButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 30px;
  right: 30px;
`;

const FlagButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  width: 25px;
  height: 25px;
  display: flex;
  padding: 0;
`;

const FlagImg = styled.img``;

const Separator = styled.div`
  width: 1px;
  height: 23px;
  border-left: ${({ theme }) => `1px solid ${theme.colors.textPrimary}`};
  margin: 0 10px;
`;

export default TranslateSelector;

"use client";

import styled from "styled-components";
import { H1, H2 } from "../styled-components/Types";

export const Landing = () => {
  return (
    <StHeader>
      <H1>Retro Grote Prijs El Toro</H1>
      <H2>4 September 2022</H2>
      <StIntroText>
        Een koers waar winnen ondergeschikt is aan vertier, waar gestart wordt
        in retro outfit en waar we van klikpedalen en dikke zanten niet moeten
        weten.
      </StIntroText>
      <StLink data-scroll href="#inschrijvingen">
        Inschrijven
      </StLink>
    </StHeader>
  );
};

const StHeader = styled.header`
  height: 100vh;
  background-image: url("/retroBG.jpg");
  background-size: cover;
  background-position: center;
  text-align: center;
  color: #fff4da;
`;

const StIntroText = styled.div`
  padding: 30px;
  font-weight: 700;
  max-width: 500px;
  margin: auto;
  font-size: 1.2em;
`;

const StLink = styled.a`
  display: inline-block;
  padding: 10px;
  margin: auto;
  font-size: 1.5em;
  color: #fff4da;
  border: #fff4da 2px solid;
  width: 200px;
`;

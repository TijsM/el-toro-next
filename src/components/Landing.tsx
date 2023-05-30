"use client";

import styled from "styled-components";
import { H1 } from "../styled-components/Types";

export const Landing = () => {
  return (
    <StHeader>
      <H1>Retro Grote Prijs El Toro</H1>
      <h2>4 September 2022</h2>
      <div>
        Een koers waar winnen ondergeschikt is aan vertier, waar gestart wordt
        in retro outfit en waar we van klikpedalen en dikke zanten niet moeten
        weten.
      </div>
      <a data-scroll href="#inschrijvingen">
        Inschrijven
      </a>
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

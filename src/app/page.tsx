"use client";

import { Landing } from "../components/Landing";
import { Calendar } from "../components/calendar";
import { Parcours } from "../components/Parcours";
import { SignUps } from "../components/sign-up";
import { Rules } from "../components/Rules";
import styled from "styled-components";
import { breakpoints } from "../constants/breakpoints";

export default function Home() {
  return (
    <StMain>
      <Landing
        title={"Retro Grote Prijs El Toro"}
        subtitle={"3 September 2023"}
        body={
          "Een koers waar winnen ondergeschikt is aan vertier, waar gestart wordt in retro outfit en waar we van klikpedalen en dikke zanten niet moeten weten."
        }
        cta={{
          text: "Inschrijven",
          onClick: () => console.log("todo"),
        }}
      />
      <StContent>
        <StSectionSpacing />
        <Calendar />
        <StSectionSpacing />
        <Parcours />
        <StSectionSpacing />
        <SignUps />
        <StSectionSpacing />
        <Rules />
        <StSectionSpacing />
      </StContent>
    </StMain>
  );
}

const StMain = styled.main`
  max-width: 100%;
  overflow-x: hidden;
`;

const StContent = styled.div`
  padding: 0 400px;

  @media ${breakpoints.big} {
    /* background-color: green; */
    padding: 0 124px;
  }
  @media ${breakpoints.medium} {
    /* background-color: red; */
    padding: 0 64px;
  }
  @media ${breakpoints.small} {
    /* background-color: blue; */
    padding: 0 16px;
  }
`;

const StSectionSpacing = styled.div`
  height: 100px;
`;

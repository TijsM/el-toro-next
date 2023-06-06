"use client";

import { Landing } from "../components/Landing";
import { Calendar } from "../components/Calendar";
import { Parcours } from "../components/Parcours";
import { SignUps } from "../components/SignUps";
import { Rules } from "../components/Rules";
import styled from "styled-components";
import { breakpoints } from "../constants/breakpoints";

export default function Home() {
  return (
    <>
      <StMain>
        <Landing />
        <StContent>
          <Calendar />
          <Parcours />
          <SignUps />
          <Rules />
        </StContent>
      </StMain>
    </>
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
    padding: 0 8px;
  }
`;

"use client";

import { Landing } from "../components/Landing";
import { Calendar } from "../components/Calendar";
import { Parcours } from "../components/Parcours";
import { SignUps } from "../components/SignUps";
import { Rules } from "../components/Rules";
import styled from "styled-components";

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
  margin: 0 400px;

  @media screen and (max-width: 1600px) {
    background-color: green;
    margin: 0 124px;
  }
  @media screen and (max-width: 1200px) {
    background-color: red;

    margin: 0 64px;
  }

  @media screen and (max-width: 700px) {
    background-color: blue;
    margin: 0 24px;
  }
`;

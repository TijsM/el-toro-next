"use client";

import { Landing } from "../components/Landing";
import { Calendar } from "../components/calendar";
import { Parcours } from "../components/Parcours";
import { SignUps } from "../components/sign-up";
import { Rules } from "../components/Rules";
import styled from "styled-components";
import { breakpoints } from "../constants/breakpoints";
import { useMounted } from "@/hooks/useMounted";
import FadeInOnScroll from "@/components/FadeInOnScroll";

export default function Home() {
  const mounted = useMounted();
  let element: HTMLElement | null = null;

  if (mounted) {
    element = document?.getElementById?.("sign-up");
  }

  return (
    <StMain>
      <Landing
        title={"Retro Grote Prijs El Toro"}
        subtitle={"7 September 2025"}
        body={
          "Een koers waar winnen ondergeschikt is aan vertier, waar gestart wordt in retro outfit en waar we van klikpedalen en dikke zanten niet moeten weten."
        }
        cta={{
          text: "Inschrijven voor 11e editie",
          onClick: () => element?.scrollIntoView({ behavior: "smooth" }),
        }}
      />
      <StContent>
        <StSectionSpacing />

        <FadeInOnScroll>
          <Calendar />
        </FadeInOnScroll>

        <StSectionSpacing />

        <FadeInOnScroll>
          <Parcours />
        </FadeInOnScroll>

        <StSectionSpacing />

        <FadeInOnScroll>
          <SignUps />
        </FadeInOnScroll>

        <StSectionSpacing />

        <FadeInOnScroll>
          <Rules />
        </FadeInOnScroll>

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

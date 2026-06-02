"use client";

import Image from "next/image";
import styled from "styled-components";
import { H2 } from "../styled-components/Types";
import { breakpoints } from "../constants/breakpoints";

export const Posters = () => {
  return (
    <StSection>
      <H2 className="textYellow">Affiches</H2>
      <StGrid>
        <StPoster>
          <Image
            src="/poster-algemeen.jpg"
            alt="Affiche Retro Grote Prijs El Toro"
            width={1200}
            height={1678}
            sizes="(max-width: 768px) 90vw, 420px"
          />
        </StPoster>
        <StPoster>
          <Image
            src="/poster-programma.jpg"
            alt="Programma Retro Grote Prijs El Toro"
            width={1200}
            height={1697}
            sizes="(max-width: 768px) 90vw, 420px"
          />
        </StPoster>
      </StGrid>
    </StSection>
  );
};

const StSection = styled.section``;

const StGrid = styled.div`
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 420px));
  gap: 32px;
  justify-content: center;

  @media ${breakpoints.medium} {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const StPoster = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: ${({ theme }) => theme.borderRadius.default};
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  }
`;

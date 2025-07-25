"use client";

import styled from "styled-components";
import { H2, H3 } from "../../styled-components/Types";
import { CalendarItem } from "./CalendarItem";
import { breakpoints } from "../../constants/breakpoints";

export const Calendar = () => {
  return (
    <StSection>
      <H2 className="textYellow">Kalender</H2>
      <StContent>
        <StH3 className="textGreen">7 September 2025</StH3>

        <StArticle>
          <StH3>Kinderkoers</StH3>
          <StDetails>
            <CalendarItem
              time="13u30*"
              title="Kinderen 1-5 jaar"
              description="Rechte lijn"
            />
            <CalendarItem
              time="13u40*"
              title="Kinderen 6-7 jaar"
              description="1 kleine ronde"
            />
            <CalendarItem
              time="13u50*"
              title="Kinderen 8-9 jaar"
              description="2 kleine rondes"
            />
            <CalendarItem
              time="14u00*"
              title="Kinderen 10-11 jaar"
              description="3 kleine rondes"
            />
            <CalendarItem time="14u20" title="Prijsuitreiking" />
          </StDetails>
        </StArticle>

        <StArticle>
          <StH3>Sympatieke El Toro</StH3>
          <StDetails>
            <CalendarItem
              time="14u45"
              title="Start"
              description="Ludieke & Vrouwenkoers - 3 kleine verkenningsrondes, 12 kleine rondes koers, met finish beneden"
            />
          </StDetails>
        </StArticle>

        <StArticle>
          <StH3>Retro El Toro Koers</StH3>
          <StDetails>
            <CalendarItem
              time="16u00"
              title="Start"
              description="1 verkenningsronde beneden, 15 rondes koers, finish boven op de Rotse"
            />
            <CalendarItem time="17u15" title="Prijsuitreiking Retro Koers" />
          </StDetails>
        </StArticle>
        <StInfo>
          * Voor de kinderkoersen vragen we aan de kinderen én ouders om zeker
          een half uur op voorhand aanwezig te zijn zodat de inschrijving vlot
          kan verlopen.
        </StInfo>
      </StContent>
    </StSection>
  );
};

const StSection = styled.section``;

const StContent = styled.div`
  margin-top: 48px;
  padding-top: 50px;
  padding-bottom: 50px;

  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: ${({ theme }) => theme.borderRadius.default};
`;

const StH3 = styled(H3)`
  margin-top: 15px;
`;

const StArticle = styled.article`
  margin-left: 50px;
  margin-top: 40px;
  width: 75%;

  display: grid;
  grid-template-columns: 30% 1fr;
  align-items: start;
  grid-column-gap: 20px;

  @media ${breakpoints.medium} {
    grid-template-columns: 1fr;
  }

  @media ${breakpoints.small} {
    margin-left: 0px;
  }
`;

const StDetails = styled.div`
  border-left: solid 2px #065755;
  padding: 15px;
  width: 100%;

  @media ${breakpoints.medium} {
    border-left: none;
    padding-left: 0;
  }
`;

const StInfo = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  width: 75%;
  padding-top: 48px;
  font-size: 0.85em;

  @media ${breakpoints.medium} {
    width: 80%;
  }
`;

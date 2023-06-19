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
        <StH3 className="textGreen">3 September 2023</StH3>
        <StArticle>
          <StH3>Kinderkoers</StH3>
          <StDetails>
            <CalendarItem
              time="14u00*"
              title="Kinderen t.e.m. 5 jaar"
              description="Rechte lijn van 500m"
            />
            <CalendarItem
              time="14u15*"
              title="6 - 7 jaar"
              description="1 ronde, 800m"
            />
            <CalendarItem
              time="14u30*"
              title="8 - 9 jaar"
              description="2 rondes, 1600m"
            />
            <CalendarItem
              time="14u45*"
              title="10 - 11 jaar"
              description="2 rondes, 1600m"
            />
          </StDetails>
        </StArticle>

        <StArticle>
          <StH3>Retrokoers</StH3>
          <StDetails>
            <CalendarItem
              time="vanaf 13u00"
              title="Inschrijvingen, startblad tekenen, startnummer ontvangen (5 euro)"
            />
            <CalendarItem time="15u30" title="Verkenningsronde en start" />
            <CalendarItem time="17u00" title="Podiumceremonie" />
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
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 75%;
  justify-content: center;
  align-items: center;

  @media ${breakpoints.medium} {
    flex-direction: column;
  }

  @media ${breakpoints.small} {
    margin-left: 0px;
  }
`;

const StDetails = styled.div`
  margin-left: 45px;
  border-left: solid 2px #065755;
  padding: 15px;
  width: 75%;

  @media ${breakpoints.medium} {
    border-left: none;
  }

  @media ${breakpoints.small} {
    width: 100%;
    margin-left: 0px;
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

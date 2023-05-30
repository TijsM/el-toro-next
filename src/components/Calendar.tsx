"use client";

import styled from "styled-components";
import { H2, H3 } from "../styled-components/Types";
import { CalendarItem } from "./calendar/CalendarItem";

export const Calendar = () => {
  return (
    <section id="calendar">
      <H2 className="textGreen">Kalender</H2>
      <StH3>Zondag 4 september</StH3>
      <StArticle>
        <StH3>Kinderkoers</StH3>
        <StDetails>
          <CalendarItem
            time="14u00"
            title="Kinderen t.e.m. 5 jaar"
            description="Rechte lijn van 500m"
          />
          <CalendarItem
            time="14u15"
            title="6 - 7 jaar"
            description="1 ronde, 800m"
          />
          <CalendarItem
            time="14u30"
            title="8 - 9 jaar"
            description="2 rondes, 1600m"
          />
          <CalendarItem
            time="14u45"
            title="10 - 11 jaar"
            description="2 rondes, 1600m"
          />

          <StButton data-scroll href="#inschrijvingKoers">
            Inschrijven
          </StButton>
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

          <StButton data-scroll href="#inschrijvingKoers">
            Inschrijven
          </StButton>
        </StDetails>
      </StArticle>
    </section>
  );
};

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
`;

const StDetails = styled.div`
  margin-left: 45px;
  border-left: solid 2px #065755;
  padding: 15px;
  width: 75%;
`;

const StButton = styled.a`
  display: block;
  width: 100px;
  text-align: center;
  margin-top: px;
  text-decoration: none;
  border: #3d3a34 1px solid;
  color: #3d3a34;
  background-color: transparent;
  padding: 5px;
  font-weight: bold;
  border-radius: 5px;
  margin-top: 10px;
  font-size: 0.85em;

  margin-top: 20px;
`;

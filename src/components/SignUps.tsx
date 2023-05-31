"use client";

import styled from "styled-components";
import { H2 } from "../styled-components/Types";

export const SignUps = () => {
  return (
    <StSection>
      <H2 className="textYellow">Inschrijven</H2>
      <StInfo>
        Inschrijvingen volwassenen retrokoers: 10 euro <br />
        Inschrijvingen kinderen retrokoers: 3 euro <br />
      </StInfo>

      <StInfo>
        Omwille van verzekering dient iedere deelnemer zijn paspoort mee te
        brengen
      </StInfo>
      <StSignUpContainer>
        <StSignUpText>
          Inschrijvingen voor 2023 zijn nog niet geopend.
        </StSignUpText>
      </StSignUpContainer>
    </StSection>
  );
};

const StSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const StInfo = styled.p`
  color: #fff4da;
  text-align: center;
  padding-top: 24px;
`;

const StSignUpContainer = styled.div`
  background-color: #fff4da;
  height: 300px;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 100px;
`;

const StSignUpText = styled.p`
  text-align: center;
  padding-top: 24px;
`;

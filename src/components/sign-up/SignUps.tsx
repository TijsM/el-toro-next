"use client";

import styled from "styled-components";
import { H2 } from "../../styled-components/Types";
import { Pricing } from "./Pricing";
import { SignUpForm } from "./SignUpForm";

export const SignUps = () => {
  return (
    <StSection id="sign-up">
      <StTitle className="textYellow">Inschrijven</StTitle>

      <Pricing />

      <StSignUpContainer>
        <SignUpForm />
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

const StSignUpContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.yellow};
  width: 100%;
  padding: 48px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  margin-top: 48px;
`;

const StTitle = styled(H2)`
  margin-bottom: 48px;
`;

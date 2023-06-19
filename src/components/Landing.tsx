"use client";

import styled from "styled-components";
import { H1, H2 } from "../styled-components/Types";
import { breakpoints } from "../constants/breakpoints";
import { Button } from "./core";

type LandingProps = {
  title: string;
  subtitle: string;
  body?: string;
  cta: {
    text: string;
    onClick: () => void;
  };
};

export const Landing = ({ title, subtitle, body, cta }: LandingProps) => {
  return (
    <StHeader>
      <H1>{title}</H1>
      <H2>{subtitle}</H2>
      {body && <StIntroText>{body}</StIntroText>}
      <Button
        onClick={() => cta.onClick()}
        text={cta.text}
        size="large"
        inverted
      />
    </StHeader>
  );
};

const StHeader = styled.header`
  height: 100vh;
  background-image: url("/retroBG.jpg");
  background-size: cover;
  background-position: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.yellow};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 96px;
  box-sizing: border-box;

  @media ${breakpoints.small} {
    display: flex;
    flex-direction: column;
    padding-top: 75px;
    padding-bottom: 75px;
    box-sizing: border-box;
  }
`;

const StIntroText = styled.div`
  padding: 30px;
  font-weight: 700;
  max-width: 500px;
  margin: auto;
  font-size: 1.2em;
`;

const StLink = styled.a`
  display: inline-block;
  padding: 10px;
  margin: auto;
  font-size: 1.5em;
  color: #fff4da;
  border: #fff4da 2px solid;
  width: 200px;
`;

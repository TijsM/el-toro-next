"use client";

import styled from "styled-components";

export const Footer = () => {
  return (
    <StFooter>
      <StLink
        href="https://rodi-digital.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gebouwd door Rodi Digital
      </StLink>
    </StFooter>
  );
};

const StFooter = styled.footer`
  padding: 20px;
  text-align: center;
`;

const StLink = styled.a`
  color: #fff4da;

  text-decoration: none;
  font-size: 0.7em;

  &:hover {
    text-decoration: underline;
  }
`;

import styled from "styled-components";
import { breakpoints } from "../constants/breakpoints";

export const H1 = styled.h1`
  padding-top: 250px;
  font-size: 4em;

  @media ${breakpoints.small} {
    padding-top: 0px;
    margin-bottom: 0px;
    font-size: 3em;
  }
`;

export const H2 = styled.h2`
  margin-top: 20px;
  font-size: 2em;
  text-align: center;
`;

export const H3 = styled.h3`
  align-self: center;
`;

import styled from "styled-components";

export const Ul = styled.ul``;

export const Li = styled.li<{ index: number }>`
  margin-top: ${({ index }) => (index === 0 ? "16px" : "8px")};
  margin-left: 24px;
`;

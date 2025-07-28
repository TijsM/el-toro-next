import styled from "styled-components";
import { breakpoints } from "@/constants/breakpoints";

export const ParcoursSection = styled.section`
  position: relative;
  margin-top: 40px;
  width: 100%;
`;

export const ParcoursLayout = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  @media ${breakpoints.small} {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const ParcoursCardsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media ${breakpoints.small} {
    width: 100%;
  }
`;

export const MobileControlsContainer = styled.div`
  display: none;
  @media ${breakpoints.small} {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 8px;
  }
`;

export const MobileControlButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.dark};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  opacity: 0.85;
  transition: background 0.2s;
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const ParcoursCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media ${breakpoints.small} {
    margin-top: 32px;
    width: 100%;
    flex-direction: row;
    overflow-x: auto;
    gap: 16px;
    padding-bottom: 16px;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }
`;

export const ParcoursCard = styled.div`
  color: ${({ theme }) => theme.colors.yellow};
  height: 80vh;
  line-height: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${breakpoints.small} {
    height: auto;
    min-width: 70vw;
    max-width: 80vw;
    flex: 0 0 auto;
    scroll-snap-align: center;
  }
`;

export const ImageContainer = styled.div`
  position: sticky;
  top: 20px;
  width: 100%;
  margin-left: 40px;
  height: calc(100vh - 40px);
  overflow: hidden;
  @media ${breakpoints.small} {
    position: static;
    width: 75vw;
    height: 50vh;
    margin-bottom: 16px;
    order: -1;
  }
`;

export const ZoomedImageWrapper = styled.div<{
  x: number;
  y: number;
  s: number;
}>`
  width: 100%;
  height: 100%;
  transform-origin: ${({ x, y }) => `${x}% ${y}%`};
  transform: scale(${({ s }) => s});
  transition: transform 0.6s ease-out, transform-origin 0.6s ease-out;
`;

export const ZoomedStyledImage = styled.img`
  width: 100% !important;
  height: 100% !important;
  object-fit: contain !important;
  display: block;
`;

export const ParcoursCardTitle = styled.p`
  color: ${({ theme }) => theme.colors.yellow};
  margin-bottom: 16px;
  font-size: 1.5em;
  font-weight: bold;
  padding-left: 50px;
  @media ${breakpoints.small} {
    padding-left: 0px;
  }
`;

export const ParcoursCardContent = styled.div`
  padding-left: 30px;
  border-left: #065755 2px solid;
  padding: 10px 50px;
  @media ${breakpoints.small} {
    margin: 0px;
    margin-top: 10px;
    border-left: none;
    padding: 10px 0px;
  }
`;

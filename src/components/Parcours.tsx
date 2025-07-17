"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import { H2 } from "../styled-components/Types";
import ComponentObserver from "./ComponentObserver";
import { breakpoints } from "@/constants/breakpoints";
const sections = [
  {
    title: "De Start",
    text: "Onder aan de mythische Rotse van Dikkelvenne wordt het strijdtoneel geopend. Hier zetten de renners aan voor een heroïsche tocht door het hart van de Vlaamse Ardennen.",
    zoom: { xPercent: 60, yPercent: 60, scale: 1.2 },
  },
  {
    title: "De Lus",
    text: "In de kronkelende Beekstraat duiken ze de koers in, recht de Eikstraat in – een lus van 2,5 kilometer waar het tempo wordt opgedreven en de zenuwen gespannen staan. Geen hoogtemeters, maar wel koers, rauw en onverbloemd.",
    zoom: { xPercent: 100, yPercent: 90, scale: 2 },
  },
  {
    title: "De Herhaling",
    text: "Langs de Sint-Christianastraat keren ze telkens terug naar de start, vijftien keer opnieuw. Vijftien keer wachten, aanvallen, afzien, en dromen van de ultieme glorie.",
    zoom: { xPercent: 70, yPercent: 50, scale: 2.5 },
  },
  {
    title: "De Finale",
    text: "Na vijftien ronden volgt het verdict: de Rotse wacht. Geen klim die indruk maakt op papier, maar eentje die geschiedenis schrijft in de benen. Hier laat de koers zich niet meten in wattages, maar in wilskracht. Op deze strook worden dromers helden, en helden legendes.",
    zoom: { xPercent: 35, yPercent: 35, scale: 3 },
  },
];

export const Parcours = () => {
  const [mostVisibleIndex, setMostVisibleIndex] = useState(0);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // Store visibility ratios
  const visibilityMap = useRef<number[]>(new Array(sections.length).fill(0));

  const handleVisibilityChange = (index: number, ratio: number) => {
    visibilityMap.current[index] = ratio;
    const maxRatio = Math.max(...visibilityMap.current);
    const mostVisible = visibilityMap.current.findIndex((r) => r === maxRatio);
    if (mostVisible !== mostVisibleIndex) {
      setMostVisibleIndex(mostVisible);
    }
  };

  // Scroll to card on mobile when control is pressed
  const scrollToCard = (index: number) => {
    if (cardsContainerRef.current) {
      const card = cardsContainerRef.current.children[index] as HTMLElement;
      if (card) {
        card.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  };

  // Snap to mostVisibleIndex on resize (mobile)
  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia(breakpoints.small.replace("@media ", "")).matches) {
        scrollToCard(mostVisibleIndex);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mostVisibleIndex]);

  const { xPercent, yPercent, scale } = sections[mostVisibleIndex].zoom;

  return (
    <StSection>
      <H2 className="textYellow">Parcours</H2>
      <StLayout>
        <StCardsWrapper>
          <StCards ref={cardsContainerRef}>
            {sections.map((section, i) => (
              <ComponentObserver
                key={section.text}
                index={i}
                threshold={0}
                onVisibilityChange={handleVisibilityChange}
              >
                <StCard>
                  <StCardTitle>{section.title}</StCardTitle>
                  <StContentBlockContent>{section.text}</StContentBlockContent>
                </StCard>
              </ComponentObserver>
            ))}
          </StCards>
          <MobileControls>
            <ControlButton
              onClick={() => scrollToCard(Math.max(0, mostVisibleIndex - 1))}
              disabled={mostVisibleIndex === 0}
              aria-label="Vorige sectie"
            >
              &#8592;
            </ControlButton>
            <ControlButton
              onClick={() =>
                scrollToCard(
                  Math.min(sections.length - 1, mostVisibleIndex + 1)
                )
              }
              disabled={mostVisibleIndex === sections.length - 1}
              aria-label="Volgende sectie"
            >
              &#8594;
            </ControlButton>
          </MobileControls>
        </StCardsWrapper>
        <StImageContainer>
          <ZoomWrapper x={xPercent} y={yPercent} s={scale}>
            <StyledImage
              src="/parcours.jpg"
              alt="parcours race"
              width={0}
              height={0}
              sizes="100vw"
            />
          </ZoomWrapper>
        </StImageContainer>
      </StLayout>
    </StSection>
  );
};

const StSection = styled.section`
  position: relative;
  margin-top: 40px;
  width: 100%;
`;

const StLayout = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;

  @media ${breakpoints.small} {
    flex-direction: column;
    align-items: stretch;
  }
`;

const StCardsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media ${breakpoints.small} {
    width: 100%;
  }
`;

const MobileControls = styled.div`
  display: none;
  @media ${breakpoints.small} {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 8px;
  }
`;

const ControlButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.dark};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.5em;
  cursor: pointer;
  opacity: 0.85;
  transition: background 0.2s;
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const StCards = styled.div`
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

const StCard = styled.div`
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

const StImageContainer = styled.div`
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

const ZoomWrapper = styled.div<{
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

const StyledImage = styled(Image)`
  width: 100% !important;
  height: 100% !important;
  object-fit: contain !important;
  display: block;
`;

const StCardTitle = styled.p`
  color: ${({ theme }) => theme.colors.yellow};
  margin-bottom: 16px;
  font-size: 1.5em;
  font-weight: bold;
  padding-left: 50px;

  @media ${breakpoints.small} {
    padding-left: 0px;
  }
`;

const StContentBlockContent = styled.div`
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

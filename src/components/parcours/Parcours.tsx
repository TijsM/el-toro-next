"use client";
import { useRef, useState, useEffect } from "react";
import { H2 } from "../../styled-components/Types";
import { breakpoints } from "@/constants/breakpoints";
import ParcoursCards, { Section } from "./ParcoursCards";
import ParcoursMobileControls from "./ParcoursMobileControls";
import ParcoursImage from "./ParcoursImage";
import {
  ParcoursSection,
  ParcoursLayout,
  ParcoursCardsWrapper,
} from "./ParcoursStyles";

const sections: Section[] = [
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
    title: "Terug naar start",
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
  const visibilityMap = useRef<number[]>(new Array(sections.length).fill(0));

  const handleVisibilityChange = (index: number, ratio: number) => {
    visibilityMap.current[index] = ratio;
    const maxRatio = Math.max(...visibilityMap.current);
    const mostVisible = visibilityMap.current.findIndex((r) => r === maxRatio);
    if (mostVisible !== mostVisibleIndex) {
      setMostVisibleIndex(mostVisible);
    }
  };

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
    <ParcoursSection>
      <H2 className="textYellow">Parcours</H2>
      <ParcoursLayout>
        <ParcoursCardsWrapper>
          <ParcoursCards
            sections={sections}
            onVisibilityChange={handleVisibilityChange}
            cardsContainerRef={cardsContainerRef}
          />
          <ParcoursMobileControls
            onPrev={() => scrollToCard(Math.max(0, mostVisibleIndex - 1))}
            onNext={() =>
              scrollToCard(Math.min(sections.length - 1, mostVisibleIndex + 1))
            }
            disablePrev={mostVisibleIndex === 0}
            disableNext={mostVisibleIndex === sections.length - 1}
          />
        </ParcoursCardsWrapper>
        <ParcoursImage xPercent={xPercent} yPercent={yPercent} scale={scale} />
      </ParcoursLayout>
    </ParcoursSection>
  );
};

export default Parcours;

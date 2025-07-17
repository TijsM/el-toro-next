import React from "react";
import ComponentObserver from "./ComponentObserver";
import {
  ParcoursCard,
  ParcoursCardTitle,
  ParcoursCardContent,
  ParcoursCardsContainer,
} from "./ParcoursStyles";

export type Section = {
  title: string;
  text: string;
  zoom: { xPercent: number; yPercent: number; scale: number };
};

type ParcoursCardsProps = {
  sections: Section[];
  onVisibilityChange: (index: number, ratio: number) => void;
  cardsContainerRef: React.RefObject<HTMLDivElement>;
};

const ParcoursCards: React.FC<ParcoursCardsProps> = ({
  sections,
  onVisibilityChange,
  cardsContainerRef,
}) => (
  <ParcoursCardsContainer ref={cardsContainerRef}>
    {sections.map((section, i) => (
      <ComponentObserver
        key={section.text}
        index={i}
        threshold={0}
        onVisibilityChange={onVisibilityChange}
      >
        <ParcoursCard>
          <ParcoursCardTitle>{section.title}</ParcoursCardTitle>
          <ParcoursCardContent>{section.text}</ParcoursCardContent>
        </ParcoursCard>
      </ComponentObserver>
    ))}
  </ParcoursCardsContainer>
);

export default ParcoursCards;

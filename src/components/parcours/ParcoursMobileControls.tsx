import React from "react";
import { MobileControlsContainer, MobileControlButton } from "./ParcoursStyles";
import { ChevronIcon } from "./ChevronIcon";

type ParcoursMobileControlsProps = {
  onPrev: () => void;
  onNext: () => void;
  disablePrev: boolean;
  disableNext: boolean;
};

const ParcoursMobileControls: React.FC<ParcoursMobileControlsProps> = ({
  onPrev,
  onNext,
  disablePrev,
  disableNext,
}) => (
  <MobileControlsContainer>
    <MobileControlButton
      onClick={onPrev}
      disabled={disablePrev}
      aria-label="Vorige sectie"
    >
      <ChevronIcon direction="left" />
    </MobileControlButton>
    <MobileControlButton
      onClick={onNext}
      disabled={disableNext}
      aria-label="Volgende sectie"
    >
      <ChevronIcon direction="right" />
    </MobileControlButton>
  </MobileControlsContainer>
);

export default ParcoursMobileControls;

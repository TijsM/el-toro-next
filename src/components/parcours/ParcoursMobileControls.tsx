import React from "react";
import { MobileControlsContainer, MobileControlButton } from "./ParcoursStyles";
import { ChevronIcon } from "./ChevronIcon";
import { usePostHogTracking } from "../../hooks/usePostHogTracking";

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
}) => {
  const { trackButtonClick } = usePostHogTracking();

  const handlePrevClick = () => {
    trackButtonClick("parcours_previous_section", {
      button_disabled: disablePrev,
      section: "parcours_navigation",
    });
    onPrev();
  };

  const handleNextClick = () => {
    trackButtonClick("parcours_next_section", {
      button_disabled: disableNext,
      section: "parcours_navigation",
    });
    onNext();
  };

  return (
    <MobileControlsContainer>
      <MobileControlButton
        onClick={handlePrevClick}
        disabled={disablePrev}
        aria-label="Vorige sectie"
      >
        <ChevronIcon direction="left" />
      </MobileControlButton>
      <MobileControlButton
        onClick={handleNextClick}
        disabled={disableNext}
        aria-label="Volgende sectie"
      >
        <ChevronIcon direction="right" />
      </MobileControlButton>
    </MobileControlsContainer>
  );
};

export default ParcoursMobileControls;

import { useCallback, useEffect, useState } from "react";
import { Button } from "../core";
import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints";
import { ParticipantForm, defaultParticipant } from "./ParticipantForm";
import { PriceCalculation } from "./PriceCalculation";
import { Particpant } from "../../schema/Participant";
import { allParticipantsAreValid } from "../../schema/Participant";
import { useStripe } from "../../hooks/useStripe";
import { getParticipantsFromUrl } from "../../utils/getParticipantsFromUrl";
import { MandatoryInfoForm } from "./MandatoryInfoForm";
import { usePostHogTracking } from "../../hooks/usePostHogTracking";

// https://vercel.com/guides/getting-started-with-nextjs-typescript-stripe

export const SignUpForm = () => {
  const [email, setEmail] = useState("");

  const [participants, setParticipants] = useState<Particpant[]>([
    defaultParticipant,
  ]);

  const { openStripeCheckout, loading } = useStripe();
  const { trackFormSubmission } = usePostHogTracking();

  useEffect(() => {
    const participantsFromUrl = getParticipantsFromUrl();
    if (participantsFromUrl?.participants) {
      setParticipants(participantsFromUrl.participants);
    }
    if (participantsFromUrl?.email) {
      setEmail(participantsFromUrl.email);
    }
  }, []);

  const addParticipant = useCallback(
    (updatedParticipant: Particpant, index: number) => {
      const updatedParticipants = [...participants];
      updatedParticipants[index] = updatedParticipant;
      setParticipants(updatedParticipants);
    },
    [participants]
  );

  const deleteParticipant = useCallback(
    (index: number) => {
      const updatedParticipants = [...participants];
      updatedParticipants.splice(index, 1);
      setParticipants(updatedParticipants);
    },
    [participants]
  );

  return (
    <StContainer>
      <MandatoryInfoForm email={email} setEmail={setEmail} />
      {participants.map((participant, index) => {
        return (
          <ParticipantForm
            key={"participant" + index}
            count={index + 1}
            participant={participant}
            setParticipant={(updatedParticipant) => {
              addParticipant(updatedParticipant, index);
            }}
            deleteParticipant={() => deleteParticipant(index)}
          />
        );
      })}
      <Button
        onClick={() => {
          setParticipants([...participants, defaultParticipant]);
        }}
        text={"Extra deelnemer toevoegen"}
        size={"medium"}
        trackingName="add_participant"
        trackingProperties={{
          section: "signup_form",
          current_participant_count: participants.length,
        }}
      />
      <PriceCalculation participants={participants} />
      <StPaymentButtonContainer>
        <Button
          loading={loading}
          disabled={!allParticipantsAreValid(participants) || !email}
          onClick={() => {
            trackFormSubmission("signup_form", {
              participant_count: participants.length,
              form_valid: allParticipantsAreValid(participants),
              email_provided: !!email,
            });
            openStripeCheckout(participants, email);
          }}
          text={"Ga naar betaling"}
          size={"medium"}
          trackingName="proceed_to_payment"
          trackingProperties={{
            section: "signup_form",
            participant_count: participants.length,
            form_valid: allParticipantsAreValid(participants),
            email_provided: !!email,
          }}
        />
      </StPaymentButtonContainer>
    </StContainer>
  );
};

const StContainer = styled.div`
  width: 100%;

  padding: 0 128px;

  @media ${breakpoints.big} {
    padding: 0 64px;
  }
  @media ${breakpoints.medium} {
    padding: 0 32px;
  }
  @media ${breakpoints.small} {
    padding: 0 16px;
  }
`;

const StPaymentButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
`;

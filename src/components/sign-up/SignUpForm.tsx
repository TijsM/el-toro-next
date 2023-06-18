import { useCallback, useState } from "react";
import { Button, Input } from "../core";
import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints";
import { ParticipantForm, defaultParticipant } from "./ParticipantForm";
import { PriceCalculation } from "./PriceCalculation";
import { Particpant } from "../../types/Participant";
import { allParticipantsAreValid } from "../../schema/Participant";
import { usePricing } from "../../hooks/usePricing";
import { useStripe } from "../../hooks/useStripe";
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";

// https://vercel.com/guides/getting-started-with-nextjs-typescript-stripe

export const SignUpForm = () => {
  const { data, error, isLoading } = useSWR("/stripe", fetcher);

  console.log(data);

  const [email, setEmail] = useState("");

  const [participants, setParticipants] = useState<Particpant[]>([
    defaultParticipant,
  ]);

  const { pricing } = usePricing(participants);
  const { openStripeCheckout } = useStripe();

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
      <StGeneralInfoContainer>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label={"Email"}
          name="email"
          type="text"
        />
      </StGeneralInfoContainer>
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
      />
      <PriceCalculation participants={participants} />
      <StPaymentButtonContainer>
        <Button
          disabled={!allParticipantsAreValid(participants)}
          onClick={() => openStripeCheckout()}
          text={"Ga naar betaling"}
          size={"medium"}
        />
      </StPaymentButtonContainer>
    </StContainer>
  );
};

const StContainer = styled.div`
  width: 100%;

  padding: 0 128px;

  @media ${breakpoints.big} {
    /* background-color: green; */
    padding: 0 64px;
  }
  @media ${breakpoints.medium} {
    /* background-color: red; */
    padding: 0 32px;
  }
  @media ${breakpoints.small} {
    /* background-color: blue; */
    padding: 0 16px;
  }
`;

const StGeneralInfoContainer = styled.div`
  padding-bottom: 48px;
`;

const StPaymentButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
`;

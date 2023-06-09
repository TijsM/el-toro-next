import { useState } from "react";
import { Input } from "../core";
import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints";
import {
  ParticipantForm,
  Particpant,
  defaultParticipant,
} from "./ParticipantForm";

export const SignUpForm = () => {
  const [email, setEmail] = useState("");

  const [participants, setParticipants] = useState<Particpant[]>([
    defaultParticipant,
  ]);

  return (
    <StContainer>
      <StGeneralInfoContainer>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label={"Email"}
          name="email"
        />
      </StGeneralInfoContainer>
      {participants.map((participant, index) => {
        return (
          <ParticipantForm
            key={"participant" + index}
            count={index + 1}
            participant={participant}
            setParticipant={(updatedParticipant) => {
              const updatedParticipants = [...participants];
              updatedParticipants[index] = updatedParticipant;
              setParticipants(updatedParticipants);
            }}
          />
        );
      })}
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

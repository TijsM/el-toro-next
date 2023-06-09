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

  const [participant, setParticipant] =
    useState<Particpant>(defaultParticipant);

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
      <ParticipantForm
        participant={participant}
        setParticipant={setParticipant}
      />
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

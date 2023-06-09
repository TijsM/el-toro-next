import { useState } from "react";
import { Input } from "../core";
import styled from "styled-components";
import { breakpoints } from "../../constants/breakpoints";

export const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [socialSecurityNumber, setSocialSecurityNumber] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [city, setCity] = useState("");

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
      <StParticipantContainer>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          label={"Name"}
          name="name"
        />
        <Input
          value={socialSecurityNumber}
          onChange={(e) => setSocialSecurityNumber(e.target.value)}
          label={"Social Security Number"}
          name="socialSecurityNumber"
        />
        <Input
          value={placeOfBirth}
          onChange={(e) => setPlaceOfBirth(e.target.value)}
          label={"Place of Birth"}
          name="placeOfBirth"
        />
        <Input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          label={"City"}
          name="city"
        />
      </StParticipantContainer>
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
const StParticipantContainer = styled.div`
  padding-bottom: 48px;
`;
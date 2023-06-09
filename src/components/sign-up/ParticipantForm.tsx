import styled from "styled-components";
import { Input } from "../core";
import { useState } from "react";

export type Particpant = {
  name: string;
  socialSecurityNumber: string;
  placeOfBirth: string;
  city: string;
};

type ParticipantFormProps = {
  participant: Particpant;
  setParticipant: (participant: Particpant) => void;
};

export const defaultParticipant: Particpant = {
  name: "",
  socialSecurityNumber: "",
  placeOfBirth: "",
  city: "",
};

export const ParticipantForm = ({
  participant,
  setParticipant,
}: ParticipantFormProps) => {
  const updateParticipant = (
    propName: keyof Particpant,
    updatedValue: string
  ) => {
    const upadateParticpant = { ...participant };
    upadateParticpant[propName] = updatedValue;
    setParticipant(upadateParticpant);
  };

  return (
    <StParticipantContainer>
      <Input
        value={participant.name}
        onChange={(e) => updateParticipant("name", e.target.value)}
        label={"Name"}
        name="name"
      />
      <Input
        value={participant.socialSecurityNumber}
        onChange={(e) =>
          updateParticipant("socialSecurityNumber", e.target.value)
        }
        label={"Social Security Number"}
        name="socialSecurityNumber"
      />
      <Input
        value={participant.placeOfBirth}
        onChange={(e) => updateParticipant("placeOfBirth", e.target.value)}
        label={"Place of Birth"}
        name="placeOfBirth"
      />
      <Input
        value={participant.city}
        onChange={(e) => updateParticipant("city", e.target.value)}
        label={"City"}
        name="city"
      />
    </StParticipantContainer>
  );
};

const StParticipantContainer = styled.div`
  padding-bottom: 48px;
`;

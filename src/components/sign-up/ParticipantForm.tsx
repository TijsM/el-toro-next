import styled from "styled-components";
import { Input } from "../core";
import { H3 } from "../../styled-components/Types";

export type Particpant = {
  name: string;
  socialSecurityNumber: string;
  placeOfBirth: string;
  city: string;
  dateOfBirth: Date;
};

type ParticipantFormProps = {
  participant: Particpant;
  setParticipant: (participant: Particpant) => void;
  count: number;
};

export const defaultParticipant: Particpant = {
  name: "",
  socialSecurityNumber: "",
  placeOfBirth: "",
  city: "",
  dateOfBirth: new Date(),
};

export const ParticipantForm = ({
  participant,
  setParticipant,
  count,
}: ParticipantFormProps) => {
  const updateParticipant = (
    propName: keyof Particpant,
    updatedValue: string | Date
  ) => {
    const updatedParticipant = { ...participant };
    if (propName !== "dateOfBirth") {
      updatedParticipant[propName] = updatedValue as string;
    } else if (propName === "dateOfBirth") {
      updatedParticipant[propName] = updatedValue as Date;
    }

    setParticipant(updatedParticipant);
  };

  return (
    <StParticipantContainer>
      <StH3>Deelnemer {count}</StH3>
      <StFormItems>
        <Input
          type="text"
          value={participant.name}
          onChange={(e) => updateParticipant("name", e.target.value)}
          label={"Volledige naam"}
          name="name"
        />
        <Input
          type="text"
          value={participant.socialSecurityNumber}
          onChange={(e) =>
            updateParticipant("socialSecurityNumber", e.target.value)
          }
          label={"Rijksregisternummer"}
          name="socialSecurityNumber"
        />
        <Input
          type="text"
          value={participant.placeOfBirth}
          onChange={(e) => updateParticipant("placeOfBirth", e.target.value)}
          label={"Geboorteplaats"}
          name="placeOfBirth"
        />
        <Input
          type="text"
          value={participant.city}
          onChange={(e) => updateParticipant("city", e.target.value)}
          label={"Woonplaats"}
          name="city"
        />
        <Input
          type="date"
          value={participant.dateOfBirth}
          onChange={(e) => updateParticipant("dateOfBirth", e.target.value)}
          label={"Geboortedatum"}
          name="dateOfBirth"
        />
      </StFormItems>
    </StParticipantContainer>
  );
};

const StFormItems = styled.div``;

const StParticipantContainer = styled.div`
  padding-bottom: 48px;
`;

const StH3 = styled(H3)`
  margin-bottom: 24px;
`;

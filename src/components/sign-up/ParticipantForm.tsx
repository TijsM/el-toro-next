import styled from "styled-components";
import { Button, Input } from "../core";
import { H3 } from "../../styled-components/Types";
import { Particpant } from "../../types/Participant";
import { useMemo, useState } from "react";
import { Li, Ul } from "../core/List";
import { participantIsValid } from "../../schema/Participant";

type ParticipantFormProps = {
  participant: Particpant;
  count: number;
  setParticipant: (participant: Particpant) => void;
  deleteParticipant: () => void;
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
  count,
  setParticipant,
  deleteParticipant,
}: ParticipantFormProps) => {
  const [lostFocusOnForm, setLostFocusOnForm] = useState(false);

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

  const errors = useMemo(() => {
    return participantIsValid(participant);
  }, [participant]);

  return (
    <StParticipantContainer>
      <StHeaderRow>
        <StH3>Deelnemer {count}</StH3>
        {count > 1 && (
          <Button
            onClick={deleteParticipant}
            text={"verwijder deelnamer"}
            size={"small"}
          />
        )}
      </StHeaderRow>
      <StFormItems
        onBlur={() => {
          setLostFocusOnForm(true);
        }}
      >
        <Input
          type="text"
          value={participant.name}
          onChange={(e) => updateParticipant("name", e.target.value)}
          label={"Volledige naam"}
          name="name"
          required
        />
        <Input
          type="text"
          value={participant.socialSecurityNumber}
          onChange={(e) =>
            updateParticipant("socialSecurityNumber", e.target.value)
          }
          label={"Rijksregisternummer"}
          name="socialSecurityNumber"
          required
        />
        <Input
          type="text"
          value={participant.placeOfBirth}
          onChange={(e) => updateParticipant("placeOfBirth", e.target.value)}
          label={"Geboorteplaats"}
          name="placeOfBirth"
          required
        />
        <Input
          type="text"
          value={participant.city}
          onChange={(e) => updateParticipant("city", e.target.value)}
          label={"Woonplaats"}
          name="city"
          required
        />
        <Input
          type="date"
          value={participant.dateOfBirth}
          onChange={(e) => updateParticipant("dateOfBirth", e.target.value)}
          label={"Geboortedatum"}
          name="dateOfBirth"
          required
        />
      </StFormItems>
      {lostFocusOnForm && !errors.valid && (
        <StErrors>
          <p>Vul alle velden juist in:</p>
          <StUl>
            {errors.errors.map((error: string, index: number) => (
              <Li key={error} index={index}>
                {error}
              </Li>
            ))}
          </StUl>
        </StErrors>
      )}
    </StParticipantContainer>
  );
};

const StHeaderRow = styled.div`
  display: flex;
  align-items: baseline;
`;

const StH3 = styled(H3)`
  margin-bottom: 24px;
  margin-right: 24px;
`;

const StFormItems = styled.form``;

const StParticipantContainer = styled.div`
  padding-bottom: 48px;
`;

const StErrors = styled.div`
  color: ${({ theme }) => theme.colors.red};
`;

const StUl = styled(Ul)``;

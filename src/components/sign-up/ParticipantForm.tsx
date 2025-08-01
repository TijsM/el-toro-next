import styled from "styled-components";
import { Button, Input } from "../core";
import { H3 } from "../../styled-components/Types";
import { useMemo, useState } from "react";
import { Li, Ul } from "../core/List";
import { Particpant, participantIsValid } from "../../schema/Participant";
import { ErrorList } from "../core/ErrorList";

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
            text={"verwijder deelnemer"}
            size={"small"}
            trackingName="delete_participant"
            trackingProperties={{
              section: "participant_form",
              participant_number: count,
              total_participants: count,
            }}
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
          trackingEnabled={true}
          trackingProperties={{
            section: "participant_form",
            participant_number: count,
            field_type: "participant_name",
          }}
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
          trackingEnabled={true}
          trackingProperties={{
            section: "participant_form",
            participant_number: count,
            field_type: "social_security_number",
          }}
        />
        <Input
          type="text"
          value={participant.placeOfBirth}
          onChange={(e) => updateParticipant("placeOfBirth", e.target.value)}
          label={"Geboorteplaats"}
          name="placeOfBirth"
          required
          trackingEnabled={true}
          trackingProperties={{
            section: "participant_form",
            participant_number: count,
            field_type: "place_of_birth",
          }}
        />
        <Input
          type="text"
          value={participant.city}
          onChange={(e) => updateParticipant("city", e.target.value)}
          label={"Woonplaats"}
          name="city"
          required
          trackingEnabled={true}
          trackingProperties={{
            section: "participant_form",
            participant_number: count,
            field_type: "city",
          }}
        />
        <Input
          type="date"
          value={participant.dateOfBirth}
          onChange={(e) => updateParticipant("dateOfBirth", e.target.value)}
          label={"Geboortedatum"}
          name="dateOfBirth"
          required
          trackingEnabled={true}
          trackingProperties={{
            section: "participant_form",
            participant_number: count,
            field_type: "date_of_birth",
          }}
        />
      </StFormItems>
      {lostFocusOnForm && !errors.valid && <ErrorList errors={errors.errors} />}
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

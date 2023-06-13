import { object, string, date } from "yup";
import { Particpant } from "../types/Participant";

export const ParticipantSchema = object({
  name: string().required("Volledige naam moet ingevuld zijn"),
  socialSecurityNumber: string().required(
    "Rijksregisternummer moet ingevuld zijn"
  ),
  placeOfBirth: string().required("Geboorteplaats moet ingevuld zijn"),
  city: string().required("Woonplaats moet ingevuld zijn"),
  dateOfBirth: date()
    .default(() => new Date())
    .min(new Date(1900, 1, 1), "Geboortedatum moet na 1900 zijn")
    .max(new Date(), "Geboortedatum moet in het verleden zijn"),
});

export const participantIsValid = (participant: Particpant) => {
  try {
    ParticipantSchema.validateSync(participant, { abortEarly: false });
    return { valid: true, errors: [] };
  } catch (error) {
    //@ts-ignore
    const errors = error.errors;
    return { valid: false, errors: errors };
  }
};

export const allParticipantsAreValid = (participant: Particpant[]) => {
  return participant.every(
    (participant) => participantIsValid(participant).valid
  );
};

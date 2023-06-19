import { object, string, date } from "yup";

export type Particpant = {
  name?: string;
  socialSecurityNumber?: string;
  placeOfBirth?: string;
  city?: string;
  dateOfBirth?: Date;
};

export const ParticipantSchema = object({
  name: string().required("Volledige naam moet ingevuld zijn"),
  socialSecurityNumber: string()
    .required("Rijksregisternummer moet ingevuld zijn")
    .matches(
      /^[0-9]{2}[.\- ]{0,1}[0-9]{2}[.\- ]{0,1}[0-9]{2}[.\- ]{0,1}[0-9]{3}[.\- ]{0,1}[0-9]{2}$/,
      "Rijksregisternummer moet geldig zijn"
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

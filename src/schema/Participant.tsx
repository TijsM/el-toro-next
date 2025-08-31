import { object, string, date } from "yup";
import dayjs from "dayjs";
import { CATEGORIES } from "../constants/categories";

export type Particpant = {
  name?: string;
  socialSecurityNumber?: string;
  placeOfBirth?: string;
  city?: string;
  dateOfBirth?: Date;
  type?: string;
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
  type: string()
    .test('type-validation', function(value) {
      const { dateOfBirth } = this.parent;
      if (!dateOfBirth) return true; // If no date of birth, skip validation
      
      const age = dayjs().diff(dateOfBirth, "years");
      const isAdult = age >= CATEGORIES.adult.minAge;
      
      // For children, type should be empty or undefined
      if (!isAdult) {
        return !value || value === ""; // Children should have no type set
      }
      
      // For adults, type is required and must be valid
      if (isAdult) {
        if (!value) {
          return this.createError({ message: 'Type evenement moet geselecteerd zijn' });
        }
        if (!["Sympatieke El Toro", "Retro El Toro Koers"].includes(value)) {
          return this.createError({ message: 'Selecteer een geldig type evenement' });
        }
      }
      
      return true;
    }),
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

import { object, string } from "yup";

export type MandatoryInfo = {
  email: string;
};

export const MandatoryInfoSchema = object({
  email: string()
    .email("Email adres is niet geldig")
    .required("Email moet ingevuld zijn"),
});

export const mandatoryInfoIsValid = (mandatoryInfo: MandatoryInfo) => {
  try {
    MandatoryInfoSchema.validateSync(mandatoryInfo, { abortEarly: false });
    return { valid: true, errors: [] };
  } catch (error) {
    //@ts-ignore
    const errors = error.errors;
    return { valid: false, errors: errors };
  }
};

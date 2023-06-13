import { object, string, number, date, InferType } from "yup";

export type Particpant = {
  name?: string;
  socialSecurityNumber?: string;
  placeOfBirth?: string;
  city?: string;
  dateOfBirth?: Date;
};

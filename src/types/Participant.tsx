export type Particpant = {
  name?: string;
  socialSecurityNumber?: string;
  placeOfBirth?: string;
  city?: string;
  dateOfBirth?: Date;
};

export type ValidatedParticipant = Required<Particpant>;

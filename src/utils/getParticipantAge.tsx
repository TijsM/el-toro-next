import dayjs from "dayjs";
import { CATEGORIES } from "../constants/categories";

export const getParticipantAge = (dateOfBirth: Date | undefined): number => {
  if (!dateOfBirth) return 0;
  return dayjs().diff(dateOfBirth, "years");
};

export const isParticipantAdult = (dateOfBirth: Date | undefined): boolean => {
  const age = getParticipantAge(dateOfBirth);
  return age >= CATEGORIES.adult.minAge;
};

export const getParticipantCategory = (dateOfBirth: Date | undefined) => {
  const age = getParticipantAge(dateOfBirth);
  
  return Object.values(CATEGORIES).find((categoryInfo) => {
    return age >= categoryInfo.minAge && age <= categoryInfo.maxAge;
  });
};
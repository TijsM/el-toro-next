import { useMemo } from "react";
import { participantIsValid } from "../schema/Participant";
import dayjs from "dayjs";
import { CATEGORIES } from "../constants/categories";
import { Particpant } from "../types/Participant";

export const usePricing = (participants: Particpant[]) => {
  const pricing = useMemo(() => {
    const selectedCategories = participants
      .filter((participant) => participantIsValid(participant).valid)
      .map((participant) => {
        const age = dayjs().diff(participant.dateOfBirth, "years");

        const category = Object.values(CATEGORIES).find((categoryInfo) => {
          return age >= categoryInfo.minAge && age <= categoryInfo.maxAge;
        });

        return category;
      });

    const adultsAmount = selectedCategories.filter(
      (cat) => !cat?.isChild
    ).length;
    const adultPrice = CATEGORIES.adult.price;

    const childrenAmount = selectedCategories.filter(
      (cat) => cat?.isChild
    ).length;
    const childPrice = CATEGORIES.child1.price;

    return {
      adults: {
        amount: adultsAmount,
        pricePP: CATEGORIES.adult.price,
        priceTotal: adultsAmount * adultPrice,
      },
      children: {
        amount: childrenAmount,
        pricePP: CATEGORIES.child1.price,
        priceTotal: childrenAmount * childPrice,
      },
    };
  }, [participants]);

  return {
    pricing,
  };
};

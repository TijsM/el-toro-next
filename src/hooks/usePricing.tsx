import { useMemo } from "react";
import { Particpant } from "../types/Participant";
import { calculatePrice } from "../utils/calculatePrice";

export const usePricing = (participants: Particpant[]) => {
  const pricing = useMemo(() => {
    return calculatePrice(participants);
  }, [participants]);

  return {
    pricing,
  };
};

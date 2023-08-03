import { GetStripeCheckoutSessionResponse } from "../app/stripe/types";
import getStripe from "../utils/get-stripe";
import axios from "axios";
import { Particpant } from "../schema/Participant";
import { useState } from "react";

export const useStripe = () => {
  const [loading, setLoading] = useState(false);

  const openStripeCheckout = async (
    participants: Particpant[],
    email: string
  ) => {
    setLoading(true);
    const getSessionIdResponse =
      await axios.post<GetStripeCheckoutSessionResponse>("/stripe", {
        participants,
        email,
      });
    setLoading(false);

    const sessionId = getSessionIdResponse.data.id;

    if (!sessionId) {
      console.error("No sessionId");
      return;
    }

    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      sessionId: sessionId,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message);
  };

  return { openStripeCheckout, loading };
};

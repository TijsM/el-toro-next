import { GetStripeCheckoutSessionResponse } from "../app/stripe/types";
import getStripe from "../utils/get-stripe";
import axios from "axios";
import { Particpant } from "../types/Participant";

export const useStripe = () => {
  const openStripeCheckout = async (
    participants: Particpant[],
    email: string
  ) => {
    const getSessionIdResponse =
      await axios.post<GetStripeCheckoutSessionResponse>("/stripe", {
        participants,
        email,
      });

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

  return { openStripeCheckout };
};

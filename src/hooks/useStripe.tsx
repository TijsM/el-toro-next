import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { useState } from "react";
import { GetStripeCheckoutSessionResponse } from "../app/stripe/types";
import getStripe from "../utils/get-stripe";
import axios from "axios";

export const useStripe = () => {
  const [shouldGetStipeCheckoutId, setShouldGetStipeCheckoutId] =
    useState(false);

  const { data } = useSWR<GetStripeCheckoutSessionResponse>(
    !shouldGetStipeCheckoutId ? null : "/stripe",
    fetcher
  );

  const openStripeCheckout = async () => {
    setShouldGetStipeCheckoutId(true);

    const response = await axios.get<GetStripeCheckoutSessionResponse>(
      "/stripe"
    );
    console.log("res", response.data.id);

    const sessionId = response.data.id;

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

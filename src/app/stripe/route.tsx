import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { GetStripeCheckoutSessionResponse } from "./types";
import { calculatePrice } from "../../utils/calculatePrice";
import { STRIPE_SECRET_KEY } from "../../constants/stripeKeys";

const stripe = new Stripe(STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export async function POST(req: NextRequest) {
  const { participants, email } = await req.json();

  const price = calculatePrice(participants);

  const lineItems = Object.keys(price).map((key) => {
    const item = price[key as keyof typeof price];

    return {
      price_data: {
        currency: "EUR",
        unit_amount: item.priceTotal * 100,
        product_data: {
          name: `${item.amount} ${key} - ${item.pricePP}€`,
        },
      },
      quantity: 1,
    };
  });

  const params: Stripe.Checkout.SessionCreateParams = {
    line_items: lineItems,
    locale: "nl",
    payment_method_types: ["bancontact", "card"],
    mode: "payment",
    customer_email: email,
    success_url: `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}&participants=${encodeURIComponent(
      JSON.stringify({ participants, email })
    )}`,
    cancel_url: `http://localhost:3000?participants=${encodeURIComponent(
      JSON.stringify({ participants, email })
    )}`,
  };

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create(params);

  const response: GetStripeCheckoutSessionResponse = checkoutSession;

  return NextResponse.json(response);
}

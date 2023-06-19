import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { GetStripeCheckoutSessionResponse } from "./types";
import { calculatePrice } from "../../utils/calculatePrice";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export async function POST(req: NextRequest) {
  const participants = await req.json();

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
    success_url: `http://localhost:3000?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `http://localhost:3000?participants=${encodeURIComponent(
      JSON.stringify(participants)
    )}`,
  };

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create(params);

  const response: GetStripeCheckoutSessionResponse = checkoutSession;

  return NextResponse.json(response);
}
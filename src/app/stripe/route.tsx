import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { GetStripeCheckoutSessionResponse } from "./types";
import { calculatePrice } from "../../utils/calculatePrice";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export async function POST(req: NextRequest, res: NextResponse) {
  const participants = await req.json();

  const price = calculatePrice(participants);
  console.log("price", price);

  const params: Stripe.Checkout.SessionCreateParams = {
    line_items: [
      {
        price_data: {
          currency: "EUR",
          unit_amount: 2,
          product_data: {
            name: "name of the product",
          },
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `http://localhost:3000/result?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `http://localhost:3000/donate-with-checkout`,
  };

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create(params);

  const response: GetStripeCheckoutSessionResponse = checkoutSession;

  return NextResponse.json(response);
}

import { IS_PRODUCTION } from "./environment";

export const STRIPE_SECRET_KEY = IS_PRODUCTION
  ? process.env.STRIPE_SECRET_KEY
  : process.env.STRIPE_SECRET_TEST_KEY;

export const STRIPE_PUBLISHABLE_KEY = IS_PRODUCTION
  ? process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  : process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_TEST_KEY;
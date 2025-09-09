"use client";

import "./reset.css";
import "./globals.css";

import StyledJsxRegistry from "./registry";
import { ThemeProvider } from "styled-components";
import { theme } from "../constants/theme";
import { PostHogProvider } from "../components/PostHogProvider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Footer } from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="nl">
        <head>
          <title>
            Retro Grote Prijs El Toro - Dikkelvenne - 7 September 2025
          </title>
          <meta
            name="description"
            content="Een koers waar winnen ondergeschikt is aan vertier, waar gestart wordt in retro outfit en waar we van klikpedalen en dikke zanten niet moeten weten."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="google-site-verification" content="5IDdDgJAc2CBYY-SMmjn--_NT6uNI6nwFuAYY-uKvMs" />
        </head>
        <body>
          <PostHogProvider>
            <StyledJsxRegistry>
              {children}
              <Footer />
            </StyledJsxRegistry>
          </PostHogProvider>
          <GoogleAnalytics gaId="G-2Z05BBQFX2" />
        </body>
      </html>
    </ThemeProvider>
  );
}

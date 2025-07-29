"use client";

import "./reset.css";
import "./globals.css";

import StyledJsxRegistry from "./registry";
import { ThemeProvider } from "styled-components";
import { theme } from "../constants/theme";
import { PostHogProvider } from "../components/PostHogProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <html>
        <body>
          <PostHogProvider>
            <StyledJsxRegistry>{children}</StyledJsxRegistry>
          </PostHogProvider>
        </body>
      </html>
    </ThemeProvider>
  );
}

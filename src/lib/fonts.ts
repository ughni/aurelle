import { Cormorant_Garamond, DM_Sans } from "next/font/google";

export const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

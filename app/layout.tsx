import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// This tells Google exactly what to show in search results
export const metadata: Metadata = {
  title: "Hickman Plumbing Inc. | Scottsdale's Trusted Local Plumber",
  description: "Family-owned & operated in Scottsdale, AZ since 1986. High-quality plumbing repairs, water heaters, and remodels with patriotic values. Call (480) 945-6771.",
  keywords: ["Plumber Scottsdale", "Plumbing repair Scottsdale", "Water heater installation Scottsdale", "Emergency Plumber AZ"],
  openGraph: {
    title: "Hickman Plumbing Inc.",
    description: "Honest, Patriotic Plumbing Services in Scottsdale.",
    url: "https://www.hickmanplumbinginc.com", // Replace with your actual domain later
    siteName: "Hickman Plumbing Inc.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

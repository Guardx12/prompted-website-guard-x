import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VoltGuard Electrical",
  description: "Premium electrician demo site: emergency faults, EV chargers, EICR reports and consumer unit upgrades across Sussex.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

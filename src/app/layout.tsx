import type { Metadata } from "next";
import "../styles/globals.scss";
import { AppProviders } from "@/providers/AppProviders";
import { fontVariables } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Ari Connect",
  description: "Cross-server Discord chat relay, done right.",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}

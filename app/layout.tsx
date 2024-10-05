import type { Metadata } from "next";
import "../styles/globals.css";
import { NavBar } from "@/components/NavBar";
import { inter } from "./ui/fonts";

export const metadata: Metadata = {
  title: {
    default: "Rider Calculator",
    template: "%s | Rider Calculator",
  },
  description: "Find the Best Ride at the Best Price",
  keywords: ["Rider calculator"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

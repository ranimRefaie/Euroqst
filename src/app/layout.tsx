// src/app/layout.tsx
import { Footer } from "@/components/Footer";
import "./globals.css";
import { ReactNode } from "react";
interface RootLayoutProps{
  children: ReactNode
}

export const metadata = {
  title: "Euroqst",
  description: "",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}

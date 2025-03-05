// src/app/layout.tsx


import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
interface RootLayoutProps{
  children: ReactNode
}

export const metadata = {
  title: "Euroqst",
  description: "",
};

export default function MainLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
import React from "react";
import "./globals.css"; // Global styles
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "My Star Wars App",
  description: "A Next.js application that consumes the Star Wars API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <Navbar />
        <main className="flex-grow container mx-auto pt-44 flex items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

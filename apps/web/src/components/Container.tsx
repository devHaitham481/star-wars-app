import React from "react";
import Header from "@/components/Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Container;

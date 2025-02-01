"use client";
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col items-center relative w-full">
      <Header />
      <div className="w-full flex items-center justify-start flex-col z-10">
        {children}
      </div>
      <Footer />
    </main>
  );
}

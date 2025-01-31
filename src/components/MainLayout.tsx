/* eslint-disable @next/next/no-img-element */

"use client";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start md:px-5 px-1 relative">
      <h1 className="font-orbitron text-3xl my-5 font-extrabold">
        HackerForce
      </h1>
      <div className="w-full md:px-16 px-3 flex items-start justify-start flex-col z-10 pt-7">
        {children}
      </div>
    </main>
  );
}

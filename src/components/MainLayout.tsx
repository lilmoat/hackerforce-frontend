"use client";
import { ReactNode } from "react";
import "react-responsive-modal/styles.css";
import Header from "./Header";
import Footer from "./Footer";
import { ModalProvider } from "@/contexts/ModalContext";
import LoginModal from "./Modals/LoginModal";
import SignupModal from "./Modals/SignupModal";
import ForgotPswModal from "./Modals/ForgotPswModal";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col items-center relative w-full">
      <ModalProvider>
        <Header />
        <div className="w-full flex items-center justify-start flex-col z-10">
          {children}
        </div>
        <Footer />
        <LoginModal />
        <SignupModal />
        <ForgotPswModal />
      </ModalProvider>
    </main>
  );
}

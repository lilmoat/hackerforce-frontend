"use client";

import { ReactNode } from "react";
import "react-responsive-modal/styles.css";
import CookieModal from "./CookieModal";
import Footer from "./Footer";
import Header from "./Header";
import ForgotPswModal from "./Modals/ForgotPswModal";
import LoginModal from "./Modals/LoginModal";
import SignupModal from "./Modals/SignupModal";
import Progressbar from "./Progressbar";
import { AuthProvider } from "@/contexts/AuthContext";
import { ModalProvider } from "@/contexts/ModalContext";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col items-center relative w-full">
      <AuthProvider>
        <ModalProvider>
          <Header />
          <div className="w-full flex items-center justify-start flex-col z-10">
            {children}
          </div>
          <Footer />
          <LoginModal />
          <SignupModal />
          <ForgotPswModal />
          <Progressbar />
          <CookieModal />
        </ModalProvider>
      </AuthProvider>
    </main>
  );
}

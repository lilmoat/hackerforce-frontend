import React, { createContext, useState, ReactNode } from "react";

// Define the type for your modal context
interface ModalContextType {
  loginModalShow: boolean;
  signupModalShow: boolean;
  forgotPswModalShow: boolean;

  openLoginModal: () => void;
  closeLoginModal: () => void;
  openSignupModal: () => void;
  closeSignupModal: () => void;
  openForgotPswModal: () => void;
  closeForgotPswModal: () => void;
}

// Create the modal context
export const ModalContext = createContext<ModalContextType>({
  loginModalShow: false,
  signupModalShow: false,
  forgotPswModalShow: false,

  openLoginModal: () => {},
  closeLoginModal: () => {},
  openSignupModal: () => {},
  closeSignupModal: () => {},
  openForgotPswModal: () => {},
  closeForgotPswModal: () => {},
});

interface ModalProviderProps {
  children: ReactNode;
}

// Define the modal provider component
export function ModalProvider({ children }: ModalProviderProps) {
  const [loginModalShow, setLoginModalShow] = useState(false);
  const [signupModalShow, setSignupModalShow] = useState(false);
  const [forgotPswModalShow, setForgotPswModalShow] = useState(false);

  const openLoginModal = () => {
    setLoginModalShow(true);
  };

  const closeLoginModal = () => {
    setLoginModalShow(false);
  };

  const openSignupModal = () => {
    setSignupModalShow(true);
  };

  const closeSignupModal = () => {
    setSignupModalShow(false);
  };

  const openForgotPswModal = () => {
    setForgotPswModalShow(true);
  };

  const closeForgotPswModal = () => {
    setForgotPswModalShow(false);
  };

  const ModalContextValue: ModalContextType = {
    loginModalShow: loginModalShow,
    signupModalShow: signupModalShow,
    forgotPswModalShow: forgotPswModalShow,

    openLoginModal: openLoginModal,
    closeLoginModal: closeLoginModal,
    openSignupModal: openSignupModal,
    closeSignupModal: closeSignupModal,
    openForgotPswModal: openForgotPswModal,
    closeForgotPswModal: closeForgotPswModal,
  };

  return (
    <ModalContext.Provider value={ModalContextValue}>
      {children}
    </ModalContext.Provider>
  );
}

import React from "react";
import LoginModal from "./LoginModal";

// Wrapper to open modal if necessary
const LoginModalWrapper = ({ isOpenModal, setIsOpenModal }) => {
  const modalStateRef = React.useRef();
  const openModal = () => {
    console.log(modalStateRef);
    modalStateRef.current.setState((state) => {
      return {
        ...state,
        showModal: true,
      };
    });
  };

  if (isOpenModal) {
    openModal();
    setIsOpenModal(false);
  }

  return (
    <div>
      <LoginModal ref={modalStateRef} />
    </div>
  );
};

export default LoginModalWrapper;

import React from "react";
import ReactDOM from "react-dom/client";
import { useModal } from "./lib/useModal";
import { Modal } from "./lib/Modal";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export const Test = () => {
  const { isOpen, handleToggleModal } = useModal();
  return (
    <>
      <Modal
        isOpen={isOpen}
        message="test"
        handleCloseModal={handleToggleModal}
      ></Modal>
      <button onClick={handleToggleModal}>click here</button>
    </>
  );
};

root.render(
  <React.StrictMode>
    <>
      <Test></Test>
    </>
  </React.StrictMode>
);

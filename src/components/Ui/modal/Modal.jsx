"use client";

import {  Modal } from "flowbite-react";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userProgressAction } from "../../../store/userProgressSlice";
import { customTheme } from "./modalTheme";

export function ModalComponent({ children }) {
  const showModal = useSelector((state) => state.userProgress.showModal);
  const dispatch = useDispatch();

  const hideModal = () => {
    dispatch(userProgressAction.setHideModal());
  };

  return (
    <>
      <Modal
        theme={customTheme.modal}
        dismissible
        size="md"
        show={showModal}
        onClose={hideModal}
      >
        <Modal.Header></Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
}

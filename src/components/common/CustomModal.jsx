import React from "react";
import { Modal } from "react-bootstrap";
const CustomModal = ({ show, onClose, children, title }) => {
  return (
    <Modal show={show} centered onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default CustomModal;

import React from "react";
import Modal from "./Modal";
import Button from "./Button";
import "./ConfirmationModal.css";

const ConfirmationModal = (props) => {
  return (
    <Modal title="Delete Confirmation">
      <h3>Are you sure you want to delete? {props.expense}</h3>
      <div className="new-expense__actions">
        <Button onClick={props.toCancel}>Cancel</Button>
        <Button onClick={props.toConfirm}>Confirm</Button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;

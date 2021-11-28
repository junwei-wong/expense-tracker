import React from "react";
import Modal from "./Modal";
import Button from "./Button";
import "./ConfirmationModal.css";

const ConfirmationModal = (props) => {
  return (
    <Modal title="Delete Confirmation">
      <h3>Are you sure you want to delete?</h3>
      <h4>Title :{props.expense?.title}</h4>
      <h4>Amount :{props.expense?.amount}</h4>
      <h4>Date :{props.expense?.date.toString()}</h4>
      <div className="new-expense__actions">
        <Button onClick={props.toCancel}>Cancel</Button>
        <Button onClick={props.toConfirm}>Confirm</Button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;

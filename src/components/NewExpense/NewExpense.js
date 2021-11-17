import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [formStatus, setFormStatus] = useState(false);
  const toggleFormHandler = () => setFormStatus((prevStatus) => !prevStatus);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    onAddExpense({...enteredExpenseData});
    toggleFormHandler();
  };

  return (
    <div className="new-expense">
      <Button onClick={toggleFormHandler}>Add New Expense</Button>
      {formStatus && (
        <Modal title="Add Expense">
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            toggleForm={toggleFormHandler}
          />
        </Modal>
      )}
    </div>
  );
};

export default NewExpense;

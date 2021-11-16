import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import Modal from "../UI/Modal";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [formStatus, setFormStatus] = useState(false);
  const toggleFormHandler = () => setFormStatus((prevStatus) => !prevStatus);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    toggleFormHandler();
  };

  return (
    <div className="new-expense">
      <button onClick={toggleFormHandler}>Add New Expense</button>
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

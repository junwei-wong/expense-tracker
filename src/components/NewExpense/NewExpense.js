import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
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
      {!formStatus && (
        <button onClick={toggleFormHandler}>Add New Expense</button>
      )}
      {formStatus && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} toggleForm={toggleFormHandler}/>}
    </div>
  );
};

export default NewExpense;

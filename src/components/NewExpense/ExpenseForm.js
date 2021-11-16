import React, { useState } from "react";
import Button from "../UI/Button";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData, toggleForm }) => {
  const defaultFormValues = {
    title: "",
    amount: "",
    date: "",
  };
  const [enteredValue, setEnteredValue] = useState({ ...defaultFormValues });

  const inputChangeHandler = (event) => {
    const {
      target: { value, id },
    } = event;
    setEnteredValue((prevState) => {
      return { ...prevState, [id]: value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onSaveExpenseData({
      title: enteredValue.title,
      amount: +enteredValue.amount,
      date: new Date(enteredValue.date),
    });
    setEnteredValue(defaultFormValues);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            id="title"
            onChange={inputChangeHandler}
            value={enteredValue.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            id="amount"
            min="0.01"
            step="0.01"
            onChange={inputChangeHandler}
            value={enteredValue.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            id="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={inputChangeHandler}
            value={enteredValue.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <Button onClick={toggleForm}>Cancel</Button>
        <Button type="submit">Add Expense</Button>
      </div>
    </form>
  );
};

export default ExpenseForm;

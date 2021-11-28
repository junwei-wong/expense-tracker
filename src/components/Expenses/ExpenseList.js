import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ConfirmationModal from "../UI/ConfirmationModal";
import "./ExpenseList.css";

const ExpenseList = ({ item, onDeleteExpense, onEditExpense }) => {
  const [selectedExpense, setSelectedExpense] = useState("");
  const [modalStatus, setModalStatus] = useState("");
  const enableButtons = selectedExpense === "" ? "disabled" : "";

  const selectedExpenseHandler = (id) => {
    setSelectedExpense(id);
  };

  const deleteExpenseHandler = () => {
    onDeleteExpense(selectedExpense.id);
    clearModalStatus();
  };

  const editExpenseHanlder = (expense) => {
    onEditExpense(expense, selectedExpense);
    clearModalStatus();
  };

  const clearModalStatus = () => {
    setSelectedExpense("");
    setModalStatus("");
  };

  if (item.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  return (
    <>
      {modalStatus === "delete" && (
        <ConfirmationModal
          toCancel={clearModalStatus}
          toConfirm={deleteExpenseHandler}
          expense={selectedExpense}
        />
      )}
      <Card className="expenses-list-title">
        <label>Expenses List</label>
        <div>
          <Button
            className={enableButtons}
            onClick={() => setModalStatus("delete")}
          >
            Delete
          </Button>
          <Button className={enableButtons}>Edit</Button>
        </div>
      </Card>
      <ul className="expenses-list">
        {item.map((expense) => (
          <ExpenseItem
            key={expense.id}
            onClick={() => selectedExpenseHandler(expense)}
            active={selectedExpense.id === expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    </>
  );
};

export default ExpenseList;

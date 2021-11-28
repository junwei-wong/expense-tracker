import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ConfirmationModal from "../UI/ConfirmationModal";
import "./ExpenseList.css";

const ExpenseList = ({ item, onDeleteExpense }) => {
  const [activeId, setActiveId] = useState("");
  const [modalStatus, setModalStatus] = useState("");
  const enableButtons = activeId === "" ? "disabled" : "";

  const activeIdHandler = (id) => {
    setActiveId(id);
  };

  const deleteExpenseHandler = () => {
    onDeleteExpense(activeId);
    setActiveId("");
    setModalStatus("");
  };

  const clearModalStatus = () => {
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
          expense={`${item[activeId]}`}
        />
      )}
      <Card className="expenses-list-title">
        <label>Expenses List</label>
        <div>
          {
            <Button
              className={enableButtons}
              onClick={() => setModalStatus("delete")}
            >
              Delete
            </Button>
          }
          {<Button className={enableButtons}>Edit</Button>}
        </div>
      </Card>
      <ul className="expenses-list">
        {item.map((expense) => (
          <ExpenseItem
            key={expense.id}
            onClick={() => activeIdHandler(expense.id)}
            active={activeId === expense.id}
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

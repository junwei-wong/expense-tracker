import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import React from "react";

const ExpenseItem = ({ title, amount, date, active, onClick }) => {
  return (
    <li onClick={onClick}>
      <Card className={`expense-item ${active ? "active" : ""}`}>
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">RM{amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;

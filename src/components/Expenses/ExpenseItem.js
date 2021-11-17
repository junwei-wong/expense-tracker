import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import Button from "../UI/Button";
import React from "react";

const ExpenseItem = ({ title, amount, date, active }) => {
  return (
    <li>
      <Card className={`expense-item ${active ? "active" : ""}`}>
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div style={{ display: "flex" }}>
            {active && <Button className="alternative">Delete</Button>}
            {active && <Button className="alternative">Edit</Button>}
            <div className="expense-item__price">RM{amount}</div>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;

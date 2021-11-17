import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Button from "../UI/Button";
import Card from "../UI/Card";
import "./ExpenseList.css";

const ExpenseList = ({ item }) => {
  const [activeIndex, setActiveIndex] = useState('');

  if (item.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  const activeIndexHandler = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Card className="expenses-list-title">
        <label>Expenses List</label>
        <div>
          {<Button className={activeIndex === '' ? "disabled" : ''}>Delete</Button>}
          {<Button className={activeIndex === '' ? "disabled" : ''}>Edit</Button>}
        </div>
      </Card>
      <ul className="expenses-list">
        {item.map((expense, index) => (
          <ExpenseItem
            key={expense.id}
            onClick={() => activeIndexHandler(index)}
            active={activeIndex === index}
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

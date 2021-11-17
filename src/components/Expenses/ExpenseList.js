import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = ({ item }) => {
  const [activeIndex, setActiveIndex] = useState();
  if (item.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  const activeIndexHandler = (index) => {
    setActiveIndex(prevIndex => prevIndex === index ? '' : index);
  };

  return (
    <ul className="expenses-list">
      {item.map((expense, index) => (
        <div key={index}  onClick={()=>activeIndexHandler(index)}>
          <ExpenseItem
            active={activeIndex === index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        </div>
      ))}
    </ul>
  );
};

export default ExpenseList;

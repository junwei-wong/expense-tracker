import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const changeYearHandler = (yearInput) => {
    setFilteredYear(yearInput);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeYear={changeYearHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpenseList item={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;

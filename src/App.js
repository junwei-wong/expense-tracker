import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initialExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const deleteExpenseHandler = (expenseIndex) => {
    const newExpenses = [];
    expenses.forEach((expense) => {
      if (expense.id !== expenseIndex) newExpenses.push(expense);
    });
    setExpenses(newExpenses);
  };

  const editExpenseHandler = (expense, expenseIndex) => {
    const newExpenses = [...expenses];
    newExpenses[expenseIndex] = { ...expense };
    setExpenses(newExpenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        expenses={expenses}
        onDeleteExpense={deleteExpenseHandler}
        onEditExpense={editExpenseHandler}
      />
    </div>
  );
};

export default App;

import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses.jsx";
import NewExpense from "./components/NewExpense/NewExpense.jsx";

const App = () => {
  const DUMMY_EXPENSES = [
    { title: "Delhi Trip", amount: 454, date: new Date(2021, 3, 24) },
    { title: "Business Lunch", amount: 120, date: new Date(2021, 5, 10) },
    { title: "Shopping", amount: 200, date: new Date(2021, 7, 15) },
    { title: "Gadget Purchase", amount: 800, date: new Date(2021, 8, 5) },
    { title: "Movie Night", amount: 50, date: new Date(2021, 10, 2) },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // console.log("in app.jsx");
    // console.log(expense);

    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expense={expenses} />
    </div>
  );
};

export default App;

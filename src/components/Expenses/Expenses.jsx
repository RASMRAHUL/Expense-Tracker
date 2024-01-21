import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.jsx";
import Card from "../UI/Card.jsx";

const Expenses = () => {
  const expenses = [
    { title: "Delhi Trip", amount: 454, date: new Date(2021, 3, 24) },
    { title: "Business Lunch", amount: 120, date: new Date(2021, 5, 10) },
    { title: "Shopping", amount: 200, date: new Date(2021, 7, 15) },
    { title: "Gadget Purchase", amount: 800, date: new Date(2021, 8, 5) },
    { title: "Movie Night", amount: 50, date: new Date(2021, 10, 2) },
  ];
  return (
    <Card className="expenses">
      {expenses.map((item, i) => (
        <ExpenseItem
          key={i}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;

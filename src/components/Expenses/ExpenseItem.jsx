import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.jsx";
import Card from "../UI/Card.jsx";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const titleChangeHandler = () => {
    setTitle("updated");
  };
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">₹ {props.amount}</div>
      </div>
      <button onClick={titleChangeHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;

import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     inputTitle: "",
  //     inputAmount: "",
  //     inputDate: "",
  //   });

  const titleChangeHandler = (e) => {
    setInputTitle(e.target.value);

    //     setUserInput({
    //       ...userInput,
    //       title: e.target.value,
    //     });
    //   };

    // setUserInput((prevState) => {
    //   return { ...prevState, inputTitleitle: e.target.value };
    // });
  };

  const amountChangeHandler = (e) => {
    setInputAmount(e.target.value);

    //     setUserInput({
    //       ...userInput,
    //       amount: e.target.value,
    //     });
    //   };

    //     setUserInput((prevState) => {
    //       return { ...prevState, inputAmountmount: e.target.value };
    //     });
  };

  const dateChangeHandler = (e) => {
    setInputDate(e.target.value);

    // setUserInput({
    //   ...userInput,
    //   date: e.target.value,
    // });

    //     setUserInput((prevState) => {
    //       return { ...prevState, inputDateate: e.target.value };
    //     });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: inputTitle,
      amount: +inputAmount,
      date: new Date(inputDate),
    };

    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setInputTitle("");
    setInputAmount("");
    setInputDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={inputTitle} onChange={titleChangeHandler} />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="text"
            min="0.01"
            step="0.01"
            value={inputAmount}
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={inputDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

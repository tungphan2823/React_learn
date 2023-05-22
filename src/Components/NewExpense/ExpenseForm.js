import React,{useState} from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const [enteredTitle,setEnteredTitle] = useState('');
  const [enteredAmount,setEnteredAmount] = useState('');
  const [enteredDate,setEnteredDate] = useState('');
  // const [enteredInput, setEnteredInput] = useState(
  //   {
  //     enteredTitle:"",
  //     enteredAmount:"",
  //     enteredDate:"",
  //   }
  // );
    const titleChangeHandler = (event) =>{
      setEnteredTitle(event.target.value);
      setEnteredInput(
        {
          ...enteredInput,
          enteredTitle: event.target.value,
        }
      );
      // setEnteredInput((prevState)=> {
      //   return {
      //     ...prevState,
      //     enteredTitle: event.target.value,
      //   };

      // }); //

    }
    const amountChangeHandler = (event) =>{
      setEnteredTitle(event.target.value);
      setEnteredInput(
        {
          ...enteredInput,
          enteredAmount: event.target.value,
        }
      );
      // setEnteredInput((prevState)=> {
      //   return {
      //     ...prevState,
      //     enteredAmount: event.target.value,
      //   };

      // }); //

    }
    const dateChangeHandler = (event) =>{
      setEnteredTitle(event.target.value);
      setEnteredInput(
        {
          ...enteredInput,
          enteredDate: event.target.value,
        }
      );
      // setEnteredInput((prevState)=> {
      //   return {
      //     ...prevState,
      //     enteredDate: event.target.value,
      //   };

      // }); //

    }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2018-01-01" max="2026-01-01" onChange={dateChangeHandler}></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add</button>
      </div>
    </form>
  );
};
export default ExpenseForm;

import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log('components revaluated');

  const clickHandler = () => {
    setTitle('Updated');

    console.log('title');
  };
  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={props.date} />

        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>

        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;

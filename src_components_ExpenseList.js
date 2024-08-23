import React from 'react';
import './ExpenseList.css';

function ExpenseList() {
  const expenses = [
    { id: 1, name: 'Groceries', amount: 50 },
    { id: 2, name: 'Electricity Bill', amount: 75 },
  ];

  return (
    <div className="expense-list">
      {expenses.map((expense) => (
        <div key={expense.id} className="expense-list-item">
          <span>{expense.name}</span>
          <span>${expense.amount}</span>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;

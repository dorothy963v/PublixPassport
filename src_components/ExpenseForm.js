import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  const [expense, setExpense] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to add the expense
    setExpense('');
    setAmount('');
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
        placeholder="Expense Name"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;

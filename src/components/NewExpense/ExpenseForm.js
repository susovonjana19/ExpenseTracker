import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	// const [userInput, setUserInput] = useState({
	// 	enterTitle: '',
	// 	enterAmount: '',
	// 	enterDate: '',
	// });

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value); //example 1
		//example 2
		// setUserInput({
		// 	...userInput,
		// 	enterTitle: event.target.value,
		// });
		//example 3
		// setUserInput((prevState) => {
		// 	return { ...prevState, enterTitle: event.target.value };
		// });
	};
	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enterAmount: event.target.value,
		// });
	};
	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enterDate: event.target.value,
		// });
	};

	//form submit
	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		};
		props.onSaveExpenseData(expenseData);
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new_expense_controls">
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new_expense_controls">
					<label>Number</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new_expense_controls">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense_actions">
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
				<button tyoe="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;

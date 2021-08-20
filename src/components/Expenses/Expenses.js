import React, { useState } from 'react';
//import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2021'); //default date state

	const filterChangedHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
		//console.log(selectedYear);
	};

	//filter the array based no selected year
	const filterExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	//alternative condition to render
	// let expensesContent = <p>No expenses found</p>;
	// if (filterExpenses.length > 0) {
	// 	expensesContent = filterExpenses.map((expenses) => (
	// 		<ExpenseItem
	// 			key={expenses.id}
	// 			title={expenses.title}
	// 			amount={expenses.amount}
	// 			date={expenses.date}
	// 		/>
	// 	));
	// }

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangedHandler}
				/>
				<ExpensesChart expenses={filterExpenses} />
				<ExpensesList items={filterExpenses} />
				{/*Alternative way to condition for list array when filter data not found */}
				{/* {filterExpenses.length === 0 && <p>No expenses found</p>}
				{filterExpenses.length > 0 &&
					filterExpenses.map((expenses) => (
						<ExpenseItem
							key={expenses.id}
							title={expenses.title}
							amount={expenses.amount}
							date={expenses.date}
						/>
					))} */}
				{/* {expensesContent} */}
			</Card>
		</div>
	);
};

export default Expenses;

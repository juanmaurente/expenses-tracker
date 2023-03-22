import { useState } from 'react';

import './App.css';
import ExpenseList from './expense-tracker/components/ExpenseList';

function App() {
	const [expenses, setExpenses] = useState([
		{
			id: 1,
			description: 'Groceries',
			amount: 50.0,
			category: 'Food',
		},
		{
			id: 2,
			description: 'Gasoline',
			amount: 30.0,
			category: 'Transportation',
		},
		{
			id: 3,
			description: 'Movie tickets',
			amount: 20.0,
			category: 'Entertainment',
		},
		{
			id: 4,
			description: 'Restaurant',
			amount: 75.0,
			category: 'Food',
		},
		{
			id: 5,
			description: 'Gym membership',
			amount: 60.0,
			category: 'Health',
		},
	]);

	return (
		<div>
			<ExpenseList
				expenses={expenses}
				onDelete={(id) =>
					setExpenses(expenses.filter((e) => e.id !== id))
				}
			/>
		</div>
	);
}

export default App;

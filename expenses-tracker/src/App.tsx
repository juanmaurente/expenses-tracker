import { useState } from 'react';

import './App.css';
import ExpenseFilter from './expense-tracker/components/ExpenseFilter';
import ExpenseForm from './expense-tracker/components/ExpenseForm';
import ExpenseList from './expense-tracker/components/ExpenseList';
import categories from './expense-tracker/categories';

function App() {
	const [selectedCategory, setSelectedCategory] = useState('');
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
		{
			id: 6,
			description: 'Electricity',
			amount: 160.0,
			category: 'Utilities',
		},
	]);

	const visibleExpenses = selectedCategory
		? expenses.filter((e) => e.category === selectedCategory)
		: expenses;

	return (
		<div>
			<div className='mb-5'>
				<ExpenseForm
					onSubmit={(expense) =>
						setExpenses([
							...expenses,
							{ ...expense, id: expenses.length + 1 },
						])
					}
				/>
			</div>

			<div className='mb-3'>
				<ExpenseFilter
					onSelectCategory={(category) =>
						setSelectedCategory(category)
					}
				/>
			</div>

			<ExpenseList
				expenses={visibleExpenses}
				onDelete={(id) =>
					setExpenses(expenses.filter((e) => e.id !== id))
				}
			/>
		</div>
	);
}

export default App;

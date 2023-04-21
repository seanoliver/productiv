import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import TopTodo from './TopTodo';
import EditableTodoList from './EditableTodoList';
import TodoForm from './TodoForm';

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos }) {
	const [todos, setTodos] = useState(initialTodos);

	/** add a new todo to list */
  // TODO: Ensure priority is a number
	function create(newTodo) {
		const newTodoWithId = { ...newTodo, id: uuid() };
		setTodos(curr => [...curr, newTodoWithId]);
	}

	/** update a todo with updatedTodo */
  // TODO: Ensure priority is a number
	function update(updatedTodo) {
		setTodos(currTodos => currTodos.map(t =>
			t.id === updatedTodo.id ? updatedTodo : t
		));
	}

	/** delete a todo by id */
	function remove(id) {
		setTodos(currTodos => currTodos.filter(t => id !== t.id));
	}

	return (
		<main className="TodoApp">
			<div className="row">
				{/* TO DO LIST */}
				<div className="col-md-6">
          {/* TODO: Could make this a ternary */}
					{todos.length > 0 && (
						<EditableTodoList
							todos={todos}
							update={update}
							remove={remove}
						/>
					)}
					{todos.length === 0 && (
						<span className="text-muted">You have no todos.</span>
					)}
				</div>
				{/* TOP TO DO */}
				<div className="col-md-6">
					{todos.length > 0 && (
						<section className="mb-4">
							<h3>Top Todo</h3>
							<TopTodo todos={todos} />
						</section>
					)}
					{/* FORM */}
					<section>
						<h3 className="mb-3">Add Nü</h3>
						<TodoForm handleSave={create} />
					</section>
				</div>
			</div>
		</main>
	);
}

export default TodoApp;

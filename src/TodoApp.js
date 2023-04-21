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
	function create(newTodo) {
		const newTodoWithId = {
      ...newTodo,
      priority: Number(newTodo["priority"]),
      id: uuid()
    };
		setTodos(curr => [...curr, newTodoWithId]);
	}

	/** update a todo with updatedTodo */
	function update(updatedTodo) {
    const formattedTodo = {
      ...updatedTodo,
      priority: Number(updatedTodo["priority"]),
    }
		setTodos(currTodos => currTodos.map(t =>
			t.id === updatedTodo.id ? formattedTodo : t
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
					{todos.length > 0
            ?
              <EditableTodoList
                todos={todos}
                update={update}
                remove={remove}
              />
            :
              <span className="text-muted">You have no todos.</span>
          }
				</div>
				{/* TOP TO DO */}
				<div className="col-md-6">
					{todos.length > 0 && (
						<section className="TopTodo mb-4">
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

import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import TopTodo from './TopTodo';
import EditableTodoList from './EditableTodoList';

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
  function create(newTodo) { }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    const newTodos = todos.map(t => t.id === updatedTodo.id ? updatedTodo : t);

    setTodos(newTodos);
  };

  /** delete a todo by id */
  function remove(id) {
    const newTodos = todos.filter(t => id !== t.id);
    setTodos(newTodos);
  }

  return (
    <main className="TodoApp">
      <div className="row">
        {/* TO DO LIST */}
        <div className="col-md-6">
          {todos.length > 0 &&
            <EditableTodoList
              todos={todos}
              update={update}
              remove={remove}
            />}
          {todos.length === 0 &&
            <span className="text-muted">You have no todos.</span>}
        </div>

        {/* TOP TO DO */}
        <div className="col-md-6">
          {todos.length > 0 &&
            <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo />
            </section>}
          {/* FORM */}
          <section>
            <h3 className="mb-3">Add Nü</h3>
            FIXME
          </section>
        </div>
      </div>
    </main>
  );
}

export default TodoApp;
